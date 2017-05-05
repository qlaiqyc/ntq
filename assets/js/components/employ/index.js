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
						buf.push('                <input type="tel" name="phone" lay-verify="phone" autocomplete="off" class="layui-input" id="ntq-employ-index-form-phone">')
						buf.push('            </div>')
						buf.push('            <label class="layui-form-label" id="ntq-employ-index-form-code">获取验证码</label>')
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
													/*$("#ntq-employ-index-form-btn").unbind("click").bind("click",function(){
														layer.closeAll()
														PageInfo.FunUtil.common4openUrl({"url":'employ/job'});
													});*/
													
													var $phone = $("#ntq-employ-index-form-phone");
													

													$("#ntq-employ-index-form-code").unbind("click").bind("click", function() {
															var phoneNumber = $phone.val();
															
															if(!String.HasText(phoneNumber)) return;
															
															request.getMessageCode({"phoneNumber":phoneNumber},function(data){
																console.log(data);
															});
													});

													form.on('submit(ntq-employ-index-form-btn)', function(data) {

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