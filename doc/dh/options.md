<!--
 * @Description: 级别价、销售区域、商品品牌、商品分类等选择组件
 * @Author: larou
 * @Date: 2021-07-09 09:18:03
 * @LastEditTime: 2021-07-09 09:31:47
 * @LastEditors: larou
-->
# 商品相关属性选择组件：支持单选、多选、树形（单选、多选）
> 具体用法可参考商品列表(localhost:8080/productlist)
### Options
| 参数 | 说明 | 类型 | 可选值 | 默认值
| --- | --- | --- | --- | --- |
| show | 弹窗显示控制 | Boolean	| - | false |
| title | 弹窗标题 | String | - | '' |
| width | 弹窗看度 | Number | String | 500 |
| placeholder | 搜索提示文本 | String | - | '' |
| isBatch | 是否批量操作,若是批量操作,下方将显示追加和替换选项 | Boolean | - | false |
| selectValue | 选中的值/选中id,主要用于回显 | Object | - | {singleValue: null, multipleValue: []} |

### Emits
| 名称 | 返回值 | 说明 |
| --- | --- | --- |
| changeSelectValue | 选中项(一般包含选中项的id和数据对象) | 改变选中项 |
| updateData |  | 刷新可选项 |