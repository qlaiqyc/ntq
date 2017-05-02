PageInfo.register({"type":"Obj","info":function(){
	var FunUtil = {};
    var HtmUtil = {};
    var PageObj = {};
	
	
	HtmUtil.layout   = function(){
		
		var buf = [];
	 	
	 	buf.push('<div id="ntq-handle-index" class="common-box">                                                                                                                                                                                ');
		buf.push('    <div id="ntq-handle-index-search">                                                                                                                                                                                        ');
		buf.push('        <form class="layui-form" action="">                                                                                                                                                                                   ');
		buf.push('            <div class="layui-form-item">                                                                                                                                                                                     ');
		buf.push('                <div class="layui-inline">                                                                                                                                                                                    ');
		buf.push('                    <label class="layui-form-label">职位编号</label>                                                                                                                                                          ');
		buf.push('                    <div class="layui-input-inline">                                                                                                                                                                          ');
		buf.push('                        <input type="text" name="title" lay-verify="title" autocomplete="off" placeholder="请输入标题" class="layui-input">                                                                                   ');
		buf.push('                    </div>                                                                                                                                                                                                    ');
		buf.push('                </div>                                                                                                                                                                                                        ');
		buf.push('                <div class="layui-inline">                                                                                                                                                                                    ');
		buf.push('                    <label class="layui-form-label">求职电话</label>                                                                                                                                                          ');
		buf.push('                    <div class="layui-input-inline">                                                                                                                                                                          ');
		buf.push('                        <input type="text" name="title" lay-verify="title" autocomplete="off" placeholder="请输入标题" class="layui-input">                                                                                   ');
		buf.push('                    </div>                                                                                                                                                                                                    ');
		buf.push('                </div>                                                                                                                                                                                                        ');
		buf.push('                                                                                                                                                                                                                              ');
		buf.push('                <div class="layui-inline">                                                                                                                                                                                    ');
		buf.push('                    <label class="layui-form-label">                                                                                                                                                                          ');
		buf.push('                        <button class="layui-btn" lay-submit="" lay-filter="demo1">搜索</button>                                                                                                                              ');
		buf.push('                    </label>                                                                                                                                                                                                  ');
		buf.push('                    <div class="layui-input-inline">                                                                                                                                                                          ');
		buf.push('                                                                                                                                                                                                                              ');
		buf.push('                    </div>                                                                                                                                                                                                    ');
		buf.push('                </div>                                                                                                                                                                                                        ');
		buf.push('        </form>                                                                                                                                                                                                               ');
		buf.push('        </div>                                                                                                                                                                                                                ');
		buf.push('        <div id="ntq-handle-index-condition">                                                                                                                                                                                 ');
		buf.push('                                                                                                                                                                                                                              ');
		buf.push('            <div class="layui-form">                                                                                                                                                                                          ');
		buf.push('                <table class="layui-table">                                                                                                                                                                                   ');
		buf.push('                    <colgroup>                                                                                                                                                                                                ');
		buf.push('                        <col width="100">                                                                                                                                                                                     ');
		buf.push('                            <col width="100">                                                                                                                                                                                 ');
		buf.push('                                <col width="150">                                                                                                                                                                             ');
		buf.push('                                    <col width="100">                                                                                                                                                                         ');
		buf.push('                                        <col>                                                                                                                                                                                 ');
		buf.push('                    </colgroup>                                                                                                                                                                                               ');
		buf.push('                    <thead>                                                                                                                                                                                                   ');
		buf.push('                        <tr>                                                                                                                                                                                                  ');
		buf.push('                            <th>职位编号</th>                                                                                                                                                                                 ');
		buf.push('                            <th>职位名称</th>                                                                                                                                                                                 ');
		buf.push('                            <th>求职者电话</th>                                                                                                                                                                               ');
		buf.push('                            <th>微信ID</th>                                                                                                                                                                                   ');
		buf.push('                            <th>学历</th>                                                                                                                                                                                     ');
		buf.push('                            <th>状态</th>                                                                                                                                                                                     ');
		buf.push('                            <th>简历附件</th>                                                                                                                                                                                 ');
		buf.push('                            <th>操作栏位</th>                                                                                                                                                                                 ');
		buf.push('                            <th>企业名称</th>                                                                                                                                                                                 ');
		buf.push('                        </tr>                                                                                                                                                                                                 ');
		buf.push('                    </thead>                                                                                                                                                                                                  ');
		buf.push('                    <tbody>                                                                                                                                                                                                   ');
		buf.push('                        <tr>                                                                                                                                                                                                  ');
		buf.push('                            <td>1000110</td>                                                                                                                                                                                  ');
		buf.push('                            <td>1000110</td>                                                                                                                                                                                  ');
		buf.push('                            <td>1000110</td>                                                                                                                                                                                  ');
		buf.push('                            <td>1000110</td>                                                                                                                                                                                  ');
		buf.push('                            <td>1000110</td>                                                                                                                                                                                  ');
		buf.push('                            <td>1000110</td>                                                                                                                                                                                  ');
		buf.push('                            <td>1000110</td>                                                                                                                                                                                  ');
		buf.push('                            <td>1000110</td>                                                                                                                                                                                  ');
		buf.push('                            <td>1000110</td>                                                                                                                                                                                  ');
		buf.push('                        </tr>                                                                                                                                                                                                 ');
		buf.push('                        <tr>                                                                                                                                                                                                  ');
		buf.push('                            <td>1000110</td>                                                                                                                                                                                  ');
		buf.push('                            <td>1000110</td>                                                                                                                                                                                  ');
		buf.push('                            <td>1000110</td>                                                                                                                                                                                  ');
		buf.push('                            <td>1000110</td>                                                                                                                                                                                  ');
		buf.push('                            <td>1000110</td>                                                                                                                                                                                  ');
		buf.push('                            <td>1000110</td>                                                                                                                                                                                  ');
		buf.push('                            <td>1000110</td>                                                                                                                                                                                  ');
		buf.push('                            <td>1000110</td>                                                                                                                                                                                  ');
		buf.push('                            <td>1000110</td>                                                                                                                                                                                  ');
		buf.push('                        </tr>                                                                                                                                                                                                 ');
		buf.push('                        <tr>                                                                                                                                                                                                  ');
		buf.push('                            <td>1000110</td>                                                                                                                                                                                  ');
		buf.push('                            <td>1000110</td>                                                                                                                                                                                  ');
		buf.push('                            <td>1000110</td>                                                                                                                                                                                  ');
		buf.push('                            <td>1000110</td>                                                                                                                                                                                  ');
		buf.push('                            <td>1000110</td>                                                                                                                                                                                  ');
		buf.push('                            <td>1000110</td>                                                                                                                                                                                  ');
		buf.push('                            <td>1000110</td>                                                                                                                                                                                  ');
		buf.push('                            <td>1000110</td>                                                                                                                                                                                  ');
		buf.push('                            <td>1000110</td>                                                                                                                                                                                  ');
		buf.push('                        </tr>                                                                                                                                                                                                 ');
		buf.push('                        <tr>                                                                                                                                                                                                  ');
		buf.push('                            <td>1000110</td>                                                                                                                                                                                  ');
		buf.push('                            <td>1000110</td>                                                                                                                                                                                  ');
		buf.push('                            <td>1000110</td>                                                                                                                                                                                  ');
		buf.push('                            <td>1000110</td>                                                                                                                                                                                  ');
		buf.push('                            <td>1000110</td>                                                                                                                                                                                  ');
		buf.push('                            <td>1000110</td>                                                                                                                                                                                  ');
		buf.push('                            <td>1000110</td>                                                                                                                                                                                  ');
		buf.push('                            <td>1000110</td>                                                                                                                                                                                  ');
		buf.push('                            <td>1000110</td>                                                                                                                                                                                  ');
		buf.push('                        </tr>                                                                                                                                                                                                 ');
		buf.push('                        <tr>                                                                                                                                                                                                  ');
		buf.push('                            <td>1000110</td>                                                                                                                                                                                  ');
		buf.push('                            <td>1000110</td>                                                                                                                                                                                  ');
		buf.push('                            <td>1000110</td>                                                                                                                                                                                  ');
		buf.push('                            <td>1000110</td>                                                                                                                                                                                  ');
		buf.push('                            <td>1000110</td>                                                                                                                                                                                  ');
		buf.push('                            <td>1000110</td>                                                                                                                                                                                  ');
		buf.push('                            <td>1000110</td>                                                                                                                                                                                  ');
		buf.push('                            <td>1000110</td>                                                                                                                                                                                  ');
		buf.push('                            <td>1000110</td>                                                                                                                                                                                  ');
		buf.push('                        </tr>                                                                                                                                                                                                 ');
		buf.push('                    </tbody>                                                                                                                                                                                                  ');
		buf.push('                </table>                                                                                                                                                                                                      ');
		buf.push('                <div id="ntq-handle-index-condition-pag">                                                                                                                                                                     ');
		buf.push('                </div>                                                                                                                                                                                                        ');
		buf.push('            </div>                                                                                                                                                                                                            ');
		buf.push('        </div>                                                                                                                                                                                                                ');
		buf.push('    </div>                                                                                                                                                                                                                    ');
		buf.push('</div>																																																						');																			
				
		
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
			         
			    },
			    update(){
			        
			    },
			    show(){
			    	 
			    	var $this = this;
			    	
			    	 
			    	layui.use(['form', 'layedit', 'laydate'], function(){
					  var form = layui.form()
					  ,layer = layui.layer
					  ,layedit = layui.layedit
					  ,laydate = layui.laydate,
					 	laypage = layui.laypage
	  				  ,layer = layui.layer;
					 	form.render('');
					 	
					 	laypage({
							cont: 'ntq-admin-index-condition-pag',
							pages: 100,
							skip: true
						});
					  //创建一个编辑器
					  var $ = layui.jquery, form = layui.form();
					  
					  //全选
					  form.on('checkbox(allChoose)', function(data){
					    var child = $(data.elem).parents('table').find('tbody input[type="checkbox"]');
					    child.each(function(index, item){
					      item.checked = data.elem.checked;
					    });
					    form.render('checkbox');
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

