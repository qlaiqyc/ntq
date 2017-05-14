PageInfo.register({"type":"Obj","info":function(){
	var FunUtil = {};
    var HtmUtil = {};
    var PageObj = {};
	
	
	FunUtil.Global = {
		"child":{
			"id":123
		}
	};//传参对象
	
	PageObj.require = {
		"$":"jquery",
		"layui":"layui"
	};
	
	PageObj.page = {
			    data(){
			        var param = {};
			        
			        param.HtmUtil = HtmUtil;
			        param.FunUtil = FunUtil;
			        
			        return param;
			    },
			    init(){
			         
			    },
			    update(){
			        
			    },
			    show(){
			    	 
			    	var $this = this;
			    	
			    	 
			    	layui.use(['form', 'layedit', 'laydate'], function(){
					  var form = layui.form()
					  ,layer = layui.layer
					  ,layedit = layui.layedit
					  ,laydate = layui.laydate,
					 	laypage = layui.laypage
	  				  ,layer = layui.layer;
					 	form.render('');
					 	
					 	laypage({
							cont: 'ntq-admin-index-condition-pag',
							pages: 100,
							skip: true
						});
					  //创建一个编辑器
					  var $ = layui.jquery, form = layui.form();
					  
					  //全选
					  form.on('checkbox(allChoose)', function(data){
					    var child = $(data.elem).parents('table').find('tbody input[type="checkbox"]');
					    child.each(function(index, item){
					      item.checked = data.elem.checked;
					    });
					    form.render('checkbox');
					  });
					  
					});
			    },
			    hide(){
			    	//console.log("==add==hide")
			    },   
			    destory(){
			        
			    }
			
			};
	
	return PageObj;
}});

