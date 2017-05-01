PageInfo.register({"type":"Obj","info":function(){
	var FunUtil = {};
    var HtmUtil = {};
    var PageObj = {};
	
	
	HtmUtil.layout   = function(){
		
		var buf = [];
	 	 
		buf.push('<div id="ntq-index">');
		buf.push('	<div class="ntq-index-apply">');
		buf.push('		<div class="ntq-index-apply-btn">我要求职</div>');
		buf.push('	</div>');
		buf.push('	<div class="ntq-index-employ">');
		buf.push('		<div class="ntq-index-employ-btn">我要招聘</div>');
		buf.push('	</div>');
		buf.push('</div>');
		return buf.join("");
		
	};
	 
	FunUtil.Global = {
		"child":{
			"id":456
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
			       // console.log("==add==init")
			    },
			    update(){
			        
			    },
			    show(){
			    	 
			    	var $this 		= this;
			    	 
			    	var $btn4apply	= $("div.ntq-index-apply-btn");
			    	var $btn4employ = $("div.ntq-index-employ-btn");
			    	
			    	$btn4apply.unbind("click").bind("click",function(){
			    		PageInfo.FunUtil.common4openUrl({"url":'#/assets/js/components/apply/index?uuid=123'});
			    	});
			    	
			    	$btn4employ.unbind("click").bind("click",function(){
			    		PageInfo.FunUtil.common4openUrl({"url":'#/assets/js/components/employ/index'});
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

