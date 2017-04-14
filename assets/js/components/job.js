PageInfo.register({"type":"Obj","info":function(){
	var FunUtil = {};
    var HtmUtil = {};
	
	
	HtmUtil.layout   = function(){
		
		var buf = [];
	 	
		buf.push('<div id="ntq-job">');
		buf.push('	<div id="ntq-job-search" class="common-box">                                                                                                                             ');
		buf.push('		<form class="layui-form" action="">                                                                                                                                  ');
		buf.push('			<div class="layui-form-item">                                                                                                                                    ');
		buf.push('				<div class="layui-inline"> <label class="layui-form-label">职位名称</label>                                                                                  ');
		buf.push('					<div class="layui-input-inline"> <input type="text" name="number" lay-verify="required|number" autocomplete="off" class="layui-input"> </div>            ');
		buf.push('				</div>                                                                                                                                                       ');
		buf.push('				<div class="layui-inline"> <label class="layui-form-label">发布日期</label>                                                                                  ');
		buf.push('					<div class="layui-input-inline"> <input type="text" name="date" id="date" lay-verify="date" placeholder="yyyy-mm-dd" autocomplete="off"  class="layui-input" onclick="layui.laydate({elem: this})"> </div> ');
		buf.push('				</div>                                                                                                                                                       ');
		buf.push('				<div class="layui-inline"> <label class="layui-form-label">处理状态</label>                                                                                  ');
		buf.push('					<div class="layui-input-inline">                                                                                                                         ');
		buf.push('						<select name="interest" lay-filter="aihao">                                                                                                          ');
		buf.push('							<option value=""></option>                                                                                                                       ');
		buf.push('							<option value="0">写作</option>                                                                                                                  ');
		buf.push('							<option value="1" selected="">阅读</option>                                                                                                      ');
		buf.push('							<option value="2">游戏</option>                                                                                                                  ');
		buf.push('							<option value="3">音乐</option>                                                                                                                  ');
		buf.push('							<option value="4">旅行</option>                                                                                                                  ');
		buf.push('						</select>                                                                                                                                            ');
		buf.push('					</div> <button class="layui-btn" lay-submit="" lay-filter="demo1">搜索</button> </div>                                                                   ');
		buf.push('			</div>                                                                                                                                                           ');
		buf.push('		</form>                                                                                                                                                              ');
		buf.push('	</div>                                                                                                                                                                   ');
		buf.push('	<div id="ntq-job-condition" class="common-box"> <button class="layui-btn layui-btn-normal" id="ntq-job-condition-add">新增职位</button> <button class="layui-btn layui-btn-warm" id="ntq-job-condition-update">重新发布</button>    <button class="layui-btn layui-btn-danger">下架</button>');
		buf.push('		<table class="layui-table" lay-even="" lay-skin="row">                                                                                                               ');
		buf.push('			<colgroup>                                                                                                                                                       ');
		buf.push('				<col width="150">                                                                                                                                            ');
		buf.push('				<col width="150">                                                                                                                                            ');
		buf.push('				<col width="200">                                                                                                                                            ');
		buf.push('				<col> </colgroup>                                                                                                                                            ');
		buf.push('			<thead>                                                                                                                                                          ');
		buf.push('				<tr>                                                                                                                                                         ');
		buf.push('					<th>职位编号</th>                                                                                                                                        ');
		buf.push('					<th>职位名称</th>                                                                                                                                        ');
		buf.push('					<th>创建时间</th>                                                                                                                                        ');
		buf.push('					<th>求职投放数量</th>                                                                                                                                    ');
		buf.push('					<th>状态</th>                                                                                                                                            ');
		buf.push('					<th>发布时间</th>                                                                                                                                        ');
		buf.push('				</tr>                                                                                                                                                        ');
		buf.push('			</thead>                                                                                                                                                         ');
		buf.push('			<tbody>                                                                                                                                                          ');
		buf.push('				<tr>                                                                                                                                                         ');
		buf.push('					<td>1000110</td>                                                                                                                                         ');
		buf.push('					<td>高级JAVA</td>                                                                                                                                        ');
		buf.push('					<td>20170301</td>                                                                                                                                        ');
		buf.push('					<td><span class="ntq-job-condition-num">20</span></td>                                                                                                   ');
		buf.push('					<td>待审核</td>                                                                                                                                          ');
		buf.push('					<td>20170301</td>                                                                                                                                        ');
		buf.push('				</tr>                                                                                                                                                        ');
		buf.push('				<tr>                                                                                                                                                         ');
		buf.push('					<td>1000110</td>                                                                                                                                         ');
		buf.push('					<td>高级JAVA</td>                                                                                                                                        ');
		buf.push('					<td>20170301</td>                                                                                                                                        ');
		buf.push('					<td><span class="ntq-job-condition-num">20</span></td>                                                                                                   ');
		buf.push('					<td>待审核</td>                                                                                                                                          ');
		buf.push('					<td>20170301</td>                                                                                                                                        ');
		buf.push('				</tr>                                                                                                                                                        ');
		buf.push('				<tr>                                                                                                                                                         ');
		buf.push('					<td>1000110</td>                                                                                                                                         ');
		buf.push('					<td>高级JAVA</td>                                                                                                                                        ');
		buf.push('					<td>20170301</td>                                                                                                                                        ');
		buf.push('					<td><span class="ntq-job-condition-num">20</span></td>                                                                                                   ');
		buf.push('					<td>待审核</td>                                                                                                                                          ');
		buf.push('					<td>20170301</td>                                                                                                                                        ');
		buf.push('				</tr>                                                                                                                                                        ');
		buf.push('				<tr>                                                                                                                                                         ');
		buf.push('					<td>1000110</td>                                                                                                                                         ');
		buf.push('					<td>高级JAVA</td>                                                                                                                                        ');
		buf.push('					<td>20170301</td>                                                                                                                                        ');
		buf.push('					<td><span class="ntq-job-condition-num">20</span></td>                                                                                                   ');
		buf.push('					<td>待审核</td>                                                                                                                                          ');
		buf.push('					<td>20170301</td>                                                                                                                                        ');
		buf.push('				</tr>                                                                                                                                                        ');
		buf.push('				<tr>                                                                                                                                                         ');
		buf.push('					<td>1000110</td>                                                                                                                                         ');
		buf.push('					<td>高级JAVA</td>                                                                                                                                        ');
		buf.push('					<td>20170301</td>                                                                                                                                        ');
		buf.push('					<td><span class="ntq-job-condition-num">20</span></td>                                                                                                   ');
		buf.push('					<td>待审核</td>                                                                                                                                          ');
		buf.push('					<td>20170301</td>                                                                                                                                        ');
		buf.push('				</tr>                                                                                                                                                        ');
		buf.push('			</tbody>                                                                                                                                                         ');
		buf.push('		</table>                                                                                                                                                             ');
		buf.push('		<div id="ntq-job-condition-pag"></div>                                                                                                                               ');
		buf.push('	</div>                                                                                                                                                                   ');
		buf.push('</div>																									');																																
		 
		return buf.join("");
		
	};
	
	HtmUtil.common4num = function(){
		var buf = [];
		buf.push('<div id="ntq-job-num">');
		
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
	 	buf.push('<div id="ntq-job-update">');
		buf.push('<form class="layui-form"  >');
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
	
	
	FunUtil.Global = {
		"child":{
			"id":123
		}
	};//传参对象
	
	
	var page = {
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
			    	
			    	 
			    	layui.use(['form', 'layedit', 'laydate','laypage', 'layer'], function(){
					  var form = layui.form()
					  ,layer = layui.layer
					  ,layedit = layui.layedit
					  ,laydate = layui.laydate,
					  laypage = layui.laypage
	  				  ,layer = layui.layer;
					 	form.render('');
					 	
					 	laypage({
							cont: 'ntq-job-condition-pag',
							pages: 100,
							skip: true
						});
					  
					});
					
					
					$("span.ntq-job-condition-num").unbind("click").bind("click",function(){
		
						layer.open({
							type: 1,
							skin: 'layui-layer-demo',
							area: ['420px', '240px'], //宽高
							content: HtmUtil.common4num()
						});
					});
					
					$("#ntq-job-condition-update").unbind("click").bind("click",function(){
		
					  layer.open({
						  type: 1,
						  content: HtmUtil.common4update({"type":"update"}),
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
					
					
					$("#ntq-job-condition-add").unbind("click").bind("click",function(){
		
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
					
					
			    },
			    hide(){
			    	console.log("==add==hide")
			    },   
			    destory(){
			        
			    }
			
			};
	
	return page;
}});

