(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2b8206ab"],{"0aa1":function(e,t,n){!function(t,i){e.exports=i(n("b0c0"),n("a9e3"),n("04b3"),n("99af"),n("159b"),n("caad"),n("2532"),n("4de4"),n("d3b7"),n("ac1f"),n("466d"),n("b64b"),n("cfba"),n("07ac"),n("b680"),n("2b0e"),n("5319"),n("1276"),n("fb6a"),n("fd87"),n("9a8c"),n("a975"),n("735e"),n("c1ac"),n("d139"),n("3a7b"),n("d5d6"),n("82f8"),n("e91f"),n("60bd"),n("5f96"),n("3280"),n("3fcc"),n("ca91"),n("25a1"),n("cd26"),n("3c5d"),n("2954"),n("649e"),n("219c"),n("170b"),n("b39a"),n("72f7"),n("50f6"),n("3177"))}(0,(function(e,t,n,i,o,s,a,l,r,c,d,u,h,f,p,g,m,y,v,w,b,C,_,S,R,k,x,L,T,I,O,z,E,$,F,K,D,H,A,P,N,j,V,B,M){"use strict";function W(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var X=W(h),U=W(g),Y=W(B);function q(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function J(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,i)}return n}function Q(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?J(Object(n),!0).forEach((function(t){q(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):J(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function G(e,t,n,i,o,s,a,l,r,c){"boolean"!=typeof a&&(r=l,l=a,a=!1);const d="function"==typeof n?n.options:n;let u;if(e&&e.render&&(d.render=e.render,d.staticRenderFns=e.staticRenderFns,d._compiled=!0,o&&(d.functional=!0)),i&&(d._scopeId=i),s?(u=function(e){(e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),t&&t.call(this,r(e)),e&&e._registeredComponents&&e._registeredComponents.add(s)},d._ssrRegister=u):t&&(u=a?function(e){t.call(this,c(e,this.$root.$options.shadowRoot))}:function(e){t.call(this,l(e))}),u)if(d.functional){const e=d.render;d.render=function(t,n){return u.call(n),e(t,n)}}else{const e=d.beforeCreate;d.beforeCreate=e?[].concat(e,u):[u]}return n}const Z={name:"Empty",components:{empty:n.empty,loading:n.loading},props:{text:{type:String,default:""},loading:{type:Boolean,default:!1}}};var ee=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"empty"},[n("div",{staticClass:"icon"},[e._t("icon",[e.loading?n("loading",{staticClass:"empty-icon"}):n("empty",{staticClass:"empty-icon"})])],2),e._v(" "),n("h3",{staticClass:"text"},[e._t("default",[e._v(e._s(e.text?e.text:e.loading?"加载中……":"暂无搜索结果"))])],2)])};ee._withStripped=!0;const te=G({render:ee,staticRenderFns:[]},void 0,Z,void 0,!1,void 0,!1,void 0,void 0,void 0);function ne(e){return ne="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},ne(e)}var ie={data:function(){var e=this;return{tableData:[],selectionContent:{selectedRowKeys:[],selectedRows:{},noSelectedRowKeys:[],noSelectedRows:{},selectType:"",rowSelection:{},primaryKey:"skuId"},pagination:{total:0,pageSize:30,current:1,showQuickJumper:!0,showSizeChanger:!0,pageSizeOptions:["30","50","100"],showTotal:function(t){return"总".concat(t,"条，每页显示").concat(e.pagination.pageSize,"条")}},selectionConfig:{selections:!0},tableSelection:{onChange:null,onSelect:null,onSelectAll:null,onSelectInvert:null,currentPage:null,allPage:null},resultMap:{},searchResult:{}}},computed:{selectOnIndeterminate:function(){return"allPage"===this.selectionContent.selectType&&!!this.selectionContent.noSelectedRowKeys.length&&!!this.selectionContent.selectedRowKeys.length},hasOverSelectionLimit:function(){return this.selectionLimit&&this.selectionContent.selectedRowKeys.length>=this.selectionLimit},rowSelection:function(){var e=this,t=this;return Q(Q({},t.selectionContent.rowSelection),{},{selectedRowKeys:t.selectionContent.selectedRowKeys,onChange:function(e,n){var i;console.log("onChange selectedRowKeys",e),console.log("onChange selectedRows",n);var o=t.selectionContent.primaryKey;if("allPage"===t.selectionContent.selectType&&!e.length)return t.selectionContent.selectType="",void t.handleSelectedClear();if(t.selectionLimit&&e.length>t.selectionLimit)t.$message.warning("最多选择".concat(t.selectionLimit,"条"));else{t.selectionContent.selectedRowKeys=e;var s=t.selectionContent.noSelectedRows,a=t.selectionContent.selectedRows,l=!1;t.tableData.forEach((function(n){e.includes(n[o])?("allPage"===t.selectionContent.selectType&&(l=!0,delete s[n[o]]),a[n[o]]=n):("allPage"===t.selectionContent.selectType&&(l=!0,s[n[o]]=n),delete a[n[o]])})),t.selectionContent.noSelectedRows=s,t.selectionContent.selectedRows=a,"allPage"===t.selectionContent.selectType&&l&&t._generateNoSelectKey();for(var r=arguments.length,c=new Array(r>2?r-2:0),d=2;d<r;d++)c[d-2]=arguments[d];t.tableSelection.onChange&&(i=t.tableSelection).onChange.apply(i,[e,n].concat(c))}},onSelect:function(e,n,i,o){t.tableSelection.onSelect&&t.tableSelection.onSelect(e,n,i,o)},onSelectAll:function(e,n,i){t.tableSelection.onSelectAll&&t.tableSelection.onSelectAll(e,n,i)},onSelectInvert:function(e){t.tableSelection.onSelectInvert&&t.tableSelection.onSelectInvert(e)},hideDefaultSelections:!0,selections:!!t.selectionConfig.selections&&[{key:"currentPage",text:"当前页",onSelect:function(n){"allPage"===t.selectionContent.selectType&&t.handleSelectedClear(),t.selectionContent.selectType="currentPage";var i=t.selectionContent.primaryKey,o=[],s=[];t.tableData.forEach((function(e){t.selectionContent.selectedRowKeys.includes(e[i])?o.push(e):s.push(e)}));var a=e.selectionContent.selectedRows;if((o.length&&s.length||!o.length)&&s.forEach((function(e){a[e[i]]=e})),!s.length){var l=t.selectionContent.selectedRows;o.forEach((function(e){delete l[e[i]]}))}t.selectionContent.selectedRows=a,t._generateKey()}},{key:"allPage",text:"所有页",onSelect:function(e){if("allPage"===t.selectionContent.selectType&&(t.selectionContent.selectedRowKeys.length||t.selectionContent.noSelectedRowKeys.length))t.handleSelectedClear();else{t.selectionContent.selectType="allPage";var n=t.selectionContent.primaryKey;t.tableData.forEach((function(e){t.selectionContent.selectedRows[e[n]]=e}))}t._generateKey()}}]})}},methods:{setPagination:function(e){this.pagination=Q({total:0,pageSize:10,current:1,showQuickJumper:!0,showSizeChanger:!0,pageSizeOptions:["5","10","20"],showTotal:function(e){return"总".concat(e,"条")}},e)},setRowSelection:function(e){this.selectionContent.rowSelection=e},dealSelectionCheckBox:function(){var e=this;"allPage"===this.selectionContent.selectType&&(this.tableData.forEach((function(t){try{e.selectionContent.selectedRows[t[e.selectionContent.primaryKey]]||e.selectionContent.noSelectedRows[t[e.selectionContent.primaryKey]]||(e.selectionContent.selectedRows[t[e.selectionContent.primaryKey]]=t)}catch(e){console.log(e)}})),this._generateKey())},_generateKey:function(){var e=[];for(var t in this.selectionContent.selectedRows)this.selectionContent.selectedRows.hasOwnProperty(t)&&e.push(t);this.selectionContent.selectedRowKeys=e},_generateNoSelectKey:function(){var e=[];for(var t in this.selectionContent.noSelectedRows)this.selectionContent.noSelectedRows.hasOwnProperty(t)&&e.push(t);this.selectionContent.noSelectedRowKeys=e},handleSelectedClear:function(){return this.selectionContent.selectedRowKeys=[],this.selectionContent.selectedRows={},this.selectionContent.noSelectedRowKeys=[],this.selectionContent.noSelectedRows=[],this.selectionContent.selectType="",this},getRowData:function(e){var t=[];if(e)for(var n in this.selectionContent.noSelectedRows)this.selectionContent.noSelectedRows.hasOwnProperty(n)&&t.push(this.selectionContent.noSelectedRows[n]);else for(var i in this.selectionContent.selectedRows)this.selectionContent.selectedRows.hasOwnProperty(i)&&t.push(this.selectionContent.selectedRows[i]);return t},setTableSelectType:function(e){this.selectionContent.selectType=e,this.handleSelectedClear()},setSelectRows:function(e){var t=this;e.forEach((function(e){t.selectionContent.selectedRows[e[t.selectionContent.primaryKey]]=e}))},setSelectionStatus:function(e){this.selectionConfig.selections=e},rowClick:function(e){var t=this;if(console.log("单击",e),this.multiple)if(this.selectionContent.selectedRowKeys.includes(e[this.baseReplaceFields.key]))this.selectionContent.selectedRowKeys=this.selectionContent.selectedRowKeys.filter((function(n){return n!==e[t.baseReplaceFields.key]})),delete this.selectionContent.selectedRows[e[this.baseReplaceFields.key]];else{if(this.hasOverSelectionLimit)return void this.$message.warning("最多选择".concat(this.selectionLimit,"条"));this.selectionContent.selectedRowKeys.push(e[this.baseReplaceFields.key]),this.selectionContent.selectedRows[e[this.baseReplaceFields.key]]=e}else this.selectionContent.selectedRowKeys=[e[this.baseReplaceFields.key]],this.selectionContent.selectedRows=q({},e[this.baseReplaceFields.key],e)},dbRowClick:function(e){console.log("双击",e),this.selectionContent.selectedRowKeys.includes(e[this.baseReplaceFields.key])||this.hasOverSelectionLimit||(this.selectionContent.selectedRowKeys.push(e[this.baseReplaceFields.key]),this.selectionContent.selectedRows[e[this.baseReplaceFields.key]]=e),this.handleOk&&this.handleOk()},dealResult:function(){var e=this;if(this.rules)for(var t in this.rules)if(this.rules.hasOwnProperty(t)){var n=this.rules[t];"object"===ne(n)?(this.$refs[this.resultMap[t].ref]&&this.$refs[this.resultMap[t].ref].setData(n),this.resultMap[t]?this.searchResult[this.resultMap[t].key]=n.id:this.searchResult[t]=n.id,this.disabled[t]=!!n.disabled):this.resultMap[t]?this.searchResult[this.resultMap[t].key]=n:this.searchResult[t]=n}return this.defaultValue&&(this.selectionContent.selectedRowKeys=[],this.defaultValue.constructor===Array?this.defaultValue.forEach((function(t){e.selectionContent.selectedRowKeys.push(t[e.baseReplaceFields.key]),e.selectionContent.selectedRows=Q(Q({},e.selectionContent.selectedRows),{},q({},t[e.baseReplaceFields.key],t))})):(this.selectionContent.selectedRowKeys=[this.defaultValue[this.baseReplaceFields.key]],this.selectionContent.selectedRows=q({},this.defaultValue[this.baseReplaceFields.key],this.defaultValue))),this}}};const oe={name:"IconFontBox",props:{type:{type:String,default:"iconqiyeweixin_021"},height:{type:[String,Number],default:""},color:{type:String,default:""},size:{type:[String,Number],default:"20"},display:{type:String,default:"inline-block"},overflow:{type:String,default:"hidden"}},components:{IconFont:X.default},methods:{handleClick:function(){this.$emit("click")}}};var se=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"icon-font-wrap",style:{height:"auto"===e.height?"auto":e.height?e.height+"px":e.size+"px",color:e.color,fontSize:e.size+"px",display:e.display,overflow:e.overflow},on:{click:e.handleClick}},[n("icon-font",{staticClass:"icon-font-box",attrs:{type:e.type}})],1)};se._withStripped=!0;const ae=G({render:se,staticRenderFns:[]},void 0,oe,void 0,!1,void 0,!1,void 0,void 0,void 0);var le=U.default.prototype.$isServer,re=!le&&document.addEventListener?function(e,t,n){e&&t&&n&&e.addEventListener(t,n,!1)}:function(e,t,n){e&&t&&n&&e.attachEvent("on"+t,n)},ce=!le&&document.removeEventListener?function(e,t,n){e&&t&&e.removeEventListener(t,n,!1)}:function(e,t,n){e&&t&&e.detachEvent("on"+t,n)};function de(e){var t=!1;return function(){for(var n=this,i=arguments.length,o=new Array(i),s=0;s<i;s++)o[s]=arguments[s];t||(t=!0,window.requestAnimationFrame((function(){e.apply(n,o),t=!1})))}}"object"!==("undefined"==typeof Int8Array?"undefined":ne(Int8Array))&&(U.default.prototype.$isServer||document.childNodes),U.default.use(Y.default);var ue={CONTAIN:{name:"contain",icon:"fullscreen"},ORIGINAL:{name:"original",icon:"fullscreen-exit"}},he=!U.default.prototype.$isServer&&window.navigator.userAgent.match(/firefox/i)?"DOMMouseScroll":"mousewheel",fe={name:"hImageViewer",props:{host:{type:String},urlList:{type:Array,default:function(){return[]}},zIndex:{type:Number,default:2e3},onSwitch:{type:Function,default:function(){}},showDown:{type:Boolean,default:!0},onClose:{type:Function,default:function(){}},initialIndex:{type:Number,default:0},appendToBody:{type:Boolean,default:!0},maskClosable:{type:Boolean,default:!0},prefix:{type:[Boolean,String],default:!0}},data:function(){return{index:this.initialIndex,isShow:!1,infinite:!0,loading:!0,mode:ue.CONTAIN,transform:{scale:1,deg:0,offsetX:0,offsetY:0,enableTransition:!1},baseUrlList:[]}},computed:{picList:function(){var e=this;return this.urlList.filter((function(t,n){return n===e.index}))},isSingle:function(){return this.urlList.length<=1},isFirst:function(){return 0===this.index},isLast:function(){return this.index===this.urlList.length-1},currentImg:function(){return this.baseUrlList[this.index]},imgStyle:function(){var e=this.transform,t=e.scale,n=e.deg,i=e.offsetX,o=e.offsetY,s=e.enableTransition,a={transform:"scale(".concat(t,") rotate(").concat(n,"deg)"),transition:s?"transform .3s":"","margin-left":"".concat(i,"px"),"margin-top":"".concat(o,"px")};return this.mode===ue.CONTAIN&&(a.maxWidth=a.maxHeight="100%"),a}},watch:{index:{handler:function(e){this.reset(),this.onSwitch(e)}},currentImg:function(){var e=this;this.$nextTick((function(){e.$refs.img[0].complete||(e.loading=!0)}))},urlList:{handler:function(){this.exchangeImage()},deep:!0}},methods:{exchangeImage:function(){var e=this.prefix,t=this.baseUrlList,n="";"string"==typeof e?n=e:e&&(n=this.host);for(var i=0;i<this.urlList.length;i++){var o=this.urlList[i];if(/(http|https):\/\//.test(o))t.push(o);else{var s=o.indexOf("/")>0?"/":"";t.push("".concat(n).concat(s?"/":"").concat(o))}}},hide:function(){this.deviceSupportUninstall(),this.onClose()},download:function(){this.$emit("download",this.currentImg)},deviceSupportInstall:function(){var e=this;this._keyDownHandler=de((function(t){switch(t.keyCode){case 27:e.hide();break;case 32:e.toggleMode();break;case 37:e.prev();break;case 38:e.handleActions("zoomIn");break;case 39:e.next();break;case 40:e.handleActions("zoomOut")}})),this._mouseWheelHandler=de((function(t){(t.wheelDelta?t.wheelDelta:-t.detail)>0?e.handleActions("zoomIn",{zoomRate:.015,enableTransition:!1}):e.handleActions("zoomOut",{zoomRate:.015,enableTransition:!1})})),re(document,"keydown",this._keyDownHandler),re(document,he,this._mouseWheelHandler)},deviceSupportUninstall:function(){ce(document,"keydown",this._keyDownHandler),ce(document,he,this._mouseWheelHandler),this._keyDownHandler=null,this._mouseWheelHandler=null},handleImgLoad:function(){this.loading=!1},handleImgError:function(e){this.loading=!1,e.target.alt="加载失败"},handleMouseDown:function(e){var t=this;if(!this.loading&&0===e.button){var n=this.transform,i=n.offsetX,o=n.offsetY,s=e.pageX,a=e.pageY;this._dragHandler=de((function(e){t.transform.offsetX=i+e.pageX-s,t.transform.offsetY=o+e.pageY-a})),re(document,"mousemove",this._dragHandler),re(document,"mouseup",(function(){ce(document,"mousemove",t._dragHandler)})),e.preventDefault()}},handleMaskClick:function(){this.maskClosable&&this.hide()},reset:function(){this.transform={scale:1,deg:0,offsetX:0,offsetY:0,enableTransition:!1}},toggleMode:function(){if(!this.loading){var e=Object.keys(ue),t=(Object.values(ue).indexOf(this.mode)+1)%e.length;this.mode=ue[e[t]],this.reset()}},prev:function(){if(!this.isFirst||this.infinite){var e=this.urlList.length;this.index=(this.index-1+e)%e}},next:function(){if(!this.isLast||this.infinite){var e=this.urlList.length;this.index=(this.index+1)%e}},handleActions:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};if(!this.loading){var n=Q({zoomRate:.2,rotateDeg:90,enableTransition:!0},t),i=n.zoomRate,o=n.rotateDeg,s=n.enableTransition,a=this.transform;switch(e){case"zoomOut":a.scale>.2&&(a.scale=parseFloat((a.scale-i).toFixed(3)));break;case"zoomIn":a.scale=parseFloat((a.scale+i).toFixed(3));break;case"clocelise":a.deg+=o;break;case"anticlocelise":a.deg-=o}a.enableTransition=s}}},mounted:function(){this.deviceSupportInstall(),this.appendToBody&&document.body.appendChild(this.$el),this.$refs["h-image-viewer__wrapper"].focus(),this.exchangeImage()},destroyed:function(){this.appendToBody&&this.$el&&this.$el.parentNode&&this.$el.parentNode.removeChild(this.$el)}};const pe=fe;var ge=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("transition",{attrs:{name:"viewer-fade"}},[n("div",{ref:"h-image-viewer__wrapper",staticClass:"h-image-viewer__wrapper",style:{"z-index":e.zIndex},attrs:{tabindex:"-1"}},[n("div",{staticClass:"h-image-viewer__mask",on:{click:function(t){return t.target!==t.currentTarget?null:e.handleMaskClick(t)}}}),e._v(" "),n("span",{staticClass:"h-image-viewer__btn h-image-viewer__close",on:{click:e.hide}},[n("a-icon",{attrs:{type:"close"}})],1),e._v(" "),e.isSingle?e._e():[n("span",{staticClass:"h-image-viewer__btn h-image-viewer__prev",class:{"is-disabled":!e.infinite&&e.isFirst},on:{click:e.prev}},[n("a-icon",{attrs:{type:"arrow-left"}})],1),e._v(" "),n("span",{staticClass:"h-image-viewer__btn h-image-viewer__next",class:{"is-disabled":!e.infinite&&e.isLast},on:{click:e.next}},[n("a-icon",{attrs:{type:"arrow-right"}})],1)],e._v(" "),n("div",{staticClass:"h-image-viewer__btn h-image-viewer__actions"},[n("div",{staticClass:"h-image-viewer__actions__inner"},[n("a-icon",{attrs:{type:"zoom-out"},on:{click:function(t){return e.handleActions("zoomOut")}}}),e._v(" "),n("a-icon",{attrs:{type:"zoom-in"},on:{click:function(t){return e.handleActions("zoomIn")}}}),e._v(" "),n("a-icon",{attrs:{type:"undo"},on:{click:function(t){return e.handleActions("anticlocelise")}}}),e._v(" "),n("a-icon",{attrs:{type:"redo"},on:{click:function(t){return e.handleActions("clocelise")}}}),e._v(" "),e.showDown?n("a-icon",{attrs:{type:"download"},on:{click:e.download}}):e._e()],1)]),e._v(" "),n("div",{staticClass:"h-image-viewer__canvas"},[e._l(e.picList,(function(t){return n("img",{key:t,ref:"img",refInFor:!0,staticClass:"h-image-viewer__img",style:e.imgStyle,attrs:{src:e.currentImg},on:{load:e.handleImgLoad,error:e.handleImgError,mousedown:e.handleMouseDown}})})),e._v(" "),e.loading?n("a-icon",{staticClass:"h-image-loading",attrs:{type:"loading"}}):e._e()],2)],2)])};ge._withStripped=!0;const me=G({render:ge,staticRenderFns:[]},void 0,pe,void 0,!1,void 0,!1,void 0,void 0,void 0);var ye="",ve=function(){return void 0!==document.documentElement.style.objectFit},we=function(e,t){return be(e,null!==t||void 0!==t?t?"overflow-y":"overflow-x":"overflow").match(/(scroll|auto)/)},be=function(e,t){return(window.getComputedStyle?window.getComputedStyle(e,null):e.currentStyle)[t]},Ce="none",_e="contain",Se="cover",Re="fill",ke="scale-down",xe={name:"HImage",inheritAttrs:!1,props:{src:String,fit:String,lazy:Boolean,scrollContainer:{},previewBtn:{},previewSrcList:{type:Array,default:function(){return[]}},zIndex:{type:Number,default:2e3},showDown:{type:Boolean,default:!1},initial:{type:Number,default:0},prefix:{type:[Boolean,String],default:!0},popover:{type:Boolean,default:!1},popoverConfig:{type:Object,default:function(){return{placement:"right",trigger:"hover",width:"200px",height:"100%"}}}},components:{IconFontBox:ae,IconFont:X.default,ImageViewer:me},data:function(){return{loading:!0,error:!1,show:!this.lazy,imageWidth:0,imageHeight:0,showViewer:!1,imageSrc:""}},provide:function(){return{download:this.download}},computed:{imgHost:function(){return this.$config?this.$config.cosPrefix:""},imageStyle:function(){var e=this.fit;return window&&e?ve()?{"object-fit":e}:this.getImageStyle(e):{}},alignCenter:function(){return window&&!ve()&&this.fit!==Re},preview:function(){var e=this.previewSrcList;return Array.isArray(e)&&e.length>0},imageIndex:function(){var e=this.initial||0,t=this.previewSrcList.indexOf(this.src);return t>=0&&(e=t),e}},watch:{src:function(){this.imageSrc=this.exchangeImage(),this.show&&this.loadImage()},show:function(e){e&&this.loadImage()}},mounted:function(){this.imageSrc=this.exchangeImage(),this.lazy?this.addLazyLoadListener():this.loadImage()},beforeDestroy:function(){this.lazy&&this.removeLazyLoadListener()},methods:{exchangeImage:function(){var e=this.src,t=this.prefix;if(!e)return e;if(/(http|https):\/\//.test(e))return e;var n="";"string"==typeof t?n=t:t&&(n=this.imgHost);var i=e.indexOf("/")>0;return"".concat(n).concat(i?"/":"").concat(e)},handleLazyLoad:function(){var e,t,n,i;e=this.$el,t=this._scrollContainer,i=e.getBoundingClientRect(),n=[window,document,document.documentElement,null,void 0].includes(t)?{top:0,right:window.innerWidth,bottom:window.innerHeight,left:0}:t.getBoundingClientRect(),i.top<n.bottom&&i.bottom>n.top&&i.right>n.left&&i.left<n.right&&(this.show=!0,this.removeLazyLoadListener())},download:function(e){this.$emit("download",e)},addLazyLoadListener:function(){var e,t,n=this.scrollContainer,i=null;(t=n)&&t.nodeType===Node.ELEMENT_NODE?i=n:(e=n,i="[object String]"===Object.prototype.toString.call(e)?document.querySelector(i):function(e){for(var t=e;t;){if([window,document,document.documentElement].includes(parent))return window;if(we(t))return t;t=t.parentNode}return t}(this.$el)),i&&(this._scrollContainer=i,this._lazyLoadHandler=function(e,t,n,i){var o,s=!1,a=0;function l(){o&&clearTimeout(o)}function r(){for(var r=arguments.length,c=new Array(r),d=0;d<r;d++)c[d]=arguments[d];var u=this,h=Date.now()-a;function f(){a=Date.now(),n.apply(u,c)}function p(){o=void 0}s||(i&&!o&&f(),l(),void 0===i&&h>e?f():!0!==t&&(o=setTimeout(i?p:f,void 0===i?e-h:e)))}return"boolean"!=typeof t&&(i=n,n=t,t=void 0),r.cancel=function(){l(),s=!0},r}(200,this.handleLazyLoad),i.addEventListener("scroll",this._lazyLoadHandler,!1),this.handleLazyLoad())},removeLazyLoadListener:function(){var e=this._scrollContainer,t=this._lazyLoadHandler;!this.$isServer&&e&&t&&(e.removeEventListener("scroll",t),this._scrollContainer=null,this._lazyLoadHandler=null)},loadImage:function(){var e=this;if(window){this.loading=!0,this.error=!1;var t=new Image;t.onload=function(n){return e.handleLoad(n,t)},t.onerror=this.handleError.bind(this),Object.keys(this.$attrs).forEach((function(n){var i=e.$attrs[n];t.setAttribute(n,i)})),t.src=this.imageSrc}},handleLoad:function(e,t){this.imageWidth=t.width,this.imageHeight=t.height,this.loading=!1,this.error=!1},handleError:function(e){this.loading=!1,this.error=!0,this.$emit("error",e)},getImageStyle:function(e){var t=this.imageWidth,n=this.imageHeight,i=this.$el,o=i.clientWidth,s=i.clientHeight;if(!(t&&n&&o&&s))return{};var a=t/n<1;switch(e===ke&&(e=t<o&&n<s?Ce:_e),e){case Ce:return{width:"auto",height:"auto"};case _e:return a?{width:"auto"}:{height:"auto"};case Se:return a?{height:"auto"}:{width:"auto"};default:return{}}},clickHandler:function(e){!this.preview&&this.previewBtn||this.openViewer()},openViewer:function(){ye=document.body.style.overflow,document.body.style.overflow="hidden",this.showViewer=!0},closeViewer:function(){document.body.style.overflow=ye,this.showViewer=!1}}};const Le=xe;var Te=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"a-image"},[e.loading?e._t("placeholder",[n("div",{staticClass:"a-image__placeholder"},[e._t("loading",[n("a-icon",{staticClass:"placeholder-icon",attrs:{type:"picture"}})])],2)]):e.error&&e.src?e._t("error",[n("div",{staticClass:"a-image__error"},[n("icon-font",{staticClass:"img-icon",attrs:{type:"icontupianjiazaishibai"}})],1)]):e.popover&&e.src?n("a-popover",{attrs:{placement:e.popoverConfig.placement,trigger:e.popoverConfig.trigger}},[n("template",{slot:"content"},[n("img",{style:{width:e.popoverConfig.width,height:e.popoverConfig.height},attrs:{src:e.src}})]),e._v(" "),n("img",e._g(e._b({staticClass:"a-image__inner",class:{"a-image__inner--center":e.alignCenter,"a-image__preview":e.preview},style:e.imageStyle,attrs:{src:e.imageSrc},on:{click:e.clickHandler}},"img",e.$attrs,!1),e.$listeners))],2):e.src?n("img",e._g(e._b({staticClass:"a-image__inner",class:{"a-image__inner--center":e.alignCenter,"a-image__preview":e.preview},style:e.imageStyle,attrs:{src:e.imageSrc},on:{click:e.clickHandler}},"img",e.$attrs,!1),e.$listeners)):e.src?e._e():e._t("none",[n("div",{staticClass:"a-image__none"},[n("icon-font",{staticClass:"img-icon",attrs:{type:"iconzanwutupian2"}})],1)]),e._v(" "),e.preview?[e.showViewer?n("image-viewer",{attrs:{"z-index":e.zIndex,"initial-index":e.imageIndex,"on-close":e.closeViewer,showDown:e.showDown,"url-list":e.previewSrcList,prefix:e.prefix,host:e.imgHost},on:{download:e.download}}):e._e()]:e._e()],2)};Te._withStripped=!0;const Ie=G({render:Te,staticRenderFns:[]},void 0,Le,void 0,!1,void 0,!1,void 0,void 0,void 0),Oe={name:"TableCellEllipsisTip",props:{onlyLine:{type:Boolean,default:!1},line:{type:Number,default:1},text:{type:[String,Number],default:""},tip:{type:[String,Number],default:""},position:{type:String,default:"bottom"},id:{type:[String,Number],default:M.guid()},tipExtAttr:{type:Object,default:function(){return{}}}},data:function(){return{elId:M.guid().substr(0,5),showTip:!1,actualTip:""}},computed:{cellStyle:function(){return{"line-clamp":this.line}}},mounted:function(){this.tipChange()},updated:function(){this.tipChange()},methods:{tipChange:function(){var e=this;try{var t=this.text?this.text:this.$el.innerText;this.actualTip=this.tip?this.tip:t,this.$nextTick((function(){setTimeout((function(){try{var t=document.getElementById(e.elId);e.showTip=!!t&&M.isEllipsis(t)}catch(e){console.error("请注意，TableCellEllipsisTip 组件没有获取到有效的 tip 值！")}}),0)}))}catch(e){console.error("请注意，TableCellEllipsisTip 组件没有获取到有效的 tip 值！")}}}};var ze=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"cell-ellipsis-wrap",attrs:{id:"cell-ellipsis-"+e.id,"cell-ellipsis-id":e.id}},[e.showTip&&!e.onlyLine?n("a-tooltip",e._b({class:"cell-tooltip-"+e.id,attrs:{placement:e.position}},"a-tooltip",e.tipExtAttr,!1),[n("template",{slot:"title"},[e._t("tip",[e._v(e._s(e.actualTip))])],2),e._v(" "),n("div",{staticClass:"cell-content cell-ellipsis",style:e.cellStyle,attrs:{id:e.elId}},[e._t("default",[e._v("\n        "+e._s(e.text)+"\n      ")])],2)],2):n("div",{staticClass:"cell-content cell-ellipsis",style:e.cellStyle,attrs:{id:e.elId}},[e._t("default",[e._v("\n      "+e._s(e.text)+"\n    ")])],2)],1)};ze._withStripped=!0;const Ee=G({render:ze,staticRenderFns:[]},void 0,Oe,void 0,!1,void 0,!1,void 0,void 0,void 0);var $e="".concat("/gateway/goodsservice/api/v1/","goods/custom/list"),Fe={name:"SelectProduct",mixins:[ie],components:{Empty:te,HImage:Ie,CellEllipsisTip:Ee},props:{value:{type:[Array,Object],default:function(){return[]}},title:{type:String,default:"选择商品"},visible:{type:Boolean,default:!1},okText:{type:String,default:"确定"},cancelText:{type:String,default:"取消"},beforeClose:{type:Function,default:null},productType:{type:Number,default:1},replaceFields:{type:Object,default:function(){return{key:"id"}}}},data:function(){return{loading:!1,scrollHeight:532,tableLoading:!1,selectionConfig:{selections:!1},modalReplaceFields:{key:"id"}}},watch:{visible:function(e){e&&(this.modalReplaceFields=Q({key:"id"},this.replaceFields),this.selectionContent.primaryKey=this.modalReplaceFields.key,this.loadTableData())}},computed:{tableConfig:function(){return{locale:{emptyText:this.tableLoading?"加载中":""}}},modalVisible:{get:function(){return this.visible},set:function(e){this.$emit("update:visible",e)}}},methods:{loadTableData:function(){var e=this,t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.pagination;this.loading=!0,this.request({isShowSku:!0,pageNum:t.current,pageSize:t.pageSize,type:this.productType,sort:-1}).then((function(n){console.log(n),e.tableData=n.data&&n.data.list||[],t.total=n.data.total,e.pagination=t,e.loading=!1})).catch((function(){e.loading=!1}))},request:function(e){return this.$get($e,e)},okHandle:function(){this.beforeClose?this.beforeClose({selectedRowKeys:this.selectionContent.selectedRowKeys,selectedRow:this.getRowData()},this.cancelHandle):(this.$emit("confirm",{selectedRowKeys:this.selectionContent.selectedRowKeys,selectedRow:this.getRowData()}),this.cancelHandle())},cancelHandle:function(){this.modalVisible=!1},pageChange:function(e){var t=e.pageSize,n=e.current;this.pagination.pageSize=t,this.pagination.current=n,this.loadTableData()}}};const Ke=Fe;var De=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("a-modal",{staticClass:"add-modal",staticStyle:{height:"90%"},attrs:{title:e.title,"ok-text":e.okText,"cancel-text":e.cancelText,width:1e3,maskClosable:!1,keyboard:!1},on:{ok:e.okHandle},model:{value:e.modalVisible,callback:function(t){e.modalVisible=t},expression:"modalVisible"}},[n("a-table",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],attrs:{"row-selection":e.rowSelection,"data-source":e.tableData,locale:e.tableConfig.locale,scroll:{y:e.scrollHeight},pagination:e.pagination,"row-key":e.modalReplaceFields.key},on:{change:e.pageChange}},[n("a-table-column",{key:"code",attrs:{title:"商品编号","data-index":"code"}}),e._v(" "),n("a-table-column",{key:"barCode",attrs:{title:"条码","data-index":"barCode"}}),e._v(" "),n("a-table-column",{key:"cover",attrs:{title:"图片","data-index":"cover"},scopedSlots:e._u([{key:"default",fn:function(e){return[n("div",{staticClass:"list-content-image"},[n("h-image",{attrs:{src:e,alt:""}})],1)]}}])}),e._v(" "),n("a-table-column",{key:"name",attrs:{title:"商品名称","data-index":"name"},scopedSlots:e._u([{key:"default",fn:function(t){return[n("cell-ellipsis-tip",{attrs:{line:2}},[e._v("\n          "+e._s(t)+"\n        ")])]}}])}),e._v(" "),n("a-table-column",{attrs:{title:"规格"},scopedSlots:e._u([{key:"default",fn:function(t){return[n("cell-ellipsis-tip",{attrs:{line:2}},[e._v("\n          "+e._s(t.skuAmount?t.skuAmount+"种":"无")+"\n        ")])]}}])}),e._v(" "),n("a-table-column",{key:"stock",attrs:{title:"库存","data-index":"stock"}})],1)],1)};De._withStripped=!0;const He=G({render:De,staticRenderFns:[]},void 0,Ke,void 0,!1,void 0,!1,void 0,void 0,void 0);return He.install=function(e){e.component(He.name,He)},He}))},bd45:function(e,t,n){"use strict";n.r(t);var i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("a-button",{on:{click:function(t){e.visible=!0}}},[e._v("显示弹窗")]),n("SelectProduct",{attrs:{visible:e.visible,replaceFields:{key:"spuId"}},on:{"update:visible":function(t){e.visible=t},confirm:e.confirmHandle},model:{value:e.select,callback:function(t){e.select=t},expression:"select"}})],1)},o=[],s=n("0aa1"),a=n.n(s),l={name:"AddProduct",components:{SelectProduct:a.a},data:function(){return{visible:!1,select:[80010102672723970]}},mounted:function(){this.visible=!0,console.log(a.a)},methods:{confirmHandle:function(e){console.log(e)}}},r=l,c=n("2877"),d=Object(c["a"])(r,i,o,!1,null,null,null);t["default"]=d.exports}}]);
//# sourceMappingURL=chunk-2b8206ab.6362706c.js.map