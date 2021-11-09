<!--
 * @Description: 
 * @Author: blackcai
 * @Date: 2021-06-10 10:36:47
 * @LastEditTime: 2021-06-10 10:37:18
 * @LastEditors: blackcai
-->
# 组件库说明文档
> 对应通用型组件的说明

**每加一个说明文档，请在 _sidebar 下增加一个路由，注意格式和空行**

## 开发注意事项
1. 第一层 dom className 应该为 handday + 组件名称
2. 样式标签禁止加 scoped， 且所有样式应该包含在 handday + 组件名称 这个样式类之中

## 基础结构

> 请注意增加对应的使用示例 

````
# 表格拖拽
这里是简介

## 使用
这里是基础使用示例
### Attributes
| 参数 | 说明 | 类型 | 可选值 | 默认值
| --- | --- | --- | --- | --- |
| src | 图片的地址  | String | - | - |
| fit	| 确定图片如何适应容器框 | String | fill / contain / cover / <br> none / scale-down | - |
| alt	| 原生 alt| String | - | - |
| lazy	| 是否开启懒加载	| boolean | - | false |
| z-index	| 设置图片预览的 z-index		| Number | - | 2000 |


### Events
| 事件名称 | 说明 | 回调参数 |
| --- | --- | --- |
| load | 图片加载成功触发	 | (e: Event) |
| error	| 加载失败的内容 | (e: Error) |

### Slots
| 名称 | 说明 |
| --- | --- |
| loading | 图片未加载的占位内容 |
| error	| 加载失败的内容 |
| none	| 图片地址为空的内容 |

