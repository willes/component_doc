<!--
 * @Description: 
 * @Autor: weiwei
 * @Date: 2021-06-24 08:36:53
 * @LastEditTime: 2021-06-25 17:22:10
 * @LastEditors: weiwei
-->
# 地图
> 地图调用示例

<font color="red"><b>注意：</b>因为地图核心文件为异步加载，调用腾讯地图 TMap 实例时请在 init 回调之后进行，否则会因为未加载完成而报错。</font>

## 使用
<iframe src="/#/map" frameborder="0" height="400px">map</iframe>

```vue
<template>
  <gl-map @init="handleInit"></gl-map>
</template>
<script>
import { GlMap } from '@handday/components'
export default {
  name: 'Map',
  components: {
    GlMap
  },
  methods: {
    handleInit (GLMap) {
      // GLMap 是封装地图的实例
    }
  }
}
</script>
```

### Options

| 名称 | 类型 | 默认 | 说明 |
| --- | --- | --- | --- |
| inputValue | String | '' | 初始的值，用于搜索的地址 |
| width | String | '100%' | 地图宽度 |
| height | String | '100%' | 地图高度 |
| searchInput | Boolean | true | 是否显示搜索框 |
| optionSelect | String | title | 搜索出来的数据需要展示的字段的 key |
| intLocation | Boolean | true | 创建的时候搜索默认的数据，即搜索 inputValue 的值 |
| config | Object | {options} | 配置信息，查看 config 说明 |

### Emits
| 名称 | 返回值 | 说明 |
| --- | --- | --- |
| change | position | 获取到的定位数据信息 |
| init | Object | 二次封装后的地图实例 |

### config
* 仅展示二次封装的 config 数据，其余参考[腾讯地图文档](https://lbs.qq.com/webApi/javascriptGL/glDoc/docIndexMap)。

1. 通过组件无法得到 tilesloaded 回调，只能等待 init 的回调
