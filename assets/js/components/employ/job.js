PageInfo.register({"type":"Obj","info":function(){
	
	var PageObj = {};
	 
	PageObj.require = {
		"$": "jquery",
		"layui": "layui",
		"api": "/assets/js/components/common/data-api"
	};
	
	 
	PageObj.page = function(){
		
		var FunUtil = {};
	    var HtmUtil = {};
    	var Page 	= {};
	
		HtmUtil.common4num = function(){
			var buf = [];
			buf.push('<div id="ntq-employ-job-num">');
			
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
			var obj = data.data;
			var buf = [];
		 	buf.push('<div id="ntq-employ-job-update">');
		 	
			buf.push('<form class="layui-form"  >');
			if(data.type == "update") buf.push('<div class="layui-form-item"> <label class="layui-form-label">职位编号</label> <div class="layui-input-inline"> <input type="text" disabled="" name="positionNo" lay-verify="title" autocomplete="off" value="'+obj.positionNo+'" class="layui-input"></div> </div>');
			buf.push('    <div class="layui-form-item">                                                                                                                                                            ' );
			buf.push('        <div class="layui-inline">                                                                                                                                                           ' );
			buf.push('            <label class="layui-form-label">有效期</label>                                                                                                                                   ' );
			buf.push('            <div class="layui-input-inline">                                                                                                                                                 ' );
			buf.push('                <input type="text" name="deadline" id="date" lay-verify="date"  value="'+obj.deadline+'" placeholder="yyyy-mm-dd" autocomplete="off" class="layui-input" onclick="layui.laydate({elem: this})">            ' );
			buf.push('            </div>                                                                                                                                                                           ' );
			buf.push('        </div>                                                                                                                                                                               ' );
			buf.push('        <div class="layui-inline">                                                                                                                                                           ' );
			buf.push('            <label class="layui-form-label">职位名称</label>                                                                                                                                 ' );
			buf.push('            <div class="layui-input-inline">                                                                                                                                                 ' );
			buf.push('                <input type="text" name="positionName" lay-verify="title" autocomplete="off" value="'+obj.positionName+'" placeholder="请输入标题" class="layui-input">                                                          ' );
			buf.push('            </div>                                                                                                                                                                           ' );
			buf.push('        </div>                                                                                                                                                                               ' );
			buf.push('        <div class="layui-inline">                                                                                                                                                           ' );
			buf.push('            <label class="layui-form-label">薪水范围(k)</label>                                                                                                                                 ' );
			buf.push('            <div class="layui-input-inline" style="width: 32px;">                                                                                                                            ' );
			buf.push('                <input type="text" name="lowSalary" placeholder="￥"  value="'+obj.lowSalary+'" autocomplete="off" class="layui-input">                                                                                 ' );
			buf.push('            </div>                                                                                                                                                                           ' );
			buf.push('            <div class="layui-form-mid">-</div>                                                                                                                                              ' );
			buf.push('            <div class="layui-input-inline" style="width: 32px;">                                                                                                                            ' );
			buf.push('                <input type="text" name="highSalary" placeholder="￥" value="'+obj.highSalary+'" autocomplete="off" class="layui-input">                                                                                 ' );
			buf.push('            </div>                                                                                                                                                                           ' );
			buf.push('            <div class="layui-input-inline" style="width: 32px;">                                                                                                                            ' );
			buf.push('                <input type="checkbox" name="isDiscussPersonally" title="面议">                                                                                                                      ' );
			buf.push('            </div>                                                                                                                                                                           ' );
			buf.push('        </div>                                                                                                                                                                               ' );
			buf.push('    </div>                                                                                                                                                                                   ' );
			buf.push('                                                                                                                                                                                             ' );
			buf.push('    <div class="layui-form-item">                                                                                                                                                            ' );
			buf.push('        <div class="layui-inline">                                                                                                                                                           ' );
			buf.push('            <label class="layui-form-label">学历要求</label>                                                                                                                                 ' );
			buf.push('            <div class="layui-input-inline">                                                                                                                                                 ' );
			buf.push('<select name="qualificationsType" lay-filter="aihao">   ');                                                                                                                              
			buf.push('     <option value="1"  '+(obj.qualificationsType == 1 ? ('selected=""'):false)+'">高中</option>        ');                                                                                                                     
			buf.push('     <option value="2"  '+(obj.qualificationsType == 2 ? ('selected=""'):false)+'">高中</option>                    ');                                                                                                                     
			buf.push('     <option value="3"  '+(obj.qualificationsType == 3 ? ('selected=""'):false)+'">本科</option>                    ');                                                                                                                     
			buf.push('     <option value="4"  '+(obj.qualificationsType == 4 ? ('selected=""'):false)+'">硕士</option>                    ');                                                                                                                     
			buf.push('     <option value="5"  '+(obj.qualificationsType == 5 ? ('selected=""'):false)+'">博士</option>                    ');                                                                                                                     
			buf.push('     <option value="6"  '+(obj.qualificationsType == 6 ? ('selected=""'):false)+'">其他</option>                    ');                                                                                                                     
			buf.push('     <option value="7"  '+(obj.qualificationsType == 7 ? ('selected=""'):false)+'">不限</option>                    ');                                                                                                                     
			buf.push(' </select>                                              ');
			buf.push('            </div>                                                                                                                                                                           ' );
			buf.push('        </div>                                                                                                                                                                               ' );
			buf.push('        <div class="layui-inline">                                                                                                                                                           ' );
			buf.push('            <label class="layui-form-label">职位性质</label>                                                                                                                                 ' );
			buf.push('            <div class="layui-input-inline">                                                                                                                                                 ' );
			buf.push('                <select name="positionType" lay-filter="aihao">                                                                                                                                  ' );
			buf.push('                    <option value="1"  '+(obj.positionType == 1 ? ('selected=""'):false)+'>全职</option>    ' );
			buf.push('                    <option value="2"  '+(obj.positionType == 2 ? ('selected=""'):false)+'>兼职</option>  		' );
			buf.push('                    <option value="3"  '+(obj.positionType == 3 ? ('selected=""'):false)+'>实习</option>  			' );
			buf.push('                </select>                                                                                                                                                                    ' );
			buf.push('            </div>                                                                                                                                                                           ' );
			buf.push('        </div>                                                                                                                                                                               ' );
			buf.push('<div class="layui-inline">                                                                                      ');                                                                     
			buf.push('    <label class="layui-form-label">工作经验(年)</label>                                                        ');                                                                         
			buf.push('     <div class="layui-input-inline" style="width: 75px;">                                                      ');                                                                      
			buf.push('        <input type="number" name="lowWorkingLife" value="'+obj.lowWorkingLife+'" placeholder="最低" autocomplete="off" class="layui-input">   ');                                                                              
			buf.push('    </div>                                                                                                      ');                                                                     
			buf.push('    <div class="layui-form-mid">-</div>                                                                         ');                                                                     
			buf.push('    <div class="layui-input-inline" style="width: 75px;">                                                       ');                                                                     
			buf.push('        <input type="number" name="highWorkingLife" value="'+obj.highWorkingLife+'" placeholder="最高" autocomplete="off" class="layui-input">  ');                                                                               
			buf.push('    </div>                                                                                                      ');                                                                   
			buf.push('</div>'); 		 
					 
			 
			buf.push('    </div>                                                                                                                                                                                   ' );
			buf.push('                                                                                                                                                                                             ' );
			buf.push('    <div class="layui-form-item">                                                                                                                                                            ' );
			buf.push('        <label class="layui-form-label">工作地址</label>                                                                                                                                     ' );
			buf.push('        <div class="layui-input-block">                                                                                                                                                      ' );
			buf.push('            <input type="text" value="'+obj.workAddress+'" name="workAddress" lay-verify="title" autocomplete="off" placeholder="" class="layui-input">                                                              ' );
			buf.push('        </div>                                                                                                                                                                               ' );
			buf.push('    </div>                                                                                                                                                                                   ' );
			buf.push('                                                                                                                                                                                             ' );
			buf.push('    <div class="layui-form-item layui-form-text">                                                                                                                                            ' );
			buf.push('        <label class="layui-form-label">职责描述</label>                                                                                                                                     ' );
			buf.push('        <div class="layui-input-block">                                                                                                                                                      ' );
			buf.push('            <textarea placeholder="" name="positionDesc" class="layui-textarea">'+obj.positionDesc+'</textarea>                                                                                                               ' );
			buf.push('        </div>                                                                                                                                                                               ' );
			buf.push('    </div>                                                                                                                                                                                   ' );
			buf.push('    <div class="layui-form-item layui-form-text">                                                                                                                                            ' );
			buf.push('        <label class="layui-form-label">任职要求</label>                                                                                                                                     ' );
			buf.push('        <div class="layui-input-block">                                                                                                                                                      ' );
			buf.push('           <textarea placeholder=" " name="positionRequirements" class="layui-textarea">'+obj.positionRequirements+'</textarea>                                                                                                         ' );
			buf.push('        </div>                                                                                                                                                                               ' );
			buf.push('    </div>                                                                                                                                                                                   ' );
			buf.push('                                                                                                                                                                                             ' );
			
			buf.push('    <div class="layui-form-item">                                                                                                                                                            ');
			buf.push('      <div class="layui-input-block">                                                                                                                                                        ');
			buf.push('        <button class="layui-btn" lay-submit lay-filter="ntq-employ-job-btn">立即提交</button>                                                                                                         ');
			buf.push('        <button type="reset" class="layui-btn layui-btn-primary">重置</button>                                                                                                               ');
			buf.push('      </div>                                                                                                                                                                                 ');
			buf.push('    </div>                                                                                                                                                                                   ');
			buf.push('</form>																																														');	
			buf.push('</div>');
			
			return buf.join("");
		
	};
	
		FunUtil.Global = {
			"pageNo":1,
			"pageSize":2
		};
		
		HtmUtil.common4list = function(data){
			
			var buf = [];
			var len = data.length;
			
			for (var i =0;i<len;i++) {
				
				
				var obj = data[i];
				buf.push('<tr>      ');                                                                                                                                                    
				buf.push('	<td><span class="ntq-employ-job-condition-po" data-po="'+obj.id+'">'+obj.positionNo+'<span></td>   ');                                                                                                                                       
				buf.push('	<td>'+obj.positionName+'</td>  ');                                                                                                                                       
				buf.push('	<td>'+FunUtil.common4time({"type":"model1","str":obj.serverCreateDate})+'</td>   ');                                                                                                                                      
				buf.push('	<td><span class="ntq-employ-job-condition-num">'+(String.HasText(obj.resumeCount) ? obj.resumeCount : 0)+'</span></td>  ');                                                                                                  
				buf.push('	<td>'+FunUtil.common4time({"type":"model1","str":obj.publishTime})+'</td> ');                                                                                                                                        
				buf.push('</tr>        ');                
			}
			
			return buf.join("");
		}
	
		FunUtil.common4search = function(data){
			
			var param = {};
			var execuFun = {};
			
			execuFun.init = function(){
				FunUtil.Global.pageNo = 1;
				FunUtil.Global.pageSize = 2;
			};
			execuFun.next = function(){
				FunUtil.Global.pageNo += 1;
				FunUtil.Global.pageSize = 2;
			};
			
			execuFun[data.type]();
		};
		
		FunUtil.common4time = function(data){
			
			/* *
			 *  格式
			 * model 1 : yyyy/MM/dd
			 * 
			 * 
			 * */
			
			if(!String.HasText(data.str)) return "无";
			
			var execuFun	= {};
			var result		= ""; 
			execuFun.model1 = function(){
				var d = new Date(data.str);
				
				result = d.getFullYear() +"/"+(d.getMonth()+1)+"/"+d.getDate();
			}
			
			execuFun[data.type]();
			
			return  result;
		};
		
		FunUtil.update4evet = function(request){
			
			$("span.ntq-employ-job-condition-num").unbind("click").bind("click",function(){
			
					layer.open({
						type: 1,
						skin: 'layui-layer-demo',
						area: ['420px', '240px'], //宽高
						content: HtmUtil.common4num()
					});
				});
				
				$("span.ntq-employ-job-condition-po").unbind("click").bind("click",function(){
					
					var $this = $(this);
						
					request.getCompanyPositionInfoById({"positionId":$this.data("po")},function(cdata){
						
						layer.open({
						  type: 1,
						  content: HtmUtil.common4update({"type":"update","data":cdata.data}),
						  area: ['1080px', '578px'], //宽高
						  skin: 'layui-layer-demo',
						  success:function(){
						  	
								layui.use(['form', 'layedit', 'laydate','laypage', 'layer'], function(){ 
								  		var form = layui.form() ,layer = layui.layer ,layedit = layui.layedit ,laydate = layui.laydate, laypage = layui.laypage ,layer = layui.layer;
								  		form.render('');  
								  	
										form.on('submit(ntq-employ-job-btn)', function(data) {
									  		console.log(data);
									  		return false;
									  	});
								  	
								 });
						  	
						  }
						});
					
						
						
						
						
					});
				});
			
		
		
		};
		
		
		
		
		Page.show = function(){
			 var request = this.api.rq();
			 
			 layui.use(['form', 'layedit', 'laydate','laypage', 'layer'], function(){ var form = layui.form() ,layer = layui.layer ,layedit = layui.layedit ,laydate = layui.laydate, laypage = layui.laypage ,layer = layui.layer;
			 	form.render(''); 
			 	
			 	form.on('submit(ntq-employ-job-btn)', function(data) {
					var param = data.field;
						param.isDiscussPersonally = ((data.field.isDiscussPersonally == "on") ? 1 :2);
					
					request.addCompanyPositionInfo(JSON.stringify(data.field),function(cdata){
						
					});
					
					
					return false;
				});
				
				
				form.on('submit(ntq-employ-job-condition-sbtn)', function(data) {
					FunUtil.common4search({"type":"init"});
					var obj = data.field;	 
					var $table = $("#ntq-employ-job-condition-table");
					 obj.positionName ="高级"
					
					var param =  {
							      "pageNo": FunUtil.Global.pageNo,
							      "pageSize": FunUtil.Global.pageSize,
							      "params": {
							       		"positionName": obj.positionName,
							       		"publishTime":obj.publishTime,
							       		"postionStatus":obj.postionStatus
							      	}
							 	};
					
					var Fun4Help =function(type){
						request.queryCompanyPositionInfoListByCondition(JSON.stringify(param),function(cdata){
							var pages = cdata.totalRecord;
								pages = parseInt(pages/2) + (pages%2 > 0 ? 1:0);
							
							$table.html(HtmUtil.common4list(cdata.results));
							FunUtil.update4evet(request);
							
							if(type == "init") {
								laypage({ cont: 'ntq-employ-job-condition-pag' ,pages: pages  ,jump: 
									function(obj, first){
										if(!first){
											FunUtil.Global.pageNo = obj.curr;
											param.pageNo = obj.curr;;
											Fun4Help("next");
										}
									}
								});
							}
						});
					};
					
					Fun4Help("init");
					
					return false;
				});
			 	
			 	
			 });
					
			
			$("#ntq-employ-job-condition-add").unbind("click").bind("click",function(){
		
					  layer.open({
						  type: 1,
						  content: HtmUtil.common4update({"type":"add"}),
						  area: ['1080px', '511px'], //宽高
						  skin: 'layui-layer-demo',
						  success:function(){
						  	layui.use(['form', 'layedit', 'laydate','laypage', 'layer'], function(){ 
						  		var form = layui.form() ,layer = layui.layer ,layedit = layui.layedit ,laydate = layui.laydate, laypage = layui.laypage ,layer = layui.layer;
						  		form.render('');  
						  	
								form.on('submit(ntq-employ-job-btn)', function(data) {
									console.log(data.field);
									var param = data.field;
										param.isDiscussPersonally = ((data.field.isDiscussPersonally == "on") ? 1 :2);
									
							  		request.addCompanyPositionInfo(JSON.stringify(data.field),function(cdata){
							  			console.log(cdata);
							  		});
							  		
							  		
							  		return false;
							  	});
						  	
						  	});
						  }
						});
						 
					});
					
		};
		
		return Page;
		
	};
	
	
	return PageObj;
}});


