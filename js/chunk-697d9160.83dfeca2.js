(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-697d9160"],{"7ad7":function(e,t,a){"use strict";a("afae")},afae:function(e,t,a){},e08b:function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("a-button",{on:{click:function(t){e.visible=!0}}},[e._v("打开弹窗选择")]),a("a-card",{attrs:{title:"弹窗渲染的数据"}},e._l(e.dialogSelectValue,(function(t,n){return a("div",{key:n},[e._v(e._s(n)+"===="+e._s(t.name))])})),0),a("a-divider",[e._v("指掌天下")]),a("a-card",{attrs:{title:"下面的选择框渲染的数据"}},e._l(e.selectValue,(function(t,n){return a("div",{key:n},[e._v(e._s(n)+"===="+e._s(t.name))])})),0),a("div",[e._v("===================以下是 content 单独调用=======================")]),a("select-user-content",{ref:"selectUserContent",attrs:{autoCreate:"",valueTimely:"",multiple:"",height:"500px",loadData:e.loadData,replaceFields:{children:"children"}},model:{value:e.selectValue,callback:function(t){e.selectValue=t},expression:"selectValue"}}),a("select-user",{staticClass:"select-user",attrs:{loadDataType:"user","is-sync":"",replaceFields:{children:"children"},loadData:e.loadData,visible:e.visible,dataType:"user"},on:{change:e.handleChange,ok:e.handleOk,"update:visible":function(t){e.visible=t}},model:{value:e.dialogSelectValue,callback:function(t){e.dialogSelectValue=t},expression:"dialogSelectValue"}})],1)},l=[],o=a("53ca"),c=(a("d3b7"),a("ce78")),r={name:"SelectUsers",components:{SelectUser:c["SelectUser"],SelectUserContent:c["SelectUserContent"]},data:function(){return{loadData:null,visible:!1,dialogSelectValue:[],selectValue:[]}},created:function(){this.handleAddEmps()},methods:{handleOk:function(e,t){console.log(e),this.$forceUpdate()},handleChange:function(e,t){console.log(e)},handleAddEmps:function(e){this.loadData=function(t){return console.log(Object(o["a"])(t)),new Promise((function(a,n){var l=Math.floor(10*Math.random()+1),o=function(a){for(var n=[],l=0;l<a;l++){var o="".concat(Math.floor(1e12*Math.random())),c=Math.floor(10*Math.random())%2;c?n.push({corpId:10001,departmentId:o,parentId:e&&e.parentId||0,level:e&&e.level+2||1,name:"第".concat(Math.floor(1e5*Math.random()),"号研究所")}):n.unshift({name:"第".concat(Math.floor(1e5*Math.random()),"号指掌人"),businessId:o,avatar:"https://t7.baidu.com/it/u=1595072465,3644073269&fm=193&f=GIF"})}var r={corpId:10001,departmentId:"".concat(Math.floor(1e12*Math.random())),parentId:0,level:e&&e.level||1,name:"1部",children:n};return"string"===typeof t?[r]:n};setTimeout((function(){var e=o(l);console.log(e),a(e)}),1e3)}))}}}},s=r,i=(a("7ad7"),a("2877")),d=Object(i["a"])(s,n,l,!1,null,null,null);t["default"]=d.exports}}]);
//# sourceMappingURL=chunk-697d9160.83dfeca2.js.map