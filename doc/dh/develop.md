### 变量约定
1. tableLoading  
2. confirmLoading  
3. tableData  
4. pagination 如果使用了 TableSelection 则默认存在  



### 关于回调命名
#### 弹窗
ok  

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


#### 组件操作类
change
update
delete
add

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













