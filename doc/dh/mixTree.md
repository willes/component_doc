# 下拉树形选择

## 使用
```vue
<template>
  <d-mix-tree-select />
</template>
<script>
import { DMixTreeSelect } from '@handday/components'
export default {
  name: '',
  components: {
    DMixTreeSelect
  }
}
</script>
<style></style>
```

### Attributes
| 名称 | 类型 | 默认 | 说明 |
| --- | --- | --- | --- |
| value | Array | [] | 绑定值 |
| name | String | '' | 组件内容 |
| allowClear | Boolean | false | 是否删除 |
| dropHeight | Number | 300 | 窗体高度 |
| width | String,Number | 120 | 宽度 |
| placeholder | String | 'inline' | 提示语 |

#### name
| 名称 | 对应 |
| --- | --- |
| warehouse | 仓库 |
| area | 销售区域 |
