PageInfo.register({"type":"Obj","info":function(){
	
	var PageObj = {};
	 
	PageObj.require = {
		"$": "jquery",
		"layui": "layui",
		"api": "/assets/js/components/common/data-api"
	};
	
	 
	PageObj.page = function(){
		
		var FunUtil = {};
	    var HtmUtil = {};
    	var Page 	= {};
	
		Page.show = function(){
			 var request = this.api.rq();
			 
			 layui.use(['form', 'layedit', 'laydate','laypage', 'layer'], function(){ var form = layui.form() ,layer = layui.layer ,layedit = layui.layedit ,laydate = layui.laydate, laypage = layui.laypage ,layer = layui.layer;
			 	form.render(''); 
			 	
		 
			 });
			
		 
		};
		
		return Page;
		
	};
	
	
	return PageObj;
}});


