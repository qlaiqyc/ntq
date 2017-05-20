PageInfo.register({"type":"config","info":function(){
	
	/*
	* 01 :设计路径时需要判断是否是 本地 测试 正式 
	* 02 :cdn 优化
	* 03 : 
	*  path:插件模式加载
	*  other:异步模块加载
	* 
	* */
	 var baseURL = location.origin+"/"+location.pathname.split("/")[1]
	
	// var baseURL = "http://192.168.2.178:8020/ntq";
	
	 var result = {
	 	
	 	paths:{
	 		"jquery":baseURL+"/assets/js/plug/jquery-3.2.0.js",
	 	},
	 	other:{
	 		"layui":baseURL+"/assets/js/plug/layui/layui.js"
	 	}
	 	
	 };
	 
	 return result;
}});

