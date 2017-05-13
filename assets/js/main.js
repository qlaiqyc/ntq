"use strict";

PageInfo.register({ "type": "Start", "info": function info() {

		/**
     * 所有对象通过初始化进入 Start
     * require: 需要哪些 外部引用
     * Pub: 公共方法对象
     * Global: 此模块下全局遍历对象
     * Router : 路由对象 
     * */

		var Start = {};

		Start.require = {
			"$": "jquery",
			"menu": "/assets/js/components/common/menu"
		};
		Start.Router = {
			flag: "hash",
			list: {
				"index": "/assets/js/components/index",
				"doc/star": "/assets/js/components/doc/star",
				"doc/main": "/assets/js/components/doc/main",
				"doc/plug": "/assets/js/components/doc/plug",
				"doc/obj": "/assets/js/components/doc/obj",
				"doc/role": "/assets/js/components/doc/role"
			}
		};

		Start.Global = {
			"id": "qlive-body", //所有 主DIV
			"name": "QliveDoc" //项目名称
		};

		Start.Pub = function () {

			var HtmUtil = this.menu;
			var Funutil = PageInfo.FunUtil;

			$("body").append(HtmUtil.common4Menu({}));

			$("dl.layui-nav-child dd").unbind("click").bind("click", function () {
				var $a = $(this).find("a");
				Funutil.common4openUrl({ "url": $a.data("type") });
			});
		};

		return Start;
	} });
//# sourceMappingURL=main.js.map
