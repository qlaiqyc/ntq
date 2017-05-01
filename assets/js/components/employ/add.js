PageInfo.register({"type":"Obj","info":function(){
	
	//require("layui");
	
	var FunUtil = {};
    var HtmUtil = {};
    var PageObj = {};
	
	
	HtmUtil.layout   = function(){
		
		var buf = [];
	 	buf.push('<div id="ntq-employ-add" class="common-box">            ');
		buf.push('<form class="layui-form" action=""  >');
		buf.push('    <div class="layui-form-item">                                                                                                                                                            ' );
		buf.push('        <div class="layui-inline">                                                                                                                                                           ' );
		buf.push('            <label class="layui-form-label">招聘电话</label>                                                                                                                                 ' );
		buf.push('            <div class="layui-input-inline">                                                                                                                                                 ' );
		buf.push('                <input type="tel" name="companyPhone" lay-verify="phone" autocomplete="off" class="layui-input">                                                                                       ' );
		buf.push('            </div>                                                                                                                                                                           ' );
		buf.push('        </div>                                                                                                                                                                               ' );
		buf.push('        <div class="layui-inline">                                                                                                                                                           ' );
		buf.push('            <label class="layui-form-label">企业名称</label>                                                                                                                                 ' );
		buf.push('            <div class="layui-input-inline">                                                                                                                                                 ' );
		buf.push('                <input type="text" name="companyName" lay-verify="required" placeholder="请输入" autocomplete="off" class="layui-input">                                                        ' );
		buf.push('            </div>                                                                                                                                                                           ' );
		buf.push('        </div>                                                                                                                                                                               ' );
		buf.push('        <div class="layui-inline">                                                                                                                                                           ' );
		buf.push('            <label class="layui-form-label">招聘人姓名</label>                                                                                                                               ' );
		buf.push('            <div class="layui-input-inline">                                                                                                                                                 ' );
		buf.push('                <input type="text" name="recruiterName" lay-verify="required" placeholder="请输入" autocomplete="off" class="layui-input">                                                        ' );
		buf.push('            </div>                                                                                                                                                                           ' );
		buf.push('        </div>                                                                                                                                                                               ' );
		buf.push('    </div>                                                                                                                                                                                   ' );
		buf.push('                                                                                                                                                                                             ' );
		buf.push('    <div class="layui-form-item">                                                                                                                                                            ' );
		buf.push('        <div class="layui-inline">                                                                                                                                                           ' );
		buf.push('            <label class="layui-form-label">企业类型</label>                                                                                                                                 ' );
		buf.push('            <div class="layui-input-inline">                                                                                                                                                 ' );
		buf.push('                <select name="companyType" lay-filter="aihao">                                                                                                                                  ' );
		buf.push('                    <option value=""></option>                                                                                                                                               ' );
		buf.push('                    <option value="1">民营</option>                                                                                                                                          ' );
		buf.push('                    <option value="2" selected="">国企</option>                                                                                                                              ' );
		buf.push('                    <option value="3">外企</option>                                                                                                                                          ' );
		buf.push('                </select>                                                                                                                                                                    ' );
		buf.push('            </div>                                                                                                                                                                           ' );
		buf.push('        </div>                                                                                                                                                                               ' );
		buf.push('        <div class="layui-inline">                                                                                                                                                           ' );
		buf.push('            <label class="layui-form-label">公司福利</label>                                                                                                                                 ' );
		buf.push('            <div class="layui-input-inline">                                                                                                                                                 ' );
		buf.push('                <select name="interest" lay-filter="aihao">                                                                                                                                  ' );
		buf.push('                    <option value=""></option>                                                                                                                                               ' );
		buf.push('                    <option value="0">写作</option>                                                                                                                                          ' );
		buf.push('                    <option value="1" selected="">阅读</option>                                                                                                                              ' );
		buf.push('                </select>                                                                                                                                                                    ' );
		buf.push('            </div>                                                                                                                                                                           ' );
		buf.push('        </div>                                                                                                                                                                               ' );
		buf.push('        <div class="layui-inline">                                                                                                                                                           ' );
		buf.push('            <label class="layui-form-label">融资情况</label>                                                                                                                                 ' );
		buf.push('            <div class="layui-input-inline">                                                                                                                                                 ' );
		buf.push('                <select name="financingType" lay-filter="aihao">                                                                                                                                  ' );
		buf.push('                    <option value=""></option>                                                                                                                                               ' );
		buf.push('                    <option value="1" selected="">是</option>                                                                                                                              ' );
		buf.push('                    <option value="2">否</option>                                                                                                                                          ' );
		buf.push('                </select>                                                                                                                                                                    ' );
		buf.push('            </div>                                                                                                                                                                           ' );
		buf.push('        </div>                                                                                                                                                                               ' );
		buf.push('    </div>                                                                                                                                                                                   ' );
		buf.push('                                                                                                                                                                                             ' );
		buf.push('    <div class="layui-form-item">                                                                                                                                                            ' );
		buf.push('        <div class="layui-inline">                                                                                                                                                           ' );
		buf.push('            <label class="layui-form-label">简历投递邮箱</label>                                                                                                                             ' );
		buf.push('            <div class="layui-input-inline">                                                                                                                                                 ' );
		buf.push('                <input type="text" name="resumeMail" lay-verify="email" autocomplete="off" class="layui-input">                                                                                   ' );
		buf.push('            </div>                                                                                                                                                                           ' );
		buf.push('        </div>                                                                                                                                                                               ' );
		buf.push('        <div class="layui-inline">                                                                                                                                                           ' );
		buf.push('            <label class="layui-form-label">招聘人微信</label>                                                                                                                               ' );
		buf.push('            <div class="layui-input-inline">                                                                                                                                                 ' );
		buf.push('                <input type="text" name="contactWeixinId" lay-verify="required" autocomplete="off" placeholder="" class="layui-input">                                                          ' );
		buf.push('            </div>                                                                                                                                                                           ' );
		buf.push('        </div>                                                                                                                                                                               ' );
		buf.push('        <div class="layui-inline">                                                                                                                                                           ' );
		buf.push('            <label class="layui-form-label">招聘类型</label>                                                                                                                                 ' );
		buf.push('            <div class="layui-input-inline">                                                                                                                                                 ' );
		buf.push('                <select name="recruitType" lay-filter="aihao">                                                                                                                                  ' );
		buf.push('                    <option value=""></option>                                                                                                                                               ' );
		buf.push('                    <option value="0">写作</option>                                                                                                                                          ' );
		buf.push('                    <option value="1" selected="">内推</option>                                                                                                                              ' );
		buf.push('                    <option value="2">HR招聘</option>                                                                                                                                    ' );
		buf.push('                </select>                                                                                                                                                                    ' );
		buf.push('            </div>                                                                                                                                                                           ' );
		buf.push('        </div>                                                                                                                                                                               ' );
		buf.push('    </div>                                                                                                                                                                                   ' );
		buf.push('                                                                                                                                                                                             ' );
		buf.push('    <div class="layui-form-item">                                                                                                                                                            ' );
		buf.push('        <label class="layui-form-label">公司地址</label>                                                                                                                                     ' );
		buf.push('        <div class="layui-input-block">                                                                                                                                                      ' );
		buf.push('            <input type="text" name="title" lay-verify="required" autocomplete="off" placeholder="" class="layui-input">                                                              ' );
		buf.push('        </div>                                                                                                                                                                               ' );
		buf.push('    </div>                                                                                                                                                                                   ' );
		buf.push('                                                                                                                                                                                             ' );
		buf.push('    <div class="layui-form-item layui-form-text">                                                                                                                                            ' );
		buf.push('        <label class="layui-form-label">公司简介</label>                                                                                                                                     ' );
		buf.push('        <div class="layui-input-block">                                                                                                                                                      ' );
		buf.push('            <textarea placeholder="" name="companySynopsis" class="layui-textarea"></textarea>                                                                                                            ' );
		buf.push('        </div>                                                                                                                                                                               ' );
		buf.push('    </div>                                                                                                                                                                                   ' );
		buf.push('                                                                                                                                                                                             ' );
		buf.push('    <div class="layui-form-item">                                                                                                                                                            ' );
		buf.push('        <div class="layui-inline">                                                                                                                                                           ' );
		buf.push('            <label class="layui-form-label">有效期</label>                                                                                                                                   ' );
		buf.push('            <div class="layui-input-inline">                                                                                                                                                 ' );
		buf.push('                <input type="text" name="deadline" id="date" lay-verify="date" placeholder="yyyy-mm-dd" autocomplete="off" class="layui-input" onclick="layui.laydate({elem: this})">            ' );
		buf.push('            </div>                                                                                                                                                                           ' );
		buf.push('        </div>                                                                                                                                                                               ' );
		buf.push('        <div class="layui-inline">                                                                                                                                                           ' );
		buf.push('            <label class="layui-form-label">职位名称</label>                                                                                                                                 ' );
		buf.push('            <div class="layui-input-inline">                                                                                                                                                 ' );
		buf.push('                <input type="text" name="positionName" lay-verify="title" autocomplete="off" placeholder="" class="layui-input">                                                          ' );
		buf.push('            </div>                                                                                                                                                                           ' );
		buf.push('        </div>                                                                                                                                                                               ' );
		buf.push('        <div class="layui-inline">                                                                                                                                                           ' );
		buf.push('            <label class="layui-form-label">薪水范围(k)</label>                                                                                                                                 ' );
		buf.push('            <div class="layui-input-inline" style="width: 32px;">                                                                                                                            ' );
		buf.push('                <input type="text" name="highSalary" placeholder="￥" autocomplete="off" class="layui-input">                                                                                 ' );
		buf.push('            </div>                                                                                                                                                                           ' );
		buf.push('            <div class="layui-form-mid">-</div>                                                                                                                                              ' );
		buf.push('            <div class="layui-input-inline" style="width: 32px;">                                                                                                                            ' );
		buf.push('                <input type="text" name="lowSalary" placeholder="￥" autocomplete="off" class="layui-input">                                                                                 ' );
		buf.push('            </div>                                                                                                                                                                           ' );
		buf.push('            <div class="layui-input-inline" style="width: 32px;" data-name="isDiscussPersonally">                                                                                                                            ' );
		buf.push('                <input type="checkbox" name="like[write]" title="面议">                                                                                                                      ' );
		buf.push('            </div>                                                                                                                                                                           ' );
		buf.push('        </div>                                                                                                                                                                               ' );
		buf.push('    </div>                                                                                                                                                                                   ' );
		buf.push('                                                                                                                                                                                             ' );
		buf.push('    <div class="layui-form-item">                                                                                                                                                            ' );
		buf.push('        <div class="layui-inline">                                                                                                                                                           ' );
		buf.push('            <label class="layui-form-label">职位性质</label>                                                                                                                                 ' );
		buf.push('            <div class="layui-input-inline">                                                                                                                                                 ' );
		buf.push('                <select name="interest" lay-filter="aihao">                                                                                                                                  ' );
		buf.push('                    <option value=""></option>                                                                                                                                               ' );
		buf.push('                    <option value="1">全职</option>                                                                                                                                          ' );
		buf.push('                    <option value="2" selected="">兼职</option>                                                                                                                              ' );
		buf.push('                    <option value="3">实习 </option>                                                                                                                                          ' );
		buf.push('                </select>                                                                                                                                                                    ' );
		buf.push('            </div>                                                                                                                                                                           ' );
		buf.push('        </div>                                                                                                                                                                               ' );
		buf.push('        <div class="layui-inline">                                                                                                                                                           ' );
		buf.push('            <label class="layui-form-label">学历要求</label>                                                                                                                                 ' );
		buf.push('            <div class="layui-input-inline">                                                                                                                                                 ' );
		buf.push('                <select name="interest" lay-filter="aihao">                                                                                                                                  ' );
		buf.push('                    <option value=""></option>                                                                                                                                               ' );
		buf.push('                    <option value="0">写作</option>                                                                                                                                          ' );
		buf.push('                    <option value="1" selected="">高中</option>                                                                                                                              ' );
		buf.push('                    <option value="2">高中</option>                                                                                                                                          ' );
		buf.push('                    <option value="3">本科</option>                                                                                                                                          ' );
		buf.push('                    <option value="4">硕士</option>                                                                                                                                          ' );
		buf.push('                    <option value="5">博士</option>                                                                                                                                          ' );
		buf.push('                    <option value="6">其他</option>                                                                                                                                          ' );
		buf.push('                    <option value="7">不限</option>                                                                                                                                          ' );
		buf.push('                </select>                                                                                                                                                                    ' );
		buf.push('            </div>                                                                                                                                                                           ' );
		buf.push('        </div>                                                                                                                                                                               ' );
		buf.push('        <div class="layui-inline">                                                                                                                                                           ' );
		buf.push('            <label class="layui-form-label">工作经验(年)</label>                                                                                                                                 ' );
		buf.push('             <div class="layui-input-inline" style="width: 75px;">                                                                                                                            ' );
		buf.push('                <input type="number" name="lowWorkingLife" placeholder="最低" autocomplete="off" class="layui-input">                                                                                 ' );
		buf.push('            </div>                                                                                                                                                                           ' );
		buf.push('            <div class="layui-form-mid">-</div>                                                                                                                                              ' );
		buf.push('            <div class="layui-input-inline" style="width: 75px;">                                                                                                                            ' );
		buf.push('                <input type="number" name="highWorkingLife" placeholder="最高" autocomplete="off" class="layui-input">                                                                                 ' );
		buf.push('            </div>                                                                                                                                                                           ' );
		
		buf.push('        </div>                                                                                                                                                                               ' );
		buf.push('    </div>                                                                                                                                                                                   ' );
		buf.push('                                                                                                                                                                                             ' );
		buf.push('    <div class="layui-form-item">                                                                                                                                                            ' );
		buf.push('        <label class="layui-form-label">工作地址</label>                                                                                                                                     ' );
		buf.push('        <div class="layui-input-block">                                                                                                                                                      ' );
		buf.push('            <input type="text" name="workAddress" lay-verify="title" autocomplete="off" placeholder="" class="layui-input">                                                              ' );
		buf.push('        </div>                                                                                                                                                                               ' );
		buf.push('    </div>                                                                                                                                                                                   ' );
		buf.push('                                                                                                                                                                                             ' );
		buf.push('    <div class="layui-form-item layui-form-text">                                                                                                                                            ' );
		buf.push('        <label class="layui-form-label">职责描述</label>                                                                                                                                     ' );
		buf.push('        <div class="layui-input-block">                                                                                                                                                      ' );
		buf.push('            <textarea placeholder="" name="positionDesc" class="layui-textarea"></textarea>                                                                                                               ' );
		buf.push('        </div>                                                                                                                                                                               ' );
		buf.push('    </div>                                                                                                                                                                                   ' );
		buf.push('    <div class="layui-form-item layui-form-text">                                                                                                                                            ' );
		buf.push('        <label class="layui-form-label">任职要求</label>                                                                                                                                     ' );
		buf.push('        <div class="layui-input-block">                                                                                                                                                      ' );
		buf.push('           <textarea placeholder="" name="positionRequirements" class="layui-textarea"></textarea>                                                                                                         ' );
		buf.push('        </div>                                                                                                                                                                               ' );
		buf.push('    </div>                                                                                                                                                                                   ' );
		buf.push('                                                                                                                                                                                             ' );
		
		buf.push('    <div class="layui-form-item">                                                                                                                                                            ');
		buf.push('      <div class="layui-input-block">                                                                                                                                                        ');
		buf.push('        <button class="layui-btn" lay-submit lay-filter="ntq-employ-add-btn">立即提交</button>                                                                                                         ');
		buf.push('        <button type="reset" class="layui-btn layui-btn-primary">重置</button>                                                                                                               ');
		buf.push('      </div>                                                                                                                                                                                 ');
		buf.push('    </div>                                                                                                                                                                                   ');
		buf.push('</form>																																														');	
		buf.push('</div>																																														');	
		
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
			    	var request = PageInfo.FunUtil.Global.API;
			    	
			    	
			    	 
			    	layui.use(['form', 'layedit', 'laydate'], function(){
					  var form = layui.form()
					  ,layer = layui.layer
					  ,layedit = layui.layedit
					  ,laydate = layui.laydate;
					 	form.render('');
					 
					  //自定义验证规则
					  form.verify({
					    title: function(value){
					      if(value.length < 5){
					        return '标题至少得5个字符啊';
					      }
					    }
					    ,pass: [/(.+){6,12}$/, '密码必须6到12位']
					    ,content: function(value){
					      layedit.sync(editIndex);
					    }
					  });
					  
					  //监听指定开关
					  form.on('switch(switchTest)', function(data){
					    layer.msg('开关checked：'+ (this.checked ? 'true' : 'false'), {
					      offset: '6px'
					    });
					    layer.tips('温馨提示：请注意开关状态的文字可以随意定义，而不仅仅是ON|OFF', data.othis)
					  });
					  
					  //监听提交
					  form.on('submit(ntq-employ-add-btn)', function(data){
					    
					    
					    console.log(data);
					    
					    
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

