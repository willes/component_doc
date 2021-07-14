<!--
 * @Description: 
 * @Author: wuyao
 * @Date: 2021-06-28 18:50:09
 * @LastEditTime: 2021-07-09 09:15:48
 * @LastEditors: larou
-->
# 单选/多选树形结构
> 基于antdesign 封装的单选/多选树形结构异步加载树形结构 
### Options
| 参数 | 说明 | 类型 | 可选值 | 默认值
| --- | --- | --- | --- | --- |
| treeData | 树形结构所需的数据  | array	 | - | [] |
| selectType	| 单选多选类型 | number | 1:单选 2:多选 | 1 |
| replaceFields	|  替换 treeNode 中 title,key,children 字段为 treeData 中对应的字段 | object | - | { children: 'children', title: 'title', key: 'key', linkCode: 'pathCode' } |
| isMutexCheck	| 多选是否父级与子级互斥（子级选中了取消父级，父级选中后取消子级） | boolean | - | false |
| defaultRadioKey	| 单选默认值 | string | - | - |
| defaultCheckKey	| 多选默认值 | array  | - | [] |
| keyword	| 搜索关键字 | string  | - | '' |

### Emits
| 名称 | 返回值 | 说明 |
| --- | --- | --- |
| handleSelect | 当前选中的id，选中项当前项整体数据 | 单选选中值回调 |
| handleCheck | 当前选中的id集合，选中项当前项整体数据 | 多选选中值回调 |

### Inject
| 名称 | 返回值 | 说明 |
| --- | --- | --- |
| onLoadData | 当前点击节点 | 异步加载数据回调(通过provide/inject处理该事件，使用该组件时，需使用provide接收该事件，具体可参照商品列表页面(localhost:8080/productlist)) |
