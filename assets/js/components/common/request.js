PageInfo.register({"type": "plug","info": function(require) {
		
	 
		var FunUtil = {};

		FunUtil.common4init = function() {

			String.HasText = function(str) {
				try {

					if(typeof(str) == "undefined") return false;
					if(str == null) return false;
					if(str == 'null') return false;
					if(str == 'undefined') return false;

					if(typeof(str) == 'string')
						str = str.replace(/(^\s*)|(\s*$)/g, '');
					if(str === '') return false;

				} catch(e) {
					return false;
				}
				return true;
			};
		};

		FunUtil.request = function(data) {
			FunUtil.common4init();
			var execuFun = {};

			execuFun.pub = function() {

				/*原理类似只需在options 添加参数进行判断 */
				var contentType = (data.method == "post") ? "application/x-www-form-urlencoded" : "application/json";

				contentType = "application/json";
				if(!String.HasText(data.method)) return;
				
				if(data.url.indexOf("addJobSeekerInfoAndResume") > 0) contentType = "multipart/form-data";

				$.ajax({
					type: data.method,
					url: data.url,
					data: data.param,
					dataType: "json",
					crossDomain:true,
					contentType: contentType,
					success: function(cdata) {

						data.success(cdata);
					},
					error: function(data) {

					}
				});

			};

			/* 
			 *  ==== 必填
			 * method: 执行方法 get post delete put
			 * url: 参数地址
			 * success:成功回调
			 * param: 传递参数
			 * 
			 *  ==== 可填可不填
			 * fail:失败回调
			 * async: 默认 true
			 * 
			 *FunUtil.request({"url","method":"put","param":{},"success":function(){
			 *}})
			 * 
			 * */
			execuFun.pub();

		};

		/*请求集合 */

		FunUtil.common4post = function(data, callback) {
			FunUtil.request({
				"method": "post",
				"url": data.url,
				"param": data.param,
				"success": callback
			});
		};

		FunUtil.common4get = function(data, callback) {

			FunUtil.request({
				"method": "get",
				"url": data.url,
				"param": data.param,
				"success": callback
			});

		}
		
		return FunUtil;
}});