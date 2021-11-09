# 支付方式

```vue
<template>
  <d-select-pay-account
    :visible.sync="productVisible"
    :type="0"
    :dueMoney="1000"
    @confirm="handlePay"
  />
</template>

<script>
import { DSelectPayAccount } from "@handday/component";
export default {
  name: "selectPayAccount",
  components: {
    DSelectPayAccount,
  },
  data() {
    return {
      productVisible: false,
    };
  },
  methods: {
    handlePay() {},
  },
};
</script>
```

### Attributes

| 名称                | 类型                      | 默认  | 说明                                                                                                                                         |
| ------------------- | ------------------------- | ----- | -------------------------------------------------------------------------------------------------------------------------------------------- |
| visible             | Boolean                   | false | 弹窗显示影藏                                                                                                                                 |
| width               | [String,Number]           | 816   | 弹窗宽度                                                                                                                                     |
| type                | Number                    | 0     | 类型：0 单账户 1 多账户                                                                                                                      |
| dueMoney            | Number                    | 0     | 总金额，多账户时传递                                                                                                                         |
| beforeClose         | Function                  | null  | 关闭前的回调                                                                                                                                 |
| cache               | Boolean                   | false | 是否缓存                                                                                                                                     |
| excludeAccountTypes | Array<Number>             | []    | 排除账户类型集合，如果设置，在账户列表将不会展示设置的账户类型                                                                               |
| defaultValue        | Number \| String \| Array | null  | 默认选中值，当 type 为 0 的时候，传入 accountId 的集合。type 为 1 的时候，可以传入数组用于回显金额数据，如 `[{ accountId:1, payMoney:100 }]` |
| verifyTotalMoney    | Boolean                   | true  | 是否验证合计金额是否大于应付金额                                                                                                             |

### Events

| 名称    | 返回值 | 说明       |
| ------- | ------ | ---------- |
| confirm | data   | 选择后回调 |
