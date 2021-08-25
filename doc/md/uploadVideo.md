<!--
 * @Description: 
 * @Autor: weiwei
 * @Date: 2021-06-25 16:07:21
 * @LastEditTime: 2021-08-19 10:19:40
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
### Attributes
| 参数 | 说明 | 类型 | 可选值 | 默认值
| --- | --- | --- | --- | --- |
| isExpire |  是否过期(公有或私有视频, 0 需要过期-每次需重新获取预览地址(默认)，1-不过期具有公共读属性) | number	 | 0/1 | 1 | |

### Events

| 名称 | 返回值 | 说明 |
| --- | --- | --- |
| fileInfo | Boolean | 上传的状态 |

### 获取上传的数据
```vue
this.$refs.uploadVideo.validate((valid, innerForm) => {
  console.log(valid, innerForm)
})
```
