PageInfo.register({
	"type": "plug",
	"info": (function() {

		var HtmUtil = {};
		
		HtmUtil.common4Menu = function(){
			var buf = [];
			
			buf.push('<ul class="layui-nav layui-nav-tree  layui-nav-side" lay-filter="test">   ');
			buf.push('  <li class="layui-nav-item layui-nav-itemed">                            ');
			buf.push('    <a href="javascript:;">基础配置</a>                                   ');
			buf.push('    <dl class="layui-nav-child">                                          ');
			
			buf.push('      <dd><a href="javascript:;" class="common-menu" data-type="index">结构目录</a></dd>                           ');
			buf.push('      <dd><a href="javascript:;" class="common-menu" data-type="doc/star">config配置</a></dd>                           ');
			buf.push('      <dd><a href="javascript:;" class="common-menu" data-type="doc/main">main对象</a></dd>                           ');
			buf.push('      <dd><a href="javascript:;" class="common-menu" data-type="doc/plug">plug对象</a></dd>                           ');
			buf.push('      <dd><a href="javascript:;" class="common-menu" data-type="doc/obj">obj对象</a></dd>                           ');
			buf.push('      <dd><a href="javascript:;" class="common-menu" data-type="doc/role">规范</a></dd>                           ');
			
			buf.push('    </dl>                                                                 ');
			buf.push('  </li>                                                                   ');
			 
			buf.push('</ul>                                                                     ');
						
			return buf.join("");		
			
		};
	 	

		return HtmUtil

	})()
});