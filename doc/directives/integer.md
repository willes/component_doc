# 数字

> 输入纯数字

## 基础使用

```vue
<template>
  <div>
    <div>只能输入10个数字</div>
    <a-input v-input-integer="10" />
    <div>只能输入10 - 1000</div>
    <a-input v-input-integer="[10, 1000]" />
    <div>自定义正则</div>
    <a-input v-input-integer.reg="/[^\d-\/]/g"></a-input>
  </div>
</template>
```

### 参数说明
    1. 输入数字: 限制输入的长度
    2. 输入数组: 限制数字最大最小值，输入一个值则仅限制最小值
    3. 输入正则（注意修饰符为 reg）： 自定义校验规则