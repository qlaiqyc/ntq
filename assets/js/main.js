PageInfo.register({"type":"Start","info":function(){
 	
	/**
	 * 所有入口通过初始化进入 Start
	 * require: 需要哪些 外部引用
	 * 
	 * Pub: 公共方法对象
	 * Global: 此模块下全局遍历对象
	 * Router : 路由对象 
	 * */
	
	var Start = {};
	
	Start.require = {
		"$":"jquery"
	};
	Start.Router ={
	 	flag:"hash",
	 	list:{
	 		 "index"		:"/assets/js/components/index",
			 "admin/handle"	:"/assets/js/components/admin/handle",
			 "admin/add"	:"/assets/js/components/admin/add",
			 "apply/job"	:"/assets/js/components/apply/job",
			 "apply/add"	:"/assets/js/components/apply/add",
			 "apply/index"	:"/assets/js/components/apply/index",
			 "employ/job"	:"/assets/js/components/employ/job",
			 "employ/add"	:"/assets/js/components/employ/add",
			 "employ/index"	:"/assets/js/components/employ/index"
			}
	 };
	
	Start.Global = {
		"id":"qlive-body",  //所有 主DIV
		"name":"ntq",       //项目名称
		"debug":true
	};
	 
	Start.Pub =function(){
		
	};
 	
 	return Start;
	
}});



