# 选择商品

## 使用

访问这里：<a href="/#/product/list" target="_blank">选择商品</a>查看示例。

```vue
<template>
  <div>
    <a-button @click="visible = true">显示弹窗</a-button>
    <d-select-product
      :rules="{
        type: 4,
      }"
      :defaultValue="[
        { id: 1, name: '商品1' },
        { id: 2, name: '商品2' },
      ]"
      :visible.sync="visible"
      @confirm="confirmHandle"
      :replaceFields="{ key: 'spuId' }"
    />
  </div>
</template>

<script>
import { DSelectProduct } from "@handday/components";
export default {
  name: "AddProduct",
  components: { DSelectProduct },
  data() {
    return {
      visible: false,
    };
  },
  mounted() {
    this.visible = true;
    console.log(SelectProduct);
  },
  methods: {
    confirmHandle(result) {
      console.log(result);
    },
  },
};
</script>
```

### Attributes

| 名称           | 类型    | 默认                                                                                   | 说明                            |
| -------------- | ------- | -------------------------------------------------------------------------------------- | ------------------------------- |
| visible        | Boolean | false                                                                                  | 显示弹窗                        |
| replaceFields  | Object  | { key: 'id' }                                                                          | 替换值                          |
| title          | String  | -                                                                                      | 标题                            |
| cache          | Boolean | -                                                                                      | 是否缓存                        |
| multiple       | Boolean | -                                                                                      | 是否多选                        |
| rules          | Object  | -                                                                                      | 查询条件                        |
| origin         | String  | -                                                                                      | 来源                            |
| sortList       | Array   | -                                                                                      | 列排序字段                      |
| defaultValue   | Array   | -                                                                                      | 列排序字段                      |
| mode           | String  | 'default'                                                                              | 查询模式，'default','warehouse' |
| selectionLimit | Number  | 100                                                                                    | 限制选择条数                    |
| displayItems   | Array   | ['classify', 'warehouse', 'brand', 'shelves', 'inventory', 'salesPromotion', 'bought'] | 需要显示的检索条件              |

### rules

> 也可以传对象，针对内部某些特殊查询条件，如包含了 d-mix-search 的查询，则需要传递对象用于回显

```vue
<template>
  <div>
    <a-button @click="visible = true">显示弹窗</a-button>
    <d-select-product
      :rules="{
        type: 4,
        isShowSku: true, // 显示 sku
        keywords: undefined, // 关键词
        brandId: undefined, // 品牌
        saleStatus: 1, // 上下架
        warehouse: {
          id: 1,
          name: '仓库1',
          disabled: true, // 可以设置禁用以禁止用户修改
        },
      }"
      :defaultValue="[
        { id: 1, name: '商品1' },
        { id: 2, name: '商品2' },
      ]"
      :visible.sync="visible"
      @confirm="confirmHandle"
      :replaceFields="{ key: 'spuId' }"
    />
  </div>
</template>
```

### displayItems

| 名称           | 说明       |
| -------------- | ---------- |
| classify       | 侧边分类   |
| warehouse      | 仓库       |
| brand          | 品牌       |
| shelves        | 上下架     |
| inventory      | 库存大于 0 |
| salesPromotion | 促销商品   |
| bought         | 买过的商品 |

#### type

1. 通用基本信息(名称、图片、编码、规格|规格数量)
2. 新增订货单选择商品
3. 商品推荐 商品列表
4. 采购和其他出入库单据选择商品
5. CRM 选择产品
6. 盘点选择商品（带单位换算）
7. 特价促销选择商品
8. 商城装修选择商品
9. 新增佣金规则选择商品
10. 销售退货单选择商品
11. 同价调拨单

### Events

| 名称    | 返回值 | 说明       |
| ------- | ------ | ---------- |
| confirm | ''     | 成功的回调 |

#### 字段对应

```vue
1、通用：商品编号、商品条码、图片、商品名称、商品规格；
2、采购入库单：仓库、库存数量、成本均价、最近进价；
3、采购退货单：仓库、库存数量、成本均价；
4、其它入库单/其它出库单：仓库、库存数量、成本均价；
5、销售订单/销售出库单/销售退货单：仓库、库存数量、单价（根据客户价格体系规则获取）；
6、营销：只有通用字段； 7、列表筛选：只有通用字段；
8、商品推荐（关联商品）：只有通用字段； 9、CRM汇报商品组件：单价；
10、库存盘点：库存数量、成本均价； 11、商城装修：只有通用字段；
12：销售范围（按商品设置）：只有通用字段； 说明：
1、商品名称：销售订单、销售出库单、营销（除积分、分销外），需要带上营销活动标签；
2、商品规格：场景不同可能是具体规格值，也可能是规格数量集合；
3、筛选条件请根据具体场景定义；
```
