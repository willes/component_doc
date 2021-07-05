# 图标加载

## 使用
访问<a href="/iconFont" target="_blank">这里</a>查看示例。

> 这是一个二次封装的图标框，对应 [iconfont](https://www.iconfont.cn/manage/index?spm=a313x.7781069.1998910419.db775f1f3&manage_type=myprojects&projectId=2273066&keyword=&project_type=&page=) 的图标，请注意区别 ant 自带的图标使用方式。

```vue
<template>
  <div>
    <icon-font-box type="icon_classification" size="16" height="16" />
  </div>
</template>

<script>
import { IconFontBox } from '@handday/components'
export default {
  name: 'DemoIconFont',
  components: {
    IconFontBox
  }
}
</script>
```

### Attributes

| 名称 | 必填 | 类型 | 默认值 | 说明 |
| --- | --- | --- | --- | --- |
| type | true | String | iconqiyeweixin_021 | 图标名称，从 iconfont 上获取 |
| height | false | [String, Number] | auto | 根据 icon 实际显示区域设置，如果 icon 是长方形，通常与 size 一致，如果是正方形，则视实际情况而定。建议设置高度，否则显示可能会出现问题 |
| color | false | String | '' | 图标颜色，单色图标生效，多色图标不生效 |
| size | false | [String, Number] | 20 | 大小 |
| display | false | String | inline-block | div 类型，原生 css 值 |
| overflow | false | String | hidden | 是否隐藏区域外的内容，通常用于清除 icon 带来的多余空白空间 |
