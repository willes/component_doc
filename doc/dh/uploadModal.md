# 上传附件

```vue
<template>
  <div>
    <a-button @click="visible = true">显示弹窗</a-button>
    <d-upload-modal :visible.sync="visible" @confirm="confirmHandle" />
  </div>
</template>

<script>
import { DUploadModal } from "@handday/components";
export default {
  components: { DUploadModal },
  data() {
    return {
      visible: false,
    };
  },
  mounted() {
    this.visible = true;
  },
  methods: {
    confirmHandle(result) {
      console.log(result);
    },
  },
};
</script>
```

### Attributes

| 名称         | 类型     | 默认                                   | 说明                                                                    |
| ------------ | -------- | -------------------------------------- | ----------------------------------------------------------------------- |
| visible      | Boolean  | false                                  | 显示弹窗                                                                |
| billType     | Number   | -1                                     | -1 新增 0 草稿 1 过账 3 红冲                                            |
| fileList     | Array    | []                                     | 附件集合                                                                |
| setContainer | Function | `() => document.querySelector('body')` | 设置弹窗插入节点                                                        |
| beforeClose  | Function | undefined                              | 弹框关闭前回调函数，参数： { fileList, callback } : { Array, Function } |
| cache        | Boolean  | false                                  | 是否缓存                                                                |

### Events

| 名称    | 返回值         | 说明       |
| ------- | -------------- | ---------- |
| confirm | { data, rows } | 成功的回调 |
