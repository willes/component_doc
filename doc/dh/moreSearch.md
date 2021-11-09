# 更多搜索

> 更多搜索弹窗，此组件建议与 [SearchFilter](/mixins/mix-search) 关联使用

```vue
<template>
  <div>
    <a-button>更多搜索</a-button>
    <d-more-search
      :visible.sync="moreVisible"
      @confirm="moreSearchResultDeal"
      ref="moreSearch"
      :rulesList="[
        {
          type: 'timeRange',
          label: '录单时间',
          field: 'timeRange',
        },
        {
          type: 'numberRange',
          label: '采购金额',
          field: 'amount',
        },
        {
          type: 'mixSearch',
          mixType: 'handler',
          label: '经手人',
          field: 'handler',
        },
        {
          type: 'mixSearch',
          mixType: 'preparer',
          label: '制单人',
          field: 'preparer',
        },
        {
          type: 'mixSelect',
          mixType: 'print',
          label: '打印状态',
          field: 'print',
        },
      ]"
    />
  </div>
</template>
<script>
import { DMoreSearch } from "@handday/components";
export default {
  name: "MoreSearchDemo",
  components: {
    DMoreSearch,
  },
  data() {
    return {
      moreVisible: false,
    };
  },
};
</script>
```

### Attributes

| 名称          | 类型     | 默认  | 说明                       |
| ------------- | -------- | ----- | -------------------------- |
| visible       | Boolean  | false | 显示弹窗                   |
| replaceFields | Object   | {}    | 修改内部组件回传的对象主键 |
| title         | String   | -     | 标题                       |
| beforeClose   | Function | null  | 关闭前的回调               |
| rulesList     | Array    | -     | 需要的搜索项               |

#### rulesList

默认值：

```json
[
  {
    "type": "timeRange",
    "label": "录单时间",
    "field": "timeRange",
    "placeholder": "请选择时间"
  },
  {
    "type": "numberRange",
    "label": "采购金额",
    "field": "amount",
    "placeholder": "请输入金额"
  },
  {
    "type": "mixSearch",
    "mixType": "handler",
    "label": "经手人",
    "field": "handler"
  },
  {
    "type": "mixSearch",
    "mixType": "preparer",
    "label": "制单人",
    "field": "preparer"
  },
  {
    "type": "mixSelect",
    "mixType": "print",
    "label": "打印状态",
    "field": "print"
  }
]
```

字段说明：

| 字段        | 说明                                                                                                                                          | 是否必填 |
| ----------- | --------------------------------------------------------------------------------------------------------------------------------------------- | -------- |
| type        | 组件名称（timeRange，numberRange，mixSearch，mixSelect）                                                                                      | 是       |
| mixType     | type 为 mixSearch 和 mixSelect 时可用，相当于 d-mix-search 和 d-mix-select 的 name 属性                                                       | 否       |
| label       | 表单项显示名称                                                                                                                                | 是       |
| field       | 表单项字段名，用于返回接收数据，可自定义                                                                                                      | 是       |
| placeholder | 输入框的 placeholder，如果是 range 类型的组件，可以设置为两个元素的数组，代表第一个和第二个输入框的 placeholder，如: ["起始时间", "结束时间"] | 否       |

### Events

| 名称    | 返回值 | 说明       |
| ------- | ------ | ---------- |
| confirm | ''     | 成功的回调 |
