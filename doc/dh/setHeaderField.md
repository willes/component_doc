<!--
 * @Description: 
 * @Author: larou
 * @Date: 2021-06-30 19:07:13
 * @LastEditTime: 2021-06-30 19:15:37
 * @LastEditors: larou
-->
# 列表表头设置组件（设置指定表头显示、设置列表列顺序)---可参考商品列表
> 基于antdesign 封装的列表表头设置组件
### Options
| 参数 | 说明 | 类型 | 可选值 | 默认值
| --- | --- | --- | --- | --- |
| fieldsList | 表头字段集合(必填) | Array	 | - | [] |
| show | 弹窗是否显示（必填） | Boolean | true/false | false |
| title | 弹窗标题 | String | - | '' |
| width | 弹窗宽度 | Number, String | - | 500 |
| defaultValue | 默认选中项 | Array | - | [] |
| isShowSortBox | 是否有排序功能 | Boolean | true/false | true |

### Emits
| 名称 | 返回值 | 说明 |
| --- | --- | --- |
| updateSelected | selected | 所有选中项 |