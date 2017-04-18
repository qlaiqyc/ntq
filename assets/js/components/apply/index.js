PageInfo.register({"type":"Obj","info":function(){
	var FunUtil = {};
    var HtmUtil = {};
	
	
	HtmUtil.layout   = function(){
		
		var buf = [];
	 	 
		buf.push('<div id="ntq-apply-index" class="common-box" >');
		buf.push('  <div class="common-l-btn" id="ntq-apply-index-btn-no">第一次投递简历</div>');
	 	buf.push('  <div class="common-l-btn" id="ntq-apply-index-btn-has">已投递过职位</div>')
		buf.push('</div>');
		return buf.join("");
		
	};
	
	
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
	
	FunUtil.Global = {
		"child":{
			"id":9999
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
			    	 
			    	alert(PageInfo.FunUtil.common4getUrlParam()["uuid"]);
			    	var $no = $("#ntq-apply-index-btn-no");
			    	var $has = $("#ntq-apply-index-btn-has");
			    	
			    	$no.unbind("click").bind("click",function(){
			    		PageInfo.FunUtil.common4openUrl({"url":'#/assets/js/components/apply/add'});
			    		
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
									PageInfo.FunUtil.common4openUrl({"url":'#/assets/js/components/apply/job'});
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
			    	
			    },
			    hide(){
			    	//console.log("==add==hide")
			    },   
			    destory(){
			        
			    }
			
			};
	
	return page;
}});

