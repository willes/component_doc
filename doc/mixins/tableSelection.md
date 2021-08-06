# 表格扩展 mixins

使用示例查看 <a href="/#/table/checkbox">这里</a>

<font style="color:red;font-size:24px;">请注意！请注意！请注意！此文件使用前请注意阅读以下内容！！！</font>  
<font style="color:red;font-size:24px;">请注意！请注意！请注意！此文件使用前请注意阅读以下内容！！！</font>  
<font style="color:red;font-size:24px;">请注意！请注意！请注意！此文件使用前请注意阅读以下内容！！！</font>

> 使用注意：因为使用 mixins 会导致代码增加一定的阅读障碍，所以请一定要仔细阅读此说明。

### 关于 checkbox 和索引的顺序问题

1. 请注意项目下时候有安装补丁，如果有，即在项目下有 patches 文件夹的情况下重新安装 ant-design-vue
2. <font style="color:red;font-size:20px;">特别注意：</font>如果表格头部采用 columns 数组的方式设定，在索引项中增加 before 为 true 则可以实现索引在第一行，如果是
   a-table-column 的形式，则将 key 设定为 index 即可。

### 参数特别说明

1. **tableData** Array 使用此 mixins 必须将表格的 dataSource 设定为此值。
2. **dealSelectionCheckBox** Function 请在加载 tableData <Array> 的数据之后使用。
3. **selectionContent.primaryKey** String 这个值必须设置为当前调用也的数据的主键，默认值为 key。

### data

| 名称 | 类型 | 说明 |
| --- | --- | --- |
| tableData | Array | 表格数据，固定项，请将表格的值赋值到这里 |
| selectionContent | Object | 数据集合 |
| pagination | Object | 分页基础配置，参数即分页的参数，可通过覆盖或 setPagination 传入对象覆盖指定字段 |

#### selectionContent

| 名称 | 类型 | 说明 |
| --- | --- | --- |
| selectedRowKeys | Array | 选中的项的集合 |
| selectedRows | Object | 选中的行的集合 |
| noSelectedRowKeys | Array | 未选中的行 key |
| noSelectedRows | Object | 未选中的行 |
| notSelectedList | Array | 未选中项的集合 |
| selectType | String | 这个有两个固定值 currentPage 和 allPage，默认 currentPage，无需特意指定 |
| rowSelection | Object | 可配置项为 Table 原生的 rowSelection 项，将会被注入到 computed 中的 rowSelection 中，请注意查看已设置的 rowSelection 项，防止代码覆盖 |
| primaryKey | String | <font style="color:red;font-weight:bold;">此项默认值为 key，请注意自身获取数据的主键，否则无法找到主键将会报错。</font> |

### computed

| 名称 | 类型 | 说明 |
| --- | --- | --- |
| rowSelection | Object | rowSelection |

> 此选项仅说明已经被使用的参数，防止被误覆盖，未被使用的将不会被说明，

#### rowSelection

| 名称 | 类型 | 说明 |
| --- | --- | --- |
| selectedRowKeys | Array | 选中项的主键值，与 selectionContent.selectedRowKeys 将始终保持一致 |
| onChange | Function | 选中项发生变化的时候 |
| hideDefaultSelections | Boolean | 是否显示头部默认选项 |
| selections | Array | 头部选项的值 |

### methods

| 名称  | 说明 |
| --- | --- |
| setPagination | 修改 pagination 的数据，接收一个 Object 对象 |
| setRowSelection | 为 rowSelection 添加额外的方法，也可直接通过给 selectionContent.rowSelection 赋值操作 |
| dealSelectionCheckBox | 处理选中项 <font style="color:red;">注意：这个方法在获取列表数据后调用，用于处理选中项或未选中项</font> |
| handleSelectedClear | 清空选中项 |
| getRowData | 获取选中行或者未选中行，默认获取选中行， 传 true 为未选中，68版本暂时没有这个功能 |

