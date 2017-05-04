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
	 var execuFun ={};
	 
		execuFun.pub = function(){
			
			/*原理类似只需在options 添加参数进行判断 */
			var contentType = (data.method == "post") ? "application/x-www-form-urlencoded" :"application/json";
			 
			
		 
	        
	         $.ajax({
	             type:data.method,
	             url:data.url,
	             data: data.param,
	             dataType: "json",
	             contentType:contentType,
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
	
	FunUtil.common4post = function(data,callback){
		FunUtil.request({"method":"post","url":data.url,"param":data.param,"success":callback});
	};
	
	
	FunUtil.common4get = function(data,callback){
		
		FunUtil.request({"method":"get","url":data.url,"param":data.param,"success":callback});
		
	}
	
	
	FunUtil.rq = (function(){}(
		
		var burl = "http://119.23.69.169:8080/ntq/";
		
		return {
			 'getWeiXinMessage': function(url,typeFlag, success) {
                getData(dataUrl + "getWeiXinMessage", {url: url, typeFlag: typeFlag}, success);
            },
			
			
			
		};
		
	));
	
 	
 	FunUtil.rq4addCompanyInfoWithPositionInfoList = function(data,success){
		var url = "/addCompanyInfoWithPositionInfoList.action"
		
		var param = {
			"url":url,
			"param":data
		}
		FunUtil.common4post(param,success);
	};
	
	FunUtil.rq4addCompanyInfoWithPositionInfoList = function(data,success){
		var url = "companyInfo/addCompanyInfoWithPositionInfoList.action"
		
		var param = {
			"url":url,
			"param":data
		}
		FunUtil.common4post(param,success);
	};
	 
	FunUtil.rq4verifyMessageCode = function(data,success){
		var url = "companyInfo/verifyMessageCode.action"
		//phoneNumber=15123247211&&verifyCode=1
		var param = {
			"url":url,
			"param":data
		}
		FunUtil.common4get(param,success);
	};
	
	FunUtil.rq4getMessageCode = function(data,success){
		var url = "companyInfo/getMessageCode.action";
		//"phoneNumber"
	 
		var param = {
			"url":url,
			"param":data
		}
		FunUtil.common4get(param,success);
	};
 
	

	
	FunUtil.rq4addCompanyInfoWithPositionInfoList = function(data,success){
		var url = "companyInfo/addCompanyInfoWithPositionInfoList.action"
		 companyInfo/getMessageAfterValidatePhoneNumber.action?phoneNumber=15123247202
		var param = {
			"url":url,
			"param":data
		}
		FunUtil.common4post(param,success);
	};
 
 	
 	return FunUtil
 
 
})()});
