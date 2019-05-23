<template>
    <div
        class="t-container"
        ref="tableContainer"
        :style="style"
    >
        <div
            class="hidden-column"
            ref="hiddenColumns"
        >
            <slot></slot>
        </div>

        <div
            class="t-table-header-wrapper"
            :style="{width: style.width}"
            ref="tTableHeaderWrapper"
        >
            <table-header :store="store" @sortData="sortData" :maxHeight="headerHeight"></table-header>
        </div>

        <div
            v-if="tempData.length > 0"
            class="t-table-wrapper"
            ref="tTableWrapper"
            :style="{ width: style.width, maxHeight: bodyHeight }"
        >
            <div ref="tTableBody">
                <table-body
                    :store="store"
                    :data="tempData"
                ></table-body>
            </div>
        </div>

        <div
            v-if="isLeftFixed && tempData.length > 0"
            class="t-table-fixed-wrapper_left"
            :class="store.horizontelScrollType"
            :style="{maxWidth: leftFixColumnWidth + 'px', maxHeight: style.height}"
        >
            <div>
                <table-header
                    :store="store"
                    :height="headerHeight"
                    @sortData="sortData"
                    fixed="left"
                ></table-header>
            </div>
            <div class="t-table-fixed_body" ref="tTableLeftFixedWrapper" :style="{ maxHeight: bodyHeight }">
                <table-body
                    :store="store"
                    :data="tempData"
                    fixed="left"
                ></table-body>
            </div>
        </div>

        <div
            v-if="isRightFixed && tempData.length > 0"
            class="t-table-fixed-wrapper_right"
            :class="store.horizontelScrollType"
            :style="{maxWidth: rightFixColumnWidth + 'px', maxHeight: style.height}"
        >
            <div>
                <table-header
                :store="store"
                :maxHeight="headerHeight"
                @sortData="sortData"
                fixed="right"
                ></table-header>
            </div>
            <div class="t-table-fixed_body" ref="tTableRightFixedWrapper" :style="{ maxHeight: bodyHeight }">
                <table-body
                    :store="store"
                    :data="tempData"
                    fixed="right"
                ></table-body>
            </div>
        </div>

        <slot name="empty" v-if="data.length === 0"></slot>
    </div>
</template>

<style lang="less">
@import url(./style/style.less);
</style>


<script>
import Store from './store'
import Layout from './layout'
import TableBody from './table-body'
import TableHeader from './table-header'
import { addEventListener, removeEventListener } from './utils'
const TWEEN = require('./tween')

let tableIdSeed = 1

