PageInfo.register({"type":"Obj","info":function(){
	
	var PageObj = {};
	 
	PageObj.require = {
		"$":"jquery",
		"layui":"layui"
	};
	
	 
	PageObj.page = function(){
		
		var FunUtil = {};
	    var HtmUtil = {};
    	var Page 	= {};
    	
    	
    	HtmUtil.common4num = function(){
		var buf = [];
		buf.push('<div id="ntq-apply-job-num">');
		
		buf.push('<table class="layui-table" lay-even="" lay-skin="row">');
		buf.push('	<thead>');
		buf.push('		<tr>');
		buf.push('			<th>姓名</th>');
		buf.push('			<th>学历</th>');
		buf.push('			<th>电话</th>');
		buf.push('			<th>工作年限</th>');
		buf.push('		</tr>');
		buf.push('	</thead>');
		buf.push('	<tbody>');
		buf.push('		<tr>');
		buf.push('			<td>1000110</td>');
		buf.push('			<td>高级JAVA</td>');
		buf.push('			<td>20170301</td>');
		buf.push('			<td>20170301</td>');
		buf.push('		</tr>');
		buf.push('	 </tbody>');
		buf.push('</table>');
		buf.push('</div>')
		
		return buf.join("");

	};
	
	
	
		HtmUtil.common4update  = function(data){
		
		var buf = [];
	 	buf.push('<div id="ntq-apply-job-update">');
	 	
		buf.push('<form class="layui-form"  >');
		if(data.type == "update") buf.push('<div class="layui-form-item"> <label class="layui-form-label">职位编号</label> <div class="layui-input-inline"> <input type="text" disabled="" name="title" lay-verify="title" autocomplete="off" value="100010" class="layui-input"></div> </div>');
		buf.push('    <div class="layui-form-item">                                                                                                                                                            ' );
		buf.push('        <div class="layui-inline">                                                                                                                                                           ' );
		buf.push('            <label class="layui-form-label">有效期</label>                                                                                                                                   ' );
		buf.push('            <div class="layui-input-inline">                                                                                                                                                 ' );
		buf.push('                <input type="text" name="date" id="date" lay-verify="date" placeholder="yyyy-mm-dd" autocomplete="off" class="layui-input" onclick="layui.laydate({elem: this})">            ' );
		buf.push('            </div>                                                                                                                                                                           ' );
		buf.push('        </div>                                                                                                                                                                               ' );
		buf.push('        <div class="layui-inline">                                                                                                                                                           ' );
		buf.push('            <label class="layui-form-label">职位名称</label>                                                                                                                                 ' );
		buf.push('            <div class="layui-input-inline">                                                                                                                                                 ' );
		buf.push('                <input type="text" name="title" lay-verify="title" autocomplete="off" placeholder="请输入标题" class="layui-input">                                                          ' );
		buf.push('            </div>                                                                                                                                                                           ' );
		buf.push('        </div>                                                                                                                                                                               ' );
		buf.push('        <div class="layui-inline">                                                                                                                                                           ' );
		buf.push('            <label class="layui-form-label">薪水范围(k)</label>                                                                                                                                 ' );
		buf.push('            <div class="layui-input-inline" style="width: 32px;">                                                                                                                            ' );
		buf.push('                <input type="text" name="price_min" placeholder="￥" autocomplete="off" class="layui-input">                                                                                 ' );
		buf.push('            </div>                                                                                                                                                                           ' );
		buf.push('            <div class="layui-form-mid">-</div>                                                                                                                                              ' );
		buf.push('            <div class="layui-input-inline" style="width: 32px;">                                                                                                                            ' );
		buf.push('                <input type="text" name="price_max" placeholder="￥" autocomplete="off" class="layui-input">                                                                                 ' );
		buf.push('            </div>                                                                                                                                                                           ' );
		buf.push('            <div class="layui-input-inline" style="width: 32px;">                                                                                                                            ' );
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
		buf.push('                    <option value="0">写作</option>                                                                                                                                          ' );
		buf.push('                    <option value="1" selected="">阅读</option>                                                                                                                              ' );
		buf.push('                    <option value="2">游戏</option>                                                                                                                                          ' );
		buf.push('                    <option value="3">音乐</option>                                                                                                                                          ' );
		buf.push('                    <option value="4">旅行</option>                                                                                                                                          ' );
		buf.push('                </select>                                                                                                                                                                    ' );
		buf.push('            </div>                                                                                                                                                                           ' );
		buf.push('        </div>                                                                                                                                                                               ' );
		buf.push('        <div class="layui-inline">                                                                                                                                                           ' );
		buf.push('            <label class="layui-form-label">学历要求</label>                                                                                                                                 ' );
		buf.push('            <div class="layui-input-inline">                                                                                                                                                 ' );
		buf.push('                <select name="interest" lay-filter="aihao">                                                                                                                                  ' );
		buf.push('                    <option value=""></option>                                                                                                                                               ' );
		buf.push('                    <option value="0">写作</option>                                                                                                                                          ' );
		buf.push('                    <option value="1" selected="">阅读</option>                                                                                                                              ' );
		buf.push('                    <option value="2">游戏</option>                                                                                                                                          ' );
		buf.push('                    <option value="3">音乐</option>                                                                                                                                          ' );
		buf.push('                    <option value="4">旅行</option>                                                                                                                                          ' );
		buf.push('                </select>                                                                                                                                                                    ' );
		buf.push('            </div>                                                                                                                                                                           ' );
		buf.push('        </div>                                                                                                                                                                               ' );
		buf.push('        <div class="layui-inline">                                                                                                                                                           ' );
		buf.push('            <label class="layui-form-label">工作经验</label>                                                                                                                                 ' );
		buf.push('            <div class="layui-input-inline">                                                                                                                                                 ' );
		buf.push('                <select name="interest" lay-filter="aihao">                                                                                                                                  ' );
		buf.push('                    <option value=""></option>                                                                                                                                               ' );
		buf.push('                    <option value="0">写作</option>                                                                                                                                          ' );
		buf.push('                    <option value="1" selected="">阅读</option>                                                                                                                              ' );
		buf.push('                    <option value="2">游戏</option>                                                                                                                                          ' );
		buf.push('                    <option value="3">音乐</option>                                                                                                                                          ' );
		buf.push('                    <option value="4">旅行</option>                                                                                                                                          ' );
		buf.push('                </select>                                                                                                                                                                    ' );
		buf.push('            </div>                                                                                                                                                                           ' );
		buf.push('        </div>                                                                                                                                                                               ' );
		buf.push('    </div>                                                                                                                                                                                   ' );
		buf.push('                                                                                                                                                                                             ' );
		buf.push('    <div class="layui-form-item">                                                                                                                                                            ' );
		buf.push('        <label class="layui-form-label">工作地址</label>                                                                                                                                     ' );
		buf.push('        <div class="layui-input-block">                                                                                                                                                      ' );
		buf.push('            <input type="text" name="title" lay-verify="title" autocomplete="off" placeholder="请输入标题" class="layui-input">                                                              ' );
		buf.push('        </div>                                                                                                                                                                               ' );
		buf.push('    </div>                                                                                                                                                                                   ' );
		buf.push('                                                                                                                                                                                             ' );
		buf.push('    <div class="layui-form-item layui-form-text">                                                                                                                                            ' );
		buf.push('        <label class="layui-form-label">职责描述</label>                                                                                                                                     ' );
		buf.push('        <div class="layui-input-block">                                                                                                                                                      ' );
		buf.push('            <textarea placeholder="请输入内容" class="layui-textarea"></textarea>                                                                                                               ' );
		buf.push('        </div>                                                                                                                                                                               ' );
		buf.push('    </div>                                                                                                                                                                                   ' );
		buf.push('    <div class="layui-form-item layui-form-text">                                                                                                                                            ' );
		buf.push('        <label class="layui-form-label">任职要求</label>                                                                                                                                     ' );
		buf.push('        <div class="layui-input-block">                                                                                                                                                      ' );
		buf.push('           <textarea placeholder="请输入内容" class="layui-textarea"></textarea>                                                                                                         ' );
		buf.push('        </div>                                                                                                                                                                               ' );
		buf.push('    </div>                                                                                                                                                                                   ' );
		buf.push('                                                                                                                                                                                             ' );
		
		buf.push('    <div class="layui-form-item">                                                                                                                                                            ');
		buf.push('      <div class="layui-input-block">                                                                                                                                                        ');
		buf.push('        <button class="layui-btn" lay-submit lay-filter="formDemo">立即提交</button>                                                                                                         ');
		buf.push('        <button type="reset" class="layui-btn layui-btn-primary">重置</button>                                                                                                               ');
		buf.push('      </div>                                                                                                                                                                                 ');
		buf.push('    </div>                                                                                                                                                                                   ');
		buf.push('</form>																																														');	
		buf.push('</div>');
		return buf.join("");
		
	};
	
    	
	
	 
		Page.show = function(){
			var $this = this;
			layui.use(['form', 'layedit', 'laydate','laypage', 'layer'], function(){
					  var form = layui.form()
					  ,layer = layui.layer
					  ,layedit = layui.layedit
					  ,laydate = layui.laydate,
					  laypage = layui.laypage
	  				  ,layer = layui.layer;
					 	form.render('');
					 	
					 	laypage({
							cont: 'ntq-apply-job-condition-pag',
							pages: 100,
							skip: true
						});
						
						
						$("span.ntq-apply-job-condition-num").unbind("click").bind("click",function(){
		
						layer.open({
							type: 1,
							skin: 'layui-layer-demo',
							area: ['420px', '240px'], //宽高
							content: HtmUtil.common4num()
						});
					});
					
					$("#ntq-apply-job-condition-update").unbind("click").bind("click",function(){
		
					  layer.open({
						  type: 1,
						  content: HtmUtil.common4update({"type":"update"}),
						  area: ['1080px', '578px'], //宽高
						  skin: 'layui-layer-demo',
						  success:function(){
						  	
						  	layui.use(['form', 'layedit', 'laydate','laypage', 'layer'], function(){
							  var form = layui.form()
							  ,layer = layui.layer
							  ,layedit = layui.layedit
							  ,laydate = layui.laydate,
							  laypage = layui.laypage
			  				  ,layer = layui.layer;
							 	form.render('');
							  
							});
						  	
						  }
						});
						 
					});
					
					
					$("#ntq-apply-job-condition-add").unbind("click").bind("click",function(){
		
					  layer.open({
						  type: 1,
						  content: HtmUtil.common4update({"type":"add"}),
						  area: ['1080px', '511px'], //宽高
						  skin: 'layui-layer-demo',
						  success:function(){
						  	
						  	layui.use(['form', 'layedit', 'laydate','laypage', 'layer'], function(){
							  var form = layui.form()
							  ,layer = layui.layer
							  ,layedit = layui.layedit
							  ,laydate = layui.laydate,
							  laypage = layui.laypage
			  				  ,layer = layui.layer;
							 	form.render('');
							  
							});
						  	
						  }
						});
						 
					});
					
					  
					});
					
		 };
		
		return Page;
		
	};
	
	
	return PageObj;
}});

