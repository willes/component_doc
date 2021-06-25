<!--
 * @Description: 
 * @Autor: weiwei
 * @Date: 2021-06-24 08:36:53
 * @LastEditTime: 2021-06-24 16:03:35
 * @LastEditors: weiwei
-->
# 表格拖拽
> 拖拽排序、表头宽度拖拽

## 使用
访问 <a href="/table">这里</a> 查看示例。
<iframe src="/table" height="500px">table</iframe>

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


<font color="red"><b>注意：</b>该组件不会主动修改 data-source 源，通过 this.$emit('draggable) 触发回调由调用者自行更换。</font>

### Options

| 名称 | 类型 | 默认 | 说明 |
| --- | --- | --- | --- |
| isDraggable | Boolean | true | 是否可以拖拽排序 |
| isWidth | Boolean | true | 是否可以拖动表头宽度 |
| replaceFields | Object | {  key: 'businessId',dataIndex: 'dataIndex'} | 表头和数据的默认 key 值 |

### Emits
| 名称 | 返回值 | 说明 |
| --- | --- | --- |
| draggable | {data,source,index} | 拖拽后的数据结果集 |
