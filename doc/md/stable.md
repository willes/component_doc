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
  :dragOption="dragOption"
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
        dragOption: {
          handle: '.edit' // 格式为简单css选择器的字符串，使列表单元中符合选择器的元素成为拖动的手柄，只有按住拖动手柄才能使列表单元进行拖动
        }
      }
    }
  }
</script>

```

### Attributes

| 参数 | 说明 | 类型 | 可选值 | 默认值
| --- | --- | --- | --- | --- |
| draggable | 是否开启表头宽度收缩  |  Boolean | - | false |
| dragOption	| 是否开启表格拖拽排序 | Object | - | {handle: '.ant-table-row',animation: 150} |

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