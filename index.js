import Table from './src/table.vue'
import TableColumn from './src/table-column'

function install (Vue) {
    // console.log(Table.name)
    Vue.component(Table.name, Table)
    Vue.component(TableColumn.name, TableColumn)
}

if (typeof window !== 'undefined' && window.Vue) {
    install(window.Vue);
}

export default {
    Table,
    TableColumn
}