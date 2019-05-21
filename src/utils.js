export function addEventListener (target, eventName, fn) {
    target.addEventListener(eventName, fn, false)
}

export function removeEventListener (target, eventName, fn) {
    target.removeEventListener(eventName, fn, false)
}