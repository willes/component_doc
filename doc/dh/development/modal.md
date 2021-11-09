# 基础弹窗

## 统一参数

| 名称 | 类型 | 默认 | 说明 |
| --- | --- | --- | --- |
| visible | Boolean | false | 显示弹窗 |
| title | String | '' | 标题 |
| multiple | Boolean | false | 是否多选 |
| replaceFields | Object | null | 替换值 |
| beforeClose | Function | null | 关闭前的回调 |
| rules | Object | null | 搜索条件 |
| cache | Boolean | false | 是否缓存 |
| defaultValue | Object, String | null | 回显值 |

## 统一回调
> 弹窗只能有 confirm 一个回调，统一从这个方法返回数据
```vue
this.$emit('confirm', {
  data: Any, // 任意，可以是选中的 主键，可以是行属性  
  rows: Array, // 必须是数组，且内部是对象，包含 id 和 name 值  
  ...othersData // 其它需要返回的数据，如 config 或者 对应的事件名称等等  
})
```

```vue
<template>
  <a-modal
      :maskClosable="false"
      :keyboard="false"
      :title="title"
      @ok="handleOk"
  ></a-modal>
</template>
<script>
export default {
  name: 'Modal',
  props: {
    visible: { // 显示隐藏
      type: Boolean,
      default: false
    },
    title: { // 标题
      type: String,
      default: '标题'
    },
    multiple: { // 多选单选
      type: Boolean,
      default: true
    },
    replaceFields: { // 替换值
      type: Object,
      default: () => {
        return {
          key: 'id'
        }
      }
    },
    beforeClose: { // 关闭前的回调
      type: Function,
      default: undefined
    },
    rules: { // 搜索条件
      type: Object,
      default: () => {}
    }
  },
  computed: {
    modalVisible: { // 弹窗属性
      set (visible) {
        this.$emit('update:visible', visible)
      },
      get () {
        return this.value
      }
    },
    baseReplaceFields () { // 新的 key
      return {
        key: 'id',
        ...this.replaceFields
      }
    }
  },
  methods: {
    handleOk () {
      if (this.beforeClose) {
        // 如果要自己
        this.beforeClose({
          data: '返回的数据',
          rows: ['返回的行数据']
        }, () => { // 关闭事件
          this.modalVisible = false
        })
      } else {
        this.$emit('confirm', {
          data: '返回的数据',
          rows: ['返回的行数据']
        })
      }
    }
  }
}
</script>
```

