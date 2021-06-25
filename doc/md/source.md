# 素材库
> 素材库页面层调用示例

## 使用
访问<a href="/sourceView" target="_blank">这里</a>查看示例

```vue
<template>
  <div>
    <Source />
  </div>
</template>

<script>
import { Source } from '@handday/components'
export default {
  name: 'sourceView',
  components: {
    Source
  }
}
</script>
```

### Options 
| 名称 | 类型 | 默认 | 说明 |
| --- | --- | --- | --- |
| model | Number | 1 | 使用的模式，默认页面层，2表示弹窗层 |
| tabKey | Number | 1 | 初始化的时候打开的模块，1:图片 2:视频， 弹窗时生效 |
| selectImgNum | Number | 1000 | 可同时选择的图片数量，弹窗时生效 |
| selectVideoNum | Number | 1000 | 可同时选择的视频数量，弹窗时生效 |