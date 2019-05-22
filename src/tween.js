let requestAnimationFrame =
    window.requestAnimationFrame ||
    window.webkitRequestAnimationFrame ||
    function (fn) {
        return setTimeout(fn, 17) 
    }

let cancelRequestAnimationFrame =
    window.cancelAnimationFrame ||
    window.webkitCancelAnimationFrame ||
    function (id) {
        return clearTimeout(id)
    }

/**
 * t: 当前时间
 * b: 初始值
 * c: 变化量
 * d: 持续时间
 */

function TWEEN() {
    this.private = {
        id: -1
    }
}

TWEEN.prototype.Quad = {
    easeOut: function (t, b, c, d) {
        return -c * (t /= d) * (t - 2) + b
    }
}

TWEEN.prototype.animate = function (easing, from, to, duration, tick, callback) {
    let fn = this.Quad[easing]

    if (!fn) {
        callback(new Error('no easing function'))
    } else {
        let start = 0

        let step = () => {
            start++
            let val = fn(start, from, to - from, duration)

            // console.log(start, val)

            this.cancel() // 删除上一次的动画
            if (val <= to || start > tick) {
                // cancelAnimationFrame(TWEEN.private.id);
                callback(null, val, 'end')
            } else {
                callback(null, val)
                this.private.id = requestAnimationFrame(step)
            }
        }

        step()
    }
}

TWEEN.prototype.cancel = function () {
    cancelRequestAnimationFrame(this.private.id)
}

module.exports = TWEEN
