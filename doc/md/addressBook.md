# 同步通讯录

## 使用
访问这里：<a href="/addressBook" target="_blank">addressBook</a>查看示例。

```vue
<template>
  <div class="address-book">
    <sync-address-book :visible.sync="visible" :auth="true" />
    <a-button @click="visible = true">同步通讯录</a-button>
  </div>
</template>

<script>
import { SyncAddressBook } from '@handday/components'
export default {
  name: 'AddressBook',
  components: {
    SyncAddressBook
  },
  data () {
    return {
      visible: false
    }
  }
}
</script>
```

### Attributes
| 名称 | 类型 | 默认 | 说明 |
| --- | --- | --- | --- |
| visible | Boolean | false | 显示弹窗 |
| auto | Boolean | false | 是否有权限 |

### Events
| 名称 | 返回值 | 说明 |
| --- | --- | --- |
| success | '' | 成功的回调 |
| fail | 失败提示信息 | 失败的回调 |
