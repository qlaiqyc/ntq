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
			 
		 	var request = PageInfo.FunUtil.Global.API;
			    	
			    	
			    	 
			    	layui.use(['form', 'layedit', 'laydate'], function(){
					  var form = layui.form()
					  ,layer = layui.layer
					  ,layedit = layui.layedit
					  ,laydate = layui.laydate;
					 	form.render('');
					 
					  //自定义验证规则
					  form.verify({
					    title: function(value){
					      if(value.length < 5){
					        return '标题至少得5个字符啊';
					      }
					    }
					    ,pass: [/(.+){6,12}$/, '密码必须6到12位']
					    ,content: function(value){
					      layedit.sync(editIndex);
					    }
					  });
					  
					  //监听指定开关
					  form.on('switch(switchTest)', function(data){
					    layer.msg('开关checked：'+ (this.checked ? 'true' : 'false'), {
					      offset: '6px'
					    });
					    layer.tips('温馨提示：请注意开关状态的文字可以随意定义，而不仅仅是ON|OFF', data.othis)
					  });
					  
					  //监听提交
					  form.on('submit(ntq-employ-add-btn)', function(data){
					    
					    
					    console.log(data);
					    
					    
					    return false;
					  });
					});
		};
		
		return Page;
		
	};
	
	
	return PageObj;
}});


