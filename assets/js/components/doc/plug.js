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
								var result = '<div id="doc-index" class="common-box"><p class="layui-elem-quote">插件封装 引用</p><fieldset class="layui-elem-field"><legend>Jquery</legend><div class="layui-field-box"><p>简易理解:所有对象都是以对象返回，但是 类似Jquery 的二次封装 不必要返回原理，是Jquery copy 到全局变量 ，我们只需要直接引用即可</p><img src="assets/img/icon-plug.png" style="margin: 10px auto"></div></fieldset><fieldset class="layui-elem-field"><legend>自己封装的插件</legend><div class="layui-field-box"><p>简易理解:所有对象都是以对象返回，直接调用即可</p><img src="assets/img/icon-plug-common.png" style="margin: 10px auto"></div></fieldset></div>';return result;
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
//# sourceMappingURL=plug.js.map
