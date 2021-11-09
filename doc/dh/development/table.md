# 列表查询
> 如果涉及到选中数据，调用组件库中 [TableSelection](/mixins/tableSelection) 即可处理，这里只需要知道其中逻辑

### 数据加载
1. 第一次加载背景图文字应为"加载中"，加载完成后无文字文字为"暂无搜索结果"  
2. 通过条件搜索，失败后当前页数据保留  
3. 切换分页失败后，页码保持在当前页，数据保留，如：1 -> 2 失败，当前页码： 1，建议切换页码在数据返回成功后处理  
4. 查询条件变化，清空选中，切换页码为 1  
5. 操作数据成功后，清空选中，切换页码为 1  

### 选择
1. 切换任意非分页检索条件以及分页数量均清空当前选择内容，并将当前页码切换至 1  
2. 切换分页不清空任何选中项  
3. 全选当前页，如果有任意最少一条数据处于未选择的状态，则当前页被全选，再次点击，则当前页被清空  
4. 全选当前页的选中和清空，不影响其它分页的选中项  
5. 全选所有页，则所有页被选中，这时候我们需要记录以及传给后端的，都是未选中的内容  
6. 全选所有页之后任何情况下点击全选所有页，选中项都会被清空  
7. 全选所有页之后，有任意一条数据被取消选择，同时点击表格头部的 checkbox，当前页面的数据将会被选中  

### 文案
1. 页脚文案非特殊情况保持统一： 总xx条，每页显示xx条  

## 列表查询条件

### 展示
建议使用组件 [operation](/dh/operation)

## 列表开发示例
> 一个规范的列表包含组件
1. [DOperationBox](/dh/operation)，顶部搜索组件  
2. [STable](/md/stable)，扩展表格  
3. [TableSelection](/mixins/tableSelection)，列表基础操作  
4. [SearchFilter](/mixins/mix-search)，封装搜索方法  
5. [DMoreSearch](/dh/moreSearch)，更多搜索  
6. [DInputSearch](/dh/inputSearch)，搜索输入  
7. [DMixSearch](/dh/mixSearch)，混合搜索  
8. [DMixSelect](/dh/mixSelect)，混合下拉

### 一个完整的表格示例
```vue
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
          class="margin-right-20"
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
      filterSortConfig: { // 排序条件
        name: 1,
        type: 2,
        price: 3,
        number: 4,
        buyer: 5
      },
      selectConfig: { // 检索条件配置
        keywords: { // 搜索类型，通过关键词搜索
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
```






