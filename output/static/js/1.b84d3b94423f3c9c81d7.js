webpackJsonp([1,18],{43:function(t,e,o){var a,n,i={};o(44),a=o(45),n=o(46),t.exports=a||{},t.exports.__esModule&&(t.exports=t.exports.default);var s="function"==typeof t.exports?t.exports.options||(t.exports.options={}):t.exports;n&&(s.template=n),s.computed||(s.computed={}),Object.keys(i).forEach(function(t){var e=i[t];s.computed[t]=function(){return e}})},44:function(t,e){},45:function(t,e,o){(function(t){"use strict";function a(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var n=o(10),i=a(n),s=o(11),r=a(s),c=o(15),l=a(c);i.default.mock("reslist.json",{retcode:1,retmsg:"查询成功",data:{total:1,records:10,page:1,"rows|10":[{"id|+1":1,caipiaotype:"@natural(1, 3)","periods|+1":"11000002",downtime:"@natural(14592352, 64592352)","publishtime|+10":"1460448164569",title:"@csentence(6, 10)",cover:"@image(200x200, #ff6666, Hello)",wuser:'{"nickname":"抽奖小王子","buycount":1199,"bingocode":"10001167"}'}]}}),e.default={data:function(){return{lists:[],page:1,scroll:!0,loading:!0}},route:{data:function(e){var o=this;o.getAjaxData(e),t(window).on("scroll",function(t){o.getScrollData(t)})},deactivate:function(e){var o=this;o.lists=[],o.page=1,t(window).off("scroll"),e.next()}},ready:function(){},methods:{getAjaxData:function(t){var e=this;e.$http.get("reslist.json").then(function(t){e.loading=!1;var o=t.data;if(e.loadshow=!0,1==o.retcode){var a=o.data.rows;1===e.page?e.lists=a:e.lists=e.lists.concat(a)}},function(t){})},getScrollData:function(e){var o=this;if(o.scroll){var a=parseFloat(t(window).height())+parseFloat(t(window).scrollTop());t(document).height()<=a+200&&(o.scroll=!1,o.page++,o.page<=3&&o.getAjaxData(e))}},runtime:function(t,e){}},components:{appheader:r.default,Loading:l.default}}}).call(e,o(9))},46:function(t,e){t.exports=" <div class=indiana> <appheader title=最新活动></appheader> <div class=new-active> 最新活动敬请期待... </div> <loading :show=loading></loading> </div> "}});
//# sourceMappingURL=1.b84d3b94423f3c9c81d7.js.map