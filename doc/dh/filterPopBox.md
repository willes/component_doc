<!--
 * @Description: 
 * @Author: larou
 * @Date: 2021-06-30 18:40:30
 * @LastEditTime: 2021-06-30 19:05:06
 * @LastEditors: larou
-->
# 列表筛选：支持搜索、单选、多选、数字范围、时间范围
> 基于antdesign 提供的组件再度封装的表格筛选组件---具体用法可参考商品列表
### Options
| 参数 | 说明 | 类型 | 可选值 | 默认值
| --- | --- | --- | --- | --- |
| column | 表格列数据对象 | Object	 | - | {} |
| placeholder | 顶部搜索placeholder | String | - | '请输入搜索关键字' |
| type | 区分类型 1单选 2多选 3树形结构 4关键字搜索 5数字范围 6时间范围 | Number | - | 1 |

### Emits
| 名称 | 返回值 | 说明 |
| --- | --- | --- |
| handleFilter | { selectedKeys, confirm, column, dataObj } selectedKeys, confirm, column为列表插槽传入子组件的几个参数，dataObj为筛选的数据对象。dataObj：{data 单选或多选的选中值, isFilter 是否有筛选值，比如单选多选，则返回的选择项；搜索返回的空对象；数字范围{minValue 最小值，maxValue 最大值}；时间范围返回{startValue 开始时间，endValue 结束时间}， text为列表上方添加的筛选项需要显示的文本（如：数字范围返回的是0~100）} | 执行筛选 |
| handleReset | { clearFilters, column } clearFilters, column均为列表插槽传入的子组件的参数 | 重置筛选 |