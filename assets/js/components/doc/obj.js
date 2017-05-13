"use strict";

PageInfo.register({
		"type": "Obj",
		"info": function info() {

				var PageObj = {};

				PageObj.require = {
						"$": "jquery",
						"layui": "layui"
				};

				PageObj.page = function () {

						var FunUtil = {};
						var HtmUtil = {};
						var Page = {};

						HtmUtil.layout = function () {
								var result = '<div id="doc-index" class="common-box"><p class="layui-elem-quote">基础模块对象</p><fieldset class="layui-elem-field"><legend>obj</legend><blockquote class="layui-elem-quote layui-quote-nm" style="border-width: 0"><p class="site-text">require<br>:异步请求 引入插件对象 ：当前 Page类使用 this.$ 获取 引入插件 ：当所有异步请求结束后，执行Page.show 方法</p></blockquote><div class="layui-field-box"><p>简易理解:单个模块JS 对象</p><img src="assets/img/icon-obj.png" style="margin: 10px auto"> <img src="assets/img/icon-obj-plug.png" style="width: 50%"></div></fieldset></div>';return result;
						};

						Page.data = function () {
								var param = {};param.HtmUtil = HtmUtil;return param;
						};

						Page.show = function () {};

						return Page;
				};

				return PageObj;
		}
});
//# sourceMappingURL=obj.js.map
