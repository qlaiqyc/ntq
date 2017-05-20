PageInfo.register({"type": "plug","info": function(require) {
	 
		var FunUtil = {};

		FunUtil.common4init = function() {

			String.HasText = function(str) {
				try {

					if(typeof(str) == "undefined") return false;
					if(str == null) return false;
					if(str == 'null') return false;
					if(str == 'undefined') return false;

					if(typeof(str) == 'string')
						str = str.replace(/(^\s*)|(\s*$)/g, '');
					if(str === '') return false;

				} catch(e) {
					return false;
				}
				return true;
			};
		};
		
		
		
		
		
		
		 
		return FunUtil;
}});