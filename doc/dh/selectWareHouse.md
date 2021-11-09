# 选择仓库

```vue
<template>
  <div>
    <a-button @click="visible = true">显示弹窗</a-button>
    <d-select-warehouse :visible.sync="visible" @confirm="confirmHandle" />
  </div>
</template>

<script>
import { DSelectWarehouse } from "@handday/components";
export default {
  name: "SelectWarehouse",
  components: { DSelectWarehouse },
  data() {
    return {
      visible: false,
    };
  },
  mounted() {
    this.visible = true;
    console.log(SelectProduct);
  },
  methods: {
    confirmHandle(result) {
      console.log(result);
    },
  },
};
</script>
```

### Attributes

| 名称           | 类型            | 默认          | 说明                      |
| -------------- | --------------- | ------------- | ------------------------- |
| visible        | Boolean         | false         | 显示弹窗                  |
| width          | [String,Number] | 1000          | 弹窗宽度                  |
| replaceFields  | Object          | { key: 'id' } | 替换值                    |
| title          | String          | -             | 标题                      |
| cache          | Boolean         | -             | 是否缓存                  |
| multiple       | Boolean         | -             | 是否多选                  |
| rules          | Object          | -             | 查询条件                  |
| defaultValue   | Array           | -             | 列排序字段                |
| categoryInit   | Number          | 0             | 初始化的仓库分类 parentId |
| selectionLimit | Number          | 100           | 限制选择条数              |
