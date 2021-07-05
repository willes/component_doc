<!--
 * @Description: 
 * @Autor: weiwei
 * @Date: 2021-06-24 08:36:53
 * @LastEditTime: 2021-06-24 14:43:35
 * @LastEditors: weiwei
-->
# 省市区选择

## 使用
访问<a href="/area" target="_blank">这里</a>查看示例。

```vue
<template>
  <div>
    <area-select v-model="area" :loadData="getRegion"></area-select>
  </div>
</template>

<script>
import { AreaSelect } from '@handday/components'
import { getRegion } from '@/api/region'
export default {
  name: 'AreaSelects',
  components: {
    AreaSelect
  },
  data () {
    return {
      area: [],
      getRegion
    }
  }
}
</script>
```

### Attributes
| 名称 | 类型 | 默认 | 说明 |
| --- | --- | --- | --- |
| value/v-model | Array | [] | 省市区的 code 数组 |
| type | String | 'span' | 每个选择占一行还是一格 |
| bottom | String | '24px' | 距离底部的间距 |
| level | Number | 3 | 显示层级 |
| disabled | Boolean | false | 原生的 disabled 属性 |
| url | String | '' | 请求 url 地址 |
| loadData | Function | null | 请求方法 |
| dealData | Boolean | false | 当使用 loadData 方法时，返回的数据是否经过处理 |

### Events
| 名称 | 返回值 | 说明 |
| --- | --- | --- |
| change | selectData, { province, city, district } | 选中的数据数组以及详细的数据信息 |
