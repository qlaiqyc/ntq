 
module.exports = function (grunt) {
	var es2015 = require('babel-preset-es2015');
	
	var FunUtil = {};
	
	FunUtil.Global = {
		"files":{},
		"assets":"assets",
		"dist":"dist",
		
	};
	
	
	FunUtil.bable4delmap = function(){
		
		grunt.file.recurse(FunUtil.Global.dist, function callback(abspath, rootdir, subdir, filename) {
		   var isFile = true;
		   if(filename.indexOf(".map") < 0) isFile = false;
		   
		   if(isFile) grunt.file.delete(abspath)
		   
		});
		
	};
	
	
	FunUtil.bable4getFiles = function(){
		//grunt.file.mkdir(FunUtil.Global.dist);
		grunt.file.recurse(FunUtil.Global.assets+"/js/", function callback(abspath, rootdir, subdir, filename) {
		   var isFile = true;
		   if(filename.indexOf(".js") < 0) isFile = false;
		   if(abspath.indexOf("plug/Qlive") >= 0 ) isFile = true;
		   
		   var p = FunUtil.Global.dist+"/tmp/"+abspath.split(FunUtil.Global.assets)[1];
		   
		   if(isFile) FunUtil.Global.files[p] = abspath;
		   
		}); 
	};
	
	FunUtil.concathtml = function(){
		//grunt.file.mkdir(FunUtil.Global.dist);
	 
		grunt.file.recurse("html/tmp/", function callback(abspath, rootdir, subdir, filename) {
			 /**
			 *1. 读取文件内容
			 *2. 合并 文件
			 **/
			 
			 //if(filename == "index.html") continue;
			 
			var html = grunt.file.read(abspath);
			 
			var REG_BODY = /<body[^>]*>([\s\S]*)<\/body>/;
            
			var result = REG_BODY.exec(html);
             if(result && result.length === 2) {
			 	result = result[1];
			 }else{
			 	result = html;
			 }
			//grunt.log.writeln(result);
			
			grunt.log.writeln(filename);
			
			//====================
			var url = "assets/js/components/" +filename.replace(/-/g,"/").replace(/html/g,"js")
			grunt.log.writeln(url);
			var page = grunt.file.read(url);
			
			page = page.split("Page.show");
			//grunt.log.writeln(page);
			
			
            
			
			
			
			
			
			
		}); 
	};
	
	
	
	

    // 构建任务配置
    grunt.initConfig({

        //读取package.json的内容，形成个json数据
        pkg: grunt.file.readJSON('package.json'),
        clean: ["dist"],
        //压缩js
        uglify: {
            //文件头部输出信息
            options: {
                banner: '/*! <%= pkg.name %> QL <%= grunt.template.today("yyyy-mm-dd HH:mm:ss") %> */\n'
            },
            my_target: {
                files: [
                    {
                        expand: true,
						cwd:FunUtil.Global.dist+ '/tmp/',
						src: '**/*.js',
						dest: FunUtil.Global.dist+'/build/assets/js'
						
						 
                    }
                ]
            }
        },
        //压缩css
        cssmin: {
            //文件头部输出信息
            options: {
                banner: '/*! <%= pkg.name %> QL <%= grunt.template.today("yyyy-mm-dd HH:mm:ss") %> */\n',
                //美化代码
                beautify: {
                   
                    ascii_only: true
                }
            },
            my_target: {
                files: [
                    {
                         
						
						expand: true,
						cwd: FunUtil.Global.assets+'/css/',
						src: ['*.css'],
						dest: FunUtil.Global.dist+'/build/assets/css/',
                    } 
                ]
            }
        },
 
		 babel: {
				options: {
					sourceMap: true,
					presets: [es2015]
				},
				dist: {
					files:FunUtil.Global.files
				}
			} 	
		 
    });
	
	grunt.registerTask("bable4getFiles", "", function() {
		FunUtil.bable4getFiles();
	});
	
	grunt.registerTask("bable4delmap", "", function() {
		FunUtil.bable4delmap();
	});
	
	grunt.registerTask("concathtml", "", function() {
		FunUtil.concathtml();
	});
	
	
	
    require('load-grunt-tasks')(grunt);
 
   // grunt.registerTask('default', ["clean",'bable4getFiles','babel','bable4delmap','uglify']);
 
	//grunt.registerTask('default', ['uglify']);
 grunt.registerTask('default', ['concathtml']);
 

 
  
};