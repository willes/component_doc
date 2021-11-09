# 查询条件 mixins
> 封装了基础的查询方法，列表查询方法设置为 <b style="color:red">loadTableData</b>
> 自定义的查询需要给组件传入 resultName，这个参数的值对应 selectConfig 的值

## 组件依赖
1. mixins: TableSelection  
2. components: OperationBox

## ref 设置
在 operationBox 中的组件以 resultName + 'O' 命名  
在 tableHeader 中的组件以 resultName + 'H' 命名  

## moreSearch
> 统一 ref 名称为 moreSearch，会传入 resultName 在内部调用设置的清空方法  
参考： [DMoreSearch](/dh/moreSearch)

```vue
<template>
  <d-more-search
      ref="moreSearch"
  ></d-more-search>
</template>

<script>
import { DMoreSearch } from '@/handday/components'
export default {
  name: 'SearchFilters',
  components: {
    DMoreSearch
  }
}
</script>
```

### data

| 名称 | 类型 | 说明 |
| --- | --- | --- |
| searchResult | Object | 搜索结果，用户列表查询的时候使用 |
| selectList | Object | 筛选条件集合 |
| selectConfig | Object | 筛选项配置 |
| filterSortConfig | Object | 排序字段对应的值，后端会返回正负值 |

## 参数配置
通过参数配置使的检索条件产生关联  

### selectConfig

| 值 | 类型 | 说明 |
| --- | --- | --- |
| cn | Array | 对应展示的检索值的名称 |
| en | Array | 对应检索条件的值，如 searchResult |
| link | String, Array | 展示的检索条件值的连接词 |
| linkMode | String | 连接词的模式，'before', 'after', 'single' |
| valueLink | String | 检索条件连接词，不受 linkMode 的控制。当返回值数量和设置的 en 数量不一致时，默认为 ',' 进行连接并插入到 en 的值里面 |
| dataKey | String | 展示值取值的的字段，针对返回的对象 |
| valueKey | String | 检索值取值的字段，整对返回的对象 |
| dataTarget | String | 在 dataKey 目标对象的内部取值的 key |
| valueTarget | String | 在 valueKey 目标对象的内部取值的 key |
| setText | Function | 设置 selectList 显示内容 |
| setValue | Function | 设置 searchResult 检索条件内容 |

```vue
<template>
  <div>
    linkMode 对应设置示例
    配置： cn: ['时间'],
          link: ['从', '至', '止'],  
          dataKey: 'value',  
          valueKey: 'data'
    返回值： {  
              data: [{ data: '1635696000000', value: '2020-02-02' }, { data: '1635696000000', value: '2020-02-04' }]  
            }  
    before: 时间 从 2020-02-02 至 2020-02-04 止  
    after: 时间 2020-02-02 从 至 2020-02-04 止
    single: 时间 2020-02-02从 或者 2020-02-04止
    
    如果设置了 setValue： () => {
      return '设置显示值'
    }
    不论 linkMode 设置任何值，显示内容皆为 时间 设置显示值
  </div>
</template>
<script>
export default {
  name: 'demo',
  data () {
    return {
      selectConfig: { // 全参数示例
        range: {
          cn: ['时间'], // 搜索条件显示的中文名称
          en: ['range1', 'range2'], // 这里的取值将对应 searchResult 中的值
          link: '至', // 连接词，如时间区间两个值中间的内容，可以传数组，即：link: ['从', '至', '止']，表现：从 2021-02-01 至 2021-02-02 止
          valueLink: '连接词', // 连接词，设置这个将影响 searchResult 中对应字段，如时间区间将会编程 searchResult.time = '2021-02-01连接词2021-02-02'
          dataKey: '',  // 取值的主键，如输入框等直接值，则保留为空，放置于顶部的显示值
          valueKey: '', // 取值的主键，放置于 searchResult 中的查询值
          dataTarget: '', // 真实的取值对象，返回的 data 为对象的时候通常不用设置
          valueTarget: '', // 真实的取值对象，返回的 data 为对象的时候通常不用设置
          linkMode: '', // 链接词模式，<span style="color:'red'">提供 'before'、 'after'、 'single' 三个类型</span>
          setText: (result) => { // 设置 selectList 中显示的值，因为有的显示组件内部无法实现，所以设置了这个方法，当设置了这个方法，显示将根据此方法返回显示
            return '设置显示值'
          },
          setValue: () => { // 设置检索条件中的值，无需做返回，当设定这个方法之后，你不用设置 cn、dataKey、dataTarget 等 selectList 相关的配置，因为都由这个方法做处理了  
            this.searchResult.range1 = '2020-01-01'
            this.searchResult.range2 = '2020-02-01'
          }
        }
      }
    }
  }
}
</script>
```

