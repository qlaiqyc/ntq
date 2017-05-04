PageInfo.register({"type":"Obj","info":function(){
	
	var PageObj = {};
	 
	PageObj.require = {
		"$":"jquery",
		"layui":"layui",
		"api":"/assets/js/components/common/data-api"
	};
	
	 
	 PageObj.page = function(){
		
		
		var FunUtil = {};
	    var HtmUtil = {};
    	var Page 	= {};
	
		 
		Page.show = function(){
			 
		 	var request = this.api;
			    	
			    	
			    	 
			    	layui.use(['form', 'layedit', 'laydate'], function(){
					  	var form = layui.form() ,layer = layui.layer  ,layedit = layui.layedit  ,laydate = layui.laydate;
					 	form.render('');
					 
					  //自定义验证规则
					  form.verify({ 
					  	title: function(value){
					      if(value.length < 5){
					        return '标题至少得5个字符啊';
					      }
					   	},
					   pass: [/(.+){6,12}$/, '密码必须6到12位'],
					   content: function(value){
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
					   /*	request.rq4addCompanyInfoWithPositionInfoList(data.field,function(cdata){
					    	
					    	console.log(cdata);
					    	return false;
					    }); 
					    console.log(data);*/
					    
					    
					    return false;
					  });
					  
				 
				 	setTimeout(function(){
				 		
				 	var param = 	{ "companyInfo":{  "companyName":"测试公司名称11", "companyPhone":15123247202, "resumeMail":"247677858@qq.com", "contactWeixinId":"weChat", "recruitType":1, "companyType":1, "serverCreateDate":1491537753077, "serverUpdateDate":1491537753077, "isNewlyEstablished":1, "financingType":1, "isValid":1, "recruiterName":"杨爽", "companySynopsis":null }, "companyPositionInfosWithBlobList":[{"positionDesc":"test"}]  };
				 	
				 			request.rq4addCompanyInfoWithPositionInfoList(param,function(cdata){
					    	
					    	console.log(cdata);
					    	return false;
					    }); 
				 	},3000);
				 
				 
					  
					});
		};
		
		return Page;
		
	};
	
	
	return PageObj;
}});


