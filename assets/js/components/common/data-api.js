PageInfo.register({"type":"plug","info":(function(){
 
 
	var FunUtil = {};
	
	FunUtil.common4init = function(){
 		
 		String.HasText = function(str) {
			try{
			
			if (typeof(str) == "undefined") return false;
			if (str == null) return false;
			if (str == 'null') return false;
			if (str == 'undefined') return false;
		
			if (typeof(str) == 'string')
				str = str.replace(/(^\s*)|(\s*$)/g, '');
			if (str === '') return false;
			
			}catch(e){
				return false;
			}
			return true;
		};
 	};
	
	FunUtil.request = function(data){
		FunUtil.common4init();
		var execuFun = {};
		
		execuFun.restDate = function(param){
			var options = {};
			options.url 		= data.url;	
			options.async       = String.HasText(data.async) ? data.async :true;
			options.success     = data.success;
			options.fail        = data.fail;
			options.failFlag    = String.HasText(data.failFlag) ? data.async :true;
			options.param		= data.param;
			
			return options;
		};
		
		execuFun.pub = function(options){
			
			/*原理类似只需在options 添加参数进行判断 */
			var param = options.ajax ;//
			var contentType = (param.method == "POST") ? "application/x-www-form-urlencoded" :"application/json";
			
			//整合参数
			var url 	= options.url;
			var async 	= options.async;
			var success = options.success;
			var fail 	= options.fail;
			var failFlag= options.failFlag;
			var options = options.param;
			
			
			var newData = sortOptions(url,options);
	        var NewOptions = newData.objParameter;
	        $.ajax({
	            url: url + memory.accessSuffix,
	            
	            type:param.method,
	            contentType:contentType,
	            async : async,
	            data: NewOptions,
	            success: function(data) {
	                if (data.success) {
	                    if (data.value == -999) {
	                        if (failFlag == FailFlag.Option_None) {
	                            success(data.value);
	                            // here will not
	                        } else if (failFlag == FailFlag.Option_NeedLogin) {
	                            window.location.href =  memory.rootUrl.main + 'error.html';
	                        } else if (failFlag == FailFlag.Option_ShowFlag) {
	                            success(FailFlag.LoginFailFlag);
	                        }
	                    }else if (data.value == -10000) {
	                        window.location.href =  memory.rootUrl.main + 'frozen.html';
	                    }else {
	                        success(data.value);
	                    }
	                } else {
	                    //commonFail(data.value);
	                }
	            },
	            error: function(data) {
	                if ($.isFunction(fail)) {
	                    fail(data);
	                }
	               /* if ($.isFunction(networkFail)) {
	                    networkFail(data);
	                }*/
	            }
	        });
			
			
			
		};
		
		var options 	= execuFun.restDate();
		options.ajax 	= {"method":data.method};
		
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
		 * failFlag 默认  FailFlag.Option_None 0
		 * 
		 *FunUtil.request({"url","method":"put","param":{},"success":function(){
		 *}})
		 * 
		 * */
		execuFun.pub(options);
		
		
	};
	
	
	/*请求集合 */
	
	
	FunUtil.rq4 = function(data,success){
		
		
	};
 
 	
 	return FunUtil
 
 
})()});
