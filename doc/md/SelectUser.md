# 选择人员

# 功能未完成，但是方法可引用。

## 使用

访问<a href="/#/selectUser" target="_blank">这里</a>查看示例。

### Attributes

| 参数 | 说明 | 类型 | 可选值 | 默认值
| --- | --- | --- | --- | --- |
| value/v-model | 选中数据 | Array | - | [] |
| visible | 显示隐藏 | Boolean | true/false | false |
| dataSource | 树形数据 | Array | - | [] |
| title | 标题 | String | - | - |
| loadData | 加载数据的方法，是一个 Promise，当这个参数有值的时候，dataSource 将不会生效 | Function | - | null |
| dataType | 选择数据类型 | String | mix/user/dept | mix |
| multiple | 是否多选 | Boolean | true/false | false |
| search | 搜索方式，传递除 search 以外的值将会调用 loadData | String | 'search'/'any' | 'search |
| treeExtAttrs | 参考 tree 组件的 treeExtAttrs | Object | - | - |
| beforeSelect | 校验当前选项是否可选 | Function | - | - |
| beforeClose | 关闭前的回调 | Function | result, close | - |
| ok | 关闭窗口 | Function | result | - |
| changeBtn | 替换和追加的按钮选项 | Boolean | - | false |