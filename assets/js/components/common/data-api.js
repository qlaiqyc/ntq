PageInfo.register({"type": "plug","info": function(require) {
		
	var request = require( "/assets/js/components/common/request");
	var FunUtil = {};
	
	FunUtil.rq = function() {

		var burl = "http://119.23.69.169:8080/ntq/";

		return {

			/*=======招聘模块============ */
			'getMessageCode': function(data, success) {
				request.common4get({
					url: (burl + "companyInfo/getMessageCode.action"),
					"param": data
				}, success);
			},
			'verifyMessageCode': function(data, success) {
				request.common4get({
					url: (burl + "companyInfo/verifyMessageCode.action"),
					"param": data
				}, success);
			},
			'getMessageAfterValidatePhoneNumber': function(data, success) {
				request.common4post({
					url: (burl + "companyInfo/getMessageAfterValidatePhoneNumber.action"),
					"param": data
				}, success);
			},

			'verifyHrPhoneNumber': function(data, success) {
				request.common4post({
					url: (burl + "companyInfo/verifyHrPhoneNumber.action"),
					"param": data
				}, success);
			},

			'addCompanyInfoWithPositionInfoList': function(data, success) {
				request.common4post({
					url: (burl + "companyInfo/addCompanyInfoWithPositionInfoList.action"),
					"param": data
				}, success);
			},

			'addCompanyPositionInfo': function(data, success) {
				request.common4post({
					url: (burl + "companyInfo/addCompanyPositionInfo.action"),
					"param": data
				}, success);
			},

			'queryCompanyPositionInfoListByCondition': function(data, success) {
				request.common4post({
					url: (burl + "companyInfo/queryCompanyPositionInfoListByCondition.action"),
					"param": data
				}, success);
			},

			'getCompanyPositionInfoById': function(data, success) {
				request.common4get({
					url: (burl + "companyInfo/getCompanyPositionInfoById.action"),
					"param": data
				}, success);
			},

			'queryJobSeekerInfoVoList': function(data, success) {
				request.common4post({
					url: (burl + "companyInfo/queryJobSeekerInfoVoList.action"),
					"param": data
				}, success);
			},

			'updateOrInsertCompanyPositionInfo': function(data, success) {
				request.common4post({
					url: (burl + "companyInfo/updateOrInsertCompanyPositionInfo.action"),
					"param": data
				}, success);
			},

			'withDrawCompanyPositionInfo': function(data, success) {
				request.common4get({
					url: (burl + "companyInfo/withDrawCompanyPositionInfo.action"),
					"param": data
				}, success);
			},

			/*=======求职者模块============== */

			'getInfos': function(data, success) {
				request.common4post({
					url: (burl + "get/position/getinfos.action"),
					"param": data
				}, success);
			},

			'addJobSeekerInfoAndResume': function(data, success) {
				request.common4post({
					url: (burl + "jobSeekerInfo/addJobSeekerInfoAndResume.action"),
					"param": data
				}, success);
			},
			
			'queryJobSeekerPositionVoList': function(data, success) {
				request.common4post({
					url: (burl + "jobSeekerInfo/queryJobSeekerPositionVoList.action"),
					"param": data
				}, success);
			},
			
			'getCompanyPositionInfoById': function(data, success) {
				request.common4get({
					url: (burl + "jobSeekerInfo/getCompanyPositionInfoById.action"),
					"param": data
				}, success);
			},
			
			'getCompanyInfoById': function(data, success) {
				request.common4get({
					url: (burl + "jobSeekerInfo/getCompanyInfoById.action"),
					"param": data
				}, success);
			},
			/*'addJobSeekerResume': function(data, success) {
				request.common4get({
					url: (burl + "jobSeekerInfo/addJobSeekerResume.action"),
					"param": data
				}, success);
			},
			*/
			'addJobSeekerResume': function() {
				 return (burl + "jobSeekerInfo/addJobSeekerResume.action");
			},
			
			
			/* ==admin==*/
			
			'ntq4getCompanyInfoById': function(data, success) {
				request.common4get({
					url: (burl + "ntqCompanyPositionDealController/getCompanyInfoById.action"),
					"param": data
				}, success);
			},
			'positionRelease': function(data, success) {
				request.common4get({
					url: (burl + "ntqCompanyPositionDealController/positionRelease.action"),
					"param": data
				}, success);
			},
			
			'queryCompanyPositionInfoVoListByCondition': function(data, success) {
				request.common4post({
					url: (burl + "ntqCompanyPositionDealController/queryCompanyPositionInfoVoListByCondition.action"),
					"param": data
				}, success);
			},
			
			'rejectPositionRelease': function(data, success) {
				request.common4get({
					url: (burl + "ntqCompanyPositionDealController/rejectPositionRelease.action"),
					"param": data
				}, success);
			},
		};
	};
	
	return FunUtil;
		
}});