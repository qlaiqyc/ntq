PageInfo.register({"type":"Pub","info":(function(){
	
	var PageObj	= {};
	PageObj.id	= "qlive-body";

	PageObj.fun = function(){
		
		
		$("div.qlive-foot a").unbind("click").bind("click",function(){
			$("div.qlive-foot a").removeClass("active");	
			$(this).addClass("active");
		});
		
		
		
	};

	
	return PageObj;
})()});
 



PageInfo.register({"type":"Router","info":(function(){
	
	 var Router ={
	 	list:[],
	 	flag:"hash"
	 };
	
	Router.list.push("/components/user");
	Router.list.push("/components/detail");
	Router.list.push("/components/article");
	
	return Router;
})()});
 

PageInfo.register({"type":"Global","info":function(){
	
	
	
	
}});
 

