# 时间区间

```vue
<template>
  <div>
    <d-select-time-range
      v-model="range"
      :width="200"
      :placeholder="['请选择第一个时间', '请选择第二个时间']"
      @change="onSelectConfirm"
    />
  </div>
</template>

<script>
import { DSelectTimeRange } from "@handday/components";
export default {
  components: { DSelectTimeRange },
  data() {
    return {
      range: [],
    };
  },
  methods: {
    onSelectConfirm(result) {
      console.log(result);
    },
  },
};
</script>
```

### Props

| 名称        | 类型   | 默认     | 说明                                    |
| ----------- | ------ | -------- | --------------------------------------- |
| value       | Array  | []       | 绑定值，如：['2021-10-10','2021-10-12'] |
| layout      | String | 'inline' | 布局方式                                |
| startText   | String | '从'     | 分割文字                                |
| divideText  | String | '至'     | 分割文字                                |
| width       | String | 'inline' | input 宽度                              |
| placeholder | String | 'inline' | input 提示语                            |

### Events

| 名称    | 描述     | 返回值                             |
| ------- | -------- | ---------------------------------- |
| confirm | 选择时间 | `{ data:[], rows:[] } \| undefined` |
