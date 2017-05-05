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

			Page.show = function() {

				var request = this.api.rq();

				layui.use(['form', 'layedit', 'laydate'], function() {
					var form = layui.form(),
						layer = layui.layer,
						layedit = layui.layedit,
						laydate = layui.laydate;
					form.render('');

					//自定义验证规则
					form.verify({
						title: function(value) {
							if(value.length < 5) {
								return '标题至少得5个字符啊';
							}
						},
						pass: [/(.+){6,12}$/, '密码必须6到12位'],
						content: function(value) {
							layedit.sync(editIndex);
						}
					});

					//监听指定开关
					form.on('switch(switchTest)', function(data) {
						layer.msg('开关checked：' + (this.checked ? 'true' : 'false'), {
							offset: '6px'
						});
						layer.tips('温馨提示：请注意开关状态的文字可以随意定义，而不仅仅是ON|OFF', data.othis)
					});

					//监听提交
					form.on('submit(ntq-employ-add-btn)', function(data) {

						var obj = data.field;
						var param = {
							"companyInfo": {

								"companyName": obj.companyName,
								"companyPhone": obj.companyPhone,
								"resumeMail": obj.resumeMail,
								"contactWeixinId": obj.contactWeixinId,
								"recruitType": obj.recruitType,
								"companyType": obj.companyType,
								"serverCreateDate": obj.serverCreateDate, //
								"serverUpdateDate": obj.serverUpdateDate,//
								"isNewlyEstablished": ((obj.isNewlyEstablished == "on") ? 1 :2),//
								"financingType": obj.financingType,
								"isValid": obj.isValid,//
								"recruiterName": obj.recruiterName,
								"companySynopsis": obj.companySynopsis,
								"companyBenefit": obj.companyBenefit//
							},
							"companyPositionInfosWithBlobList": [{

								"positionName": obj.positionName,
								"highSalary": obj.highSalary,
								"lowSalary": obj.lowSalary,
								"positionType": obj.positionType,
								"qualificationsType": obj.qualificationsType,//
								"lowWorkingLife": obj.lowWorkingLife,
								"highWorkingLife": obj.highWorkingLife,
								"workAddress": obj.workAddress,
								"isValid": obj.isValid,//
								"serverCreateDate": obj.serverCreateDate,//
								"serverUpdateDate": obj.serverUpdateDate,//
								"deadline": obj.deadline,//
								"isDiscussPersonally": ((obj.isDiscussPersonally == "on") ? 1 :2),//
								"postionStatus": obj.postionStatus,//
								"publishTime": obj.publishTime,//
								"positionDesc": obj.positionDesc,
								"positionRequirements": obj.positionRequirements
	 	
							}]

						}

						//	param ={"companyInfo":{"id":6,"companyName":"测试公司名称11","companyPhone":15123247202,"resumeMail":"247677858@qq.com","contactWeixinId":"weChat","recruitType":1,"companyType":1,"serverCreateDate":1491537753077,"serverUpdateDate":1491537753077,"isNewlyEstablished":1,"financingType":1,"isValid":1,"recruiterName":"杨爽","companySynopsis":"简介","companyBenefit":"公司福利"},"companyPositionInfosWithBlobList":[{"id":"","companyInfosId":"","positionNo":20170411000001,"positionName":"高级开发","highSalary":300,"lowSalary":200,"positionType":1,"qualificationsType":1,"lowWorkingLife":1,"highWorkingLife":3,"workAddress":"天府新区xxx大道","isValid":1,"serverCreateDate":1491894272290,"serverUpdateDate":1491894272290,"deadline":null,"isDiscussPersonally":1,"postionStatus":1,"publishTime":null,"positionDesc":"职位信息","positionRequirements":"具备xxx技能,从入门到放弃"}]};

						request.addCompanyInfoWithPositionInfoList(JSON.stringify(param), function(cdata) {

							console.log(cdata);
							return false;
						});

						return false;
					});

				});
			};

			return Page;

		};

		return PageObj;
	}
});