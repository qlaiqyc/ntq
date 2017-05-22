PageInfo.register({"type":"Obj","info":function(){
	
    var PageObj = {};
	
	
	PageObj.require = {
		"$":"jquery",
		"layui":"layui",
		"api": "/assets/js/components/common/data-api",
	};
	
	PageObj.page = function(){
		
		var FunUtil = {};
	    var HtmUtil = {};
    	var Page 	= {};
		
		Page.show = function(){
			console.log(this);
			
			
			var $btn4apply	= $("div.ntq-index-apply-btn");
			var $btn4employ = $("div.ntq-index-employ-btn");
			
			$btn4apply.unbind("click").bind("click",function(){
				PageInfo.FunUtil.common4openUrl({"url":'apply/index?uuid=123'});
			});
			
			$btn4employ.unbind("click").bind("click",function(){
				PageInfo.FunUtil.common4openUrl({"url":'employ/index'});
			});
		
		};
		
		return Page;
		
	};
	
	return PageObj;
}});

