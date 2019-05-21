export default {
    props: {
        store: {
            required: true
        },
        fixed: [Boolean, String],
        data: Array,
        rowActiveIndex: {
            type: Number,
            default: 8
        }
    },

    data() {
        return {
            // isReady: false
        }
    },

    render(h) {
        return (
            <table class="t-table_body" cellpadding="0" cellspacing="0" border="0" width={this.store.realColumnWidth}>
                <colgroup>
                    {this._l(this.store.columns, (row, index) => <col width={row.width}/>)}
                </colgroup>
                <tbody>
                    {
                        this._l(this.data, (row, index) => {
                            let tds;
                            if (this.fixed === true || this.fixed === 'left') {
                                tds = this.store.columns.map((col, colIndex) => {
                                    if (!col.fixed || col.fixedSide !== 'left') {
                                        return <td class="is-hidden">{col.renderCell(index, row, col.prop)}</td>
                                    } else {
                                        return <td>{col.renderCell(index, row, col.prop)}</td>
                                    }
                                })
                            } else if (this.fixed === 'right') {
                                tds = this.store.columns.map((col, colIndex) => {
                                    if (!col.fixed || col.fixedSide !== 'right') {
                                        return <td class="is-hidden">{col.renderCell(index, row, col.prop)}</td>
                                    } else {
                                        return <td>{col.renderCell(index, row, col.prop)}</td>
                                    }
                                })
                            } else {
                                tds = this.store.columns.map((col, colIndex) => {
                                    if (col.fixed) {
                                        return <td class="is-hidden">{col.renderCell(index, row, col.prop)}</td>
                                    } else {
                                        return <td class={{ active: this.store.sortKey === col.prop }}>{col.renderCell(index, row, col.prop)}</td>
                                    }
                                })
                            }
                            let tr = (
                                <tr class={{ 'active': this.rowActiveIndex > index }}>
                                    {tds}
                                </tr>
                            )

                            return tr
                        })
                    }
                </tbody>
            </table>
        )
    },

    computed: {
        normalColumns: function () {
            
        },
        leftFixedCount: function() {
            return this.store.leftFixedColumns.length
        },
        rightFixedCount: function() {
            return this.store.rightFixedColumns.length
        },
    },

    methods: {

    }
};
