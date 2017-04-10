PageInfo.register({"type":"Obj","info":function(){
	var FunUtil = {};
    var HtmUtil = {};
	
	
	HtmUtil.layout   = function(){
		
		var buf = [];
		buf.push('<div id="common-user">user');
	 
		buf.push('user --- 传值给articel   t = 1 <div id="common-user-btn"><a href="#/components/article">传值</a></div>');
		buf.push('</div>');
		
		
		return buf.join("");
		
	};
	
	FunUtil.Global = {
		"child":{
			"id":123
		}
	};//传参对象
	
	
	var page = {
			    data(){
			        var param = {};
			        
			        param.HtmUtil = HtmUtil;
			        param.FunUtil = FunUtil;
			        
			        return param;
			    },
			    init(){
			        console.log("==user==init")
			    },
			    update(){
			        
			    },
			    show(){
			    	var $main = $("#common-user")
			    	var $this = this;
			    	
			    	$("#common-user-btn").unbind("click").bind("click",function(){
			    		FunUtil.Global.child = {"id":456};
			    		$("div.qlive-foot a:nth-child(3)").trigger("click");
			    	});
			    	
			    },
			    hide(){
			    	console.log("==user==hide")
			    },   
			    destory(){
			        
			    }
			
			};
	
	return page;
}});

