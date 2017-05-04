
PageInfo.register({"type":"Obj","info":function(){
	
	var PageObj = {};
	 
	PageObj.require = {
		"$":"jquery",
		"layui":"layui"
	};
	
	 
	PageObj.page = function(){
		
		var FunUtil = {};
	    var HtmUtil = {};
    	var Page 	= {};
	
	 
		Page.show = function(){
			var $this = this;
			    	
			
			layui.use(['form', 'layedit', 'laydate',"upload"], function(){
			  	var form = layui.form()
			  	,layer = layui.layer
			  	,layedit = layui.layedit
			  	,laydate = layui.laydate;
			 	form.render('');
			  //创建一个编辑器
			 
			     layui.upload({
				    url: '' //上传接口
				    ,success: function(res){ //上传成功后的回调
				      console.log(res)
				    }
				  });
			  
			  //监听提交
				form.on('submit(demo1)', function(data){
				  layer.alert(JSON.stringify(data.field), {
				    title: '最终的提交信息'
				  })
				  return false;
				});
			});     
		 };
		
		return Page;
		
	};
	
	
	return PageObj;
}});