### 使用示例（仔细阅读这里）
> 这里展示的都是必须设置的选项  
> 在数据加载完成后需要调用 this.dealSelectionCheckBox()  
> 在 mounted 里面设置  this.selectionContent.primaryKey = 'spuId'  
```vue
<template>
   <!-- 这里展示了必须设定的项 -->
   <a-table
           :data-source="tableData"
           :rowSelection="rowSelection"
           :rowKey="selectionContent.primaryKey"
           :selectOnIndeterminate="selectOnIndeterminate"
   ></a-table>
</template>
<script>
// 引入并使用 mixins
import { TableSelection } from '@handday/components'

export default {
  name: 'demo',
   mixins: [TableSelection],
   data () {
    return {}
   },
   created () {
    // 设置数据主键，即你当前表格数据的主键
    this.selectionContent.primaryKey = ''
    this.setPagination({
       // 这里设置需要重新定义的 pagination 
    })
    this.setRowSelection({
       // 这里设置需要的表格 rowSelection 属性
    })
    // 接下来设置你自己的方法，如：
      this.loadTableData()
   },
   mounted () {
   },
   methods: {
    loadTableData () {
      加载方法().then(res => {
        // 最后调用
        this.dealSelectionCheckBox()
      })
    }
   }
}
</script>
```

### 源码

> 为了保证开发的效率，以下是源码内容

