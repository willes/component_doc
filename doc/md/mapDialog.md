# 地图弹窗

> 一个封装好的地图弹窗组件

### 使用

```vue
    <map-dialog
      ref="mapDialog"
      :visible.sync="mapVisible"
      title="设置地址"
      @ok="handleMapOk"
      :inputValue="autoValue"
    ></map-dialog>
```

###
| 名称 | 类型 | 默认 | 说明 |
| --- | --- | --- | --- |
| visible | Boolean | - | 显示与隐藏 |
| title | String | '地址定位' | 标题 |
| inputValue | String | '地址定位' | 内部输入框的内容 |

### Events
| 名称 | 返回值 | 说明 |
| --- | --- | --- |
| ok | Object | 返回选定的地址数据 |
