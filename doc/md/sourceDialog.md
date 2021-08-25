<!--
 * @Description: 
 * @Autor: weiwei
 * @Date: 2021-07-05 09:22:37
 * @LastEditTime: 2021-08-19 10:22:44
 * @LastEditors: weiwei
-->
# 素材库弹窗
> 通过弹窗调用素材库

## 使用
访问<a href="/sourceDialog" target="_blank">这里</a>查看示例

```vue
<template>
  <div class="">
    <button @click="dialogType = 'picture';visible = true">打开图片界面</button>
    <button @click="dialogType = 'media';visible = true">打开视频界面</button>
    <source-dialog :visible.sync="visible" :type="dialogType" @ok="handleOk" :tabKey="1"></source-dialog>
  </div>
</template>

<script>
import { SourceDialog } from '@handday/components'
export default {
  name: 'SourceIndex',
  data () {
    return {
      visible: false,
      dialogType: 'media'
    }
  },
  components: {
    SourceDialog
  },
  methods: {
    handleOk(result) {
      console.log('ok')
      console.log(result)
    }
  }
}
</script>
```

### Attributes

| 名称 | 类型 | 默认 | 说明 | 可选值 |
| --- | --- | --- | --- | - |
| visible | Boolean | false | 是否显示弹窗 |-|
| beforeClose | Function | null | 关闭弹窗前的回调, 返回值 result, handleCancel |-|
| type | String | picture | 弹窗类型，media 为视频 |-|
| tabKey | Number | 2 | 弹窗的打开类型，是列表还是上传界面 |-|
| selectImgNum | Number | 20 | 可选图片数量 |-|
| selectVideoNum | Number | 20 | 可选视频数量 |-|
| uploadImgNum | Number | 20 | 可同时上传的图片数量 |-|
| isExpire | Number | 1 | 上传公有或私有素材 | 0/1|-|
| cosType | Number | 1 | 查询公有或私有素材 | 0/1|-|