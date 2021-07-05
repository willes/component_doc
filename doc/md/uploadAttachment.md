<!--
 * @Description:
 * @Author: tangyuanfei
 * @Date: 2021-07-02 09:19:53
 * @LastEditTime: 2021-07-02 10:16:20
 * @LastEditors: tangyuanfei
-->

# 附件上传

> 附件调用示例

## 使用

<iframe src="/#/UploadAttachment" frameborder="0" height="380px">attachment</iframe>

```vue
<template>
    <div>
        <attachment-upload @ultipleSuccess="handleSuccess" :limit="20" ref="uploadAttachment" />
    </div>
</template>

<script>
import { AttachmentUpload } from '@handday/components'
export default {
    name: 'attachment',
    components: {
        AttachmentUpload
    },
    methods: {
        handleSuccess(item) {
            console.log(item)
        },
        handleSubmit() {
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

### Options

| 名称  | 类型   | 默认 | 说明             |
| ----- | ------ | ---- | ---------------- |
| limit | Number | 20   | 附件上传数量限制 |

### EmitS

| 名称           | 返回值           | 说明                                                |
| -------------- | ---------------- | --------------------------------------------------- |
| ultipleSuccess | 附件列表数组对象 | 请注意过滤上传失败的附件，即 status 为 error 的数据 |