### filterSortConfig 排序
> 通过设置对应的 列数据用以实现排序功能，将会自动将 searchResult 中的 sort 字段填充对应的正负数  
> 如果 searchResult 中没有 sort，则将会查询 sortField 和 sortType 两个字段
```vue
<template>
  <a-table>
    <a-table-column key="number" title="数量" data-index="number"></a-table-column>
  </a-table>
</template>
<script>
export default {
  name: 'demo',
  data () {
    return {
      filterSortConfig: {
        number: 1 // 对应列查询条件的名称，这个名称和列 的 key 有关，与具体查询条件没有关系
      }
    }
  }
}
</script>
```

## 特殊处理

### beforeSearchChange
> 如果当前的检索没有支持对应的如展示方式等，可以使用这个方法拦截内部的处理。
> 可通过 beforeSearchChange 得到处理前的数据，并返回 false 终止原有方法，使用自己的处理方法  

### 无法统一处理的筛选条件
部分筛选条件没有封装，可以自行处理  
例如：  
```vue
onSearch (val) {
    this.searchResult.number = val
    // 插入数据
    this.selectList = {
        ...this.selectList,
        number: {
            label: '单号',
            value: val,
            key: 'number'
        }
    }
    // 重置表格头部的方法
    this.$refs[`numberH`] && this.$refs[`numberH`].resetData()
}
```

# 一个简单的使用案例
> 完整的配置内容请查看 [这里](/mixins/mix-search#selectConfig)
````vue
<template>
  <div class="table-demo">
    <d-operation-box
        v-model="selectList"
        @delete="searchResultDeal"
        @optionClick="operationClick"
    >
      <d-input-search
          placeholder="请输入积分兑换单号"
          @search="searchResultDeal"
          ref="keywordsO"
          resultName="keywords"
          allowClear
          class="margin-right-20"
      />
      <d-mix-search
          name="customer"
          @change="searchResultDeal"
          placeholder="客户"
          resultName="customer"
          ref="customerO"
          class="margin-right-20"
          :width="120"
      />
      <d-mix-select
          :type="8"
          @change="searchResultDeal"
          allowClear
          resultName="status"
          ref="statusO"
          :width="120"
      />
    </d-operation-box>
    <s-table
        class="a-table-common"
        :data-source="tableData"
        :rowSelection="rowSelection"
        :rowKey="selectionContent.primaryKey"
        :selectOnIndeterminate="selectOnIndeterminate"
        @change="tableChange"
        :pagination="pagination"
        :scroll="{ x: 1300, y: `calc(100vh - ${calcHeight}px)`, scrollToFirstRowOnChange: true }"
    >
      <a-table-column key="index">
        <template slot-scope="text, row, index">
          {{ (pagination.current - 1) * pagination.pageSize + index + 1 }}
        </template>
      </a-table-column>
      <a-table-column key="keywords" data-index="name" title="商品名称" :sorter="true">
        <d-filter-dropdown
            slot="filterDropdown"
            slot-scope="{ setSelectedKeys, selectedKeys, confirm, clearFilters, column }"
            name="input"
            ref="keywordsH"
            :data="{ setSelectedKeys, selectedKeys, confirm, clearFilters, column }"
            @confirm="searchResultDeal"
        />
      </a-table-column>
      <a-table-column key="type" title="类型" :sorter="true">
      </a-table-column>
      <a-table-column key="price" title="价格" :sorter="true"></a-table-column>
      <a-table-column key="number" title="数量" :sorter="true"></a-table-column>
      <a-table-column key="buyer" title="购买人" :filter-dropdown-visible.sync="filterDropdownVisible.buyer">
        <d-filter-dropdown
            slot="filterDropdown"
            slot-scope="{ setSelectedKeys, selectedKeys, confirm, clearFilters, column }"
            name="preparer"
            ref="buyerH"
            :data="{ setSelectedKeys, selectedKeys, confirm, clearFilters, column }"
            @confirm="searchResultDeal"
            :visible.sync="filterDropdownVisible.buyer"
        />
      </a-table-column>
      <a-table-column key="syncStatus" title="同步状态"></a-table-column>
      <a-table-column key="action" title="操作"></a-table-column>
    </s-table>
    <d-more-search
        :visible.sync="moreVisible"
        @confirm="moreSearchResultDeal"
        ref="moreSearch"
        :rulesList="['timeRange', 'amount']"
        :replaceFields="{
        timeRange: 'range'
      }"
    />
  </div>
