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
								var result = '<div id="doc-index" class="common-box"><p class="layui-elem-quote">规范事项</p><fieldset class="layui-elem-field"><legend>命名规范</legend><div class="layui-field-box"></div></fieldset></div>';return result;
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
//# sourceMappingURL=role.js.map
