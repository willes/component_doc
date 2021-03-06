# 选择人员
> 树形选择人员

<font><b>切记注意数据结构</b></font>

## 使用

访问<a href="/#/selectUser" target="_blank">这里</a>查看示例。

```vue
<template>
  <div>
    <select-user v-model="selectValue" :replaceFields="{ children: 'children' }" :loadData="loadData" @ok="handleOk" :visible.sync="visible" dataType="mix" multiple></select-user>
  </div>
</template>

<script>
import { SelectUser } from '@handday/components'

export default {
  name: 'SelectUsers',
  components: {
    SelectUser
  },
  data () {
    return {
      loadData: null,
      visible: false,
      selectValue: []
    }
  },
  mounted() {
    this.handleAddEmps()
  },
  methods: {
    handleOk(result) {
      console.log(result)
    },
    /**
     * result 返回的数据方法
     *    selectedList 选中的数据
     *    keyword 搜索时候的关键字
     *    controlType 追加/替换
     * cancel 关闭弹窗
     * closeLoading 关闭 loading 状态
     * */
    beforeClose(result, cancel, closeLoading) {},
    /**
     * 模拟加载方法
     * */
    handleAddEmps (item) {
      this.loadData = (node) => {
        return new Promise((resolve, reject) => {
          const length = Math.floor(Math.random() * 10 + 1)
          const getData = (len) => {
            let data = []
            for(let i = 0; i < len; i++) {
              const id = `${Math.floor(Math.random() * 1000000000000)}`
              const type = Math.floor(Math.random() * 10) % 2
              if (type) {
                data.push({
                  corpId: 10001,
                  departmentId: id,
                  parentId: item && item.parentId || 0,
                  level: item && item.level + 2 || 1,
                  name: `${Math.floor(Math.random() * 100000)}部`
                })
              } else {
                data.unshift({
                  name: `${Math.floor(Math.random() * 100000)}人`,
                  businessId: id,
                  avatar: 'https://t7.baidu.com/it/u=1595072465,3644073269&fm=193&f=GIF'
                })
              }
            }
            const parent = {
              corpId: 10001,
              departmentId: `${Math.floor(Math.random() * 1000000000000)}`,
              parentId: 0,
              level: item && item.level || 1,
              name: `1部`,
              children: data
            }
            if (typeof(node) === 'string') {
              return [parent]
            }
            return data
          }
          setTimeout(() => {
            resolve(getData(length))
          }, 1000)
        })
      }
      this.visible = true
    }
  }
}
</script>

```

> Dialog 调用的时候，content 参数也可以正常的传递
### Dialog Attributes

| 参数 | 说明 | 类型 | 可选值 | 默认值
| --- | --- | --- | --- | --- |
| value/v-model | 选中数据 | Array | - | [] |
| visible | 显示隐藏 | Boolean | true/false | false |
| beforeClose | 关闭前的回调 | Function | result, close | - |
| ok | 关闭窗口 | Function | result | - |


### Content Attributes

| 参数 | 说明 | 类型 | 可选值 | 默认值 |
| --- | --- | --- | --- | --- |
| value/v-model | 选中数据 | Array | - | [] |
| visible | 显示隐藏 | Boolean | true/false | false |
| dataSource | 树形数据 | Array | - | [] |
| title | 标题 | String | - | - |
| loadData | 加载数据的方法，是一个 Promise，当这个参数有值的时候，dataSource 将不会生效 | Function | - | null |
| dataType | 选择数据类型 | String | mix/user/dept | mix |
| multiple | 是否多选 | Boolean | true/false | false |
| search | 搜索方式，传递除 search 以外的值将会调用 loadData | String | 'search'/'any' | 'search |
| treeExtAttrs | 参考 tree 组件的 treeExtAttrs | Object | - | - |
| beforeSelect | 校验当前选项是否可选 | Function | - | - |
| changeBtn | 替换和追加的按钮选项 | Boolean | - | false |
| onlyDept | 是否只显示部门 | Boolean | - | false |
| point | 点聚合模式 | Boolean | - | false |
| isSync | 异步加载 | Boolean | - | false |
| height | 内容视图高度 | String | - | 354px |
| immediate | 是否每次打开弹窗都要 init 一次 | Boolean | - | false | 
| valueTimely | 是否即时更新 v-model | Boolean | - | false | 
| autoCreate | 是否自动调用创建数据，也可通过 ref 手动调用 create 方法 | Boolean | - | false |
| useBuilt | 是否使用内置的接口 | Boolean | - | false |
| defaultBusinessId | 初始的部门 id，接口要求，必须有 id | String | - | '' |

### Events
| 事件名称	 | 说明 | 回调参数 |
| --- | --- | --- |
| ok | 确定按钮 | (e: Event) |
| change | 数据发生改变 | result, Object |

### 注意事项

point: 开启点聚合模式后，数据类型选择将会失效。
isSync: 数据异步加载，搜索的时候会有些许问题，后续跟进修复。

### 单独调用
```vue
<template>
  <div>
    <a-card title="下面的选择框渲染的数据">
      <div v-for="(item, index) in selectValue" :key="index">{{index}}===={{ item.name }}</div>
    </a-card>
    <select-user-content valueTimely multiple height="500px" v-model="selectValue" :loadData="loadData" :replaceFields="{ children: 'children' }" ref="selectUserContent" />
  </div>
</template>

<script>
import { SelectUserContent } from '@handday/components'

export default {
  name: 'SelectUsers',
  components: {
    SelectUserContent
  },
  data () {
    return {
      loadData: null,
      selectValue: []
    }
  },
  mounted() {
    this.handleAddEmps()
    // 通过手动调用
    // this.$refs.selectUserContent.create()
  },
  methods: {
    /**
     * 装载加载数据方法
     * */
    handleAddEmps (item) {
      this.loadData = (node) => {
        console.log(typeof(node))
        return new Promise((resolve, reject) => {
          const length = Math.floor(Math.random() * 10 + 1)
          const getData = (len) => {
            let data = []
            for(let i = 0; i < len; i++) {
              const id = `${Math.floor(Math.random() * 1000000000000)}`
              const type = Math.floor(Math.random() * 10) % 2
              if (type) {
                data.push({
                  corpId: 10001,
                  departmentId: id,
                  parentId: item && item.parentId || 0,
                  level: item && item.level + 2 || 1,
                  name: `第${Math.floor(Math.random() * 100000)}号研究所`
                })
              } else {
                data.unshift({
                  name: `第${Math.floor(Math.random() * 100000)}号指掌人`,
                  businessId: id,
                  avatar: 'https://t7.baidu.com/it/u=1595072465,3644073269&fm=193&f=GIF'
                })
              }
            }
            const parent = {
              corpId: 10001,
              departmentId: `${Math.floor(Math.random() * 1000000000000)}`,
              parentId: 0,
              level: item && item.level || 1,
              name: `1部`,
              children: data
            }
            if (typeof(node) === 'string') {
              return [parent]
            }
            return data
          }
          setTimeout(() => {
            const data = getData(length)
            console.log(data)
            resolve(data)
          }, 1000)
        })
      }
    }
  }
}
</script>

<style lang="less">
.select-user{
  .cont-l{
    .org-list-wrap{
    }
  }
}
</style>

```
