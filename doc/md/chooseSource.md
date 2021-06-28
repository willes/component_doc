<!--
 * @Description: 上传及选择选择素材库资源组件
 * @Author: HenryLee
 * @Date: 2021-06-28 13:41:28
 * @LastEditTime: 2021-06-28 16:03:29
 * @LastEditors: HenryLee
-->
# 上传及选择素材库资源
> 可上传资源至素材库或者选择素材库中的视频及图片素材

## 使用
点击 <a href="/chooseSourceView" target="_blank">这里</a> 查看示例。

```vue
<template>
  <div class="choose-source-view">
    <choose-source
      tip-text="添加图片"
      type="image"
      :is-preview="true"
      :limit="5"
      @change="handlerChange"
    ></choose-source>
    <choose-source
      tip-text="添加视频"
      type="video"
      :is-preview="true"
      :limit="1"
    ></choose-source>
  </div>
</template>

<script>
import { ChooseSource } from "@handday/components";
export default {
  name: "chooseSourceView",
  components: {
    ChooseSource
  },
  methods: {
    /**
     * @description: 选择素材改变后触发
     * @param {Array} arr 选中的素材数组
     * @return {*}
     */
    handlerChange (arr) {
      console.log('素材数组:', arr);
    }
  }
};
</script>
```

### Options

| 名称 | 类型 | 默认 | 说明 |
| --- | --- | --- | --- |
| value(v-model) | Array(Object) | [] | 双向绑定的value值，素材库素材资源数组 |
| type | String | 'image' | 上传选择素材的类型，'image'为图片，'video'为视频 |
| size | Number | 104 | 显示选择框及预览小图列表宽高 单位为px |
| icon | String | '' | 自定义显示选择框的icon，可传入iconfont名称，不传使用默认icon |
| tipText | String | '' | 显示选择框提示文字，不传则不显示 |
| limit | Number | 1000 | 限制上传及选择的数量 |
| isPreview | Boolean | false | 选择后是否显示预览列表，默认关闭 |
| isDelete | Boolean | true | 预览列表是否显示删除图标，isPreview为true时有效 |
| isMove | Boolean | true | 预览列表是否支持拖拽排序，isPreview为true时有效 |

### Emits
| 名称 | 返回值 | 说明 |
| --- | --- | --- |
| change | Array | 确定选择资源后触发，返回选中的素材库资源数组 |


