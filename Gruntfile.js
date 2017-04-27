 
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
		grunt.file.mkdir(FunUtil.Global.dist+"/build/assets/");
	};
	
	
	
	
	
	

    // ������������
    grunt.initConfig({

        //��ȡpackage.json�����ݣ��γɸ�json����
        pkg: grunt.file.readJSON('package.json'),
        clean: ["dist"],
        //ѹ��js
        uglify: {
            //�ļ�ͷ�������Ϣ
            options: {
                banner: '/*! <%= pkg.name %> QL <%= grunt.template.today("yyyy-mm-dd HH:mm:ss") %> */\n'
            },
            my_target: {
                files: [
                    {
                        expand: true,
                        //���·��
                        cwd: FunUtil.Global.dist+'/tmp/',
                        src: '**/*.js',
                        dist:FunUtil.Global.dist+'/tmp/'
                    }
                ]
            }
        },
        //ѹ��css
        cssmin: {
            //�ļ�ͷ�������Ϣ
            options: {
                banner: '/*! <%= pkg.name %> QL <%= grunt.template.today("yyyy-mm-dd HH:mm:ss") %> */\n',
                //��������
                beautify: {
                   
                    ascii_only: true
                }
            },
            my_target: {
                files: [
                    {
                        expand: true,
                        //���·��
                        cwd: FunUtil.Global.assets+'/',
                        src: '**/*.css',
                        dist: FunUtil.Global.dist+'/build/assets/'
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
	
	grunt.registerTask("bable4delmap", "", function() {
		FunUtil.bable4delmap();
	});
	
    require('load-grunt-tasks')(grunt);
 
  //  grunt.registerTask('default', ["clean",'bable4getFiles','babel','bable4delmap','uglify']);
 
	grunt.registerTask('default', ['cssmin']);
 

 
  
};