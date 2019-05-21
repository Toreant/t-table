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
        return (
            <table class="t-table-header_body" cellpadding="0" cellspacing="0" border="0" width={this.store.realColumnWidth}>
                <colgroup>
                    {this._l(this.store.columns, (row, index) => <col width={row.width}/>)}
                </colgroup>
                <thead>
                    <tr style={{ height: this.height + 'px' }}>
                    {
                        this._l(this.store.columns, (row, index) => {
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
                                        { row.label }
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
                                >{ row.label }</th>
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
