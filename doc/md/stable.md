<!--
 * @Description:
 * @Autor: weiwei
 * @Date: 2021-06-24 08:36:53
 * @LastEditTime: 2021-07-22 10:02:49
 * @LastEditors: weiwei
-->
# STable
> 集成 vue-draggable-resizable 来实现可伸缩列, 支持拖拽排序，全量支持a-table的属性和方法， 在此基础上增加了拖拽排序的回调函数(见：下方事件说明) `后续table功能会在这上面扩展`
示例：
<iframe src="/#/stable" height="600px">table</iframe>

### 可伸缩列

在表格表头中拖拽改变宽度。
`draggable` 为true时开启

```vue
<template>
  <s-table
      draggable
      :columns="columns"
      :data-source="data"
    >
    </s-table>

</template>

<script>
  export default {
    data() {
      return {
        columns: [],
        data: []
      }
    }
  }
</script>
```

### 拖拽排序

> 集成[sortable.js](http://www.sortablejs.com/options.html) 支持该插件所有属性

```vue
<template>
 <s-table
  bordered
  @onUpdate="onUpdate"
  :columns="columns"
  :data-source="data"
  >
  <template v-slot:action>
    <a class="edit">Delete</a>
  </template>
 </s-table>
</template>

<script>
  export default {
    data() {
      return {
        columns: [],
        data: []
      }
    }
  }
</script>

```

## a-table-column

### 使用
[源码查看](/md/stableDemo#使用)

### 列排序
通过传入参数 sortList 进行排序，如果不是 key，请参考固定列中的配置对主键进行配置  
[源码查看](/md/stableDemo#sortList)  
```javascript
{
    sortList: [
        { key: 'title' },
        { key: 'content' }
    ]
}
```

### 固定列  
这个操作将固定对应的列，不受 sortList 的影响，仅限前后列，不支持中间列。  
[源码查看](/md/stableDemo#指定固定项)
```javascript
{
    sortConfig: {  
        unshift: ['index'] // 前置， index 为默认固定项
        push: [] // 后置
        key: 'key' // 排序的主键，对应 sortList 的 key
    }
}
```

### 表格列宽度联动
根据当前业务需求，两个表格列宽度需要联动  
[源码查看](/md/stableDemo#表格列宽度联动)
```javascript
{
    cellWidth: {} // 宽度对象，包含需要拖动的宽度列的 key 以及初始宽度，使用时为 cellWidth.sync
    excludeWidth: [] // 需要排除的拉伸宽度的列的 key
}
```

#### 列合并
可直接在 html 上进行设置，或者采用封装统一方法统一返回，建议采用第二种或第三种
```html
      <a-table-column :customCell="() => { return {attrs: { colSpan: 2 }}}"></a-table-column>
      <a-table-column :customCell="(cell, index) => customCell(2, cell, index)"></a-table-column>
      <a-table-column :customCell="() => customCell(2)"></a-table-column>
```
封装方法
```text
    customCell (num, cell, index) {
      // 处理合并列的情况
      console.log(cell, index)
      return {
        attrs: {
          colSpan: num
        }
      }
    }
```

### Attributes

| 参数 | 说明 | 类型 | 可选值 | 默认值
| --- | --- | --- | --- | --- |
| draggable | 是否开启表头宽度收缩  |  Boolean | - | false |
| dragOption	| 是否开启表格拖拽排序 | Object | - | {handle: '.ant-table-row',animation: 150} |
| draggableOption | 配置项 | Object | - | { minWidth: 100, maxWidth: 560 } |
| sortList	| 列排序，请注意必须包含 key，没有传入将不显示 | Array | - | [{ key: '对应 columns 的 key' }] |
| sortConfig | 列排序配置, 前置项和后置项 | Object | - | { unshift: ['index'], push: [], key: '设置对 sortList 的取值键， 默认 key' } |
| cellWidth | 列宽度，和 key 一致 | Object |  | - |
| excludeWidth | 是否排除指定列拉伸宽度，对应列的 key | Array | - | [] |

### 事件 

| 事件名称 | 说明 | 回调参数
| --- | --- | --- |
| onChoose | 列表单元被选中的回调函数 (需开启拖拽)  |  evt 当前行  |
| onStart | 列表单元拖动开始的回调函数 (需开启拖拽)  |  evt 当前行 |
| onEnd | 列表单元拖放结束后的回调函数 (需开启拖拽)  |  evt 当前行 |
| onAdd | 列表单元添加到本列表容器的回调函数 (需开启拖拽)  |  evt 当前行 |
| onRemove | 列表元素移到另一个列表容器的回调函数 (需开启拖拽)  |  evt 当前行 |
| onUpdate | 列表单元在列表容器中的排序发生变化后的回调函数 (需开启拖拽)  |  {evt 当前行, datasource: 更新顺序后的数据} |
| onFilter | 试图选中一个被filter过滤的列表单元的回调函数 (需开启拖拽)  |  evt 当前行 |
| onMove | 当移动列表单元在一个列表容器中或者多个列表容器中的回调函数 (需开启拖拽)  | evt 当前行 |