(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-afa685d8"],{"58e8":function(e,t,n){!function(t,o){e.exports=o(n("99af"),n("159b"),n("caad"),n("2532"),n("4de4"))}(0,(function(){"use strict";function e(t){return e="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},e(t)}function t(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function n(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function o(e){for(var o=1;o<arguments.length;o++){var s=null!=arguments[o]?arguments[o]:{};o%2?n(Object(s),!0).forEach((function(n){t(e,n,s[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(s)):n(Object(s)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(s,t))}))}return e}var s={data:function(){var e=this;return{tableData:[],selectionContent:{selectedRowKeys:[],selectedRows:{},noSelectedRowKeys:[],noSelectedRows:{},selectType:"",rowSelection:{},primaryKey:"skuId"},pagination:{total:0,pageSize:30,current:1,showQuickJumper:!0,showSizeChanger:!0,pageSizeOptions:["30","50","100"],showTotal:function(t){return"总".concat(t,"条，每页显示").concat(e.pagination.pageSize,"条")}},selectionConfig:{selections:!0},tableSelection:{onChange:null,onSelect:null,onSelectAll:null,onSelectInvert:null,currentPage:null,allPage:null},resultMap:{},searchResult:{}}},computed:{selectOnIndeterminate:function(){return"allPage"===this.selectionContent.selectType&&!!this.selectionContent.noSelectedRowKeys.length&&!!this.selectionContent.selectedRowKeys.length},hasOverSelectionLimit:function(){return this.selectionLimit&&this.selectionContent.selectedRowKeys.length>=this.selectionLimit},rowSelection:function(){var e=this,t=this;return o(o({},t.selectionContent.rowSelection),{},{selectedRowKeys:t.selectionContent.selectedRowKeys,onChange:function(e,n){var o;console.log("onChange selectedRowKeys",e),console.log("onChange selectedRows",n);var s=t.selectionContent.primaryKey;if("allPage"===t.selectionContent.selectType&&!e.length)return t.selectionContent.selectType="",void t.handleSelectedClear();if(t.selectionLimit&&e.length>t.selectionLimit)t.$message.warning("最多选择".concat(t.selectionLimit,"条"));else{t.selectionContent.selectedRowKeys=e;var i=t.selectionContent.noSelectedRows,l=t.selectionContent.selectedRows,a=!1;t.tableData.forEach((function(n){e.includes(n[s])?("allPage"===t.selectionContent.selectType&&(a=!0,delete i[n[s]]),l[n[s]]=n):("allPage"===t.selectionContent.selectType&&(a=!0,i[n[s]]=n),delete l[n[s]])})),t.selectionContent.noSelectedRows=i,t.selectionContent.selectedRows=l,"allPage"===t.selectionContent.selectType&&a&&t._generateNoSelectKey();for(var c=arguments.length,r=new Array(c>2?c-2:0),u=2;u<c;u++)r[u-2]=arguments[u];t.tableSelection.onChange&&(o=t.tableSelection).onChange.apply(o,[e,n].concat(r))}},onSelect:function(e,n,o,s){t.tableSelection.onSelect&&t.tableSelection.onSelect(e,n,o,s)},onSelectAll:function(e,n,o){t.tableSelection.onSelectAll&&t.tableSelection.onSelectAll(e,n,o)},onSelectInvert:function(e){t.tableSelection.onSelectInvert&&t.tableSelection.onSelectInvert(e)},hideDefaultSelections:!0,selections:!!t.selectionConfig.selections&&[{key:"currentPage",text:"当前页",onSelect:function(n){"allPage"===t.selectionContent.selectType&&t.handleSelectedClear(),t.selectionContent.selectType="currentPage";var o=t.selectionContent.primaryKey,s=[],i=[];t.tableData.forEach((function(e){t.selectionContent.selectedRowKeys.includes(e[o])?s.push(e):i.push(e)}));var l=e.selectionContent.selectedRows;if((s.length&&i.length||!s.length)&&i.forEach((function(e){l[e[o]]=e})),!i.length){var a=t.selectionContent.selectedRows;s.forEach((function(e){delete a[e[o]]}))}t.selectionContent.selectedRows=l,t._generateKey()}},{key:"allPage",text:"所有页",onSelect:function(e){if("allPage"===t.selectionContent.selectType&&(t.selectionContent.selectedRowKeys.length||t.selectionContent.noSelectedRowKeys.length))t.handleSelectedClear();else{t.selectionContent.selectType="allPage";var n=t.selectionContent.primaryKey;t.tableData.forEach((function(e){t.selectionContent.selectedRows[e[n]]=e}))}t._generateKey()}}]})}},methods:{setPagination:function(e){this.pagination=o({total:0,pageSize:10,current:1,showQuickJumper:!0,showSizeChanger:!0,pageSizeOptions:["5","10","20"],showTotal:function(e){return"总".concat(e,"条")}},e)},setRowSelection:function(e){this.selectionContent.rowSelection=e},dealSelectionCheckBox:function(){var e=this;"allPage"===this.selectionContent.selectType&&(this.tableData.forEach((function(t){try{e.selectionContent.selectedRows[t[e.selectionContent.primaryKey]]||e.selectionContent.noSelectedRows[t[e.selectionContent.primaryKey]]||(e.selectionContent.selectedRows[t[e.selectionContent.primaryKey]]=t)}catch(e){console.log(e)}})),this._generateKey())},_generateKey:function(){var e=[];for(var t in this.selectionContent.selectedRows)this.selectionContent.selectedRows.hasOwnProperty(t)&&e.push(t);this.selectionContent.selectedRowKeys=e},_generateNoSelectKey:function(){var e=[];for(var t in this.selectionContent.noSelectedRows)this.selectionContent.noSelectedRows.hasOwnProperty(t)&&e.push(t);this.selectionContent.noSelectedRowKeys=e},handleSelectedClear:function(){return this.selectionContent.selectedRowKeys=[],this.selectionContent.selectedRows={},this.selectionContent.noSelectedRowKeys=[],this.selectionContent.noSelectedRows=[],this.selectionContent.selectType="",this},getRowData:function(e){var t=[];if(e)for(var n in this.selectionContent.noSelectedRows)this.selectionContent.noSelectedRows.hasOwnProperty(n)&&t.push(this.selectionContent.noSelectedRows[n]);else for(var o in this.selectionContent.selectedRows)this.selectionContent.selectedRows.hasOwnProperty(o)&&t.push(this.selectionContent.selectedRows[o]);return t},setTableSelectType:function(e){this.selectionContent.selectType=e,this.handleSelectedClear()},setSelectRows:function(e){var t=this;e.forEach((function(e){t.selectionContent.selectedRows[e[t.selectionContent.primaryKey]]=e}))},setSelectionStatus:function(e){this.selectionConfig.selections=e},rowClick:function(e){var n=this;if(console.log("单击",e),this.multiple)if(this.selectionContent.selectedRowKeys.includes(e[this.baseReplaceFields.key]))this.selectionContent.selectedRowKeys=this.selectionContent.selectedRowKeys.filter((function(t){return t!==e[n.baseReplaceFields.key]})),delete this.selectionContent.selectedRows[e[this.baseReplaceFields.key]];else{if(this.hasOverSelectionLimit)return void this.$message.warning("最多选择".concat(this.selectionLimit,"条"));this.selectionContent.selectedRowKeys.push(e[this.baseReplaceFields.key]),this.selectionContent.selectedRows[e[this.baseReplaceFields.key]]=e}else this.selectionContent.selectedRowKeys=[e[this.baseReplaceFields.key]],this.selectionContent.selectedRows=t({},e[this.baseReplaceFields.key],e)},dbRowClick:function(e){console.log("双击",e),this.selectionContent.selectedRowKeys.includes(e[this.baseReplaceFields.key])||this.hasOverSelectionLimit||(this.selectionContent.selectedRowKeys.push(e[this.baseReplaceFields.key]),this.selectionContent.selectedRows[e[this.baseReplaceFields.key]]=e),this.handleOk&&this.handleOk()},dealResult:function(){var n=this;if(this.rules)for(var s in this.rules)if(this.rules.hasOwnProperty(s)){var i=this.rules[s];"object"===e(i)?(this.$refs[this.resultMap[s].ref]&&this.$refs[this.resultMap[s].ref].setData(i),this.resultMap[s]?this.searchResult[this.resultMap[s].key]=i.id:this.searchResult[s]=i.id,this.disabled[s]=!!i.disabled):this.resultMap[s]?this.searchResult[this.resultMap[s].key]=i:this.searchResult[s]=i}return this.defaultValue&&(this.selectionContent.selectedRowKeys=[],this.defaultValue.constructor===Array?this.defaultValue.forEach((function(e){n.selectionContent.selectedRowKeys.push(e[n.baseReplaceFields.key]),n.selectionContent.selectedRows=o(o({},n.selectionContent.selectedRows),{},t({},e[n.baseReplaceFields.key],e))})):(this.selectionContent.selectedRowKeys=[this.defaultValue[this.baseReplaceFields.key]],this.selectionContent.selectedRows=t({},this.defaultValue[this.baseReplaceFields.key],this.defaultValue))),this}}};return s}))},"73c8":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.getAllChildren=t.getAllProps=t.getSlot=t.getSlots=t.camelize=t.isValidElement=t.initDefaultProps=t.parseStyleText=t.getValueByProp=t.getAttrs=t.getKey=t.getPropsData=t.slotHasProp=t.getSlotOptions=t.getComponentFromProp=t.getOptionProps=t.filterProps=t.hasProp=void 0;var o=n("1098"),s=f(o),i=n("b24f"),l=f(i),a=n("41b2"),c=f(a);t.getEvents=_,t.getDataEvents=j,t.getListeners=F,t.getClass=A,t.getStyle=L,t.getComponentName=I,t.isEmptyElement=V,t.isStringElement=z,t.filterEmpty=M,t.mergeProps=J;var r=n("60ed"),u=f(r),d=n("4d26"),p=f(d);function f(e){return e&&e.__esModule?e:{default:e}}function h(e){var t=e&&e.toString().match(/^\s*function (\w+)/);return t?t[1]:""}var y=/-(\w)/g,v=function(e){return e.replace(y,(function(e,t){return t?t.toUpperCase():""}))},g=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments[1],n={},o=/;(?![^(]*\))/g,s=/:(.+)/;return e.split(o).forEach((function(e){if(e){var o=e.split(s);if(o.length>1){var i=t?v(o[0].trim()):o[0].trim();n[i]=o[1].trim()}}})),n},m=function(e,t){var n=e.$options||{},o=n.propsData||{};return t in o},w=function(e,t){var n=e.componentOptions||{},o=n.propsData||{};return t in o},C=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n={};return Object.keys(e).forEach((function(o){(o in t||void 0!==e[o])&&(n[o]=e[o])})),n},S=function(e){return e.data&&e.data.scopedSlots||{}},b=function(e){var t=e.componentOptions||{};e.$vnode&&(t=e.$vnode.componentOptions||{});var n=e.children||t.children||[],o={};return n.forEach((function(e){if(!V(e)){var t=e.data&&e.data.slot||"default";o[t]=o[t]||[],o[t].push(e)}})),(0,c["default"])({},o,S(e))},R=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"default",n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};return e.$scopedSlots&&e.$scopedSlots[t]&&e.$scopedSlots[t](n)||e.$slots[t]||[]},O=function(e){var t=e.componentOptions||{};return e.$vnode&&(t=e.$vnode.componentOptions||{}),e.children||t.children||[]},k=function(e){if(e.fnOptions)return e.fnOptions;var t=e.componentOptions;return e.$vnode&&(t=e.$vnode.componentOptions),t&&t.Ctor.options||{}},P=function(e){if(e.componentOptions){var t=e.componentOptions,n=t.propsData,o=void 0===n?{}:n,s=t.Ctor,i=void 0===s?{}:s,a=(i.options||{}).props||{},r={},u=!0,d=!1,p=void 0;try{for(var f,y=Object.entries(a)[Symbol.iterator]();!(u=(f=y.next()).done);u=!0){var v=f.value,g=(0,l["default"])(v,2),m=g[0],w=g[1],S=w["default"];void 0!==S&&(r[m]="function"===typeof S&&"Function"!==h(w.type)?S.call(e):S)}}catch(P){d=!0,p=P}finally{try{!u&&y["return"]&&y["return"]()}finally{if(d)throw p}}return(0,c["default"])({},r,o)}var b=e.$options,R=void 0===b?{}:b,O=e.$props,k=void 0===O?{}:O;return C(k,R.propsData)},$=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:e,o=!(arguments.length>3&&void 0!==arguments[3])||arguments[3];if(e.$createElement){var s=e.$createElement,i=e[t];return void 0!==i?"function"===typeof i&&o?i(s,n):i:e.$scopedSlots[t]&&o&&e.$scopedSlots[t](n)||e.$scopedSlots[t]||e.$slots[t]||void 0}var l=e.context.$createElement,a=E(e)[t];if(void 0!==a)return"function"===typeof a&&o?a(l,n):a;var c=S(e)[t];if(void 0!==c)return"function"===typeof c&&o?c(l,n):c;var r=[],u=e.componentOptions||{};return(u.children||[]).forEach((function(e){e.data&&e.data.slot===t&&(e.data.attrs&&delete e.data.attrs.slot,"template"===e.tag?r.push(e.children):r.push(e))})),r.length?r:void 0},K=function(e){var t=e.data||{},n=e.componentOptions||{};return e.$vnode&&(t=e.$vnode.data||{},n=e.$vnode.componentOptions||{}),(0,c["default"])({},t.props,t.attrs,n.propsData)},E=function(e){var t=e.componentOptions;return e.$vnode&&(t=e.$vnode.componentOptions),t&&t.propsData||{}},x=function(e,t){return E(e)[t]},D=function(e){var t=e.data;return e.$vnode&&(t=e.$vnode.data),t&&t.attrs||{}},T=function(e){var t=e.key;return e.$vnode&&(t=e.$vnode.key),t};function _(e){var t={};return e.componentOptions&&e.componentOptions.listeners?t=e.componentOptions.listeners:e.data&&e.data.on&&(t=e.data.on),(0,c["default"])({},t)}function j(e){var t={};return e.data&&e.data.on&&(t=e.data.on),(0,c["default"])({},t)}function F(e){return(e.$vnode?e.$vnode.componentOptions.listeners:e.$listeners)||{}}function A(e){var t={};e.data?t=e.data:e.$vnode&&e.$vnode.data&&(t=e.$vnode.data);var n=t["class"]||{},o=t.staticClass,s={};return o&&o.split(" ").forEach((function(e){s[e.trim()]=!0})),"string"===typeof n?n.split(" ").forEach((function(e){s[e.trim()]=!0})):Array.isArray(n)?(0,p["default"])(n).split(" ").forEach((function(e){s[e.trim()]=!0})):s=(0,c["default"])({},s,n),s}function L(e,t){var n={};e.data?n=e.data:e.$vnode&&e.$vnode.data&&(n=e.$vnode.data);var o=n.style||n.staticStyle;if("string"===typeof o)o=g(o,t);else if(t&&o){var s={};return Object.keys(o).forEach((function(e){return s[v(e)]=o[e]})),s}return o}function I(e){return e&&(e.Ctor.options.name||e.tag)}function V(e){return!(e.tag||e.text&&""!==e.text.trim())}function z(e){return!e.tag}function M(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return e.filter((function(e){return!V(e)}))}var H=function(e,t){return Object.keys(t).forEach((function(n){if(!e[n])throw new Error("not have "+n+" prop");e[n].def&&(e[n]=e[n].def(t[n]))})),e};function J(){var e=[].slice.call(arguments,0),t={};return e.forEach((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=!0,o=!1,s=void 0;try{for(var i,a=Object.entries(e)[Symbol.iterator]();!(n=(i=a.next()).done);n=!0){var r=i.value,d=(0,l["default"])(r,2),p=d[0],f=d[1];t[p]=t[p]||{},(0,u["default"])(f)?(0,c["default"])(t[p],f):t[p]=f}}catch(h){o=!0,s=h}finally{try{!n&&a["return"]&&a["return"]()}finally{if(o)throw s}}})),t}function N(e){return e&&"object"===("undefined"===typeof e?"undefined":(0,s["default"])(e))&&"componentOptions"in e&&"context"in e&&void 0!==e.tag}t.hasProp=m,t.filterProps=C,t.getOptionProps=P,t.getComponentFromProp=$,t.getSlotOptions=k,t.slotHasProp=w,t.getPropsData=E,t.getKey=T,t.getAttrs=D,t.getValueByProp=x,t.parseStyleText=g,t.initDefaultProps=H,t.isValidElement=N,t.camelize=v,t.getSlots=b,t.getSlot=R,t.getAllProps=K,t.getAllChildren=O,t["default"]=m},"7418e":function(e,t,n){"use strict";n.r(t);var o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("p",[e._v("可拖拽排序")]),n("s-table",{attrs:{bordered:"",draggable:"","data-source":e.data2,"sort-list":e.sortList,"row-selection":e.selectionContent.rowSelection}},[n("a-table-column",{key:"index",attrs:{title:"索引"}}),n("a-table-column",{key:"date",attrs:{title:"date","data-index":"date"},scopedSlots:e._u([{key:"default",fn:function(t,n,o){return[e._v(e._s(o)+e._s(n)+" "+e._s(t))]}}])}),n("a-table-column",{key:"amount",attrs:{title:"amount","data-index":"amount"}},[e._v("3")]),n("a-table-column",{key:"note",attrs:{title:"note","data-index":"note"}},[e._v("4")])],1),n("p",[e._v("可伸缩列")]),n("a-button",{on:{click:e.exchangeHandle}},[e._v("切换")])],1)},s=[],i=n("b1d8"),l=n.n(i),a=n("58e8"),c=n.n(a),r=[{title:"Date",dataIndex:"date",width:200},{title:"Amount1",dataIndex:"amount",width:100},{title:"Type",dataIndex:"type",width:100},{title:"Note",dataIndex:"note",width:100},{title:"Action",key:"action",scopedSlots:{customRender:"action"}}],u=[{key:0,date:"2018-02-11",amount:120,type:"income",note:"transfer"},{key:1,date:"2018-03-11",amount:243,type:"income",note:"transfer"},{key:2,date:"2018-04-11",amount:98,type:"income",note:"transfer"}],d={data:function(){return{data2:u,columns2:r,dragOption:{handle:".edit"},sortList:[]}},mixins:[c.a],components:{STable:l.a},methods:{customRow:function(e){return{on:{click:function(t){console.log(e)}}}},onUpdate:function(e){console.log(e)},exchangeHandle:function(){this.sortList=[{key:"amount"},{key:"index",date:"2018-03-11",amount:243,type:"income",note:"transfer",index:"1"},{key:"date",date:"2018-02-11",amount:120,type:"income",note:"transfer"},{key:"note",date:"2018-04-11",amount:98,type:"income",note:"transfer"}]}}},p=d,f=n("2877"),h=Object(f["a"])(p,o,s,!1,null,null,null);t["default"]=h.exports},b0c0:function(e,t,n){var o=n("83ab"),s=n("5e77").EXISTS,i=n("e330"),l=n("9bf2").f,a=Function.prototype,c=i(a.toString),r=/^\s*function ([^ (]*)/,u=i(r.exec),d="name";o&&!s&&l(a,d,{configurable:!0,get:function(){try{return u(r,c(this))[1]}catch(e){return""}}})}}]);
//# sourceMappingURL=chunk-afa685d8.93682fee.js.map