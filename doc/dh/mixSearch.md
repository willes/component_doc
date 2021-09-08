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
| disabled | Boolean | - | 是否禁用 |
| require | Boolean | false | 是否必填 |
| maxLength | Number | - | 支持的最大字符数 |
| next | Function | - | 下一步的回调 |
| valueMode | Boolean | - | 有值的时候单选，没有值得时候多选 |
| dialogConfig | Object | - | 对应打开的弹窗的配置项 |

#### name
| 值 | 说明 |
| --- | --- |
| product | 商品 |
| multipleProduct | 多选 |
| person | 经手人 |
| warehouse | 仓库 |
| customer | 客户 |
| supplier | 供应商 |
| supplierCustomer | 客户和供应商都有 |
| unit | 商品单位 |
| brand | 品牌 |
| tag | 标签 |
| payment | 付款账户（未完成） |
| account | 付款账户选择 |


### Events
| 名称 | 返回值 | 说明 |
| --- | --- | --- |
| change | value, data | 选择后回调 |
