PageInfo.register({"type":"Obj","info":function(){
	var FunUtil = {};
    var HtmUtil = {};
    var PageObj = {};
	
	
	HtmUtil.layout   = function(){
		
		var buf = [];
	 	buf.push(' <div id="ntq-admin-index" class="common-box">                                                                                                                                                                    ');
		buf.push('     <div id="ntq-admin-index-search">                                                                                                                                                                            ');
		buf.push('         <form class="layui-form" action="">                                                                                                                                                                      ');
		buf.push('             <div class="layui-form-item">                                                                                                                                                                        ');
		buf.push('                 <div class="layui-inline">                                                                                                                                                                       ');
		buf.push('                     <label class="layui-form-label">公司名称</label>                                                                                                                                             ');
		buf.push('                     <div class="layui-input-inline">                                                                                                                                                             ');
		buf.push('                         <input type="text" name="title" lay-verify="title" autocomplete="off" placeholder="请输入标题" class="layui-input">                                                                      ');
		buf.push('                     </div>                                                                                                                                                                                       ');
		buf.push('                 </div>                                                                                                                                                                                           ');
		buf.push('                 <div class="layui-inline">                                                                                                                                                                       ');
		buf.push('                     <label class="layui-form-label">职位名称</label>                                                                                                                                             ');
		buf.push('                     <div class="layui-input-inline">                                                                                                                                                             ');
		buf.push('                         <input type="text" name="title" lay-verify="title" autocomplete="off" placeholder="请输入标题" class="layui-input">                                                                      ');
		buf.push('                     </div>                                                                                                                                                                                       ');
		buf.push('                 </div>                                                                                                                                                                                           ');
		buf.push('                                                                                                                                                                                                                  ');
		buf.push('                 <div class="layui-inline">                                                                                                                                                                       ');
		buf.push('                     <label class="layui-form-label">处理状态</label>                                                                                                                                             ');
		buf.push('                     <div class="layui-input-inline">                                                                                                                                                             ');
		buf.push('                         <select name="interest" lay-filter="aihao">                                                                                                                                              ');
		buf.push('                             <option value=""></option>                                                                                                                                                           ');
		buf.push('                             <option value="0">写作</option>                                                                                                                                                      ');
		buf.push('                             <option value="1" selected="">阅读</option>                                                                                                                                          ');
		buf.push('                             <option value="2">游戏</option>                                                                                                                                                      ');
		buf.push('                             <option value="3">音乐</option>                                                                                                                                                      ');
		buf.push('                             <option value="4">旅行</option>                                                                                                                                                      ');
		buf.push('                         </select>                                                                                                                                                                                ');
		buf.push('                     </div>                                                                                                                                                                                       ');
		buf.push('                 </div>                                                                                                                                                                                           ');
		buf.push('             </div>                                                                                                                                                                                               ');
		buf.push('                                                                                                                                                                                                                  ');
		buf.push('             <div class="layui-form-item">                                                                                                                                                                        ');
		buf.push('                                                                                                                                                                                                                  ');
		buf.push('                 <div class="layui-inline">                                                                                                                                                                       ');
		buf.push('                     <label class="layui-form-label">发布时间</label>                                                                                                                                             ');
		buf.push('                     <div class="layui-input-inline" style="width: 85px;">                                                                                                                                        ');
		buf.push('                         <input type="text" name="date" id="date" style="padding: 3px;" lay-verify="date" placeholder="yyyy-mm-dd" autocomplete="off" class="layui-input" onclick="layui.laydate({elem: this})">  ');
		buf.push('                                                                                                                                                                                                                  ');
		buf.push('                     </div>                                                                                                                                                                                       ');
		buf.push('                     <div class="layui-form-mid">-</div>                                                                                                                                                          ');
		buf.push('                     <div class="layui-input-inline" style="width: 85px;">                                                                                                                                        ');
		buf.push('                         <input type="text" name="date" id="date" style="padding: 3px;" lay-verify="date" placeholder="yyyy-mm-dd" autocomplete="off" class="layui-input" onclick="layui.laydate({elem: this})">  ');
		buf.push('                                                                                                                                                                                                                  ');
		buf.push('                     </div>                                                                                                                                                                                       ');
		buf.push('                 </div>                                                                                                                                                                                           ');
		buf.push('                                                                                                                                                                                                                  ');
		buf.push('                 <div class="layui-inline">                                                                                                                                                                       ');
		buf.push('                     <label class="layui-form-label">创建时间</label>                                                                                                                                             ');
		buf.push('                     <div class="layui-input-inline" style="width: 85px;">                                                                                                                                        ');
		buf.push('                         <input type="text" name="date" id="date" style="padding: 3px;" lay-verify="date" placeholder="yyyy-mm-dd" autocomplete="off" class="layui-input" onclick="layui.laydate({elem: this})">  ');
		buf.push('                                                                                                                                                                                                                  ');
		buf.push('                     </div>                                                                                                                                                                                       ');
		buf.push('                     <div class="layui-form-mid">-</div>                                                                                                                                                          ');
		buf.push('                     <div class="layui-input-inline" style="width: 85px;">                                                                                                                                        ');
		buf.push('                         <input type="text" name="date" id="date" style="padding: 3px;" lay-verify="date" placeholder="yyyy-mm-dd" autocomplete="off" class="layui-input" onclick="layui.laydate({elem: this})">  ');
		buf.push('                                                                                                                                                                                                                  ');
		buf.push('                     </div>                                                                                                                                                                                       ');
		buf.push('                 </div>                                                                                                                                                                                           ');
		buf.push('                 <div class="layui-inline">                                                                                                                                                                       ');
		buf.push('                     <label class="layui-form-label">                                                                                                                                                             ');
		buf.push('                         <button class="layui-btn" lay-submit="" lay-filter="demo1">搜索</button>                                                                                                                 ');
		buf.push('                     </label>                                                                                                                                                                                     ');
		buf.push('                     <div class="layui-input-inline">                                                                                                                                                             ');
		buf.push('                                                                                                                                                                                                                  ');
		buf.push('                     </div>                                                                                                                                                                                       ');
		buf.push('                 </div>                                                                                                                                                                                           ');
		buf.push('                                                                                                                                                                                                                  ');
		buf.push('             </div>                                                                                                                                                                                               ');
		buf.push('         </form>                                                                                                                                                                                                  ');
		buf.push('     </div>                                                                                                                                                                                                       ');
		buf.push('     <div id="ntq-admin-index-condition">                                                                                                                                                                         ');
		buf.push('                                                                                                                                                                                                                  ');
		buf.push('         <button class="layui-btn layui-btn-normal" id="ntq-admin-job-condition-add">导出</button>                                                                                                                ');
		buf.push('         <button class="layui-btn layui-btn-warm" id="ntq-admin-job-condition-update">发布</button>                                                                                                               ');
		buf.push('         <button class="layui-btn layui-btn-danger">拒绝</button>                                                                                                                                                 ');
		buf.push('                                                                                                                                                                                                                  ');
		buf.push('         <div class="layui-form">                                                                                                                                                                                 ');
		buf.push('             <table class="layui-table">                                                                                                                                                                          ');
		buf.push('                 <colgroup>                                                                                                                                                                                       ');
		buf.push('                     <col width="50">                                                                                                                                                                             ');
		buf.push('                         <col width="150">                                                                                                                                                                        ');
		buf.push('                             <col width="150">                                                                                                                                                                    ');
		buf.push('                                 <col width="200">                                                                                                                                                                ');
		buf.push('                                     <col>                                                                                                                                                                        ');
		buf.push('                 </colgroup>                                                                                                                                                                                      ');
		buf.push('                 <thead>                                                                                                                                                                                          ');
		buf.push('                     <tr>                                                                                                                                                                                         ');
		buf.push('                         <th>                                                                                                                                                                                     ');
		buf.push('                             <input type="checkbox" name="" lay-skin="primary" lay-filter="allChoose">                                                                                                            ');
		buf.push('                         </th>                                                                                                                                                                                    ');
		buf.push('                         <th>公司名称</th>                                                                                                                                                                        ');
		buf.push('                         <th>职位名称</th>                                                                                                                                                                        ');
		buf.push('                         <th>职位编号</th>                                                                                                                                                                        ');
		buf.push('                         <th>处理状态</th>                                                                                                                                                                        ');
		buf.push('                         <th>备注</th>                                                                                                                                                                            ');
		buf.push('                         <th>创建时间</th>                                                                                                                                                                        ');
		buf.push('                         <th>发布时间</th>                                                                                                                                                                        ');
		buf.push('                     </tr>                                                                                                                                                                                        ');
		buf.push('                 </thead>                                                                                                                                                                                         ');
		buf.push('                 <tbody>                                                                                                                                                                                          ');
		buf.push('                     <tr>                                                                                                                                                                                         ');
		buf.push('                         <td>                                                                                                                                                                                     ');
		buf.push('                             <input type="checkbox" name="" lay-skin="primary">                                                                                                                                   ');
		buf.push('                         </td>                                                                                                                                                                                    ');
		buf.push('                         <td>1000110</td>                                                                                                                                                                         ');
		buf.push('                         <td>1000110</td>                                                                                                                                                                         ');
		buf.push('                         <td>1000110</td>                                                                                                                                                                         ');
		buf.push('                         <td>1000110</td>                                                                                                                                                                         ');
		buf.push('                         <td>1000110</td>                                                                                                                                                                         ');
		buf.push('                         <td>1000110</td>                                                                                                                                                                         ');
		buf.push('                         <td>1000110</td>                                                                                                                                                                         ');
		buf.push('                     </tr>                                                                                                                                                                                        ');
		buf.push('                     <tr>                                                                                                                                                                                         ');
		buf.push('                         <td>                                                                                                                                                                                     ');
		buf.push('                             <input type="checkbox" name="" lay-skin="primary">                                                                                                                                   ');
		buf.push('                         </td>                                                                                                                                                                                    ');
		buf.push('                         <td>1000110</td>                                                                                                                                                                         ');
		buf.push('                         <td>1000110</td>                                                                                                                                                                         ');
		buf.push('                         <td>1000110</td>                                                                                                                                                                         ');
		buf.push('                         <td>1000110</td>                                                                                                                                                                         ');
		buf.push('                         <td>1000110</td>                                                                                                                                                                         ');
		buf.push('                         <td>1000110</td>                                                                                                                                                                         ');
		buf.push('                         <td>1000110</td>                                                                                                                                                                         ');
		buf.push('                     </tr>                                                                                                                                                                                        ');
		buf.push('                     <tr>                                                                                                                                                                                         ');
		buf.push('                         <td>                                                                                                                                                                                     ');
		buf.push('                             <input type="checkbox" name="" lay-skin="primary">                                                                                                                                   ');
		buf.push('                         </td>                                                                                                                                                                                    ');
		buf.push('                         <td>1000110</td>                                                                                                                                                                         ');
		buf.push('                         <td>1000110</td>                                                                                                                                                                         ');
		buf.push('                         <td>1000110</td>                                                                                                                                                                         ');
		buf.push('                         <td>1000110</td>                                                                                                                                                                         ');
		buf.push('                         <td>1000110</td>                                                                                                                                                                         ');
		buf.push('                         <td>1000110</td>                                                                                                                                                                         ');
		buf.push('                         <td>1000110</td>                                                                                                                                                                         ');
		buf.push('                     </tr>                                                                                                                                                                                        ');
		buf.push('                     <tr>                                                                                                                                                                                         ');
		buf.push('                         <td>                                                                                                                                                                                     ');
		buf.push('                             <input type="checkbox" name="" lay-skin="primary">                                                                                                                                   ');
		buf.push('                         </td>                                                                                                                                                                                    ');
		buf.push('                         <td>1000110</td>                                                                                                                                                                         ');
		buf.push('                         <td>1000110</td>                                                                                                                                                                         ');
		buf.push('                         <td>1000110</td>                                                                                                                                                                         ');
		buf.push('                         <td>1000110</td>                                                                                                                                                                         ');
		buf.push('                         <td>1000110</td>                                                                                                                                                                         ');
		buf.push('                         <td>1000110</td>                                                                                                                                                                         ');
		buf.push('                         <td>1000110</td>                                                                                                                                                                         ');
		buf.push('                     </tr>                                                                                                                                                                                        ');
		buf.push('                     <tr>                                                                                                                                                                                         ');
		buf.push('                         <td>                                                                                                                                                                                     ');
		buf.push('                             <input type="checkbox" name="" lay-skin="primary">                                                                                                                                   ');
		buf.push('                         </td>                                                                                                                                                                                    ');
		buf.push('                         <td>1000110</td>                                                                                                                                                                         ');
		buf.push('                         <td>1000110</td>                                                                                                                                                                         ');
		buf.push('                         <td>1000110</td>                                                                                                                                                                         ');
		buf.push('                         <td>1000110</td>                                                                                                                                                                         ');
		buf.push('                         <td>1000110</td>                                                                                                                                                                         ');
		buf.push('                         <td>1000110</td>                                                                                                                                                                         ');
		buf.push('                         <td>1000110</td>                                                                                                                                                                         ');
		buf.push('                     </tr>                                                                                                                                                                                        ');
		buf.push('                 </tbody>                                                                                                                                                                                         ');
		buf.push('             </table>                                                                                                                                                                                             ');
		buf.push('             <div id="ntq-admin-index-condition-pag">                                                                                                                                                             ');
		buf.push('             </div>                                                                                                                                                                                               ');
		buf.push('         </div>                                                                                                                                                                                                   ');
		buf.push('     </div>                                                                                                                                                                                                       ');
		buf.push(' </div>	');
		
		
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

