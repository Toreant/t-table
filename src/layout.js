class Layout {
    constructor() {
        this.startPoint = {
            x: 0, y: 0
        }
        this.endPoint = {
            x: 0, y: 0
        }
        this.startTimestamp = -1
        this.scrollLeft = 0
        this.scrollTop = 0
        this.isMoved = false
        this.tweening = false
    }

    getTransformStyle(x = 0, y = 0, z = 0) {
        return `translate3d(${x}px, ${y}px, ${z}px)`
    }

    setLayoutData(target) {
        // let transform = target.style.transform
        // let reg = transform.match(/(-?\d+)px,\s+(-?\d+)px,\s+(-?\d+)px/)

        // if (!reg) {
        //     return
        // }

        // this.scrollLeft = parseInt(reg[1])
        // this.scrollTop = parseInt(reg[2])
        this.scrollLeft = target.scrollLeft
        this.scrollTop = target.scrollTop
    }

    updateLayout() {

    }


}

module.exports = Layout