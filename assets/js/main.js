PageInfo.register({"type":"Start","info":function(){
 	
	/**
	 * 所有对象通过初始化进入 Start
	 * 
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
	 	list:[
				"/assets/js/components/index",
				"/assets/js/components/admin/handle",
				"/assets/js/components/admin/add",
				"/assets/js/components/apply/job",
				"/assets/js/components/apply/add",
				"/assets/js/components/apply/index",
				"/assets/js/components/employ/job",
				"/assets/js/components/employ/add",
				"/assets/js/components/employ/index"
	 		]
	 };
	
	Start.Global = {
		"id":"qlive-body",  //所有 主DIV
		"name":"ntq"       //项目名称
	};
	 
	Start.Pub = {
	};
 	
 	return Start;
	
}});



