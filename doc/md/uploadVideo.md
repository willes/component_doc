<!--
 * @Description: 
 * @Autor: weiwei
 * @Date: 2021-06-25 16:07:21
 * @LastEditTime: 2021-06-28 21:16:11
 * @LastEditors: weiwei
-->
# 视频上传
> 视频上传使用示例

## 使用
<iframe src="/#/uploadVideo" frameborder="0" height="380px">map</iframe>
```vue
<template>
  <div>
    <upload-video ref="uploadVideo" @fileInfo="fileInfo" />
    <a-button @click="submit">点击获取数据</a-button>
  </div>
</template>

<script>
import { UploadVideo } from '@handday/components'
export default {
  name: 'UploadImage',
  components: {
    UploadVideo
  },
  methods: {
    fileInfo (status) {
      console.log('状态：', status)
    },
    submit () {
      this.$refs.uploadVideo.save((status, result) => {
        if (status) {
          console.log('保存成功', result)
        } else {
          console.log('保存失败')
        }
      })
    }
  }
}
</script>
```

<font color="red"><b>注意：</b> 因为上传最后需要调用接口将文件数据实际的保存入库，所以需要在完成之后手动调用 save 方法保存，该方法将会返回保存的数据。</font>

### EmitS

| 名称 | 返回值 | 说明 |
| --- | --- | --- |
| fileInfo | Boolean | 上传的状态 |

### 获取上传的数据
```vue
this.$refs.uploadVideo.validate((valid, innerForm) => {
  console.log(valid, innerForm)
})
```
