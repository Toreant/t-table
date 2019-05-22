class Store {
    constructor() {
        this.columns = []
        this._columns = []
        this.leftFixedColumns = []
        this.rightFixedColumns = []
        this.hiddenColumns = []
        this.bodyWidth = 0
        this.realColumnWidth = 0
        this.leftFixColumnWidth = 0
        this.rightFixColumnWidth = 0
        this.sortKey = ''
        this.horizontelScrollType = ''
        this.verticalScrollType = ''
    }

    insertColumn(column, index, parent) {
        // console.log(column, index, parent)
        this._columns.push(column)
        this.updateColumns()
        this.updateColumnWidth()
    }

    updateColumns() {
        let columns = this._columns.slice()
        let normalColumns = columns.filter(item => !item.fixed && !item.hidden)
        this.leftFixedColumns = columns.filter(item => !!item.fixed && item.fixedSide === 'left')
        this.rightFixedColumns = columns.filter(item => !!item.fixed && item.fixedSide === 'right')
        this.hiddenColumns = columns.filter(item => !!item.hidden)
        // 把left_fix的列放在最左边，right_fix的列放在最右边
        this.columns = [...this.leftFixedColumns, ...normalColumns, ...this.rightFixedColumns]
    }

    updateColumnWidth() {
        let realColumnWidth = 0
        let leftFixColumnWidth = 0
        let rightFixColumnWidth = 0
        this.columns.map(item => {
            realColumnWidth += item.width
        })
        this.leftFixedColumns.map(item => {
            leftFixColumnWidth += item.width
        })
        this.rightFixedColumns.map(item => {
            rightFixColumnWidth += item.width
        })
        this.realColumnWidth = realColumnWidth
        this.leftFixColumnWidth = leftFixColumnWidth
        this.rightFixColumnWidth = rightFixColumnWidth
    }

    updateHorizontelType(maxScrollLeft, curScrollLeft) {
        if (curScrollLeft <= 0) {
            this.horizontelScrollType = 'is-scroll-left'
        } else if (curScrollLeft < maxScrollLeft) {
            this.horizontelScrollType = 'is-scroll-middle'
        } else {
            this.horizontelScrollType = 'is-scroll-right'
        }
    }
}

module.exports = Store;