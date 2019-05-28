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
            v-show="tempData.length > 0"
            class="t-table-wrapper"
            ref="tTableWrapper"
            :style="{ width: style.width, maxHeight: bodyHeight, height: bodyHeight }"
        >
            <div ref="tTableBody">
                <table-body
                    :store="store"
                    :data="tempData"
                    :rowActiveIndex="rowActiveIndex"
                ></table-body>
            </div>
        </div>

        <div
            v-show="isLeftFixed && tempData.length > 0"
            class="t-table-fixed-wrapper_left"
            :class="store.horizontelScrollType"
            :style="{maxWidth: leftFixColumnWidth + 'px', maxHeight: maxHeight, height: style.height}"
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
                    :rowActiveIndex="rowActiveIndex"
                    fixed="left"
                ></table-body>
            </div>
        </div>

        <div
            v-show="isRightFixed && tempData.length > 0"
            class="t-table-fixed-wrapper_right"
            :class="store.horizontelScrollType"
            :style="{maxWidth: rightFixColumnWidth + 'px', maxHeight: this.maxHeight, height: style.height}"
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
                    :rowActiveIndex="rowActiveIndex"
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
import TableBody from './table-body'
import TableHeader from './table-header'
import { addEventListener, removeEventListener, quickSort } from './utils'
import Scroller from './scroller'

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
        },
        maxHeight: {
            type: String,
        },
        rowActiveIndex: {
            type: Number,
            default: 8
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
            let _height = this.height   
                ? +this.height.match(/(\d+)/)[1]
                : undefined
            let _maxHeight = this.maxHeight
                ? +this.maxHeight.match(/(\d+)/)[1]
                : undefined

            let h = _height && _maxHeight
                ? Math.min(_height, _maxHeight)
                : _height ? _height : _maxHeight
            
            if (h) {
                height = (h - this.headerHeight) + 'px'
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
            return this.data.length / (this.data.length || 1) + this.tableBody.getBoundingClientRect().height - this.bodyWrapper.getBoundingClientRect().height
        }
    },

    data() {
        return {
            tableId: '',
            store: new Store(),
            leftFixColumnWidth: 0,
            rightFixColumnWidth: 0,
            tempData: this.data.slice(),
            scroller: null
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
        setTimeout(_ => {
            this.scroller = new Scroller(
                this.bodyWrapper, 
                this.tableHeaderWrapper, 
                this.leftFixedBodyWrapper, 
                this.rightFixedBodyWrapper,
                d => {
                    this.$emit('move', d)
                    this.store.updateHorizontelType(this.maxScrollLeft, d.x)
                }
            )
            this.initEvent(this.$refs.tableContainer)
        }, 300)
    },

    updated() {
        this.$emit('update')
    },

    beforeDestroy() {
        this.destroyEvent(this.$refs.tableContainer)
    },

    methods: {
        touchStart(event) {
            this.scroller.start(event)
        },
        touchMove(event) {

            // 阻止默认事件发生
            if (!this.canMove) {
                event.preventDefault();
            }
            this.scroller.move(event, ({x}) => {
                this.store.updateHorizontelType(this.maxScrollLeft, x)
            })
            
        },
        touchEnd(event) {
            this.scroller.end(event)
        },

        initEvent(target) {
            addEventListener(target, 'touchstart', this.touchStart.bind(this))
            addEventListener(target, 'touchmove', this.touchMove.bind(this))
            addEventListener(target, 'touchend', this.touchEnd.bind(this))
        },

        destroyEvent(target) {
            removeEventListener(target, 'touchstart', this.touchStart.bind(this))
            removeEventListener(target, 'touchmove', this.touchMove.bind(this))
            removeEventListener(target, 'touchend', this.touchEnd.bind(this))
        },

        sortData(key, sortType) {
            // debugger
            if (sortType === 1) {
                this.tempData = this.tempData.sort((a, b) => {
                    return a[key] - b[key]
                })
            } else if (sortType === 2) {
                this.tempData = this.tempData.sort((a, b) => {
                    return b[key] - a[key]
                })
            } else {
                this.tempData = this.raw_data.sort((a, b) => {
                    return a.__raw_index__ - b.__raw_index__
                })
            }
        }
    }
}
</script>
