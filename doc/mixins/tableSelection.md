# 表格扩展 mixins

使用示例查看 <a href="/#/table/checkbox">这里</a>

<font style="color:red;font-size:24px;">请注意！请注意！请注意！此文件使用前请注意阅读以下内容！！！</font>  
<font style="color:red;font-size:24px;">请注意！请注意！请注意！此文件使用前请注意阅读以下内容！！！</font>  
<font style="color:red;font-size:24px;">请注意！请注意！请注意！此文件使用前请注意阅读以下内容！！！</font>  

> 使用注意：因为使用 mixins 会导致代码增加一定的阅读障碍，所以请一定要仔细阅读此说明。

### 关于 checkbox 和索引的顺序问题
1. 请注意项目下时候有安装补丁，如果有，即在项目下有 patches 文件夹的情况下重新安装 ant-design-vue
2. <font style="color:red;font-size:20px;">特别注意：</font>如果表格头部采用 columns 数组的方式设定，在索引项中增加 before 为 true 则可以实现索引在第一行，如果是 a-table-column 的形式，则将 key 设定为 index 即可。

### 参数特别说明
1. **tableData** Array 使用此 mixins 必须将表格的 dataSource 设定为此值。
2. **loadTableData** Function 加载数据的方法，需要调用者自己实现，参数为 page 对象和是否是页码发生变化，如果没有使用 handleTablePageChange <Function> 方法，则无需搭理这一条。
3. **dealSelectionCheckBox** Function 请在加载 tableData <Array> 的数据之后使用。
4. **selectionContent.primaryKey** String 这个值必须设置为当前调用也的数据的主键，默认值为 key。
   
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
| handleTablePageChange | 分页发生变化时使用，<font style="color:red;">注意：这里将会调用一个名为 loadTableData 的方法。</font> |
| setPagination | 修改 pagination 的数据，接收一个 Object 对象 |
| setRowSelection | 为 rowSelection 添加额外的方法，也可直接通过给 selectionContent.rowSelection 赋值操作 |
| dealSelectionCheckBox | 处理选中项 <font style="color:red;">注意：这个方法在获取列表数据后调用，用于处理选中项或未选中项</font> |

### 源码
> 为了保证开发的效率，以下是源码内容

```vue
export default {
  data() {
    return {
      tableData: [],
      selectionContent: {
        selectedRowKeys: [], // 选中的项
        notSelectedList: [], // 未选中的项
        selectType: 'currentPage', // 选择类型，当前页：currentPage  所有页：allPage
        rowSelection: {}, // 原生的 rowSelection 项
        primaryKey: 'key' // 主键值
      },
      pagination: {
        total: 0,
        pageSize: 5,
        current: 1,
        showQuickJumper: true,
        showSizeChanger: true,
        pageSizeOptions: ['5', '10', '20'],
        showTotal: total => `总${total}条`
      }
    }
  },
  computed: {
    rowSelection () {
      const that = this
      return {
        ...this.selectionContent.rowSelection,
        selectedRowKeys: this.selectionContent.selectedRowKeys,
        onChange: (selectedRowKeys, selectedRows) => {
          console.log(selectedRowKeys, selectedRows, 'change')
          that.selectionContent.selectedRowKeys = selectedRowKeys
          if (this.selectionContent.selectType === 'allPage') {
            // 如果是所有的，需要记录未被选中的项
            this.tableData.forEach(item => {
              if (!selectedRowKeys.includes(item.key) && !that.selectionContent.notSelectedList.includes(item.key)) {
                that.selectionContent.notSelectedList.push(item.key)
              }
            })
          }
        },
        hideDefaultSelections: true,
        selections: [
          {
            key: 'currentPage',
            text: '当前页',
            onSelect: select => {
              that.selectionContent.selectType = 'currentPage'
              console.log(select, 'select')
              // 将未选中的数据插入到选择集合中
              that.tableData.forEach(item => {
                if (!that.selectionContent.selectedRowKeys.includes(item.key)) {
                  that.selectionContent.selectedRowKeys.push(item.key)
                }
              })
              // 清空所有页时的未选中项
              that.selectionContent.notSelectedList = []
            }
          },
          {
            key: 'allPage',
            text: '所有页',
            onSelect: changableRowKeys => {
              that.selectionContent.selectType = 'allPage'
              console.log(changableRowKeys, 'all-data')
              that.tableData.forEach(item => {
                if (!that.selectionContent.selectedRowKeys.includes(item.key)) {
                  that.selectionContent.selectedRowKeys.push(item.key)
                }
              })
            }
          }
        ]
      }
    }
  },
  methods: {
    /**
     * 分页发生变化
     * 如果有 loadTableData，将会被调用，参数为变化后的分页信息以及是否发生了页码的变化
     * */
    handleTablePageChange (page) {
      console.log('page 发生变化：', page)
      // 如果 pageSize 不相等，则页码发生了变化
      if(this.loadTableData) {
        this.loadTableData(page, !(page.pageSize !== this.pagination.pageSize))
      }
    },
    /**
     * 处理分页
     * */
    setPagination (obj) {
      this.pagination = {
        total: 0,
        pageSize: 5,
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
      if (this.selectionContent.selectType === 'allPage') {
        // 所有页时，切换分页会验证选中状态
        this.tableData.forEach(item => {
          !this.selectionContent.selectedRowKeys.includes(item.key) && !this.selectionContent.notSelectedList.includes(item.key) && this.selectionContent.selectedRowKeys.push(item.key)
        })
      }
    }
  }
}

```
