import Vue from 'vue'
let id = 0

const createElm = function () {
    const elm = document.createElement('div')

    elm.id = 'app' + ++id
    document.body.appendChild(elm)

    return elm
}

function createVue(Compo, mounted) {
    if (Object.prototype.toString.call(Compo) === '[object String]') {
        Compo = { template: Compo }
    }
    return new Vue(Compo).$mount(mounted === false ? null : createElm())
}


function toArray(els) {
    return [].slice.call(els)
}

module.exports = {
    createElm,
    createVue,
    toArray
}