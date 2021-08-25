### 变量约定
1. tableLoading 表格加载，必要情况可只定义一个
2. confirmLoading 按钮加载
3. cancelLoading 取消按钮加载
4. tableData 如果使用了 TableSelection 则默认存在
5. pagination 如果使用了 TableSelection 则默认存在  

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

#### props
visible 隐藏显示  
value v-model  
replaceFields 值替换  
loadData 传入的请求方式，组件一旦使用这个方法，则 resolve 中的数据必须进行约定  
dataSource // 如果组件是表格  

#### 回调
change // 大部分时候只需要 change 就已经足够了  
update  
delete  
add  
clickHandler // 统一，事件放前面，handler 放后面  

##### 弹窗
confirm  
cancel  
beforeClose:Function  弹窗必须有关闭回调  

##### <span style="color:red;">示例</span>

```vue
  <search
    ref="search"
    :selectedLen="selectedLen"
    :byType="byType"
    @onSearch="onSearch"
    @handleOperation="handleOperation"
    @batchHandle="batchHandle"
  />
```

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













