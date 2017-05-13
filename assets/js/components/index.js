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
								var result = '<div id="doc-index" class="common-box"><p class="layui-elem-quote">结构目录</p><img src="assets/img/icon-start.png"><fieldset class="layui-elem-field"><legend>示例：</legend><div class="layui-field-box"><img src="assets/img/icon-demo.png"></div></fieldset></div>';return result;
						};

						Page.data = function () {
								var param = {};param.HtmUtil = HtmUtil;return param;
						};

						Page.show = function () {
								console.log(1213);
						};

						return Page;
				};

				return PageObj;
		}
});
//# sourceMappingURL=index.js.map
