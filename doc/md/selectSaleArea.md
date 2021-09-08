# 销售区域

> 销售区域下拉框

### 使用

```vue
<template>
  <div>
    <SelectSaleArea />
  </div>
</template>

<script>
import { SelectSaleArea } from '@handday/components'
export default {
  name: 'selectSaleArea',
  components: {
    SelectSaleArea
  }
}
</script>

```

###
| 名称 | 类型 | 默认 | 说明 |
| --- | --- | --- | --- |
| placeholder | String | 销售区域 |  |

### Events
| 名称 | 返回值 | 说明 |
| --- | --- | --- |
| change | [], row | 选中的数据 |
