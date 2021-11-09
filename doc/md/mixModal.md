# 混合选择弹窗

> 混合弹窗组件

### 使用

```vue
<template>
  <div>
    <MixModal
      :visible.sync="visible"
      type="checkbox"
      name="productCategory"
      @confirm="confirmHandle"
    />
    <a-button @click="visible = true">打开</a-button>
  </div>
</template>

<script>
import { MixModal } from "@handday/components";
export default {
  name: "MixModalDemo",
  components: {
    MixModal,
  },
  data() {
    return {
      visible: false,
    };
  },
  methods: {
    confirmHandle(result) {
      console.log(result);
    },
  },
};
</script>

<style></style>
```

### Props

| 名称         | 类型    | 默认       | 说明       |
| ------------ | ------- | ---------- | ---------- |
| visible      | Boolean | -          | 显示与隐藏 |
| title        | String  | '地址定位' | 标题       |
| name         | String  | brand      | 组件名称   |
| beforeClose  |         |            |            |
| defaultValue |         |            |            |
| multiple     |         |            | 多选       |
| rules        | Object  | {}         | 查询条件   |

#### name

| 名称            | 说明             |
| --------------- | ---------------- |
| unit            | 商品单位         |
| brand           | 商品品牌         |
| tag             | 商品标签         |
| levelPrice      |                  |
| productCategory | 商品分类         |
| specialCategory | 专题分类         |
| saleArea        | 销售区域         |
| delivery        | 发货方式         |
| area            | 地区             |
| logistics       | 系统初始物流公司 |
| customLogistics | 自定义物流公司   |

### Events

| 名称    | 返回值                   | 说明       |
| ------- | ------------------------ | ---------- |
| confirm | {data, rows, isCheckAll} | 选中的数据 |
