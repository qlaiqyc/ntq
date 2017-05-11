(function(window){
	
	/* 
	 * version : 0.0.1 
	 * 目标： 基于Jquery(仅初版)  单页展示dom ，  
	 * 五生  init show update hide destory
	 * init: 页面初始化加载时 执行，仅一次
	 * show: 页面 show 时每次执行
	 * hide: 页面hide  时每次执行
	 * share:页面 show 时每次执行
	 * update  (其他页 ：主要是为了用户体验  预先执行请求判断) +（ 当前模块页面 发生  交互 ，数据变换时触发 Update 动作  自己调用自己，触发执行） 
	 * destory 主要是因为DOM 有长度限制销毁 dom 关系链较长的dom  类似微信的打开多个tab限制， （初版暂时不做）
	 * 
	 * ========配置信息==========
	 * config
	 * 
	 * */
	
	var FunUtil		= {};
	var PageInfo 	= {};
	
	FunUtil.init = function(){
		String.HasText  = function(str){
			if (typeof(str) == "undefined") return false;
			if (str == null) return false;
			if (str == 'null') return false;
			if (str == 'undefined') return false;
		
			if (typeof(str) == 'string')
			str = str.replace(/(^\s*)|(\s*$)/g, '');
			if (str === '') return false;
			return true;
		};
	};
	
	FunUtil.init();
	
	FunUtil.common4getUrlParam = function() { 
		var url = location.href; //获取url中"?"符后的字串 
		var theRequest = {}; 
		if (url.indexOf("?") != -1) { 
			var str = url.split("?")[1];
			var strs = str.split("&"); 
			for(var i = 0; i < strs.length; i ++) { 
				theRequest[strs[i].split("=")[0]]=unescape(strs[i].split("=")[1]); 
			} 
		} 
		return theRequest; 
	} 
	
	/*
	 * 常用判断工具类
	 * 1.isIN	判断对象是否有这个属性
	 * */
	FunUtil.common4Prop = function(data){
		var execuFun = {};
		
		execuFun.isIN = function(){
			
			return (data.in in data.obj);
		};
		
		return execuFun[data.type]();
	};
	
	FunUtil.common4class = function(data){
		
		/*
		 * POBJ  根类 ，进行数据底层封装
		 * COBJ  模型类，类似与一个管道，作为注入类，和根类的桥接   (负责一级中转,当init 时拼接div  当 show 时 show , 当hide时hide)
		 * IOBJ  注入类，根据数据注入进行
		 * */
		
		
		var IOBJ = data;
		
		class POBJ {
			constructor(arg) {
			}
			data(){
				 
			}
			
			init(){
				//console.log("init");
				
				console.log("init");
			}
			update(){} 
			show(){
				console.log("show");
			}
			hide(){
				console.log("hide");
			}
			destory(){} 
		};
	 
		class COBJ extends POBJ {
			constructor(arg) {
				super(arg);
			}
			data(){
				super.data();
				
				//这里有个策略当页面间传参时记录 上一页的数据
			
				if(FunUtil.common4Prop({"type":"isIN","in":"data","obj":IOBJ}))  return IOBJ.data();
			}
			init(){
				super.init();
				
				if(FunUtil.common4Prop({"type":"isIN","in":"init","obj":IOBJ}))  IOBJ.init();
			}
			update(){
				super.update();
				
				if(FunUtil.common4Prop({"type":"isIN","in":"update","obj":IOBJ}))  IOBJ.update();
			} 
			show(){
				super.show();
				
				if(FunUtil.common4Prop({"type":"isIN","in":"show","obj":IOBJ})) {
					   	var func=new function(){
					   		
					   		for(var p in FunUtil.Global.Page.require) this[p]=FunUtil.Global.Page.require[p];
					   	};
					 
					    IOBJ.show.call(func,"var");  
				} 
			} 
			hide(){
				super.hide();
				
				if(FunUtil.common4Prop({"type":"isIN","in":"hide","obj":IOBJ}))  IOBJ.hide();
			} 
			destory(){
				super.destory();
				
				if(FunUtil.common4Prop({"type":"isIN","in":"destory","obj":IOBJ}))  IOBJ.destory();
			} 
		};
		
		/*
		 *  返回初始类  +监听模块状态进行修改 执行方法
		 * */
		
		 /*异步请求 成功后  注册对象到 全局变量 */
		
		var b = new COBJ();
		
		return b;
		
	};
	
	FunUtil.common4openUrl   = function(data){
 		var url = data.url;
 		
 		if(!String.HasText(url))  return;
  		
 		var id4url = "until-open-url";
 		var $url   = $("#"+id4url);
 			 
 			
 		if( $url.length <= 0)  $("body").append('<a style="color: #f6f6f6;"><span id="'+id4url+'" >a</span></a>');
 			
 			$url  = $("#"+id4url);
 		var $this = $url.closest("a");
 		
 		if(FunUtil.Global.Router) {
 			$this.attr("href","#/"+url).attr("target","_self");
 		}else{
 			url = url.replace(/\//g,"-");
 			var list = url.split("?");
 			
 			if(list.length == 1){
 				url = list[0]+".html";
 			}else{
 				url = list[0]+".html?"+list[1];
 			}
 			
 			$this.attr("href",url).attr("target","_self");
 		}
 		
 		
 		
 		$url.click();
 		setTimeout(function(){
 			$this.remove();
 		},200);
 	};
	
	/*
	 * common 4 缓存
	 * */
	
	FunUtil.common4cache = function(data){
		var  execuFun = {};
		var key = data.key;
		var value = data.value;
		execuFun.setItem = function(){
			
			sessionStorage.setItem(key,value);
		};
		
		
		execuFun.getItem = function(){
			var str = sessionStorage.getItem(key);
			if(String.HasText(str)) str = JSON.parse(str);
			return	str;
		};
		
		return	execuFun[data.type+"Item"]();
	};
	
	/*
	 * 全局对象属性
	 * 
	 * 1.Router : 页面路由管理 
	 * 	  id:路由 
	 * 	  jid: 模块js 路径
	 *    page:页面对象
	 *    state:页面状态
	 *  1.1:  Jids : 路由映射 id: jid
	 * 2.Page : 新注册的对象 通过page对象中转到Router中
	 * 3.plug： 引入插件是的传参 
	 * 4.id: 页面对象 外包围id
	 * 5.name:项目名称
	 * 
	 * ---一般情况公用----
	 * 6.config,基础配置信息（一般指的是，常用cdn 或者插件）  
	 * 注意：刷新页面
	 * */
	
/*	FunUtil.Global = new Proxy({}, {
		"get": function (obj, sKey) {
   			
		  	return obj[sKey] || undefined;
		},
		"set": function(obj, prop, newval) {
	    
	   		obj[prop] = newval;
	  } 
	});*/
	
	FunUtil.Global = {};
	/*   测试 */
	
	 
	//栈队数组管
	FunUtil.common4Stack = function(data){
		var  execuFun = {};
		
		execuFun.pub = function(){
			
		};
		
		execuFun.hash	 = function(){
			//传统方式 原理  拼接一个a标签  执行点击事件  类似 push 一条记录到 history 中 ,然后删除a标签
			
		};
		execuFun.history = function(){
			//H5 模式 ，原理， 动态修改History 栈中对象， push  replace 
		};
		
		
		execuFun.page = function(){
			// page 栈队处理			
		};
		
		execuFun[data.type]();
	};
	
	
	/*
	 * hash 值 转换 
	 * 
	 * */
	FunUtil.common4hash = function(data){
		var keyword = data.key;
		
		var execuFun = {};
		
		execuFun.encode = function(){
			
			return  keyword.replace(/\#/g,"Qlive").replace(/\//g,"-")
		};
		
		execuFun.decode = function(){
			return  keyword.replace(/\Qlive/g,"#").replace(/-/g,"/")
		};
		
		execuFun.js = function(){
			return  execuFun.decode().replace(/#/g,"");
		};
		
		return execuFun[data.type]();
	};
	
	/*
	 * 通过hash 值或者 history 进行判断执行对象的生命周期
	 * 
	 * 1. 判断  当前是否存在这个新对象  ， （存在 ？  执行这个对象的show 方法 ： 执行这个对象的 init 方法 ）
	 * 2. 隐藏  当前展示对象  （存在 ？ 执行当前对象的 hide 方法， :  不做操作  ）
	 * 
	 * =======开启单页调试===  没有路由注入 ============
	 * 3.
	 * 
	 * */
	FunUtil.common4Page = function(data){
		
		var fun4help = {
			"global":{
				"type":"single"
			}
		};
		
		
		
		fun4help.single = function(){
			
			/**
				 * 第一步加载所需JS  成功后 输出对象  require 加载， 然后执行 相应方法
				 * */
				var param 	= FunUtil.Global.Page;
				var require = param.require;
				var keys 	= Object.keys(require);
				var vals 	= Object.values(require);
				var len 	= keys.length;
				
				var list = [];
				
				
				
				for(var i =0 ;i<len;i++) list.push(FunUtil.common4require(vals[i]));
				 
				Promise.all(list).then(values => { 
					
					FunUtil.Global.Page.require = {};
				
				 	var Router = param;
					for(var i =0 ;i<len;i++)   	FunUtil.Global.Page.require[keys[i]] = values[i];
					
					Router.init();
					Router.show();
				});
			
			
		};
		
		
		fun4help.model = function(){
			
			data.jid = data.jid.split("?")[0];
		
			var $main	= $("#"+FunUtil.Global.id);
			var Router	= FunUtil.Global.Router;
			Router.unshift({});
			var id		= data.jid;
			var nid		= Router.findIndex(function(value, index, arr){	if(value.jid == id) return index;  }) -1;
			var oid		= Router.findIndex(function(value, index, arr){ if(value.state == "show") return index; })-1;
			Router.shift();
			
			var Npage	= Router[nid];
			var type 	= "noPre";
			
			var execuFun = {};
			
			execuFun.pub = function(data){
				var futil ={};
				
				var url ="/"+ FunUtil.common4hash({"type":"js","key":id+""});
		 	
				futil.getJs =  function(){
					/**
					 * 第一步加载所需JS  成功后 输出对象  require 加载， 然后执行 相应方法
					 * */
				 Promise.resolve(FunUtil.common4require(url)).then(function(param) {
						
						 
						var require = param.require;
						var keys = Object.keys(require);
						var vals = Object.values(require);
						var len = keys.length;
						
						var list = [];
						
						
						eval('var '+keys.join(",") +";");// 这个实在是没有办法
						
						for(var i =0 ;i<len;i++) list.push(FunUtil.common4require(vals[i]));
						
						Promise.all(list).then(values => { 
							  
							for(var i =0 ;i<len;i++) FunUtil.Global.Page.require[keys[i]] = values[i];
							
							//delete FunUtil.Global.Page.require;
						
							var Router = param;
							
							FunUtil.Global.Router[nid].page = Router;
							FunUtil.Global.Router[nid].state = "show";
							
							$main.append('<div class="'+id+'">'+Router.data().HtmUtil.layout()+'</div').show();
							console.log(FunUtil.Global.Router[nid].jid);
							
							Router.init();
							Router.show();
						});
						
						
						
					}, function(value) {
					  // 不会被调用
					}); 
					 
					 
					
					
				 	
				};
				
				futil.getJs()
				
			};
			
			execuFun.noPre =  function(){
			 
				//判断对象是否加载，加载？ 执行 show : 请求JS 成功后回调 执行init
				if(String.HasText(Npage.page)) {
					Npage.page.show();
					Npage.state = "show";
					FunUtil.Global.Router[nid] = Npage;
					
					$main.find("div."+id).show();
				}else{
					execuFun.pub();				
				}
					 
			};
			
			execuFun.hasPre = function(){
				//这种情况下 oid 一定存在
				var Opage = Router[oid];
				console.log(Opage.jid);
				Opage.page.hide();
				Opage.state = "hide";
				FunUtil.Global.Router[oid] = Opage;
				
				$main.find("div."+Opage.jid).hide();
				
				if(String.HasText(Npage.page)) {
					
					console.log(Npage.jid);
					
					Npage.page.show();
					Npage.state = "show";
				//	Npage.page.data().FunUtil.Global.parent = Opage.page.data().FunUtil.Global.child;
					FunUtil.Global.Router[nid] = Npage;
					
					
					$main.find("div."+Npage.jid).show();
				}else{
				  	execuFun.pub();		
				}
				
				
			};
			
			if(String.HasText(oid) && oid > -1)  type = "hasPre";
			
			execuFun[type]();
			
			
			
			
		};
		
		if(String.HasText(FunUtil.Global.Router)) fun4help.global.type = "model";
		
		
		fun4help[fun4help.global.type]();
		
	
	};
	
	//监听对象
	FunUtil.register4Evet = function(data){
		var execuFun = {};
		
		execuFun.pub = function(){
			//刷新页面
			  
		};
		
		execuFun.hash = function(){
			
			
			var ecfun = function(){
				
				var defid = FunUtil.common4hash({"type":"decode","key":FunUtil.Global.Router[0].jid});
				var key = defid;
				var hash = location.hash;
				if(String.HasText(location.hash))  {
					//判断是否合法  ？ 映射JS ,否，进入主页
					var ids = hash.split("?")[0];
				
					ids = ids.substring(2);
					var jid = FunUtil.Global.Jids[ids];
					
					if(String.HasText(jid)) key = "#"+jid;
					
				}
				FunUtil.common4Page({"jid":FunUtil.common4hash({"type":"encode","key":key})});//触发hash 事件
			};
			 
			window.onhashchange = function(e){
				//通过hash 值进行判断
				ecfun();
				
			};
			
			if(String.HasText(FunUtil.Global.Router))	ecfun();
		};
		
		
		execuFun.history = function(){
			
		};
		
 
		
		
		execuFun[data.type]();
		
 
	};
	
	/**
	 * 
	 * 按需加载异步请求js
	
	 * 
	 */
	FunUtil.common4GetJS =   function(data){
		var script	= document.createElement("script");
		script.type	= "text/javascript";
		script.src	= data.url;
		String.HasText(data.async) ? data.async: (script.async="async");
		if(String.HasText(data.type) && data.type == "head") {
			document.head.appendChild(script);
		}else{
			document.body.appendChild(script);
		}
	　　　　if(script.readyState){ 
	　　　　　　script.onreadystatechange=function(){
	　　　　　　　　if(script.readyState=='complete'||script.readyState=='loaded'){
	　　　　　　　　　　	script.onreadystatechange=null;
	　　　　　　　　　　	data.callback();
					script.remove();
	　　　　　　　　}
	　　　　　　}
	　　　　}else{     
	　　　　　　 script.onload=function(){
					data.callback();
					script.remove();
				}
	　　　　};
	};
	
	FunUtil.common4require = function(str){
		/**
		 *思路:
		 *001  判断是否在config 中存在这个别名? 请求 加载,  顶部
		 *002  判断是否是/开始,若是者引用当前模块 项目上下的的 js  底部
		 *003: 是否同时并发异步 加载请求 多个 各自无强相关的js （适用于 各级不关的JS）
	 	 *004: 是否同步 单线程 加载（适用于 各级相关的JS） (占时单个进行)
 		 *
		 */
		
		
		var result = new Promise(resolve => {
		     
		    var path = FunUtil.Global.config().paths;
			var type = "foot";
			
			var loadJS = location.origin+"/"+location.pathname.split("/")[1]+str+".js";
			//if(String.HasText(FunUtil.Global.Router))  loadJS = 
			
			if(FunUtil.common4Prop({"type":"isIN","in":str,"obj":path}))  {loadJS = path[str]; type="head"}
			
			var execuFun = {};
		     
		     
		    var data = {"url":loadJS};
			execuFun.head =   function(){
				FunUtil.common4GetJS({"url":loadJS,"async":"async","callback":function(data){
				
				resolve(FunUtil.Global.plug);
			}});
				 
			};
			
			execuFun.foot = function(){
				FunUtil.common4GetJS({"url":loadJS,"async":"async","callback":function(data){
					
					if(loadJS.indexOf("common") >= 0){
						
						resolve(FunUtil.Global.plug);
					}else{
						
						resolve(FunUtil.Global.Page);
					}
				}});
			};
			  
			  
			execuFun[type]();
		     
		     
		     
		});
		
		
		return result;
	};
	
	FunUtil.common4Router  = function(data){
		//初始化 设置路由 信息
		var router	= data;
		
		var flag 	= router.flag;
		
		var keys  = Object.keys(router.list);
		var valus = Object.values(router.list);
		var len	  = keys.length;
		
		
		var nlist = [];
		
		if(flag == "hash"){
			for (var  i =0 ;i<len;i++) nlist.push({"id":FunUtil.common4hash({"type":"encode","key":(keys[i])}),"jid":FunUtil.common4hash({"type":"encode","key":("#"+valus[i])}), "page":"","state":""});
		}
		
		FunUtil.Global.Router = nlist;
		FunUtil.Global.Jids	  = router.list;
		
		FunUtil.register4Evet({"type":flag});
		
	};
	
	 
	
	FunUtil.common4Global  = function(data){
		FunUtil.Global.id = data.id;
		FunUtil.Global.name = data.name;
		
	};
	
	
	
	PageInfo.init4plug = function(data){
		 
		FunUtil.Global.plug = data.info; 
	};
	
	PageInfo.init4Obj = function(data){
		var obj = data.info();
		
		FunUtil.Global.Page = FunUtil.common4class(obj.page());
		FunUtil.Global.Page.require = obj.require;
		
		if(!String.HasText(FunUtil.Global.Router))  FunUtil.common4Page();
		
	};
 
	PageInfo.init4Start = function(data){
		 //对外暴漏 require 方法 应该是个数组对象  迭代请求结束后,再执行下面的方法
	 	
	 	var futil ={};
	 	
		futil.getJs =  function(param){
			var require = param.require;
			var keys = Object.keys(require);
			var vals = Object.values(require);
			var len  = keys.length;
			var list = [];
			
			eval('var '+keys.join(",") +";");// 这个实在是没有办法
			
			for(var i =0 ;i<len;i++) list.push(FunUtil.common4require(vals[i]));
			
			Promise.all(list).then(values => { 
				  
				
				
				FunUtil.common4Global(param.Global);
				FunUtil.common4Router(param.Router);
				
				
				var func=new function(){
					   		
					for(var i =0 ;i<len;i++)  this[keys[i]] = values[i];
				};
				param.Pub.call(func,"var");
				
			});
		};
		
		
		futil.getJs(data.info())
		
		
	};
	
	PageInfo.init4config = function(data){
		//加载配置信息丢入全局变量  (由于第一版是基于 Jquery 而言,所以会预加载Jquery)
		
		FunUtil.Global.config = data.info;
		 
	};
	
	
	PageInfo.register = function(data){
		
		//在执行 之前 判断是否有require  如果有则 等待 require  全部结束后再执行
		
		//所有对象都通过注册进来
		
		if(data.type == "Start"){
			PageInfo["init4"+data.type](data);			
		}else{
			
			PageInfo["init4"+data.type](data);
		}
		
		
	};
	PageInfo.FunUtil = FunUtil;
	
	/* 对外暴露 一个公共方法，
	 * 条件
	 * 1. 有完整的路由路径
	 * 2. 有 初始化对象数据（主页对象）  需要根据按需加载 
	 * 3. 
	 * 
	 * 
	 * 在初始化后 进行数据操作 */
	
	
	window.PageInfo = PageInfo;
 
	
})(window);
