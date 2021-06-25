# 图片上传
> 图片上传调用示例

## 使用
访问<a href="/uploadImage" target="_blank">这里</a>查看示例
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

### EmitS

| 名称 | 返回值 | 说明 |
| --- | --- | --- |
| ultipleSuccess | 图片列表数组对象 | 请注意过滤上传失败的图片，即 status 为 error 的数据 |