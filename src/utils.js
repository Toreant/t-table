export function addEventListener(target, eventName, fn) {
    target.addEventListener(eventName, fn, false)
}

export function removeEventListener(target, eventName, fn) {
    target.removeEventListener(eventName, fn, false)
}

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
exports.requestAnimationFrame = requestAnimationFrame
exports.cancelRequestAnimationFrame = cancelRequestAnimationFrame

exports.quickSort = function (arr) {
    function partition(arr, start, end) {
        if (start >= end) {
            return
        }

        let i = start
        let j = end
        let temp = arr[start]

        while (i < j) {
            while (arr[i] > temp && i < j) {
                i += 1
            }
            while (arr[j] < temp && i < j) {
                j -= 1
            }
            if (i < j) {
                [arr[i], arr[j]] = [arr[j], arr[i]]
            }
        } 

        arr[start] = arr[i]
        arr[i] = temp
        return i
    }

    let index = partition(arr, 0, arr.length - 1)
    partition(arr, 0, index - 1)
    partition(arr, index + 1, arr.length - 1)
}