# 表格弹窗
> 表格弹窗大体上一致，多了几个通用方法
```vue
<template>
  <a-modal
      :maskClosable="false"
      :keyboard="false"
      :title="title"
      @ok="handleOk"
  >
    <s-table
        :data-source="tableData"
        :rowSelection="rowSelection"
        :rowKey="selectionContent.primaryKey"
        :selectOnIndeterminate="selectOnIndeterminate"
        @change="tableChange"
        :pagination="pagination"
    ></s-table>
  </a-modal>
</template>
<script>
import { STable, TableSelection } from '@handday/components'
export default {
  name: 'Modal',
  mixins: [TableSelection],
  props: {
    visible: { // 显示隐藏
      type: Boolean,
      default: false
    },
    title: { // 标题
      type: String,
      default: '标题'
    },
    multiple: { // 多选单选
      type: Boolean,
      default: true
    },
    replaceFields: { // 替换值
      type: Object,
      default: () => {
        return {
          key: 'id'
        }
      }
    },
    beforeClose: { // 关闭前的回调
      type: Function,
      default: undefined
    },
    rules: { // 搜索条件
      type: Object,
      default: () => {}
    },
    cache: { // 是否缓存
      type: Boolean,
      default: false
    },
    defaultValue: {
      type: [Object, Array],
      default: null
    }
  },
  provide() { // 使用了
    return {
      selectionContent: undefined,
      pagination: undefined
    }
  },
  computed: {
    modalVisible: { // 弹窗属性
      set (visible) {
        this.$emit('update:visible', visible)
      },
      get () {
        return this.visible
      }
    },
    baseReplaceFields () { // 新的 key
      return {
        key: 'id',
        ...this.replaceFields
      }
    }
  },
  data () {
    return {
      tableData: [],
      tableLoading: false,
      searchResult: {
        keywords: ''
      },
      resultMap: {}, // 查询条件字典
      disabled: {
        warehouse: false
      }
    }
  },
  watch: {
    visible (n) {
      if (n) {
        // 设置主键
        this.selectionContent.primaryKey = 'id'
        if (!this.cache) {
          // 如果不设置缓存，清除一下配置
          this.reset().dealResult().loadTableData()
        }
      }
    }
  },
  methods: {
    /**
     * 加载方法
     * */
    loadTableData () {
      // 假设这里有个请求列表的 promise 方法
      this.tableLoading = true
      request({
        ...this.searchResult,
        pageNum: page.current,
        pageSize: page.pageSize
      }).then(res => {
        this.tableLoading = false
        if (res.data) {
          this.tableData = res.data.list
          // 结果处理完成后需要更新选中结果
          this.dealSelectionCheckBox()
          // 注意切换页码的时机
          this.pagination.total = res.data.total
          this.pagination.current = res.data.pageNum
        }
      }).catch(e => {
        this.tableLoading = false
      })
    },
    /**
     * 行点击
     * */
    rowClick (record) {
      if (this.multiple) {
        if (this.selectionContent.selectedRowKeys.includes(record[this.baseReplaceFields.key])) {
          this.selectionContent.selectedRowKeys = this.selectionContent.selectedRowKeys.filter(item => item !== record[this.baseReplaceFields.key])
          delete this.selectionContent.selectedRows[record[this.baseReplaceFields.key]]
        } else {
          this.selectionContent.selectedRowKeys.push(record[this.baseReplaceFields.key])
          this.selectionContent.selectedRows[record[this.baseReplaceFields.key]] = record
        }
      } else {
        this.selectionContent.selectedRowKeys = [record[this.baseReplaceFields.key]]
        this.selectionContent.selectedRows = {
          [record[this.baseReplaceFields.key]]: record
        }
      }
    },
    /**
     * 确定事件
     * */
    handleOk () {
      if (this.beforeClose) {
        // 如果要自己
        this.beforeClose({
          data: '返回的数据',
          rows: ['返回的行数据']
        }, () => { // 关闭事件
          this.modalVisible = false
        })
      } else {
        this.$emit('confirm', {
          data: '返回的数据',
          rows: ['返回的行数据']
        })
      }
    },
    /**
     * 处理传入的参数
     * */
    dealResult () {
      // 处理查询条件
      if (this.rules) {
        for (const key in this.rules) {
          if (this.rules.hasOwnProperty(key)) {
            const data = this.rules[key]
            const type = typeof data
            if (type === 'object') {
              // 如果数据是个对象，需要处理对应的数据到对应的值
              this.$refs[this.resultMap[key].ref].setData(data)
              this.searchResult[this.resultMap[key].key] = data.id
              this.disabled[key] = !!data.disabled
              console.log(data)
            } else {
              this.searchResult[this.resultMap[key]] = data
            }
          }
        }
      }
      // 设置默认值
      if (this.defaultValue) {
        this.selectionContent.selectedRowKeys = []
        if (this.defaultValue.constructor === Array) {
          // 如果是数组，要进行处理
          this.defaultValue.forEach(item => {
            this.selectionContent.selectedRowKeys.push(item[this.baseReplaceFields.key])
            this.selectionContent.selectedRows = {
              ...this.selectionContent.selectedRows,
              [item[this.baseReplaceFields.key]]: item
            }
          })
        } else {
          this.selectionContent.selectedRowKeys = [this.defaultValue[this.baseReplaceFields.key]]
          this.selectionContent.selectedRows = {
            [this.defaultValue[this.baseReplaceFields.key]]: this.defaultValue
          }
        }
      }
    },
    reset () {
      this.tableData = []
      this.pagination.current = 1
      this.pagination.total = 0
      return this
    }
  },
  components: {
    STable
  }
}
</script>
```

