# 地址设置

## 使用
访问<a href="/address" target="_blank">这里</a> 查看示例。

```vue
<template>
  <div>
    <address-set :requestApi="{ list: getRegion, byName: getAddressCodeByName }"></address-set>
  </div>
</template>

<script>
import { AddressSet } from '@handday/components'
import { getRegion, getAddressCodeByName } from '@/api/region'
export default {
  name: 'AddressSets',
  data () {
    return {
      getRegion,
      getAddressCodeByName
    }
  },
  components: {
    AddressSet
  }
}
</script>

```

<font color="red"><b>注意：</b>该组件需要传入对应的接口地址或接口方法，未内置默认的接口请求地址或方法。</font>

### Options
| 名称 | 类型 | 默认 | 说明 |
| --- | --- | --- | --- |
| form | Object | { address: '', area: [] } | 组件的表单数据 |
| beforeClose | Function | null | 关闭前的回调，返回值 { address, area }, closeModal, closeLoading |
| title | String | '设置地址' | 地址标题 |
| requestUrl | Object | { list: '', byName: '' } | 请求地址设置 |
| requestApu | Object | { list: null, byName: null } | 封装好的请求方法 |
| text | String | '修改' | 按钮显示文字 |

### Emits
| 名称 | 返回值 | 说明 |
| --- | --- | --- |
| ok | { address<String>, area<Array> } | 回调方法 |
