PageInfo.register({"type":"Obj","info":function(){
	var FunUtil = {};
    var HtmUtil = {};
	var PageObj = {};
	
	HtmUtil.layout   = function(){
		
		var buf = [];
	 	
	 	buf.push('<div id="ntq-apply-add" class="common-box">                                                                                                                      ' );
		buf.push('    <form class="layui-form" action="">                                                                                                                          ' );
		buf.push('        <div class="layui-form-item">                                                                                                                            ' );
		buf.push('            <div class="layui-inline">                                                                                                                           ' );
		buf.push('                <label class="layui-form-label">电话</label>                                                                                                     ' );
		buf.push('                <div class="layui-input-inline">                                                                                                                 ' );
		buf.push('                    <input type="tel" name="phone" lay-verify="phone" autocomplete="off" class="layui-input"> </div>                                             ' );
		buf.push('            </div>                                                                                                                                               ' );
		buf.push('            <div class="layui-inline">                                                                                                                           ' );
		buf.push('                <label class="layui-form-label">姓名</label>                                                                                                     ' );
		buf.push('                <div class="layui-input-inline">                                                                                                                 ' );
		buf.push('                    <input type="text" name="username" lay-verify="required" placeholder="请输入" autocomplete="off" class="layui-input"> </div>                 ' );
		buf.push('            </div>                                                                                                                                               ' );
		buf.push('            <div class="layui-inline">                                                                                                                           ' );
		buf.push('                <label class="layui-form-label">Email</label>                                                                                                    ' );
		buf.push('                <div class="layui-input-inline">                                                                                                                 ' );
		buf.push('                    <input type="text" name="username" lay-verify="required" placeholder="请输入" autocomplete="off" class="layui-input"> </div>                 ' );
		buf.push('            </div>                                                                                                                                               ' );
		buf.push('        </div>                                                                                                                                                   ' );
		buf.push('        <div class="layui-form-item">                                                                                                                            ' );
		buf.push('            <div class="layui-inline">                                                                                                                           ' );
		buf.push('                <label class="layui-form-label">性别</label>                                                                                                     ' );
		buf.push('                <div class="layui-input-inline">                                                                                                                 ' );
		buf.push('                    <input type="radio" name="sex" value="男" title="男" checked="">                                                                             ' );
		buf.push('                    <input type="radio" name="sex" value="女" title="女"> </div>                                                                                 ' );
		buf.push('            </div>                                                                                                                                               ' );
		buf.push('            <div class="layui-inline">                                                                                                                           ' );
		buf.push('                <label class="layui-form-label"></label>                                                                                                         ' );
		buf.push('                <div class="layui-input-inline">                                                                                                                 ' );
		buf.push('                    <input type="checkbox" name="like1[write]" lay-skin="primary" title="是否添加组织者微信" checked=""> </div>                                  ' );
		buf.push('            </div>                                                                                                                                               ' );
		buf.push('            <div class="layui-inline">                                                                                                                           ' );
		buf.push('                <label class="layui-form-label">上传简历</label>                                                                                                 ' );
		buf.push('                <div class="layui-input-inline">                                                                                                                 ' );
		buf.push('                    <input id="ntq-apply-add-btn" type="file" name="file1" lay-type="file" class="layui-upload-file"> </div>                                     ' );
		buf.push('            </div>                                                                                                                                               ' );
		buf.push('        </div>                                                                                                                                                   ' );
		buf.push('        <div class="layui-form-item">                                                                                                                            ' );
		buf.push('            <div class="layui-inline">                                                                                                                           ' );
		buf.push('                <label class="layui-form-label">毕业院校</label>                                                                                                 ' );
		buf.push('                <div class="layui-input-inline">                                                                                                                 ' );
		buf.push('                    <input type="tel" name="phone" lay-verify="phone" autocomplete="off" class="layui-input"> </div>                                             ' );
		buf.push('            </div>                                                                                                                                               ' );
		buf.push('            <div class="layui-inline">                                                                                                                           ' );
		buf.push('                <label class="layui-form-label">专业</label>                                                                                                     ' );
		buf.push('                <div class="layui-input-inline">                                                                                                                 ' );
		buf.push('                    <input type="text" name="username" lay-verify="required" placeholder="请输入" autocomplete="off" class="layui-input"> </div>                 ' );
		buf.push('            </div>                                                                                                                                               ' );
		buf.push('            <div class="layui-inline">                                                                                                                           ' );
		buf.push('                <label class="layui-form-label">学历</label>                                                                                                     ' );
		buf.push('                <div class="layui-input-inline">                                                                                                                 ' );
		buf.push('                    <select name="interest" lay-filter="aihao">                                                                                                  ' );
		buf.push('                        <option value=""></option>                                                                                                               ' );
		buf.push('                        <option value="0">写作</option>                                                                                                          ' );
		buf.push('                        <option value="1" selected="">阅读</option>                                                                                              ' );
		buf.push('                        <option value="2">游戏</option>                                                                                                          ' );
		buf.push('                        <option value="3">音乐</option>                                                                                                          ' );
		buf.push('                        <option value="4">旅行</option>                                                                                                          ' );
		buf.push('                    </select>                                                                                                                                    ' );
		buf.push('                </div>                                                                                                                                           ' );
		buf.push('            </div>                                                                                                                                               ' );
		buf.push('        </div>                                                                                                                                                   ' );
		buf.push('        <div class="layui-form-item">                                                                                                                            ' );
		buf.push('            <div class="layui-inline">                                                                                                                           ' );
		buf.push('                <label class="layui-form-label">毕业时间</label>                                                                                                 ' );
		buf.push('                <div class="layui-input-inline">                                                                                                                 ' );
		buf.push('                    <input type="tel" name="phone" lay-verify="phone" autocomplete="off" class="layui-input"> </div>                                             ' );
		buf.push('            </div>                                                                                                                                               ' );
		buf.push('            <div class="layui-inline">                                                                                                                           ' );
		buf.push('                <label class="layui-form-label">职位编码</label>                                                                                                 ' );
		buf.push('                <div class="layui-input-inline">                                                                                                                 ' );
		buf.push('                    <input type="text" name="username" lay-verify="required" placeholder="请输入" autocomplete="off" class="layui-input"> </div>                 ' );
		buf.push('            </div>                                                                                                                                               ' );
		buf.push('            <div class="layui-inline">                                                                                                                           ' );
		buf.push('                <label class="layui-form-label">微信ID</label>                                                                                                   ' );
		buf.push('                <div class="layui-input-inline">                                                                                                                 ' );
		buf.push('                    <input type="text" name="title" lay-verify="title" autocomplete="off" placeholder="请输入标题" class="layui-input"> </div>                   ' );
		buf.push('            </div>                                                                                                                                               ' );
		buf.push('        </div>                                                                                                                                                   ' );
		buf.push('        <div class="layui-form-item" id="ntq-apply-add-subline">                                                                                                 ' );
		buf.push('            <div class="layui-inline">                                                                                                                           ' );
		buf.push('                <label class="layui-form-label"> </label>                                                                                                        ' );
		buf.push('                <div class="layui-input-inline"> </div>                                                                                                          ' );
		buf.push('            </div>                                                                                                                                               ' );
		buf.push('            <div class="layui-inline">                                                                                                                           ' );
		buf.push('                <label class="layui-form-label"> </label>                                                                                                        ' );
		buf.push('                <div class="layui-input-inline"> </div>                                                                                                          ' );
		buf.push('            </div>                                                                                                                                               ' );
		buf.push('            <div class="layui-inline">                                                                                                                           ' );
		buf.push('                <label class="layui-form-label"> </label>                                                                                                        ' );
		buf.push('                <div class="layui-input-inline">                                                                                                                 ' );
		buf.push('                    <button class="layui-btn" lay-submit="" lay-filter="formDemo">提交信息</button>                                                              ' );
		buf.push('                    <button type="reset" class="layui-btn layui-btn-primary">重置</button>                                                                       ' );
		buf.push('                </div>                                                                                                                                           ' );
		buf.push('            </div>                                                                                                                                               ' );
		buf.push('        </div>                                                                                                                                                   ' );
		buf.push('    </form>                                                                                                                                                      ' );
		buf.push('</div>																																							');				
			 	
		
		return buf.join("");
		
	};
	
	FunUtil.Global = {
		"child":{
			"id":123
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
			        console.log("==add==init")
			    },
			    update(){
			        
			    },
			    show(){
			    	 
			    	var $this = this;
			    	
			    	 console.log($this.data().FunUtil.Global.parent);
			    	layui.use(['form', 'layedit', 'laydate',"upload"], function(){
					  var form = layui.form()
					  ,layer = layui.layer
					  ,layedit = layui.layedit
					  ,laydate = layui.laydate;
					 	form.render('');
					  //创建一个编辑器
					 
					     layui.upload({
						    url: '' //上传接口
						    ,success: function(res){ //上传成功后的回调
						      console.log(res)
						    }
						  });
					  
					  //监听提交
					  form.on('submit(demo1)', function(data){
					    layer.alert(JSON.stringify(data.field), {
					      title: '最终的提交信息'
					    })
					    return false;
					  });
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

