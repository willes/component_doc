<!--
 * @Description: 
 * @Autor: weiwei
 * @Date: 2021-06-24 08:36:53
 * @LastEditTime: 2021-06-25 17:25:14
 * @LastEditors: weiwei
-->
# 地址搜索
> 这个组件基于腾讯地图

## 使用
访问<a href="/#/addressSearch">这里</a>查看示例。
<iframe src="/#/addressSearch"></iframe>
```vue
<template>
  <div>
    <address-search @change="handleChange"></address-search>
  </div>
</template>

<script>
import { AddressSearch } from '@handday/components'
export default {
  name: 'AddressSearchs',
  components: {
    AddressSearch
  },
  methods: {
    handleChange(position) {
      console.log(position)
    }
  }
}
</script>

```

### Options
| 名称 | 类型 | 默认 | 说明 |
| --- | --- | --- | --- |
| value/v-model | String | '' | 值 |
| icon | String | 'environment' | 默认按钮的图标 |
| showBtn | Boolean | true | 是否显示按钮 |
| disabled | Boolean | false | 是否禁用 |

### Emits
| 名称 | 返回值 | 说明 |
| --- | --- | --- |
| change | Object | 选中的位置信息 |
