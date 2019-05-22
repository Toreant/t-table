export default {
    props: {
        store: {
            required: true
        },
        fixed: [Boolean, String],
        height: {
            type: Number,
            default: 30
        }
    },

    data() {
        return {
            sortType: 0, // 0 - none, 1 - asc, 2 - desc
        }
    },

    methods: {
        sortData: function(key) {
            return function (e) {
                if (this.store.sortKey !== key) {
                    this.sortType = 1
                    this.store.sortKey = key
                } else {
                    this.sortType += 1
                    this.sortType %= 3
                }

                if (this.sortType === 0) {
                    this.store.sortKey = ''
                }

                this.$emit('sortData', this.store.sortKey, this.sortType)
            }
        }
    },

    render(h) {
        let columns = []
        let width
        if (this.fixed === true || this.fixed === 'left') {
            columns = this.store.leftFixedColumns
            width = this.store.leftFixColumnWidth
        } else if (this.fixed === 'right') {
            columns = this.store.rightFixedColumns
            width = this.store.rightFixColumnWidth
        } else {
            columns = this.store.columns
            width = this.store.realColumnWidth
        }
        return (
            <table class="t-table-header_body" cellpadding="0" cellspacing="0" border="0" width={width}>
                <colgroup>
                    {this._l(columns, (row, index) => <col width={row.width}/>)}
                </colgroup>
                <thead>
                    <tr style={{ height: this.height + 'px' }}>
                    {
                        this._l(columns, (row, index) => {
                            let th

                            if (row.sortable) {
                                th = (
                                    <th 
                                        onClick={this.sortData(row.prop).bind(this)}
                                        style={{
                                            'text-align': row.textAlign
                                        }}
                                        class={{ 
                                            'active': this.store.sortKey === row.prop,
                                            'sortable': true,
                                            'asc': this.sortType === 1 && this.store.sortKey === row.prop, 
                                            'desc': this.sortType === 2 && this.store.sortKey === row.prop 
                                        }}>
                                        {
                                            row.renderHeader(index, row.label, row.prop)
                                        }
                                        <span 
                                            class="t-table-sort"
                                            >
                                            <i class="sort-icon asc"></i>
                                            <i class="sort-icon desc"></i>
                                        </span>
                                    </th>
                                )
                            } else {
                                th = <th
                                style={{
                                    'text-align': row.textAlign
                                }}
                                >
                                {
                                    row.renderHeader(index, row.label, row.prop)
                                }
                                </th>
                            }

                            return th
                        })
                    }
                    </tr>
                </thead>
            </table>
        )
    }
};
