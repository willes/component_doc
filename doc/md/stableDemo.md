# 使用
```vue
<template>
  <s-table
      :data-source="data"
      :draggableOption="{
        minWidth: 100, // 最大宽度
        maxWidth: 580  // 最小宽度
      }"
  >
    <a-table-column title="索引" key="index">
      <template slot-scope="text, record, index">
        {{ index }} 注意在没有绑定 data-index 的情况下，index 的位置
      </template>
    </a-table-column>
    <a-table-column title="标题" key="title">
      <template slot-scope="row, record, index">
        {{ row }} 这里因为 a-table-column 没有绑定 data-index，所以这里的 row 是行数据，但是取索引的位置不变
      </template>
    </a-table-column>
    <a-table-column title="内容" key="content" data-index="content">
      <template slot-scope="text">
        {{ text }} 这里因为 a-table-column 绑定了 data-index，所以这里的 text 能正常的取到对应的数据
      </template>
    </a-table-column>
    <a-table-column title="备注" key="desc" data-index="desc">
      添加了 data-index 后，默认将会显示对应的数据，在无需处理的情况下，可以不做任何操作
    </a-table-column>
  </s-table>
</template>
<script>
import { STable, TableSelection } from '@handday/components'
export default {
  name: 'StableDemo',
  components: {
    STable
  },
  data () {
    return {
      data: [
        { title: '这是一只哇哇橘', content: '哇哇橘，橘哇哇。', desc: '这里是备注' },
        { title: '这是一只哇哇橘2', content: '哇哇橘，橘哇哇。', desc: '这里是备注2' }
      ]
    }
  }
}
</script>
```

# sortList
```vue
<template>
  <div>
    <s-table
        :sort-list="sortList"
        :data-source="data"
    >
      <a-table-column title="索引" key="index">
        <template slot-scope="text, record, index">
          {{ index }}
        </template>
      </a-table-column>
      <a-table-column title="标题" key="title">
        <template slot-scope="row, record, index">
          {{ row.title }}={{ index }}
        </template>
      </a-table-column>
      <a-table-column title="内容" key="content" data-index="content">
        <template slot-scope="text">
          {{ text }}
        </template>
      </a-table-column>
      <a-table-column title="备注" key="desc" data-index="desc">
      </a-table-column>
    </s-table>
    <a-button @click="exchange">切换列顺序</a-button>
  </div>
</template>
<script>
import { STable } from '@handday/components'
export default {
  name: 'StableDemo',
  components: {
    STable
  },
  data () {
    return {
      data: [
        { title: '这是一只哇哇橘', content: '哇哇橘，橘哇哇。', desc: '这里是备注' },
        { title: '这是一只哇哇橘2', content: '哇哇橘，橘哇哇。', desc: '这里是备注2' }
      ],
      sortList: []
    }
  },
  methods: {
    exchange () {
      this.sortList = [
        { key: 'desc' },
        { key: 'content' },
        { key: 'title' }
      ]
    }
  }
}
</script>
```

# 指定固定项

```vue
<template>
  <div>
    <s-table
        :sort-list="sortList"
        :data-source="data"
        :sort-config="{
          push: ['desc']
        }"
    >
      <a-table-column title="索引" key="index">
        <template slot-scope="text, record, index">
          {{ index }}
        </template>
      </a-table-column>
      <a-table-column title="标题" key="title">
        <template slot-scope="row, record, index">
          {{ row.title }}={{ index }}
        </template>
      </a-table-column>
      <a-table-column title="内容" key="content" data-index="content">
        <template slot-scope="text">
          {{ text }}
        </template>
      </a-table-column>
      <a-table-column title="备注" key="desc" data-index="desc">
      </a-table-column>
    </s-table>
    <a-button @click="exchange">切换列顺序</a-button>
  </div>
</template>
<script>
import { STable } from '@handday/components'
export default {
  name: 'StableDemo',
  components: {
    STable
  },
  data () {
    return {
      data: [
        { title: '这是一只哇哇橘', content: '哇哇橘，橘哇哇。', desc: '这里是备注' },
        { title: '这是一只哇哇橘2', content: '哇哇橘，橘哇哇。', desc: '这里是备注2' }
      ],
      sortList: []
    }
  },
  methods: {
    exchange () {
      this.sortList = [
        { key: 'desc' },
        { key: 'content' },
        { key: 'title' }
      ]
    }
  }
}
</script>
```

# 表格列宽度联动
```vue
<template>
  <div>
    <s-table
        :data-source="data"
        :pagination="false"
        rowKey="titles"
        draggable
        :rowSelection="rowSelection"
        :cell-width.sync="cellWidth"
        :exclude-width="['index']"
    >
      <a-table-column title="索引" key="index" :width="cellWidth.index">
        <template slot-scope="text, record, index">
          {{ index }}
        </template>
      </a-table-column>
      <a-table-column
          title="标题"
          key="titles"
          :width="cellWidth.titles"
      >
        <template slot-scope="row, record, index">
          {{ row.titles }}={{ index }}
        </template>
      </a-table-column>
      <a-table-column title="内容" key="content" data-index="content" :width="cellWidth.content">
        <template slot-scope="text">
          {{ text }}
        </template>
      </a-table-column>
      <a-table-column title="备注" key="desc" data-index="desc" :width="cellWidth.desc">
      </a-table-column>
    </s-table>
    <a-table
        :showHeader="false"
        :pagination="false"
        :data-source="totalData"
        :rowSelection="rowSelection"
        @change="onDrag"
        rowKey="titles"
        class="footer-table"
    >
      <a-table-column key="index" title="索引" :customCell="() => { return {attrs: { colSpan: 2 }}}" :width="cellWidth.index">
        <template slot-scope="record">
          {{record}}
        </template>
      </a-table-column>
      <a-table-column key="titles" :width="cellWidth.titles" data-index="titles"></a-table-column>
      <a-table-column key="content" :width="cellWidth.content" data-index="content"></a-table-column>
      <a-table-column key="desc" :width="cellWidth.desc" data-index="desc"></a-table-column>
    </a-table>
  </div>
</template>
<script>
import { STable, TableSelection } from '@handday/components'
export default {
  name: 'StableDemo',
  mixins: [TableSelection],
  components: {
    STable
  },
  data () {
    return {
      data: [
        { titles: '这是一只哇哇橘', content: '哇哇橘，橘哇哇。', desc: '这里是备注' },
        { titles: '这是一只哇哇橘2', content: '哇哇橘，橘哇哇。', desc: '这里是备注2' }
      ],
      cellWidth: { // 宽度配置，key 和对应的 columns 的 key 一致
        index: 100,
        titles: 100,
        content: 100,
        desc: 100
      },
      totalData: [
        { titles: '表格列', content: '内容列', desc: '备注列' }
      ]
    }
  },
  methods: {
    onDrag () {
    },
    customCell (num, cell, index) {
      // 处理合并列的情况
      console.log(cell, index)
      return {
        attrs: {
          colSpan: num
        }
      }
    }
  }
}
</script>

<style lang="less" scoped>
.footer-table{
  /deep/ .ant-table-selection-column{display: none;}
}
</style>

```
