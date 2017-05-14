
PageInfo.register({"type":"Obj","info":function(){
	
	var PageObj = {};
	 
	PageObj.require = {
		"$":"jquery",
		"layui":"layui",
		"api": "/assets/js/components/common/data-api"
	};
	
	 
	PageObj.page = function(){
		
		var FunUtil = {};
	    var HtmUtil = {};
    	var Page 	= {};
	
	 
		Page.show = function(){
			var request = this.api.rq();
			    	
			
			layui.use(['form', 'layedit', 'laydate',"upload"], function(){
			  	var form = layui.form() ,layer = layui.layer ,layedit = layui.layedit ,laydate = layui.laydate;
			 	form.render('');
			  //创建一个编辑器
			 
			    layui.upload({
				    url: '', //上传接口
				    success: function(res){ //上传成功后的回调
				      
				      console.log(res);
				    }
				});
			  
			  //监听提交
				form.on('submit(apply-add-btn)', function(data){
					var param = data.field;
					param.isAddNtqweixin = ((param.isAddNtqweixin == "on") ? 1 :2),//
				 	
				   	request.addJobSeekerInfoAndResume(JSON.stringify(param), function(cdata) {
							return false;
					});
				   
				  return false;
				});
			});     
		 };
		
		return Page;
		
	};
	
	
	return PageObj;
}});

