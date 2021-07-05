<!--
 * @Description: 文本编辑组件
 * @Author: HenryLee
 * @Date: 2021-06-25 17:23:05
 * @LastEditTime: 2021-06-28 21:15:29
 * @LastEditors: weiwei
-->
# 纯文本编辑器
> 用于各种需要纯文本编辑的场景

## 使用
<iframe src="/#/textEditorView" frameborder="0" height="280px">map</iframe>

```vue
<template>
  <div class="text-editor">
    <text-editor
      :default-value="textValue"
      :maxLength="600"
      placeholder="请输入内容"
      :textarea-height="200"
      @input="handlerInput"
      @change="handlerChange"
    ></text-editor>
  </div>
</template>

<script>
  import { TextEditor } from '@handday/components'
  export default {
    name: 'textEditorView',
    components: {
      TextEditor
    },
    data () {
      return {
        textValue: {
          value: '纯文本编辑器示例',
          // 1-加粗，2-斜体，4-下划线，8-左对齐，16-居中对齐，32-右对齐
          textStyles: [ 1, 2, 4, 16]
        }
      }
    },
    methods: {
      /**
       * @description: 输入事件触发
       * @param {Object} val
       * @return {*}
       */
      handlerInput (val) {
        console.log(val)
      },
      /**
       * @description: 文本域失去焦点触发
       * @param {Object} val
       * @return {*}
       */
      handlerChange (val) {
        console.log(val)
      }
    }
  }
</script>
```

<font color="red"><b>注意：</b> 组件仅提供change事件或者input事件返回组件值，其他需要获取组件值的场景可使用ref获取组件的textValue。</font>

### Attributes

| 名称 | 类型 | 默认 | 说明 |
| --- | --- | --- | --- |
| value(v-model) | Object | { value: '', textStyles: [] } | 双向绑定的value值，格式需按照指定格式，value为文本内容，textStyles为文本样式数组，参照示例 |
| defaultValue | Object | { value: '', textStyles: [] } | 初始文本信息，格式同上，不会触发双向绑定 |
| maxLength | Number | 500 | 最大字符数限制 |
| placeholder | String | '请输入' | 文本域默认占位文字 |
| textareaHeight | Number |  | 文本域高度，不传入时文本域高度自适应 |

### Events
| 名称 | 返回值 | 说明 |
| --- | --- | --- |
| change | Object | 样式改变或者文本域失焦时返回文本值 |
| input | Object | 样式改变或者输入内容改变时返回文本值 |


