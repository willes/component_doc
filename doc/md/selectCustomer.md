# 往来单位

> 混合弹窗组件

### 使用

```vue
<template>
  <div>
    <SelectCustomer
        :visible.sync="visible"
        type="radio"
        @confirm="confirmHandle"
    />
    <a-button @click="visible = true">打开</a-button>
  </div>
</template>

<script>
import { SelectCustomer } from '@handday/components'
export default {
  name: 'MixModalDemo',
  components: {
    SelectCustomer
  },
  data () {
    return {
      visible: false
    }
  },
  methods: {
    confirmHandle() {
      console.log(arguments)
    }
  }
}
</script>

<style></style>

```

###
| 名称 | 类型 | 默认 | 说明 |
| --- | --- | --- | --- |
| visible | Boolean | - | 显示与隐藏 |
| title | String | '地址定位' | 标题 |
| width | Number |  | 宽 |
| type | String | checkbox | 单选多选/checkbox,radio |
| attrs |  |  |  扩展属性 |
| defaultSelectedRowKeys |  |  |  默认选中 |
| levelPrice |  |  |  级别价 |
| customerType |  |  |  数据类型，1.供应商，2.订货客户，3.两者皆是，4.非订货客户 |

### Events
| 名称 | 返回值 | 说明 |
| --- | --- | --- |
| confirm | [], row | 选中的数据 |
