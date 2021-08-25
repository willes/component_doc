# 选择商品

## 使用
访问这里：<a href="/#/product/list" target="_blank">选择商品</a>查看示例。

```vue
<template>
  <div>
    <a-button @click="visible=true">显示弹窗</a-button>
    <SelectProduct
        :visible.sync="visible"
        @confirm="confirmHandle"
        :replaceFields="{ key: 'spuId' }"
        v-model="select"
    />
  </div>
</template>

<script>
import { SelectProduct } from '@handday/components'
export default {
  name: 'AddProduct',
  components: { SelectProduct },
  data () {
    return {
      visible: false,
      select: [80010102672723968]
    }
  },
  mounted () {
    this.visible = true
    console.log(SelectProduct)
  },
  methods: {
    confirmHandle (result) {
      console.log(result)
    }
  }
}
</script>

```

### Attributes
| 名称 | 类型 | 默认 | 说明 |
| --- | --- | --- | --- |
| value | String,Object | - | 绑定的值（未实现） |
| visible | Boolean | false | 显示弹窗 |
| replaceFields | Object | - | 替换字段 |

### Events
| 名称 | 返回值 | 说明 |
| --- | --- | --- |
| confirm | '' | 成功的回调 |