</template>
<script>
import { DOperationBox, STable, TableSelection, SearchFilter, DMoreSearch, DMixSelect, DInputSearch, DMixSearch, DFilterDropdown } from '@handday/components'
export default {
  name: 'TableDemo',
  mixins: [TableSelection, SearchFilter],
  components: {
    DOperationBox,
    STable,
    DMoreSearch,
    DMixSelect,
    DInputSearch,
    DMixSearch,
    DFilterDropdown
  },
  provide () {
    return {
      selectionContent: this.selectionContent,
      pagination: this.pagination
    }
  },
  data () {
    return {
      moreVisible: false, // 更多搜索弹窗
      tableLoading: false, // 加载事件
      filterDropdownVisible: { // 设置漏斗条件和弹窗之间的切换
        buyer: false
      },
      searchResult: { // 检索条件
        keywords: undefined,
        customer: undefined,
        status: undefined,
        startTime: undefined,
        endTime: undefined
      },
      filterSortConfig: { // sort 排序条件，注意这里的 key 和 table 的 key 一致，它和检索条件中的条件没有关系，仅做关联
        name: 1,
        type: 2,
        price: 3,
        number: 4,
        buyer: 5
      },
      selectConfig: { // 检索条件配置
        keywords: { // 这里的 keywords 仅代表组件调用处理方法的时候，要找到 keywords 的配置项，实际的查询 key 在 en 中配置
          cn: ['商品名称'], // 设置检索条件显示内容的值
          en: ['keywords'], // 设置在 searchResult 中的值
          ref: '' // 设置指向的 ref 值，注意这个值和对应 ref 中添加 O 或者 H 没有关系
        },
        range: { // 在更多搜索里面，可以通过 replaceFields 将对应的组件名称更改为 range
          cn: ['时间'],
          en: ['startTime', 'endTime'], // 拆分为对应的值
          link: ['从', '至', '止'], // 设置为数组，为前中后分别添加内容
          dataKey: 'value',
          valueKey: 'data'
        },
        customer: {
          cn: ['购买人'],
          en: ['buyer'],
          dataKey: 'name', // 指定显示内容的指向
          valueKey: 'stafferId' // 指定 searchResult 中对应值的指向
        },
        status: {
          cn: ['状态'],
          en: ['status'],
          dataKey: 'name',
          valueKey: 'id',
          dataTarget: 'rows', // 指定取 dataKey 时的对象
          valueTarget: 'rows' // 指定取 valueKey 时的对象
        },
        amount: {
          cn: ['金额'],
          en: ['amount'],
          valueLink: ',' // 如果检索条件中为一个值，则设置链接词将多个值链接为一个，注意，这种情况下，en 只有一个值
        }
      }
    }
  },
  computed: {
    /**
     * 计算表格高度
     * 此方法适用于页面，具体数值请具体考虑
     * */
    calcHeight () {
      if (Object.keys(this.selectList).length) return 392
      else return 344
    }
  },
  created () {
    // 设置主键
    this.selectionContent.primaryKey = 'id'
  },
  methods: {
    // 使用了 TableSelection 固定的加载数据方法
    loadTableData (page = this.pagination) {
      // 模拟数据
      // 打开加载
      this.tableLoading = true
      for (let i = 0; i < page.pageSize; i++) {
        this.tableData.push({
          id: `${i}${page.current}${page.pageSize}`,
          key: i,
          name: new Date().getTime(),
          time: `amount${i}`,
          customer: `type${i}`,
          status: `amount2${i}`
        })
      }
      console.log(page)
      // 结果处理完成后需要更新选中结果
      this.dealSelectionCheckBox()
      // 结果处理完成后需要处理分页数据
      this.pagination.current = page.current
      this.pagination.total = 400
      // 最后关闭加载
      this.tableLoading = false
    },
    operationClick (result) {
      console.log(result)
      if (result.key === 'more') {
        // 这里会发起更多搜索按钮点击事件，这时候需要打开更多搜索
        this.moreVisible = true
      }
      if (result.key === 'clear') {
        this.handleSelectedClear()
      }
    }
  }
}
</script>
<style lang="less" scoped>
.margin-right-20 {
  margin-right:20px;
}
</style>


````







