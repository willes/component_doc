(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-12350937"],{d81d:function(e,t,n){"use strict";var a=n("23e7"),s=n("b727").map,i=n("1dde"),c=i("map");a({target:"Array",proto:!0,forced:!c},{map:function(e){return s(this,e,arguments.length>1?arguments[1]:void 0)}})},e08b:function(e,t,n){"use strict";n.r(t);var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("select-user",{attrs:{loadDataFn:e.loadData,visible:e.visible,replaceFields:{id:"businessId",name:"name",head:"avatar"}},on:{"update:visible":function(t){e.visible=t}}})],1)},s=[],i=(n("d3b7"),n("d81d"),n("ce78")),c=n("d368"),d={name:"SelectUsers",components:{SelectUser:i["SelectUser"]},data:function(){return{loadData:null,visible:!1,cacheOrganize:null}},mounted:function(){var e=this;setTimeout((function(){e.handleAddEmps({corpId:10001,departmentId:"46283110463168512",parentId:0,name:"指掌天下",canDel:null,deptType:1,departmentType:null,childrens:[],scope:{title:"custom"},key:"0-0"})}))},methods:{handleAddEmps:function(e){this.loadData=function(){return console.log("="),new Promise((function(e,t){Object(c["getDepartmentEmps"])({departmentId:"46283110463168512",corpId:"10001"}).then((function(t){var n=t.data;e({list:n.emps,select:n.leaders.map((function(e){return e.businessId}))})})).catch((function(e){t(e)}))}))},this.visible=!0,this.cacheOrganize=e}}},l=d,r=n("2877"),o=Object(r["a"])(l,a,s,!1,null,null,null);t["default"]=o.exports}}]);
//# sourceMappingURL=chunk-12350937.57a72a58.js.map