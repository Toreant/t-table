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
            sortType: 0 // 0 - none, 1 - asc, 2 - desc
        }
    },

    methods: {
        sortData: function (key, sortable) {
            return function (e) {
                if (!sortable) {
                    return false
                }
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
        if (this.fixed === 'right') {
            columns = this.store.rightFixedColumns
            width = this.store.rightFixColumnWidth
        } else if (this.fixed === '' || this.fixed === 'left') {
            columns = this.store.leftFixedColumns
            width = this.store.leftFixColumnWidth
        } else {
            columns = this.store.columns
            width = this.store.realColumnWidth
        }
        return (
            <table
                class="t-table-header_body"
                cellpadding="0"
                cellspacing="0"
                border="0"
                width={width}
            >
                <colgroup>
                    {this._l(columns, (row, index) => (
                        <col width={row.width} />
                    ))}
                </colgroup>
                <thead>
                    <tr style={{ height: this.height + 'px' }}>
                        {this._l(columns, (row, index) => {
                            let th

                            th = (
                                <th
                                    onClick={this.sortData(row.prop, row.sortable).bind(
                                        this
                                    )}
                                    class={{
                                        active:
                                            this.sortType !== 0 && 
                                            this.store.sortKey === row.prop,
                                        sortable: row.sortable,
                                        asc:
                                            this.sortType === 1 &&
                                            this.store.sortKey === row.prop,
                                        desc:
                                            this.sortType === 2 &&
                                            this.store.sortKey === row.prop
                                    }}
                                >
                                    {row.renderHeader(
                                        index,
                                        row.label,
                                        row.prop
                                    )}
                                    {
                                        row.sortable
                                            ? <span class="t-table-sort">
                                                <i class="sort-icon asc" />
                                                <i class="sort-icon desc" />
                                            </span>
                                            : ''
                                    }
                                </th>
                            )
                            return th
                        })}
                    </tr>
                </thead>
            </table>
        )
    }
}
