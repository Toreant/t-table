## table组件  

### 用法  

    <t-table :data="data" height="300px" width="500px" headerHeight="30">
        <t-table-column fixed width="120" prop="title" label="标题" sortable></t-table-column>
        <t-table-column fixed width="120" label="#">
            <template slot-scope="scope">
                {{ scope.row.name }}: {{ scope.index }}
            </template>
        </t-table-column>
    </t-table>

### table props:  

> border: [Boolean|String]  是否设置border，默认为设置下划线  
> data: Array 数据   
> height: String table容器的高度，必填，单位为px  
> width: String table容器的宽度，必填，单位为px  
> canMove: 是否可以进行滑动，默认为false    
> headerHeight: Number table header的高度，默认为30px  

### table events 

> moveCb: 滑动结束后触发的方法  

### table-column props

> fixed: [Boolean|String] 设置此列固定，可选值【left|rgiht】，默认为left  
> width: Number 设置列的宽度  
> sortable: [Boolean|String]   
> prop: String, 设置sortable时，必填  
> label: String 标题  
> textAlign: String 标题的位置  