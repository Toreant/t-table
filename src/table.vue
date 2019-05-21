<template>
    <div
        class="t-container"
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
            <table-header :store="store" @sortData="sortData" :height="headerHeight"></table-header>
        </div>

        <div
            v-if="data.length > 0"
            class="t-table-wrapper"
            ref="tTableWrapper"
            :style="{ width: style.width, height: bodyHeight }"
        >
            <div ref="tTableBody">
                <table-body
                    :store="store"
                    :data="data"
                ></table-body>
            </div>
        </div>

        <div
            v-if="isLeftFixed && data.length > 0"
            class="t-table-fixed-wrapper_left"
            :class="store.horizontelScrollType"
            :style="{maxWidth: leftFixColumnWidth + 'px', height: style.height}"
        >
            <div>
                <table-header
                    :store="store"
                    :height="headerHeight"
                    fixed="left"
                ></table-header>
            </div>
            <div class="t-table-fixed_body" ref="tTableLeftFixedWrapper" :style="{ height: bodyHeight }">
                <table-body
                    :store="store"
                    :data="data"
                    fixed="left"
                ></table-body>
            </div>
        </div>

        <div
            v-if="isRightFixed && data.length > 0"
            class="t-table-fixed-wrapper_right"
            :style="{width: rightFixColumnWidth + 'px'}"
            ref="tTableRightFixedWrapper"
        >
            <div>
                <table-header
                :store="store"
                :height="headerHeight"
                fixed="right"
                ></table-header>
                <table-body
                    :store="store"
                    :data="data"
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
        data: Array,
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
        }
    },

    data() {
        return {
            tableId: '',
            store: new Store(),
            leftFixColumnWidth: 0,
            rightFixColumnWidth: 0,
            layout: new Layout()
        }
    },

    watch: {
        'store.leftFixColumnWidth'(newVal, oldVal) {
            this.leftFixColumnWidth = newVal
        }
    },

    created() {
        this.tableId = `t-table_` + tableIdSeed++
    },

    mounted() {
        this.initEvent(this.bodyWrapper)
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
            TWEEN.cancel()
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

            let maxScrollHeight = parseInt(getComputedStyle(this.tableBody).height.match(/(\d+)/)[1]) - this.bodyWrapper.getBoundingClientRect().height
        
            this.store.updateHorizontelType(this.maxScrollLeft, this.layout.scrollLeft)

            let scrollTop;
            let scrollLeft;

            if (this.layout.scrollTop > 0) {
                scrollTop = 0
            } else if (this.layout.scrollTop < 0 && this.layout.scrollTop >= maxScrollHeight) {
                scrollTop = maxScrollHeight
            }
            
            if (this.layout.scrollLeft < 0) { 
                scrollLeft = 0
            } else if (this.layout.scrollLeft > this.maxScrollLeft) {
                scrollLeft = this.maxScrollLeft
            }

            let initSpeed;
            let tweenSide;
            if (Math.abs(endPoint.y - startPoint.y) > 30 && endTime - startTime < 300) {
                initSpeed = Math.abs((endPoint.y - startPoint.y) / (endTime - startTime) * 1000)
                tweenSide = _side
            } else if (Math.abs(endPoint.x - startPoint.x) > 10 && endTime - startTime < 300) {
                initSpeed = Math.abs((endPoint.x - startPoint.x) / (endTime - startTime) * 1000)
                tweenSide = _side2
            } else {

                this.$emit('moveCb', {
                    scrollLeft: scrollLeft,
                    scrollTop: scrollTop
                })
                return
            }

            initSpeed = Math.min(initSpeed, 1500)

            TWEEN.animate('easeOut', initSpeed, 0, 100, 35, (err, v, tag) => {
                if (err) {
                    console.error(err);
                } else {

                    let scrollTop = this.layout.scrollTop
                    let scrollLeft = this.layout.scrollLeft
                    let c

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
                        TWEEN.cancel()
                        this.$emit('moveCb', {
                            scrollLeft: this.layout.scrollLeft,
                            scrollTop: this.layout.scrollTop
                        })
                        return
                    } else if ((tweenSide === 'left' || tweenSide === 'right') && (c < 0 || c > this.maxScrollLeft)) {
                        TWEEN.cancel()
                        this.$emit('moveCb', {
                            scrollLeft: this.layout.scrollLeft,
                            scrollTop: this.layout.scrollTop
                        })
                        return
                    } else if (tweenSide === 'top' || tweenSide === 'bottom') {
                        this.layout.scrollTop = c
                    } else {
                        this.layout.scrollLeft = c
                    }

                    // 设置scrollTop 和 scrollLeft  
                    this.setScroll(this.layout.scrollLeft, this.layout.scrollTop)
                   

                    if (tag === 'end') {
                        this.$emit('moveCb', {
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
            this.data = this.data.sort((a, b) => {
                if (sortType === 1) {
                    return a[key] - b[key]
                } else if (sortType === 2) {
                    return b[key] - a[key]
                } else {

                }
            })
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
