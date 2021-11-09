# 选择客户

```vue
<template>
  <div>
    <a-button @click="visible = true">显示弹窗</a-button>
    <d-select-customer :visible.sync="visible" @confirm="confirmHandle" />
  </div>
</template>

<script>
import { DSelectCustomer } from "@handday/components";
export default {
  name: "AddProduct",
  components: { DSelectCustomer },
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

| 名称           | 类型    | 默认          | 说明                                                     |
| -------------- | ------- | ------------- | -------------------------------------------------------- |
| visible        | Boolean | false         | 显示弹窗                                                 |
| replaceFields  | Object  | { key: 'id' } | 替换值                                                   |
| title          | String  | -             | 标题                                                     |
| cache          | Boolean | -             | 是否缓存                                                 |
| multiple       | Boolean | -             | 是否多选                                                 |
| rules          | Object  | -             | 查询条件                                                 |
| sortList       | Array   | -             | 列排序字段                                               |
| defaultValue   | Array   | -             | 列排序字段                                               |
| customerType   | Array   | [1,2,3,4]     | 客户类型: 1.供应商，2.订货客户，3.两者皆是，4.非订货客户 |
| selectionLimit | Number  | 100           | 限制选择条数                                             |
| placeholder    | String  | -             | 表格搜索框的 placeholder                                 |
