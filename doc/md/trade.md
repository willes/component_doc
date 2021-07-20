<!--
 * @Description: 
 * @Autor: weiwei
 * @Date: 2021-07-20 09:24:42
 * @LastEditTime: 2021-07-20 09:26:03
 * @LastEditors: weiwei
-->


# Trade 行业



如何使用？

```vue
<template>
  <div>
    <Trade :checked="checked" :expanded="expandedKeys" @change="changeHandler" ref="trade"/>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        checked: [],
        expandedKeys: []
      }
    }
  }
</script>
```
重置选择项：

```javascript
this.$refs.trade.resetChecked()
```
Attributes

| 参数 | 说明 | 类型 | 可选值 | 默认值
| --- | --- | --- | --- | --- |
| checked | 默认选择项 | number[]	 | - | [] |
| expanded	| 默认张开项 | number[] | - | [] |


Methods

| 方法名 | 说明 | 参数  
| --- | --- | --- | 
| resetChecked | 重置选择项 | Function(props: array) |

Events

| 方法名 | 说明 | 回调参数  
| --- | --- | --- | 
| change | 行业选择时变化触发 | 共两个参数，依次为：选中的行业id数组、选中的行业具体信息 |