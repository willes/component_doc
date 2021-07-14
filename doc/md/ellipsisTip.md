# 行省略号
> 行省略号加载调用示例

## 使用

访问<a href="/#/ellipsisTip" target="_blank">这里</a>查看示例。
```vue
<template>
  <div>
    <cell-ellipsis-tip :line="2">
      Apple iPhone 12 (A2404) 128GB 白色 支持移动联通电信5G支持移动联通电信5G支持移动联通电信5G 双卡双待手机
    </cell-ellipsis-tip>
  </div>
</template>

<script>
import { CellEllipsisTip } from '@handday/components'
export default {
  name: 'TableCellEllipsisTips',
  components: {
    CellEllipsisTip
  }
}
</script>
```

### Attributes

| 名称 | 类型 | 默认 | 说明 |
| --- | --- | --- | --- |
| onlyLine | Boolean | false | 只有省略号，没有 popover 效果 |
| line | Number | 1 | 多少行后显示省略号 |
| text | String | - | 文字内容 |
| tip | String | - | popover 展示的提示内容，如果没有传递内容，将会获得 text 或默认 slot 的所有内容作为 tip 的文字内容 |
| position | String | 'bottom' | a-tooltip组件"placement"属性 |
| id | [String, Number] | - | 唯一标识 |
| tipExtAttr | Object | - | a-tooltip组件扩展属性 |

