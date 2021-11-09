### 代码约定
1. 尽可能的增加可读性，可维护性  
2. 在特定情况下可以抛弃代码的简约性  
3. 注释！注释！注释！

### 变量约定
1. tableLoading 表格加载，必要情况可只定义一个
2. confirmLoading 按钮加载
3. cancelLoading 取消按钮加载
4. tableData 如果使用了 TableSelection 则默认存在
5. pagination 如果使用了 TableSelection 则默认存在  
6. searchResult 列表页检索条件  

> 如 loading 状态会有很多的情况可以采用如下

```vue
// 大于两个 loading 的时候使用对象同意管理 loading
export default {
  data () {
    return {
      loading: {
        业务名： false,
        业务名： false,
        ...
      }
    }
  }
}
```

### 组件
> 回调保持一致性，尽量少的回调方法  
> **问题：** 回显参数设置了单选多选两个值，实际上可以通过一个值实现  
> 实际上，不同类型的参数可以通过某个值指定，比如通过设定的 dataType 来重新定义当前绑定值是单选还是多选
> 开发组件的过程中，其中的各种参数尽量与 ant-design 保持一致  
> 调用采用横线写法 如 click-handler
> 请不要给给组件 props 设置 require

#### props
visible 隐藏显示  
value v-model  
defaultValue 组件传入默认值
replaceFields 值替换  
loadData 传入的请求方式，组件一旦使用这个方法，则 resolve 中的数据必须进行约定  
dataSource // 如果组件是表格  
multiple 单选多选  
rules 参数配置，用于传入筛选条件等  

##### rules 的说明
涉及到 mixSearch 等组件的嵌套使用，所以约定其传入筛选条件为 rules 

#### 回调
change // 非特殊情况更新都从 change 回调       
confirm // 确定，其中弹窗回调必须使用 confirm  
update  
delete  
add  
clickHandler // 统一，事件放前面，handler 放后面    

#### 回调参数
```vue
<script>
export default {
  methods: {
    callback () {
      this.$emit('confirm', {
        data: null, // 选中数据，在 table 中，它只是包含主键的数组
        rows: null, // 当前选中数据的信息
        baseRows: null // 这个属性涉及到所有数据，非必要谨慎返回
        // 其它回调值
      })
    }
  }
}
</script>
```

##### 弹窗 
> 参考 [弹窗配置](/dh/development/modal)
confirm  
cancel  
beforeClose:Function  props，如果是组件弹窗必须有关闭回调  

##### <span style="color:red;">示例</span>

### 表格
> 采用 element-ui 的形式  
> 直接采用 dom 的形式编写列数据  
```vue
<a-table>
  <a-table-column title="索引"></a-table-column>
  <a-table-column title="标题"></a-table-column>
  <a-table-column title="操作"></a-table-column>
</a-table>
```

#### 原单
> 聚焦后鼠标不点击其他地方，不做失去焦点的操作

### 注释
> 写下这行代码时，只有上帝和我知道是干嘛的，而现在，只有上帝知道了  
> 每个方法，一段逻辑代码，都需要注释

```vue
export default {
  methods: {
    /**
     * @description: 方法说明
     * @params
     * @return {*}
     */
    myFn () {}
  }
}
```

### 风格
@click 尽量每个上面绑定事件

### 路由
> 文件夹与路由名称保持一致，不然真的找不到

### 文件结构说明
> index.vue 采用小驼峰式写法
> List.vue 其余文件采用大驼峰命名
```vue
src
  |-- views
        |-- product
              |-- index.vue
              |-- Form.vue
```

### 命名
```text
{
  name: 'inStorageAdd', // 名称采用 小驼峰 命名
  path: '/bill/in-storage-add', // 路由名称采用 横线命名
  parentId: 0,
  id: 1000,
  meta: {
    title: '采购入库单',
    icon: '',
    show: true
  },
  component: 'InStorageAdd' // 路由的引入应该采用 大驼峰
}
```

### 其它细节相关

#### 弹窗
> 任意弹窗皆按照此说明  
> 详细参数查看 [弹窗示例](/dh/development/modal)  
1. 非必要情况，关闭点击遮罩关闭弹窗以及 Esc 按键关闭弹窗  

#### 弹窗 - 表格
1. 表格中，带选中功能的，双击任意一行即为确认操作，同时带出包括双击行在内的所有数据  

#### 表格 - 选择
> 任意表格有当前页/所有页全选功能皆安装此说明处理  
> 调用组件库中 [TableSelection](/mixins/tableSelection) 即可处理，这里只需要知道其中逻辑  
1. 切换任意非分页检索条件以及分页数量均清空当前选择内容，并将当前页码切换至 1  
2. 切换分页不清空任何选中项  
3. 全选当前页，如果有任意最少一条数据处于未选择的状态，则当前页被全选，再次点击，则当前页被清空  
4. 全选当前页的选中和清空，不影响其它分页的选中项  
5. 全选所有页，则所有页被选中，这时候我们需要记录以及传给后端的，都是未选中的内容  
6. 全选所有页之后任何情况下点击全选所有页，选中项都会被清空  
7. 全选所有页之后，有任意一条数据被取消选择，同时点击表格头部的 checkbox，当前页面的数据将会被选中  

#### 表格 - 数据加载
1. 第一次加载背景图文字应为"加载中"，加载完成后无文字文字为"暂无搜索结果"  
2. 通过条件搜索，失败后当前页数据保留  
3. 切换分页失败后，页码保持在当前页，数据保留，如：1 -> 2 失败，当前页码： 1  

#### 表格 - 分页
1. 页脚文案非特殊情况保持统一： 总xx条，每页显示xx条  

#### select
注意增加 getPopupContainer 属性，以获取下拉框的相对位置，否则将会出现滚动时位置异常等情况
解决方案： 使用 mix-select

#### 注意事项
1. 不要在全局下面挂方法，如 Vue.prototype.xxx、Vue.filter 等


#### 整体结构
```vue
export default {
  name: '',
  components: {},
  props: '',
  data () {
    return {}
  },
  computed: {},
  watch: {},
  beforeCreate () {},
  created () {},
  activated () {},
  deactivated () {},
  beforeMount () {},
  mounted () {},
  beforeUpdate () {},
  updated () {},
  beforeDestroy () {},
  destroyed () {},
  filters () {},
  methods: {}
}
```





