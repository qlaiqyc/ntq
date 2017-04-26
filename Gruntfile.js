 
module.exports = function (grunt) {
	var es2015 = require('babel-preset-es2015');
	
	var FunUtil = {};
	
	FunUtil.Global = {
		"files":{},
		"assets":"assets",
		"dist":"dist/build",
	};
	
	
	FunUtil.bable4del = function(){
		
		grunt.file.recurse(rootdir, function callback(abspath, rootdir, subdir, filename) {
		   var isFile = true;
		   if(filename.indexOf(".map") < 0) isFile = false;
		   
		   //if(isFile) grunt.file.delete(abspath)
		   
		});
		
	};
	
	
	FunUtil.bable4getFiles = function(){
		
		grunt.file.recurse(rootdir, function callback(abspath, rootdir, subdir, filename) {
		   var isFile = true;
		   if(filename.indexOf(".js") < 0) isFile = false;
		   if(abspath.indexOf("plug/Qlive") > 0 ) isFile = true;
		   
		   var p = FunUtil.Global.dist+"/"+abspath.split(FunUtil.Global.assets)[1];
		   
		   if(isFile) FunUtil.Global.files[p] = abspath;
		   
		});
		
	};
	
	
	
	
	
	

    // 构建任务配置
    grunt.initConfig({

        //读取package.json的内容，形成个json数据
        pkg: grunt.file.readJSON('package.json'),
        clean: [buildDir],
        //压缩js
        uglify: {
            //文件头部输出信息
            options: {
                banner: '/*! <%= pkg.name %> QL<%= grunt.template.today("yyyy-mm-dd") %> */\n'
            },
            my_target: {
                files: [
                    {
                        expand: true,
                        //相对路径
                        cwd: FunUtil.Global.dist+'/assets/js/,
                        src: '**/*.js',
                        dist: FunUtil.Global.dist+'/assets/js/
                    }
                ]
            }
        },
        //压缩css
        cssmin: {
            //文件头部输出信息
            options: {
                banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n',
                //美化代码
                beautify: {
                    //中文ascii化，非常有用！防止中文乱码的神配置
                    ascii_only: true
                }
            },
            my_target: {
                files: [
                    {
                        expand: true,
                        //相对路径
                        cwd: FunUtil.Global.assets+'/',
                        src: '**/*.css',
                        dist: FunUtil.Global.dist+'/assets/'
                    } 
                ]
            }
        },

        copy: {
            main: {
                files: [
                    // includes files within path
//                    {expand: true, src: ['static/*'], dist: 'build/src', filter: 'isFile'},

                    // includes files within path and its sub-directories

                    {   expand: true,
                        src: ['html/**'],
                        dist: 'dist/build/',
                        filter: "isFile"
                    },
                
					 
                ]
            },
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
	
	grunt.registerTask("bable4del", "", function() {
		FunUtil.bable4del();
	});
	
    require('load-grunt-tasks')(grunt);
 
    grunt.registerTask('default', ['bable4getFiles',"babel","bable4del", 'cssmin']);
 


 
  
};