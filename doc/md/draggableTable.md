<!--
 * @Description: 
 * @Autor: weiwei
 * @Date: 2021-06-24 08:36:53
 * @LastEditTime: 2021-07-01 11:55:24
 * @LastEditors: weiwei
-->
# 表格拖拽
> 拖拽排序、表头宽度拖拽

<font color="red"><b>注意：</b>此组件除下面文档中阐述的参数意外，其余使用方法和 [框架 table](https://www.antdv.com/components/table-cn/) 的参数以及使用方法一致。</font>

## 使用
<iframe src="/#/table" height="500px">table</iframe>

### 常规用法

```vue
<template>
  <draggable-table @draggable="handleDraggable" />
</template>

<script>
import { DraggableTable } from '@handday/components'
export default {
  name: 'DraggableTable',
  components: {
    DraggableTable
  },
  methods: {
    handleDraggable(result) {
      console.log(result)
    }
  }
}
</script>
```

### 自定义按钮拖拽用法
```vue
<template>
 <div>
   <draggable-table :data-source="data" :columns="columns" :replaceFields="{key: 'key'}" @draggable="handleDraggable">
<!--     <template slot="customDrag">-->
<!--       <div style="display:inline-block;">-->
<!--         <a-icon type="drag" />-->
<!--       </div>-->
<!--     </template>-->
   </draggable-table>
 </div>
</template>

<script>
import { DraggableTable } from '@handday/components'
// 通过设定 customRender 的值为  customDrag，来开启功能，同时也可以自己往插槽塞东西。
const columns = [
  {
    title: '',
    width: 100,
    scopedSlots: { customRender: 'customDrag' }
  },
  {
    title: 'Name',
    dataIndex: 'name',
    width: 200,
  },
  {
    title: 'Age',
    dataIndex: 'age',
    width: 200,
  },
  {
    title: 'Address',
    dataIndex: 'address',
    width: 200,
  },
  {
    title: 'operation',
    dataIndex: 'operation',
    scopedSlots: { customRender: 'operation' },
  }
]

const data = [];
for (let i = 0; i < 46; i++) {
  data.push({
    key: i,
    name: `Edward King ${i}`,
    age: 32,
    address: `London, Park Lane no. ${i}`
  })
}

export default {
  name: 'TableDraggable',
  data() {
    return {
      data,
      columns,
      isDraggable: true
    }
  },
  components: {
    DraggableTable
  },
  methods: {
    handleDraggable(result, status) {
      console.log(result, status)
      this.data = result.data
    },
    handleHover (status) {
      console.log('status：', status)
      this.isDraggable = status
    }
  }
}
</script>

```
<font color="red"><b>注意：</b>该组件不会主动修改 data-source 源，通过 this.$emit('draggable) 触发回调由调用者自行更换。</font>

### Attributes

| 名称 | 类型 | 默认 | 说明 |
| --- | --- | --- | --- |
| isDraggable | Boolean | true | 是否可以拖拽排序 |
| isWidth | Boolean | true | 是否可以拖动表头宽度 |
| replaceFields | Object | {  key: 'businessId',dataIndex: 'dataIndex'} | 表头和数据的默认 key 值 |
| topFirstLine | Boolean | false | 是否置顶首行 |

### Events
| 名称 | 返回值 | 说明 |
| --- | --- | --- |
| draggable | 拖拽后的数据结果集  | data,source,index |
| row-click | 当某一行被点击时会触发该事件 | record, index |
| row-contextmenu | 当某一行被鼠标右键点击时会触发该事件 | record, index |
| row-dblclick | 当某一行被双击时会触发该事件 | record, index |

### Slots
| 名称 | 说明 |
| --- | --- |
| customDrag | 自定义拖拽图标，如果使用封装的图标请注意对应项目下时候有 drag 图标 |

#### Columns
> 此处仅对扩展项进行说明，原生 Columns 属性<a href="https://www.antdv.com/components/table-cn/#Column" target="_blank">点击这里</a>

| 参数 | 说明 | 类型 | 默认值 | 版本 |
| --- | --- | --- | --- | --- |
| minWidth | 最小宽度，当没有设置 width 的值得时候，则取最小值为其原始宽度。 | Number | - | - |
| maxWidth | 最大宽度 | Number | - | - |
