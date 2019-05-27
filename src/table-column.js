let tableColumnIdSeed = 1

function parseProp(target) {
    let config = {
        fixed: false,
        fixedSide: '',
        width: 50,
        minxWidth: 50,
        sortable: '',
        prop: '',
        value: undefined,
        hidden: false,
        label: '',
        textAlign: 'center'
    }

    console.log('fixed = ', target.fixed)

    if (target.fixed !== false) {
        config.fixed = true
        if (typeof target.fixed === 'string' && ['left', 'right'].indexOf(target.fixed) !== -1) {
            config.fixedSide = target.fixed.toString()
        } else {
            config.fixedSide = 'left'
        }
    }

    if (target.width) {
        config.width = parseInt(target.width)
    }

    if (target.minWidth) {
        config.minWidth = parseInt(target.minWidth)
    }

    if (target.sortable !== false) {
        if (typeof target.fixed === 'string' && ['asc', 'desc'].indexOf(target.fixed) !== -1) {
            config.sortable = target.sortable.toString()
        } else {
            config.sortable = 'asc'
        }
    }

    if (target.textAlign) {
        config.textAlign = target.textAlign
    }

    config.prop = target.prop
    config.label = target.label
    
    return config
    
}

export default {
    name: 'TTableColumn',
    props: {
        fixed: [Boolean, String],
        width: Number,
        minWidth: Number,
        sortable: [Boolean, String],
        prop: String,
        label: String,
        textAlign: String,
        filter: Function
    },
    data() {
        return {
            columnId: '',
            columnConfig: {},
            isSubColumn: false
        }
    },
    computed: {
        columnOrTableParent() {
            // 
            let parent = this.$parent
            while (parent && !parent.tableId && !parent.columnId) {
                parent = parent.$parent
            }
            return parent
        },
        owner() {
            let parent = this.$parent
            while (parent && !parent.tableId) {
                parent = parent.$parent 
            }
            return parent
        }
    },
    created() {
        // console.log('column created')
        this.$options.render = h => h('div', this.$slots.default)

        this.columnId = this.$parent.tableId + '_column_' + tableColumnIdSeed++
        this.columnConfig = parseProp(this)

    },
    mounted() {
        // console.log('column mounted')
        this.isSubColumn = this.owner !== this.columnOrTableParent
        let index = this.getColIndex(this.columnOrTableParent, this.$el)
        console.log('filter = ', this.filter)
        let renderCell = (i, data, prop) => {
            let v = this.filter && typeof this.filter === 'function'
                ? this.filter(data[prop])
                : data[prop]
            return <div class="cell">{ v }</div>
        }

        let renderHeader = function (i, label, prop) {
            return <span>{label}</span>
        }

        if (this.$scopedSlots.default) {
            let _self = this
            renderCell = function (i, data, prop) {
                return <div class="cell">{_self.$scopedSlots.default({row: data, index: i})}</div>
            }
        }
        if (this.$slots.header) {
            let _self = this
            renderHeader = function (i, label, prop) {
                return _self.$slots.header
            }
        }
        this.columnConfig.renderCell = renderCell
        this.columnConfig.renderHeader = renderHeader

        this.owner.store.insertColumn(this.columnConfig, index, this.$parent)

        // console.log(this.$slots, this.$scopedSlots)
    },
    methods: {
        getColIndex() {
            let index = -1
            
            if (!this.isSubColumn) {
                index = [].indexOf.call(this.columnOrTableParent.$refs.hiddenColumns.children, this.$el)
            } else {
                index = [].indexOf.call(this.owner.$el.children, this.$el)
            }
            return index
        }
    }
}