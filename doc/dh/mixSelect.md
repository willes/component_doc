# 混合下拉框

## 使用

```vue
<template>
  <div class="">
    <StaticSelect v-model="selectValue" :type="2" />
  </div>
</template>

<script>
import StaticSelect from '@/components/mixSelect/index'
export default {
  name: 'mixSelect',
  components: {
    StaticSelect
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
| value | [String, Number] | - | 绑定值 |
| type | Number | 0 | 加载类型 |
| allowClear | Boolean | false | 是否允许删除 |
| placeholder | String | - | placeholder |
| width | String,Number | - | 宽度，可不传 |
| list | Array | - | 选项列表 |
| exclude | Array | - | 需要过滤掉的 id |

#### type  
| 值 | 说明 |
| --- | --- |
| 0 | 商品单位 |
| 1 | 商品品牌 |
| 2 | 商品标签 |
| 3 | 单据状态 |
| 4 | 支付状态 |
| 5 | 库存状态 |
| 6 | 上下架状态 |


### Events
| 名称 | 返回值 | 说明 |
| --- | --- | --- |
| change | value, data | 选择后回调 |
