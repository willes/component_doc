# 省市区-地址搜索-地图

> **注意事项，此组件依赖 a-form-model!!!**  
> **注意事项，此组件依赖 a-form-model!!!**  
> **注意事项，此组件依赖 a-form-model!!!**  

* 这个组件要注意数据类型

* v-model 可以直接传递外部的 form 组件的 model 对象，但是需要注意数据必须包含以下字段：
```vue
{
  address: '',
  province: '',
  city: '',
  district: ''
}
```

### 使用
```vue
<template>
  <div>
    <a-form-model
        :label-col="{ span: 5 }"
        :wrapper-col="{ span: 19 }"
        :model="form">
      <address-box v-model="form"></address-box>
    </a-form-model>
  </div>
</template>

<script>
import { AddressBox } from '@handday/components'
export default {
  name: 'AddressSearchs',
  components: {
    AddressBox
  },
  data () {
    return {
      form: {
        address: '',
        province: '',
        city: '',
        district: '',
        test: ''
      }
    }
  }
}
</script>
```

### Attributes
| 名称 | 类型 | 默认 | 说明 |
| --- | --- | --- | --- |
| v-model | Object | {} | 绑定的数据 |


