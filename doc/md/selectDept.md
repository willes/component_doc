# 选择部门

## 使用

````vue
<template>
  <div>
    <select-dept :visible.sync="visible" :loadData="getTree" :replaceFields="{ children: 'childrens', key: 'departmentId' }"></select-dept>
  </div>
</template>

<script>
import { SelectDept } from '@handday/components'
import { getTree } from '../../api/organization'
export default {
  name: 'SelectDepts',
  components: {
    SelectDept
  },
  data () {
    return {
      visible: false,
      getTree
    }
  },
  mounted() {
    setTimeout(() => {
      this.visible = true
    }, 1000)
  }
}
</script>

<style lang="scss" scoped></style>

````

### Attributes

| 参数 | 说明 | 类型 | 可选值 | 默认值
| --- | --- | --- | --- | --- |
| v-model/value | 值，将在确认的时候更新 | Array | - | [] |
| valueType | 数据类型，是对象还是单个的 id | String | - | 'object' |
| visible | 显示隐藏 | Boolean | - | false |
| dataSource | 树源数据 | Array | - | [] |
| loadData | 数据加载。<font color="red">注意，如果传递了 dataSource，则此项不会被生效。</font> | Function | - | null |
| replaceFields | 自定义字段 | Object| [title, key, children, main] | { title: 'name', key: 'businessId', children: 'children', main: 'isMainDept' } |
| expandAll | 默认展开所有 | Boolean | - | true |
| title | 标题 | String | - | 选择部门 |
| beforeClose | 关闭前的回调 | Function | - | - |

### Events
| 事件名称 | 说明 | 回调参数 |
| --- | --- | --- |
| ok | 确认回调 | { selectedDeptList: [], [main]: {} || null } |


