## table组件  

移动端table组件，支持左右固定列、排序

### 用法  
    npm install t-table --save

    import TTable from "t-table"
    Vue.use(TTable)

    // or 通过<script src="./table.js"></script>

    <t-table :data="data" height="300px" width="500px" header-height="30">
        <t-table-column fixed width="120" prop="title" label="标题" sortable></t-table-column>
        <t-table-column fixed width="120" label="#">
            <template slot-scope="scope">
                {{ scope.row.name }}: {{ scope.index }}
            </template>
        </t-table-column>
    </t-table>

### table props:  

<table>
    <thead>
        <tr>
            <td>属性名</td>
            <td>类型</td>
            <td>默认值</td>
            <td>描述</td>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>data</td>
            <td>Array</td>
            <td>[]</td>
            <td>Table数据</td>
        </tr>
        <tr>
            <td>height</td>
            <td>String</td>
            <td>无</td>
            <td>table容器的高度，单位为px, height和maxHeight必须填写一个  </td>
        </tr>
        <tr>
            <td>max-height</td>
            <td>String</td>
            <td>无</td>
            <td>table容器的最大高度，单位为px  </td>
        </tr>
        <tr>
            <td>width</td>
            <td>String</td>
            <td>无</td>
            <td>table容器的宽度，必填，单位为px  </td>
        </tr>
        <tr>
            <td>can-move</td>
            <td>Boolean</td>
            <td>false</td>
            <td>是否阻止默认的滑动事件</td>
        </tr>
        <tr>
            <td>header-height</td>
            <td>Number</td>
            <td>30</td>
            <td>header的高度，默认为30px</td>
        </tr>
        <tr>
            <td>row-active-index</td>
            <td>Number</td>
            <td>8</td>
            <td>active行的个数，从第一行顺序开始</td>
        </tr>
    </tbody>
</table>


### table slot  

<table>
    <thead>
        <tr>
            <th>name</th>
            <th>说明</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>empty</td>
            <td>当data为空时，显示empty内容</td>
        </tr>
    </tbody>
</table>

### table events 

<table>
    <thead>
        <tr>
            <th>name</th>
            <th>说明</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>move</td>
            <td>每次滑动停止后触发的事件</td>
        </tr>
        <tr>
            <td>update</td>
            <td>组件updated时，触发的函数</td>
        </tr>
    </tbody>
</table>

### table-column props

<table>
    <thead>
        <tr>
            <th>prop名</th>
            <th>类型</th>
            <th>默认值</th>
            <th>描述</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>fixed</td>
            <td>[Boolean|String]</td>
            <td>无</td>
            <td>设置此列固定，可选值【left|rgiht】，不填具体指的话，fixed为left</td>
        </tr>
        <tr>
            <td>width</td>
            <td>Number</td>
            <td>无</td>
            <td>设置列的宽度 </td>
        </tr>
        <tr>
            <td>sortable</td>
            <td>[Boolean|String]</td>
            <td>无</td>
            <td>是否可筛选，可选值为【asc|desc】，不填具体指的话，sortable为asc</td>
        </tr>
        <tr>
            <td>prop</td>
            <td>String</td>
            <td>无</td>
            <td>对应列内容的字段名</td>
        </tr>
        <tr>
            <td>label</td>
            <td>String</td>
            <td>无</td>
            <td>对应列的辩题</td>
        </tr>
        <tr>
            <td>text-align</td>
            <td>String</td>
            <td>无</td>
            <td>对其的方式，默认为center</td>
        </tr>
    </tbody>
</table>

### table-column slot  

<table>
    <thead>
        <tr>
            <th>name</th>
            <th>说明</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>header</td>
            <td>覆盖label标签，自定义col header</td>
        </tr>
    </tbody>
</table>