```vue
export default {
  data() {
    return {
      tableData: [],
      selectionContent: {
        selectedRowKeys: [], // 选中的项
        selectedRows: {}, // 选中的对象集合
        noSelectedRowKeys: [], // 未选中的项
        noSelectedRows: {}, // 未选中的对象集合
        selectType: '', // 选择类型，当前页：currentPage  所有页：allPage
        rowSelection: {}, // 原生的 rowSelection 项
        primaryKey: 'skuId' // 主键值
      },
      pagination: {
        total: 0,
        pageSize: 30,
        current: 1,
        showQuickJumper: true,
        showSizeChanger: true,
        pageSizeOptions: ['30', '50', '100'],
        showTotal: total => `总${total}条`
      }
    }
  },
  computed: {
    selectOnIndeterminate () {
      // 全选页的时候使用
      return this.selectionContent.selectType === 'allPage' && !!this.selectionContent.noSelectedRowKeys.length
    },
    rowSelection () {
      const that = this
      return {
        ...that.selectionContent.rowSelection,
        selectedRowKeys: that.selectionContent.selectedRowKeys,
        onChange: (selectedRowKeys, selectedRows) => {
          console.log(selectedRowKeys, selectedRows, 'change')
          const { primaryKey } = that.selectionContent
          that.selectionContent.selectedRowKeys = selectedRowKeys
          // 如果是所有的，需要操作未选中项的内容
          const obj = that.selectionContent.noSelectedRows
          const selectRow = that.selectionContent.selectedRows
          let needUpdate = false // 判断是否需要更新未选中的数据
          that.tableData.forEach(item => {
            if (!selectedRowKeys.includes(item[primaryKey])) {
              if (that.selectionContent.selectType === 'allPage') {
                needUpdate = true
                obj[item[primaryKey]] = item
              }
              delete selectRow[item[primaryKey]]
            } else {
              if (that.selectionContent.selectType === 'allPage') {
                needUpdate = true
                delete obj[item[primaryKey]]
              }
              selectRow[item[primaryKey]] = item
            }
          })
          that.selectionContent.noSelectedRows = obj
          that.selectionContent.selectedRows = selectRow
          if (that.selectionContent.selectType === 'allPage' && needUpdate) {
            that.generateNoSelectKey()
          }
        },
        hideDefaultSelections: true,
        selections: [
          {
            key: 'currentPage',
            text: '当前页',
            onSelect: select => {
              console.log(select, 'currentPage')
              if (that.selectionContent.selectType === 'allPage') {
                // 如果之前是所有页，则清空为选项和已选数组对象
               that.handleSelectedClear()
              }
              // 设置为当前页
              that.selectionContent.selectType = 'currentPage'
              const { primaryKey } = that.selectionContent
              // 如果已经是当前页，需要取消全选
              // 判断当前页是否处于半选状态
              let isSelected = []
              let noSelected = []
              that.tableData.forEach(item => {
                if (!that.selectionContent.selectedRowKeys.includes(item[primaryKey])) {
                  noSelected.push(item)
                } else {
                  isSelected.push(item)
                }
              })
              let obj = this.selectionContent.selectedRows
              if ((isSelected.length && noSelected.length) || !isSelected.length) {
                // 如果既有选中的，也有未选中的，则设置为全选
                // 如果没有选中项，则设置为全选
                noSelected.forEach(item => {
                  obj[item[primaryKey]] = item
                })
              }
              if (!noSelected.length) {
                // 选中项，如果没有未选中的，则删除
                let obj = that.selectionContent.selectedRows
                isSelected.forEach(item => {
                  delete obj[item[primaryKey]]
                })
              }
              that.selectionContent.selectedRows = obj
              // 生成选中数组
              that.generateKey()
            }
          },
          {
            key: 'allPage',
            text: '所有页',
            onSelect: select => {
              console.log(select, 'all-data')
              if (that.selectionContent.selectType === 'allPage' && (this.selectionContent.selectedRowKeys.length || this.selectionContent.noSelectedRowKeys.length)) {
                // 如果之前是所有页，则清空为选项和已选数组对象
                that.handleSelectedClear()
              } else {
                that.selectionContent.selectType = 'allPage'
                const { primaryKey } = that.selectionContent
                that.tableData.forEach(item => {
                  that.selectionContent.selectedRows[item[primaryKey]] = item
                })
              }
              // 生成选中数组
              that.generateKey()
            }
          }
        ]
      }
    }
  },
  methods: {
    /**
     * 处理分页
     * */
    setPagination (obj) {
      this.pagination = {
        total: 0,
        pageSize: 10,
        current: 1,
        showQuickJumper: true,
        showSizeChanger: true,
        pageSizeOptions: ['5', '10', '20'],
        showTotal: total => `总${total}条`,
        ...obj
      }
    },
    /**
     * 为 selection 添加额外的方法
     * */
    setRowSelection (row) {
      this.selectionContent.rowSelection = row
    },
    /**
     * 处理选中项
     * */
    dealSelectionCheckBox () {
      console.log('dealSelectionCheckBox', this.selectionContent.selectType )
      if (this.selectionContent.selectType === 'allPage') {
        // 所有页时，切换分页会验证选中状态
        this.tableData.forEach(item => {
          try {
            if (!this.selectionContent.selectedRows[item[this.selectionContent.primaryKey]] && !this.selectionContent.noSelectedRows[item[this.selectionContent.primaryKey]]) {
              this.selectionContent.selectedRows[item[this.selectionContent.primaryKey]] = item
            }
          } catch (e) {
            console.log(e)
          }
        })
        this.generateKey()
      }
    },
    /**
     * 生成选中的 key 数组
     * */
    generateKey () {
      const arr = []
      for (const key in this.selectionContent.selectedRows) {
        if (this.selectionContent.selectedRows.hasOwnProperty(key)) {
          arr.push(key)
        }
      }
      this.selectionContent.selectedRowKeys = arr
    },
    /**
     * 生成未选中的 key
     * */
    generateNoSelectKey () {
      const arr = []
      for (const key in this.selectionContent.noSelectedRows) {
        if (this.selectionContent.noSelectedRows.hasOwnProperty(key)) {
          arr.push(key)
        }
      }
      this.selectionContent.noSelectedRowKeys = arr
    },
    /**
     * 清空选中项
     * */
    handleSelectedClear () {
      this.selectionContent.selectedRowKeys = []
      this.selectionContent.selectedRows = {}
      this.selectionContent.noSelectedRowKeys = []
      this.selectionContent.noSelectedRows = []
    },
    getRowData (status) {
      // 默认获取选中行的数据
      const arr = []
      if (status) {
        for (const key in this.selectionContent.noSelectedRows) {
          if (this.selectionContent.noSelectedRows.hasOwnProperty(key)) {
            arr.push(this.selectionContent.noSelectedRows[key])
          }
        }
      } else {
        for (const key in this.selectionContent.selectedRows) {
          if (this.selectionContent.selectedRows.hasOwnProperty(key)) {
            arr.push(this.selectionContent.selectedRows[key])
          }
        }
      }
      return arr
   }
  }
}

```
