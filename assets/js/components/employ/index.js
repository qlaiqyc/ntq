PageInfo.register({
			"type": "Obj",
			"info": function() {

				var PageObj = {};

				PageObj.require = {
					"$": "jquery",
					"layui": "layui",
					"api": "/assets/js/components/common/data-api"
				};

				PageObj.page = function() {

					var FunUtil = {};
					var HtmUtil = {};
					var Page = {};

					HtmUtil.common4input = function() {

						var buf = [];

						buf.push('<form class="layui-form" action="" id="ntq-employ-index-form">')
						buf.push('    <div class="layui-form-item">')
						buf.push('        <div class="layui-inline">')
						buf.push('            <label class="layui-form-label">验证手机</label>')
						buf.push('            <div class="layui-input-inline">')
						buf.push('                <input type="tel" name="phoneNumber" lay-verify="phone" autocomplete="off" class="layui-input" id="ntq-employ-index-form-phone">')
						buf.push('            </div>')
						buf.push('            <label class=" layui-btn layui-btn-normal" id="ntq-employ-index-form-code">获取验证码</label>')
						buf.push('        </div>')
						buf.push('    </div>')
						buf.push('    <div class="layui-form-item">')
						buf.push('        <div class="layui-inline">')
						buf.push('            <label class="layui-form-label">输入验证码</label>')
						buf.push('            <div class="layui-input-inline">')
						buf.push('                <input type="text" name="verifyCode" lay-verify="required|number" autocomplete="off" class="layui-input">')
						buf.push('            </div>')
						buf.push('        </div>')
						buf.push('    </div>')
						buf.push('    <div class="layui-form-item">')
						buf.push('        <div class="layui-input-block">')
						buf.push('            <button   class="layui-btn" lay-submit="" lay-filter="ntq-employ-index-form-btn">立即提交</button>')
						buf.push('            <button type="reset" class="layui-btn layui-btn-primary">重置</button>')
						buf.push('        </div>')
						buf.push('    </div>')
						buf.push('</form>')

						return buf.join("");

					};

					Page.show = function() {
						var request = this.api.rq();
						var $no = $("#ntq-employ-index-btn-no");
						var $has = $("#ntq-employ-index-btn-has");

						$no.unbind("click").bind("click", function() {
							PageInfo.FunUtil.common4openUrl({"url": 'employ/add' });
						});

						$has.unbind("click").bind("click", function() {

								layui.use(['form', 'layedit', 'laydate'], function() {
										var form = layui.form(),
											layer = layui.layer,
											layedit = layui.layedit,
											laydate = layui.laydate;

										layer.open({

												type: 1,
												skin: 'layui-layer-demo',
												area: ['420px', '240px'], //宽高
												content: HtmUtil.common4input(),
												success: function() {
													var $phone	= $("#ntq-employ-index-form-phone");
													var $code	= $("#ntq-employ-index-form-code");
													var snum   = 90;
													
													var stime;
													var anum = snum;
													var isrequest = false;

													$code.unbind("click").bind("click", function() {
														var phoneNumber = $phone.val();
														if(String.HasText(stime) ) return;
														if(!String.HasText(phoneNumber)) {layer.msg("请填入手机号码"); return;	}
														
														stime = setInterval(function(){
															
															if(anum < 1 ) {
																clearInterval(stime);
																$code.html("重新获取验证码");
																anum = snum;
																stime="";
																
																$code.removeClass("layui-btn-disabled").css("color","white");
																return;
															};
															
															$code.html(anum+"(s)");
															
															anum--;
														},1000);
														
														$code.addClass("layui-btn-disabled").css("color","#1E9FFF").html(anum+"(s)");
														
														
														
														
														request.getMessageCode({"phoneNumber":phoneNumber},function(data){
															if(!data.success) layer.msg(data.message);
														});
														
														
														anum--;
														 
															
													});

													form.on('submit(ntq-employ-index-form-btn)', function(data) {

															request.verifyMessageCode(data.field,function(data){
																
																
																if(data.success)  {
																	PageInfo.FunUtil.common4openUrl({"url":'employ/job'});
																}else{
																	layer.msg(data.message);
																}
																
															});
															
															return false;
													 
													});
												}
												
										});		
											
										form.render('');

										});

								});
						};

						return Page;

					};

					return PageObj;
				}
			});