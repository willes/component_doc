<!--
 * @Description: 
 * @Autor: weiwei
 * @Date: 2021-06-25 16:07:21
 * @LastEditTime: 2021-08-19 10:19:14
 * @LastEditors: weiwei
-->
# 图片上传
> 图片上传调用示例

## 使用

<iframe src="/#/uploadImage" frameborder="0" height="380px">map</iframe>

```vue
<template>
  <div>
    <upload @ultipleSuccess="handleSuccess" :maxImg="5" ref="uploadImage"></upload>
  </div>
</template>

<script>
import { Upload } from '@handday/components'
export default {
  name: 'UploadImage',
  components: {
    Upload
  },
  methods: {
    handleSuccess(item) {
      console.log(item)
    },
    handleSubmit () {
      this.$refs.uploadImage.save((status, result) => {
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
| isExpire |  是否过期(公有或私有图片, 0 需要过期-每次需重新获取预览地址(默认)，1-不过期具有公共读属性) | number	 | 0/1 | 1 | |

### Events

| 名称 | 返回值 | 说明 |
| --- | --- | --- |
| ultipleSuccess | 图片列表数组对象 | 请注意过滤上传失败的图片，即 status 为 error 的数据 |