export default {
    name: 'TTable',

    components: {
        TableBody,
        TableHeader
    },

    props: {
        border: [Boolean, String],
        data: {
            type: Array,
            default: []
        },
        height: {
            type: String,
            required: true
        },
        width: {
            type: String,
            required: true
        },
        canMove: {
            type: Boolean,
            default: false
        },
        headerHeight: {
            type: Number,
            default: 30
        }
    },

    computed: {
        raw_data: function () {
            let data = this.data.map((item, index) => {
                item.__raw_index__ = index
                return item
            })
            return data
        },

        style: function () {
            let r = {};
            if (this.height && typeof this.height === 'string') {
                r.height = this.height
            }
            if (this.width && typeof this.width === 'string') {
                r.width = this.width
            }

            return r
        },

        bodyHeight: function () {
            let height = ''
            if (this.height && typeof this.height === 'string') {
                height = (+this.height.match(/(\d+)/)[1] - this.headerHeight) + 'px'
            }
            return height
        },

        isLeftFixed() {
            return this.store.leftFixedColumns.length > 0
        },

        isRightFixed() {
            return this.store.rightFixedColumns.length > 0
        },

        bodyWrapper() {
            return this.$refs.tTableWrapper
        },

        leftFixedBodyWrapper() {
            return this.$refs.tTableLeftFixedWrapper
        },

        rightFixedBodyWrapper() {
            return this.$refs.tTableRightFixedWrapper
        },

        tableHeaderWrapper() {
            return this.$refs.tTableHeaderWrapper
        },

        tableBody() {
            return this.$refs.tTableBody
        },

        maxScrollLeft() {
            let r = this.store.realColumnWidth - this.bodyWrapper.getBoundingClientRect().width
            return r
        },

        maxScrollHeight() {
            return parseInt(getComputedStyle(this.tableBody).height.match(/(\d+)/)[1]) - this.bodyWrapper.getBoundingClientRect().height
        }
    },

    data() {
        return {
            tableId: '',
            store: new Store(),
            leftFixColumnWidth: 0,
            rightFixColumnWidth: 0,
            layout: new Layout(),
            tween: new TWEEN(),
            tempData: this.data.slice()
        }
    },

    watch: {
        'store.leftFixColumnWidth'(newVal, oldVal) {
            this.leftFixColumnWidth = newVal
        },
        'store.rightFixColumnWidth'(newVal) {
            this.rightFixColumnWidth = newVal
        },
        'data'(newVal) {
            // console.log(newVal)
            this.tempData = newVal.map((item, index) => {
                item.__raw_index__ = index
                return item
            })
        }
    },

    created() {
        this.tableId = `t-table_` + tableIdSeed++
    },

    mounted() {
        this.initEvent(this.$refs.tableContainer)
    },

    updated() {
        this.$emit('update')
    },

    destroyed() {
        removeEventListener(this.bodyWrapper, this.scrollEvent)
    },

    methods: {
        touchStart(event) {
            if (this.layout.isMoved) {
                return
            }
            this.layout.startPoint = {
                x: event.touches[0].clientX, y: event.touches[0].clientY
            }
            this.layout.startTimestamp = Date.now()
            if (this.layout.tweening) {
                console.log('start cancel')
                this.layout.tweening = false
                this.tween.cancel()
                this.$emit('move', {
                    scrollLeft: this.layout.scrollLeft,
                    scrollTop: this.layout.scrollTop
                })
            }
            
        },
        touchMove(event) {

            // 阻止默认事件发生
            if (!this.canMove) {
                event.preventDefault();
            }
            this.layout.isMoved = true
            this.layout.endPoint = {
                x: event.touches[0].clientX, y: event.touches[0].clientY
            }
            let startPoint = this.layout.startPoint

            let scrollTop = this.layout.endPoint.y - startPoint.y
            let scrollLeft = this.layout.endPoint.x - startPoint.x
            scrollTop = this.layout.scrollTop - scrollTop
            scrollLeft = this.layout.scrollLeft - scrollLeft

            this.store.updateHorizontelType(this.maxScrollLeft, scrollLeft)

            // 设置scrollTop和scrollLeft
            this.setScroll(scrollLeft, scrollTop)
        },
        touchEnd(event) {
            // event.preventDefault()
            if (!this.layout.isMoved) {
                return
            }
            this.layout.isMoved = false
            let endPoint = this.layout.endPoint
            let startPoint = this.layout.startPoint
            let endTime = Date.now();
            let startTime = this.layout.startTimestamp
            
            let _side = endPoint.y - startPoint.y > 0
                ? 'top'
                : 'bottom'
            let _side2 = endPoint.x - startPoint.x > 0
                ? 'right'
                : 'left'
            this.layout.startPoint = this.endPoint
            this.layout.endPoint = null
            this.layout.setLayoutData(this.bodyWrapper)

            let maxScrollHeight = this.maxScrollHeight
            this.store.updateHorizontelType(this.maxScrollLeft, this.layout.scrollLeft)

            let initSpeed;
            let tweenSide;
            if (Math.abs(endPoint.y - startPoint.y) > 30 && endTime - startTime < 300) {
                initSpeed = Math.abs((endPoint.y - startPoint.y) / (endTime - startTime) * 1000)
                tweenSide = _side
            } else if (Math.abs(endPoint.x - startPoint.x) > 10 && endTime - startTime < 300) {
                initSpeed = Math.abs((endPoint.x - startPoint.x) / (endTime - startTime) * 1000)
                tweenSide = _side2
            } else {
                this.$emit('move', {
                    scrollLeft: this.layout.scrollLeft,
                    scrollTop: this.layout.scrollTop
                })
                return
            }

            initSpeed = Math.min(initSpeed, 1500)
            this.layout.tweening = true

            this.tween.animate('easeOut', initSpeed, 0, 100, 35, (err, v, tag) => {

                // fix bug for tween animate
                // when call TWEEN.cancel, the animate function cant end at once
                if (!this.layout.tweening) {
                    return
                }

                if (err) {
                    console.error(err);
                } else {

                    let scrollTop = this.layout.scrollTop
                    let scrollLeft = this.layout.scrollLeft
                    let c
                    let _shouldCancel = false

                    if (tweenSide === 'left' || tweenSide === 'right') {
                        c = tweenSide === 'right'
                            ? scrollLeft - v / 35
                            : scrollLeft + v / 35
                    } else {
                        c = tweenSide === 'top'
                            ? scrollTop - v / 35
                            : scrollTop + v / 35
                    }

                    if (tweenSide === 'left' || tweenSide === 'right') {
                        this.store.updateHorizontelType(this.maxScrollLeft, c)
                    }

                    // console.log((c >= wrapperHeight || c <= 0), c, wrapperHeight)
                    // console.log((tweenSide === 'left' || tweenSide === 'right') && (c < 0 || c > this.maxScrollLeft))
                    if ((tweenSide === 'top' || tweenSide === 'bottom') && (c >= maxScrollHeight || c <= 0)) {
                        _shouldCancel = true
                    } else if ((tweenSide === 'left' || tweenSide === 'right') && (c < 0 || c > this.maxScrollLeft)) {
                        _shouldCancel = true
                    }
                    if (tweenSide === 'top' || tweenSide === 'bottom') {
                        this.layout.scrollTop = c
                    } else {
                        this.layout.scrollLeft = c
                    }

                    // 设置scrollTop 和 scrollLeft  
                    this.setScroll(this.layout.scrollLeft, this.layout.scrollTop)
                    if (_shouldCancel) {
                        // 超过边界，停止
                        this.layout.tweening = false
                        this.tween.cancel()
                        this.$emit('move', {
                            scrollLeft: this.layout.scrollLeft,
                            scrollTop: this.layout.scrollTop
                        })
                        return
                    }
                   
                    if (tag === 'end') {
                        this.layout.tweening = false
                        this.$emit('move', {
                            scrollLeft: this.layout.scrollLeft,
                            scrollTop: this.layout.scrollTop
                        })
                    }
                }
            });
        },

        initEvent(target) {
            addEventListener(target, 'touchstart', this.touchStart.bind(this))
            addEventListener(target, 'touchmove', this.touchMove.bind(this))
            addEventListener(target, 'touchend', this.touchEnd.bind(this))
        },

        sortData(key, sortType) {
            // debugger
            if (sortType !== 0) {
                this.tempData = this.tempData.sort((a, b) => {
                    if (sortType === 1) {
                        return a[key] - b[key]
                    } else if (sortType === 2) {
                        return b[key] - a[key]
                    }
                })
            } else {
                this.tempData = this.raw_data.sort((a, b) => {
                    return a.__raw_index__ - b.__raw_index__
                })
            }
            console.log(this.tempData)
            this.$emit('sort', `key = ${key}`, `sortType = ${sortType}`)
        },

        setScroll(scrollLeft, scrollTop) {
            // 判断是否存在再进行设置
            this.rightFixedBodyWrapper &&  (this.rightFixedBodyWrapper.scrollTop = scrollTop)
            this.leftFixedBodyWrapper && (this.leftFixedBodyWrapper.scrollTop = scrollTop)
            this.bodyWrapper && (this.bodyWrapper.scrollTop = scrollTop, this.bodyWrapper.scrollLeft = scrollLeft)
            this.tableHeaderWrapper && (this.tableHeaderWrapper.scrollLeft = scrollLeft)
        }
    }
}
</script>
