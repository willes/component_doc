# 混合搜索框

## 使用

```vue
<template>
  <div class="">
    <MixSearch v-model="selectValue" name="product" />
  </div>
</template>

<script>
import MixSearch from '@/components/mixSearch'
export default {
  name: 'MixSearch',
  components: {
    MixSearch
  },
  data () {
    return {
      selectValue: undefined
    }
  }
}
</script>
```

### Attributes
| 名称 | 类型 | 默认 | 说明 |
| --- | --- | --- | --- |
| value | [String, Object] | - | 绑定值 |
| name | String | '' | 组件名称 |
| width | Number | 240 | 宽度 |
| placeholder | String | - | placeholder |

#### type
| 值 | 说明 |
| --- | --- |
| product | 商品 |
| person | 经手人 |
| warehouse | 仓库 |
| customer | 客户 |
| unit | 商品单位 |
| brand | 品牌 |
| tag | 标签 |
| payment | 付款账户（未完成） |


### Events
| 名称 | 返回值 | 说明 |
| --- | --- | --- |
| change | value, data | 选择后回调 |
