<!--
 * @Description:
 * @Autor: weiwei
 * @Date: 2021-06-24 08:36:53
 * @LastEditTime: 2021-07-02 10:06:01
 * @LastEditors: weiwei
-->
# Loading 加载
> 加载数据时显示动效。

### 区域加载
在表格等容器中加载数据时显示。
```vue
<template>
  <div
    v-loading="loading">
  </div>
</template>

<script>
  export default {
    data() {
      return {
        loading: true
      }
    }
  }
</script>

```
### 自定义

> 在绑定了v-loading指令的元素上添加element-loading-text属性，其值会被渲染为加载文案，并显示在加载图标的下方。类似地，element-loading-spinner和element-loading-background属性分别用来设定图标类名和背景色值。
```vue
<template>
  <div
    v-loading="loading"
    h-loading-text="拼命加载中"
    h-loading-spinner="loading"
    h-loading-background="rgba(0, 0, 0, 0.8)"
    >
  </div>
</template>

<script>
  export default {
    data() {
      return {
        loading: true
      }
    }
  }
</script>

```
### 整页加载
> 当使用指令方式时，全屏遮罩需要添加fullscreen修饰符（遮罩会插入至 body 上），此时若需要锁定屏幕的滚动，可以使用lock修饰符；当使用服务方式时，遮罩默认即为全屏，无需额外设置。

```vue
<template>
  <a-button
    type="primary"
    @click="openFullScreen1"
    v-loading.fullscreen.lock="fullscreenLoading">
    指令方式
  </a-button>
  <a-button
    type="primary"
    @click="openFullScreen2">
    服务方式
  </a-button>
</template>

<script>
  export default {
    data() {
      return {
        fullscreenLoading: false
      }
    },
    methods: {
      openFullScreen1() {
        this.fullscreenLoading = true;
        setTimeout(() => {
          this.fullscreenLoading = false;
        }, 2000);
      },
      openFullScreen2() {
        const loading = this.$loading({
          lock: true,
          text: 'Loading',
          background: 'rgba(0, 0, 0, 0.7)'
        });
        setTimeout(() => {
          loading.close();
        }, 2000);
      }
    }
  }
</script>

```

### 服务
Loading 还可以以服务的方式调用。引入 Loading 服务：

```javascript
import { Loading } from '@handday/components'
```
调用时

```javascript
Loading.service(options)
```
其中 options 参数为 Loading 的配置项，具体见下表。LoadingService 会返回一个 Loading 实例，可通过调用该实例的 close 方法来关闭它：

```javascript
let loadingInstance = Loading.service(options);
this.$nextTick(() => { // 以服务的方式调用的 Loading 需要异步关闭
  loadingInstance.close();
});
```
需要注意的是，以服务的方式调用的全屏 Loading 是单例的：若在前一个全屏 Loading 关闭前再次调用全屏 Loading，并不会创建一个新的 Loading 实例，而是返回现有全屏 Loading 的实例：

```javascript
let loadingInstance1 = Loading.service({ fullscreen: true });
let loadingInstance2 = Loading.service({ fullscreen: true });
console.log(loadingInstance1 === loadingInstance2); // true
```
此时调用它们中任意一个的 close 方法都能关闭这个全屏 Loading。
当然你也可以在全局应用
```javascript
// main.js
import { Loading } from '@handday/components'
Vue.use(Loading.directive)
Vue.prototype.$loading = Loading.service

this.$loading({
  lock: true,
  text: 'Loading',
  background: 'rgba(0, 0, 0, 0.7)'
});
```
### Options
| 参数 | 说明 | 类型 | 可选值 | 默认值
| --- | --- | --- | --- | --- |
| target | Loading 需要覆盖的 DOM 节点。可传入一个 DOM 对象或字符串；若传入字符串，<br>则会将其作为参数传入 document.querySelector以获取到对应 DOM 节点  | object/string	 | - | document.body |
| body	| 同 v-loading 指令中的 body 修饰符 | boolean | - | false |
| fullscreen	| 同 v-loading 指令中的 lock 修饰符 | boolean | - | false |
| text	| 显示在加载图标下方的加载文案 | string | - | - |
| background	| 遮罩背景色 | string | - | - |
| customClass	| Loading 的自定义类名	 | string | - | - |
