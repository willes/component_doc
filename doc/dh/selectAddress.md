# 选择地址

## 使用
```vue
<template>
  <d-select-address
      :visible.sync="selectAddressVisible"
      @confirm="handleChange"
  />
  <a-button @click="selectAddressVisible = true">选择地址</a-button>
</template>

<script>
import { DSelectAddress } from '@/handday/components'
export default {
  name: 'DSelectAddressDemo',
  components: {
    DSelectAddress
  },
  data () {
    return {
      selectAddressVisible: false
    }
  }
}
</script>
```

### Attributes
| 名称 | 类型 | 默认 | 说明 |
| --- | --- | --- | --- |
| visible | Boolean | false | 显示弹窗 |
| title | String | - | 标题 |
| cache | Boolean | true | 是否缓存 |
| rules | Object | - | 查询条件 |
| beforeClose | Function | undefined | 关闭前 |
| width | Number | 816 | 宽度 |
| customerId | String | '' | 要查询地址的 客户 id |

### Events
| 名称 | 返回值 | 说明 |
| --- | --- | --- |
| confirm | '' | 成功的回调 |
