export default {
    functional: true,

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

    render(h, context) {
        let columns = context.props.store.columns.slice()
        if (context.props.fixed === 'right') {
            columns = columns.reverse()
        }
        
        return (
            <table class="t-table_body" cellpadding="0" cellspacing="0" border="0" width={context.props.store.realColumnWidth}>
                <colgroup>
                    {context._l(columns, (row, index) => <col width={row.width}/>)}
                </colgroup>
                <tbody>
                    {
                        context._l(context.props.data, (row, index) => {
                            let tds
                            if (context.props.fixed === 'right') {
                                tds = columns.map((col, colIndex) => {
                                    return <td class={{ active: context.props.store.sortKey === col.prop, 'is-hidden': !col.fixed || col.fixedSide !== 'right' }}  style={{ 'text-align': col.textAlign }}>{col.renderCell(index, row, col.prop)}</td>
                                })
                            } else if (context.props.fixed === '' || context.props.fixed === 'left') {
                                tds = columns.map((col, colIndex) => {
                                    return <td class={{ active: context.props.store.sortKey === col.prop, 'is-hidden': !col.fixed || col.fixedSide !== 'left' }}  style={{ 'text-align': col.textAlign }}>{col.renderCell(index, row, col.prop)}</td>
                                })
                            } else {
                                tds = columns.map((col, colIndex) => {
                                    return <td class={{ active: context.props.store.sortKey === col.prop, 'is-hidden': col.fixed }}  style={{ 'text-align': col.textAlign }}>{col.renderCell(index, row, col.prop)}</td>
                                })
                            }
                            let tr = (
                                <tr class={{ 'active': context.props.rowActiveIndex > index }}>
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
        leftFixedCount: function () {
            return this.store.leftFixedColumns.length
        },
        rightFixedCount: function () {
            return this.store.rightFixedColumns.length
        },
    },

    methods: {

    }
}
