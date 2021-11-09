# 单选或多选

## 使用

````vue
<template>
  <div>
    <SelectGroup
        :multiple="multiple"
        v-model="checkValue"
        :options="options"
    />
  </div>
</template>

<script>
import { SelectGroup } from '@handday/components'
export default {
  name: 'SelectGroups',
  components: {
    SelectGroup
  },
  data () {
    return {
      checkValue: [],
      multiple: false,
      options: []
    }
  },
  mounted() {
  }
}
</script>

<style lang="scss" scoped></style>

````

### Attributes

| 参数 | 说明 | 类型 | 可选值 | 默认值
| --- | --- | --- | --- | --- |
| multiple | 是否多选 | Boolean | - | false |
| value/v-model | 值 | Array | - | [] |
| options | 选项 | Array | - | [] |
| replaceFields | 替换值 | Object | - | {key: 'id', name: 'name'} |
