import TWEEN from '@tweenjs/tween.js'
import { requestAnimationFrame, cancelRequestAnimationFrame } from './utils'

class Scroller {
    constructor(body, header, left, right, endCallback) {
        this.body = body
        this.header = header
        this.left = left
        this.right = right
        this.x = 0
        this.y = 0
        this.startPoint = null
        this.endPoint = null
        this._isMoved = false
        this.startTimestamp = -1
        this.endTimestamp = -1
        this.tweenObj = {
            tweenSide: '',
            speed: 0
        }
        this.tween = null
        this.endCallback = endCallback
        this.timer = -1
    }

    render(x, y) {
        this.body && (this.body.scrollTop = y, this.body.scrollLeft = x)
        this.left && (this.left.scrollTop = y)
        this.right && (this.right.scrollTop = y)
        this.header && (this.header.scrollLeft = x)
    }

    start(event) {
        if (this._isMoved) {
            return
        }
        if (this.tween) {
            this.tween.stop()
            cancelRequestAnimationFrame(this.timer)
            this.endCallback({x: this.x, y: this.y})
        }
        this.startTimestamp = Date.now()
        this.startPoint = {
            x: event.touches[0].clientX,
            y: event.touches[0].clientY
        }
    }

    move(event, callback) {
        this._isMoved = true
        this.endPoint = {
            x: event.touches[0].clientX,
            y: event.touches[0].clientY
        }
        let x = this.endPoint.x - this.startPoint.x
        let y = this.endPoint.y - this.startPoint.y

        x = this.x - x
        y = this.y - y

        this.render(x, y)
        callback({x, y})
    }

    end(event, callback) {
        if (!this._isMoved) {
            return
        }
        this.updateLayout()
        let endPoint = this.endPoint
        let startPoint = this.startPoint
        this._isMoved = false
        let endTime = Date.now()
        let startTime = this.startTimestamp

        let _side = endPoint.y - startPoint.y > 0
            ? 'top'
            : 'bottom'
        let _side2 = endPoint.x - startPoint.x > 0
            ? 'right'
            : 'left'
        if (Math.abs(endPoint.y - startPoint.y) > 30 && endTime - startTime < 300) {
            this.tweenObj.speed = Math.abs((endPoint.y - startPoint.y) / (endTime - startTime) * 1000)
            this.tweenObj.tweenSide = _side
        } else if (Math.abs(endPoint.x - startPoint.x) > 10 && endTime - startTime < 300) {
            this.tweenObj.speed = Math.abs((endPoint.x - startPoint.x) / (endTime - startTime) * 1000)
            this.tweenObj.tweenSide = _side2
        } else {
            return
        }

        this.tween = new TWEEN.Tween(this.tweenObj).to({
            speed: 0
        }, 500).start()

        this.animate()
    }

    animate() {
        console.log('tween')
        TWEEN.update()

        let tweenSide = this.tweenObj.tweenSide
        let v = this.tweenObj.speed
        if (tweenSide === 'left' || tweenSide === 'right') {
            this.x = tweenSide === 'right'
                ? this.x - v / 35
                : this.x + v / 35
        } else {
            this.y = tweenSide === 'top'
                ? this.y - v / 35
                : this.y + v / 35
        }

        this.render(this.x, this.y)

        if (this.tweenObj.speed > 0) {
            this.timer = requestAnimationFrame(this.animate.bind(this))
        } else {
            this.endCallback({x: this.x, y: this.y})
            this.tween = null
        }
        
    }

    updateLayout() {
        this.y = this.body.scrollTop
        this.x = this.body.scrollLeft
    }
}

module.exports = Scroller