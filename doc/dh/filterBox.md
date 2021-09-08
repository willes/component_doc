# 混合下拉框

## 使用

```vue
<template>
  <div class="">
    <a-table>
      <a-table-column
          title="筛选"
          :filter-dropdown-visible.sync="tagsFilterDropdownVisible"
      >
        <FilterDropdown
            slot="filterDropdown"
            slot-scope="{ setSelectedKeys, selectedKeys, confirm, clearFilters, column }"
            :data="{ setSelectedKeys, selectedKeys, confirm, clearFilters, column }"
            @change="changeHandle"
            @confirm="changeHandle"
            name="amount"
            :visible.sync="tagsFilterDropdownVisible"
            :config="{ placeholder1: '请输入金额' }"
        />
      </a-table-column>
    </a-table>
  </div>
</template>

<script>
import FilterDropdown from '@/components/FilterDropdown'
export default {
  name: 'mixSelect',
  components: {
    FilterDropdown
  },
  data () {
    return {
      tagsFilterDropdownVisible: false
    }
  },
  methods: {
    changeHandle (value, column, data) {
      console.log(value, column, data)
    }
  }
}
</script>
```

### Attributes
| 名称 | 类型 | 默认 | 说明 |
| --- | --- | --- | --- |
| value/v-model | 根据实际情况而定 | - | 暂未实现，组件数据，通常不应该使用此值 |
| name | String | - | 组件名称 |
| config | Object | - | 基础配置项 |
| visible | Boolean | false | 指定情况下需要设置，参考 ** visible ** 特别说明，参考，与 :filter-dropdown-visible.sync 一致 |
| list | Array | - | 传入自定义筛选列表 |

#### name
| 值 | 说明 |
| --- | --- |
| input | 输入框 |
| range | 时间区间 |
| amount | 金额 |
| payment | 支付状态 |
| bill | 单据状态 |
| inStock | 入库状态 |
| outStock | 出库状态 |
| sales | 上下架状态 |
| handler | 经手人 |
| prepared | 制单人 |
| stockSync | 库存状态 |
| paymentMode | 付款方式 |
| exchangePayment | 应收应付 |
| supplier | 供货商 |
| customer | 客户 |
| unit | 商品单位 |
| brand | 商品品牌 |
| tag | 商品标签 |

#### config
| 值 | 说明 |
| --- | --- |
| placeholder | 搜索栏输入框 |
| placeholder1 | 区间1 |
| placeholder2 | 区间2 |
| groupType | 还未实现，强制修改选择类型，true 单选，false 多选，默认根据已有业务设置 |

### visible 特别说明
当筛选条件需要调起弹窗的时候，需要给对应的列设置这个值

### Events
| 名称 | 返回值 | 说明 |
| --- | --- | --- |
| change | value, name, data | 选择后回调 |

### methods
| 名称 | 返回值 | 说明 |
| --- | --- | --- |
| resetData |  | 重置数据 |