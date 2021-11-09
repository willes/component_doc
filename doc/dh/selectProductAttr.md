# 选择单位 订货特供版

```vue
<template>
  <d-select-product-attr :visible.sync="visible" />
</template>

<script>
import { DSelectProductAttr } from "@handday/components";
export default {
  name: "Demo",
  components: {
    DSelectProductAttr,
  },
  data() {
    return {
      visible: false,
    };
  },
};
</script>
```

### Attributes

| 名称          | 类型    | 默认  | 说明     |
| ------------- | ------- | ----- | -------- |
| value/v-model | Object  | null  | 绑定值   |
| visible       | Boolean | false | 显示弹窗 |
| width         | Number  | 816   | 宽度     |
| type          | Number  | 0     | 单位类型 |
| rules         | Objecy  | {}    | 查询参数 |

#### type

| 值  | 类型                                 |
| --- | ------------------------------------ |
| 0   | 单位                                 |
| 1   | 品牌                                 |
| 2   | 标签                                 |
| 3   | 单位（带转换率）                     |
| 4   | 仓库（已被 d-select-warehouse 替换） |
