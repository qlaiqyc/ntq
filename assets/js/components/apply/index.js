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
	
		HtmUtil.common4input   = function(){
		
			var buf = [];
		 	 
			buf.push('<form class="layui-form" action="" id="ntq-apply-index-form">')
			buf.push('    <div class="layui-form-item">')
			buf.push('        <div class="layui-inline">')
			buf.push('            <label class="layui-form-label">验证手机</label>')
			buf.push('            <div class="layui-input-inline">')
			buf.push('                <input type="tel" name="phone" lay-verify="phone" autocomplete="off" class="layui-input">')
			buf.push('            </div>')
			buf.push('            <label class="layui-form-label" id="ntq-apply-index-form-code">获取验证码</label>')
			buf.push('        </div>')
			buf.push('    </div>')
			buf.push('    <div class="layui-form-item">')
			buf.push('        <div class="layui-inline">')
			buf.push('            <label class="layui-form-label">输入验证码</label>')
			buf.push('            <div class="layui-input-inline">')
			buf.push('                <input type="text" name="number" lay-verify="required|number" autocomplete="off" class="layui-input">')
			buf.push('            </div>')
			buf.push('        </div>')
			buf.push('    </div>')
			buf.push('    <div class="layui-form-item">')
			buf.push('        <div class="layui-input-block">')
			buf.push('            <button class="layui-btn" lay-submit="" lay-filter="demo1" id="ntq-apply-index-form-btn">立即提交</button>')
			buf.push('            <button type="reset" class="layui-btn layui-btn-primary">重置</button>')
			buf.push('        </div>')
			buf.push('    </div>')
			buf.push('</form>')
			
			return buf.join("");
			
		};
	
		Page.show = function(){
			 var $this = this;
			
			layui.use(['form', 'layedit', 'laydate','laypage', 'layer'], function(){
				var form = layui.form() ,layer = layui.layer ,layedit = layui.layedit ,laydate = layui.laydate, laypage = layui.laypage ,layer = layui.layer;
				form.render('');
					 	
				
				alert(PageInfo.FunUtil.common4getUrlParam()["uuid"]);
			    	var $no = $("#ntq-apply-index-btn-no");
			    	var $has = $("#ntq-apply-index-btn-has");
			    	
			    	$no.unbind("click").bind("click",function(){
			    		PageInfo.FunUtil.common4openUrl({"url":'apply/add'});
			    		
			    	});
			    	
			    	$has.unbind("click").bind("click",function(){
			    		  layer.open({
					        
					        type: 1,
							skin: 'layui-layer-demo',
							area: ['420px', '240px'], //宽高
							content: HtmUtil.common4input(),
							success:function(){
								$("#ntq-apply-index-form-btn").unbind("click").bind("click",function(){
									layer.closeAll()
									PageInfo.FunUtil.common4openUrl({"url":'apply/job'});
								});
							}
					      });
					      
					      layui.use(['form', 'layedit', 'laydate'], function(){
							  var form = layui.form()
							  ,layer = layui.layer
							  ,layedit = layui.layedit
							  ,laydate = layui.laydate;
							 	form.render('');
					      });
			    	});
			 
				
					  
			});
		 };
		
		return Page;
		
	};
	
	
	return PageObj;
}});

