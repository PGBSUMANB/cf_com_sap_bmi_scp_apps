//@ui5-bundle com/sap/bmi/scp/apps/complaintforms/Component-preload.js
jQuery.sap.registerPreloadedModules({
"version":"2.0",
"modules":{
	"com/sap/bmi/scp/apps/complaintforms/Component.js":function(){sap.ui.define(["sap/ui/core/UIComponent","sap/ui/Device","com/sap/bmi/scp/apps/complaintforms/model/models"],function(e,t,s){"use strict";return e.extend("com.sap.bmi.scp.apps.complaintforms.Component",{metadata:{manifest:"json"},init:function(){e.prototype.init.apply(this,arguments);this.getRouter().initialize();this.setModel(s.createDeviceModel(),"device");var t="";var o="";var a="";try{t=this.getComponentData().startupParameters;o=t.taskModel;a=o.getData().InstanceID;var r=new sap.ui.model.json.JSONModel("/bpmworkflowruntime/v1/task-instances/"+a+"/context");r.setDefaultBindingMode(sap.ui.model.BindingMode.TwoWay);this.setModel(r);var i=this;r.attachRequestCompleted(function(){var e=r.getData();i.getModel("oLocalJsonModel").setProperty("/Arbitrated",this.getData().Arbitrated==="undefined"?"":this.getData().Arbitrated);i.getModel("oLocalJsonModel").setProperty("/CurrentStatus",this.getData().StatusUpdate.SettlementTrackingUpdate.ApprovalList.CurrentStatus==="undefined"?"":this.getData().StatusUpdate.SettlementTrackingUpdate.ApprovalList.CurrentStatus);i.getModel("oLocalJsonModel").setProperty("/ApprovalLevel",this.getData().ApprovalLevel==="undefined"?"":this.getData().ApprovalLevel);i.getModel("oLocalJsonModel").setProperty("/ApprovalList",this.getData().StatusUpdate.SettlementTrackingUpdate.ApprovalList==="undefined"?"":this.getData().StatusUpdate.SettlementTrackingUpdate.ApprovalList);i.getModel("oLocalJsonModel").setProperty("/approver_result",this.getData().approver_result==="undefined"?"":this.getData().approver_result);i.getModel("oLocalJsonModel").setProperty("/ComplaintDesc",this.getData().Messages.Message1.ServiceRequestCollection.ServiceRequest.Name==="undefined"?"":this.getData().Messages.Message1.ServiceRequestCollection.ServiceRequest.Name);i.getModel("oLocalJsonModel").setProperty("/ComplaintId",this.getData().Messages.Message1.ServiceRequestCollection.ServiceRequest.ID==="undefined"?"":this.getData().Messages.Message1.ServiceRequestCollection.ServiceRequest.ID);i.getModel("oLocalJsonModel").setProperty("/Complainturl",this.getData().Complainturl==="undefined"?"":this.getData().Complainturl);i.getModel("oLocalJsonModel").setProperty("/ComplaintDesc",this.getData().Messages.Message1.ServiceRequestCollection.ServiceRequest.Name==="undefined"?"":this.getData().Messages.Message1.ServiceRequestCollection.ServiceRequest.Name);i.getModel("oLocalJsonModel").setProperty("/Account",this.getData().Messages.Message1.ServiceRequestCollection.ServiceRequest.PartyID==="undefined"?"":this.getData().Messages.Message1.ServiceRequestCollection.ServiceRequest.PartyID);i.getModel("oLocalJsonModel").setProperty("/AccountName",this.getData().Messages.Message1.ServiceRequestCollection.ServiceRequest.AddressSnapshotDisplayName.AddressSnapshotDisplayName.FormattedName==="undefined"?"":this.getData().Messages.Message1.ServiceRequestCollection.ServiceRequest.AddressSnapshotDisplayName.AddressSnapshotDisplayName.FormattedName);i.getModel("oLocalJsonModel").setProperty("/ComplaintCategory",this.getData().Messages.Message1.ServiceRequestCollection.ServiceRequest.ServiceCategoryID==="undefined"?"":this.getData().Messages.Message1.ServiceRequestCollection.ServiceRequest.ServiceCategoryID);i.getModel("oLocalJsonModel").setProperty("/ComplaintReason",this.getData().Messages.Message1.ServiceRequestCollection.ServiceRequest.ZComplaintReason_KUT==="undefined"?"":this.getData().Messages.Message1.ServiceRequestCollection.ServiceRequest.ZComplaintReason_KUT);i.getModel("oLocalJsonModel").setProperty("/TotalCost",this.getData().Messages.Message1.ServiceRequestCollection.ServiceRequest.Z_CostAllocationcontent_KUT==="undefined"?"":this.getData().Messages.Message1.ServiceRequestCollection.ServiceRequest.Z_CostAllocationcontent_KUT);i.getModel("oLocalJsonModel").setProperty("/TotalCostCurrency",this.getData().Messages.Message1.ServiceRequestCollection.ServiceRequest.Z_CostAllocationcurrencyCode_KUT==="undefined"?"":this.getData().Messages.Message1.ServiceRequestCollection.ServiceRequest.Z_CostAllocationcurrencyCode_KUT);i.getModel("oLocalJsonModel").setProperty("/CostAllocation",this.getData().Messages.Message1.ServiceRequestCollection.ServiceRequest.ZCostAllocation_KUT==="undefined"?"":this.getData().Messages.Message1.ServiceRequestCollection.ServiceRequest.ZCostAllocation_KUT);i.getModel("oLocalJsonModel").setProperty("/ImmediateSettlement",this.getData().Messages.Message1.ServiceRequestCollection.ServiceRequest.Z_ImmediateSettlement_Header_KUT==="undefined"?"":this.getData().Messages.Message1.ServiceRequestCollection.ServiceRequest.Z_ImmediateSettlement_Header_KUT);i.getModel("oLocalJsonModel").setProperty("/CostSplit",this.getData().Messages.Message1.ServiceRequestCollection.ServiceRequest.Z_CostSplit_New_KUT==="undefined"?"":this.getData().Messages.Message1.ServiceRequestCollection.ServiceRequest.Z_CostSplit_New_KUT);i.getModel("oLocalJsonModel").setProperty("/CustomerCountry",this.getData().Messages.Message2.ServiceRequestPartyCollection.ServiceRequestParty.CountryCode==="undefined"?"":this.getData().Messages.Message2.ServiceRequestPartyCollection.ServiceRequestParty.CountryCode);i.getModel("oLocalJsonModel").setProperty("/SettlementReference",this.getData().Messages.Message1.ServiceRequestCollection.ServiceRequest.Z_Settlementwithreference_KUT==="undefined"?"":this.getData().Messages.Message1.ServiceRequestCollection.ServiceRequest.Z_Settlementwithreference_KUT);i.getModel("oLocalJsonModel").setProperty("/Invoice_Ref_ID",this.getData().Messages.Message1.ServiceRequestCollection.ServiceRequest.RefInvoiceID_KUT==="undefined"?"":this.getData().Messages.Message1.ServiceRequestCollection.ServiceRequest.RefInvoiceID_KUT);i.getModel("oLocalJsonModel").setProperty("/Delivery_Ref_ID",this.getData().Messages.Message1.ServiceRequestCollection.ServiceRequest.Z_RefDeliveryID_KUT==="undefined"?"":this.getData().Messages.Message1.ServiceRequestCollection.ServiceRequest.Z_RefDeliveryID_KUT);i.getModel("oLocalJsonModel").setProperty("/Other_Ref_Reason",this.getData().Messages.Message1.ServiceRequestCollection.ServiceRequest.Z_OtherReferenceReason_KUT==="undefined"?"":this.getData().Messages.Message1.ServiceRequestCollection.ServiceRequest.Z_OtherReferenceReason_KUT);i.getModel("oLocalJsonModel").setProperty("/ComplaintsStatus",this.getData().Messages.Message1.ServiceRequestCollection.ServiceRequest.ServiceRequestUserLifeCycleStatusCode==="undefined"?"":this.getData().Messages.Message1.ServiceRequestCollection.ServiceRequest.ServiceRequestUserLifeCycleStatusCode);i.getModel("oLocalJsonModel").setProperty("/LineItem",this.getData().Messages.Message1.ServiceRequestCollection.ServiceRequest.ServiceRequestItem.ServiceRequestItem.ID==="undefined"?"":this.getData().Messages.Message1.ServiceRequestCollection.ServiceRequest.ServiceRequestItem.ServiceRequestItem.ID);i.getModel("oLocalJsonModel").setProperty("/Product",this.getData().Messages.Message1.ServiceRequestCollection.ServiceRequest.ServiceRequestItem.ServiceRequestItem.ProductID==="undefined"?"":this.getData().Messages.Message1.ServiceRequestCollection.ServiceRequest.ServiceRequestItem.ServiceRequestItem.ProductID);i.getModel("oLocalJsonModel").setProperty("/ProductDescription",this.getData().Messages.Message1.ServiceRequestCollection.ServiceRequest.ServiceRequestItem.ServiceRequestItem.Description==="undefined"?"":this.getData().Messages.Message1.ServiceRequestCollection.ServiceRequest.ServiceRequestItem.ServiceRequestItem.Description);i.getModel("oLocalJsonModel").setProperty("/SettlementMethod",this.getData().Messages.Message1.ServiceRequestCollection.ServiceRequest.ServiceRequestItem.ServiceRequestItem.UserServiceTransactionProcessingTypeCode==="undefined"?"":this.getData().Messages.Message1.ServiceRequestCollection.ServiceRequest.ServiceRequestItem.ServiceRequestItem.UserServiceTransactionProcessingTypeCode);i.getModel("oLocalJsonModel").setProperty("/Quantity",this.getData().Messages.Message1.ServiceRequestCollection.ServiceRequest.ServiceRequestItem.ServiceRequestItem.RequestedQuantity==="undefined"?"":this.getData().Messages.Message1.ServiceRequestCollection.ServiceRequest.ServiceRequestItem.ServiceRequestItem.RequestedQuantity);i.getModel("oLocalJsonModel").setProperty("/SettlementAmount",this.getData().Messages.Message1.ServiceRequestCollection.ServiceRequest.ServiceRequestItem.ServiceRequestItem.Z_SettlementAmountcontent_KUT==="undefined"?"":this.getData().Messages.Message1.ServiceRequestCollection.ServiceRequest.ServiceRequestItem.ServiceRequestItem.Z_SettlementAmountcontent_KUT);i.getModel("oLocalJsonModel").setProperty("/PrincipalPlant",this.getData().Messages.Message1.ServiceRequestCollection.ServiceRequest.ServiceRequestItem.ServiceRequestItem.ZPlantCode_SDK==="undefined"?"":this.getData().Messages.Message1.ServiceRequestCollection.ServiceRequest.ServiceRequestItem.ServiceRequestItem.ZPlantCode_SDK);i.getModel("oLocalJsonModel").setProperty("/Comments",this.getData().Comments==="undefined"?"":this.getData().Comments);i.getModel("oLocalJsonModel").setProperty("/CustomerBMIType",this.getData().Messages.Message1.ServiceRequestCollection.ServiceRequest.Z_Case_BMIType1_KUT==="undefined"?"":this.getData().Messages.Message1.ServiceRequestCollection.ServiceRequest.Z_Case_BMIType1_KUT);i.getModel("oLocalJsonModel").setProperty("/CustomerBMIType2",this.getData().Messages.Message1.ServiceRequestCollection.ServiceRequest.Z_Case_BMIType2_KUT==="undefined"?"":this.getData().Messages.Message1.ServiceRequestCollection.ServiceRequest.Z_Case_BMIType2_KUT);i.getModel("oLocalJsonModel").setProperty("/CreationDateTime",this.getData().Messages.Message1.ServiceRequestCollection.ServiceRequest.CreationDateTime==="undefined"?"":this.getData().Messages.Message1.ServiceRequestCollection.ServiceRequest.CreationDateTime);i.getModel("oLocalJsonModel").setProperty("/ComplaintCreatedBy",this.getData().Messages.Message1.ServiceRequestCollection.ServiceRequest.Createdby.Createdby.FormattedName==="undefined"?"":this.getData().Messages.Message1.ServiceRequestCollection.ServiceRequest.Createdby.Createdby.FormattedName);i.getModel("oLocalJsonModel").setProperty("/HighRisk",this.getData().Messages.Message1.ServiceRequestCollection.ServiceRequest.HighRisk_KUT==="undefined"?"":this.getData().Messages.Message1.ServiceRequestCollection.ServiceRequest.HighRisk_KUT);i.getModel("oLocalJsonModel").setProperty("/IsJustified",this.getData().Messages.Message1.ServiceRequestCollection.ServiceRequest.Z_Settlementwithreference_KUT==="undefined"?"":this.getData().Messages.Message1.ServiceRequestCollection.ServiceRequest.Z_Settlementwithreference_KUT);i.getModel("oLocalJsonModel").setProperty("/ContactID",this.getData().ContactID==="undefined"?"":this.getData().ContactID);i.getModel("oLocalJsonModel").setProperty("/ContactName",this.getData().ContactName==="undefined"?"":this.getData().ContactName);var s="Approve";var o="ApprovedN";var n={sBtnTxt:s,onBtnPressed:function(e){var t=i.getModel();t.refresh(true);i._triggerComplete(a,o,jQuery.proxy(i._refreshTask,i))}};t.inboxAPI.addAction({action:n.sBtnTxt,label:n.sBtnTxt,type:"Accept"},n.onBtnPressed);var l=this.getData().ButtonText.Result[0].ButtonText.ButtonText;var c;c="Rejected";if(l==="Arbitrate"){c="Arbitrate"}var d={sBtnTxt:l,taskStatus:c,onBtnPressed:function(e){var t=i.getModel();t.refresh(true);i._triggerComplete(a,c,jQuery.proxy(i._refreshTask,i))}};t.inboxAPI.addAction({action:d.sBtnTxt,label:d.sBtnTxt,type:"Reject"},d.onBtnPressed)})}catch(e){return}},_triggerComplete:function(e,t,s){var o=new sap.m.BusyDialog;o.open();o.setBusyIndicatorDelay(4e3);if(this.getModel("oLocalJsonModel").getProperty("/ComplaintApprovalReason")===undefined||this.getModel("oLocalJsonModel").getProperty("/ComplaintApprovalReason")===""){o.close();sap.m.MessageBox.error("Enter comment");return}var a=this.byId("ApproverScreen").getId();var r=this.getModel("oLocalJsonModel").getProperty("/CurrentStatus");var i=this.getModel("oLocalJsonModel").getProperty("/ApprovalLevel");var n;var l={};n=l;var c=new Date;var d=sap.ui.core.format.DateFormat.getDateTimeInstance({pattern:"dd.MM.yyyy HH:mm"});var u=new Date(c);var g=d.format(u);var v=this.getModel("oLocalJsonModel").getProperty("/ComplaintsStatus");if(t==="ApprovedN"){var M=this.getModel("oLocalJsonModel").getProperty("/ApprovalList");var p,S;var R=i-1;M[R].CurrentStatus="Approved";M[R].LastUpdated=g;this.getModel("oLocalJsonModel").setProperty("/ApprovalList",M);var C=this.byId(a+"--"+"IdInpCostAllocation").getProperty("selectedKey");var m=this.getModel("oLocalJsonModel").getProperty("/ComplaintsStatus");var q=++i;var r="Approved";var D=g;n='{ "status":"COMPLETED","context": {"approvedorreject": "'+t+'","Comments" : "'+this.getModel("oLocalJsonModel").getData().ComplaintApprovalReason+'","Arbitrated":"'+"Approved"+'","ApprovalLevel": "'+q+'","CurrentStatus": "'+r+'","LastUpdated": "'+g+'","ApprovalLevel1": "'+R+'","StatusUpdate":{"Complaintsstatus":"'+m+'","CostAllocation":"'+C+'"},"Messages":{"Message1":{"ServiceRequestCollection":{"ServiceRequest":{"ZCostAllocation_KUT":"'+C+'"}}}} }}'}else if(t==="Arbitrate"){var R=i-1;if(i==="1"){this.byId(a+"--"+"IdInpCostAllocation").setEditable(true);this.byId(a+"--"+"IdInpComments").setEditable(true);o.close();return}else{q=--i;M=this.getModel("oLocalJsonModel").getData().ApprovalList;M[R].CurrentStatus="Arbitrate";M[R].LastUpdated=g;var c=new Date;var d=sap.ui.core.format.DateFormat.getDateTimeInstance({pattern:"dd.MM.yyyy HH:mm"});var u=new Date(c);g=d.format(u);r="Arbitrate";this.getModel("oLocalJsonModel").setProperty("/ApprovalList",M);if(v==="Z7"){v="Y2"}else{v="Y7"}n='{ "status":"COMPLETED","context": {"approvedorreject": "'+t+'","Comments" : "'+this.getModel("oLocalJsonModel").getData().ComplaintApprovalReason+'","Arbitrated":"'+"Arbitrate"+'","ApprovalLevel": "'+q+'","CurrentStatus": "'+r+'","LastUpdated": "'+g+'","ApprovalLevel1": "'+R+'","StatusUpdate":{"Complaintsstatus": "'+v+'"}} }'}}else if(t==="Rejected"){q=i;r="Rejected by Level "+q;M=this.getModel("oLocalJsonModel").getData().ApprovalList;var R=i-1;M[R].CurrentStatus="Rejected";M[R].LastUpdated=g;this.getModel("oLocalJsonModel").setProperty("/ApprovalList",M);r="Rejected";c=new Date;var d=sap.ui.core.format.DateFormat.getDateTimeInstance({pattern:"dd/MM/yyyy HH:mm"});var u=new Date(c);var g=d.format(u);n='{ "status":"COMPLETED","context": {"approvedorreject": "'+t+'","Comments" : "'+this.getModel("oLocalJsonModel").getData().ComplaintApprovalReason+'","Arbitrated":"'+"Rejected"+'","ApprovalLevel": "'+q+'","CurrentStatus": "'+r+'","LastUpdated": "'+g+'","ApprovalLevel1": "'+R+'" }}'}else{return}var h=this._fetchToken();$.ajax({url:"/bpmworkflowruntime/v1/task-instances/"+e,method:"PATCH",contentType:"application/json",data:n,headers:{"X-CSRF-Token":h},success:s});this.byId(a+"--"+"IdInpComments").setEditable(false);this.byId(a+"--"+"IdInpCostAllocation").setEditable(false);o.close()},_refreshTask:function(){var e=this.getComponentData().startupParameters.taskModel.getData().InstanceID;this.getComponentData().startupParameters.inboxAPI.updateTask("NA",e)},_fetchToken:function(){var e;$.ajax({url:"/bpmworkflowruntime/v1/xsrf-token",method:"GET",async:false,headers:{"X-CSRF-Token":"Fetch"},success:function(t,s,o){e=o.getResponseHeader("X-CSRF-Token")},error:function(e,t,s){this.onErrorCall()}.bind(this)});return e}})});
},
	"com/sap/bmi/scp/apps/complaintforms/controller/ApproverScreen.controller.js":function(){sap.ui.define(["sap/ui/core/mvc/Controller","com/sap/bmi/scp/apps/complaintforms/model/formatter","sap/m/library"],function(e,t,o){"use strict";var s=o.URLHelper;return e.extend("com.sap.bmi.scp.apps.complaintforms.controller.ApproverScreen",{formatter:t,onInit:function(){},onAfterRendering:function(){var e=this.getOwnerComponent();e.getModel("oLocalJsonModel");var t=e.getModel("oLocalJsonModel").getProperty("/Comments");if(!t){this.getView().byId("IdLblPrevComments").setVisible(false);this.getView().byId("IdTxtPrevComments").setVisible(false)}else if(t!==""){this.getView().byId("IdLblPrevComments").setVisible(true);this.getView().byId("IdTxtPrevComments").setVisible(true);this.getView().byId("IdTxtPrevComments").setText(t)}else{return}var o=e.getModel("oLocalJsonModel").getProperty("/Arbitrated");if(o==="Arbitrate"){this.getView().byId("IdInpCostAllocation").setEditable(true)}else{this.getView().byId("IdInpCostAllocation").setEditable(false)}},onPress:function(){var e="https://my349294-sso.crm.ondemand.com/sap/ap/ui/clogin?bo_ns=http://sap.com/thingTypes&bo=COD_GENERIC&node=Root&operation=OnExtInspect&param.InternalID="+this.getOwnerComponent().getModel("oLocalJsonModel").getProperty("/ComplaintId")+"&param.Type=COD_SRQ_AGENT_TT&sapbyd-agent=TAB&saml2=disabled&OBNRedirect=X";window.open(e,"_blank")}})});
},
	"com/sap/bmi/scp/apps/complaintforms/i18n/i18n.properties":'title=Approver Screen\nappTitle=zui5complaintapprover1\nappDescription=App Description\nComplaint_ID = Complaint ID\nComplaint_Description = Complaint Description\nAccount = Account\nComplaint_Category = Complaint Category\nComplaint_Reason = Complaint Reason\nTotal_Cost = Total Approval Amount\nCost_Allocation = Cost Allocation\nEmergency_Settlement = Emergency Settlement\nCost_Split = Cost Split\nCustomer_Country = Customer Country\nSettlement_reference = Case with reference\nInvoice_Ref_ID = Billing Document ID\nDelivery_Ref_ID = Delivery ID\nOther_Ref_Reason = Other Reference ID\nComplaints_status = Complaints Status\nLine_item = Line Item\nProduct = Product\nProduct_Description = Product Description\nSettlement_Method = Settlement Method\nQuantity = Quantity\nSettlement_Amount = Settlement Amount\nComplaint_App_Reason = Complaint Approval/Reject Reasons\nPrincipal_Plant = Principal Plant\nComments = Comment By Previous Approver\nCustomerInformation = Customer Information\nCustomerID = Customer ID\nCustomerName =  Customer Name\nCustomerAddress = Customer Address\nComplaintInformation = Complaint Information\nSettlementInformation = Settlement Information\nItems = Items\nItemNo = Item No\nProduct = Product\nProductDescription = Product Description\nQuantity = Quantity\nSettlementMethod = Settlement Method\nSettlementAmount = Approval Amount\nPrincipalPlant = Principal Plant\nApprovalLog = Approval Log\nUserComments = User Comments\nLevel = Level\nApproverName = Initial Approver\nApprovedBy = Approved By\nCurrentStatus = Current Status\nStatusAt = Status At\nCustomerMainAddress = Customer Main Address\nCustomerBMIType = Customer BMI Type\nCustomerBMIType2\t= Customer BMI Type 2\t\nContactID = Contact ID\nContactName = Contact Name\nComplaintCreatedDate = Complaint Created Date\nComplaintCreatedBy = Complaint Created By\nHighRisk = High Risk?\nIsJustified = Is Justified?\nComplainturl = Complaint url',
	"com/sap/bmi/scp/apps/complaintforms/manifest.json":'{"_version":"1.12.0","sap.app":{"id":"com.sap.bmi.scp.apps.complaintforms","type":"application","i18n":"i18n/i18n.properties","applicationVersion":{"version":"1.0.0"},"title":"{{appTitle}}","description":"{{appDescription}}","sourceTemplate":{"id":"html5moduletemplates.basicSAPUI5ApplicationProjectModule","version":"1.40.12"}},"sap.ui":{"technology":"UI5","icons":{"icon":"","favIcon":"","phone":"","phone@2":"","tablet":"","tablet@2":""},"deviceTypes":{"desktop":true,"tablet":true,"phone":true}},"sap.ui5":{"flexEnabled":false,"rootView":{"viewName":"com.sap.bmi.scp.apps.complaintforms.view.ApproverScreen","type":"XML","async":true,"id":"ApproverScreen"},"dependencies":{"minUI5Version":"1.65.6","libs":{"sap.ui.core":{},"sap.m":{},"sap.ui.layout":{}}},"contentDensities":{"compact":true,"cozy":true},"models":{"i18n":{"type":"sap.ui.model.resource.ResourceModel","settings":{"bundleName":"com.sap.bmi.scp.apps.complaintforms.i18n.i18n"}},"oLocalJsonModel":{"type":"sap.ui.model.json.JSONModel"}},"resources":{"css":[{"uri":"css/style.css"}]},"routing":{"config":{"routerClass":"sap.m.routing.Router","viewType":"XML","async":true,"viewPath":"com.sap.bmi.scp.apps.complaintforms.view","controlAggregation":"pages","controlId":"app","clearControlAggregation":false},"routes":[{"name":"RouteApproverScreen","pattern":"RouteApproverScreen","target":["TargetApproverScreen"]}],"targets":{"TargetApproverScreen":{"viewType":"XML","transition":"slide","clearControlAggregation":false,"viewId":"ApproverScreen","viewName":"ApproverScreen"}}}}}',
	"com/sap/bmi/scp/apps/complaintforms/model/formatter.js":function(){jQuery.sap.require("sap.ui.core.format.DateFormat");sap.ui.define([],function(){"use strict";return{sumSettlementAmount:function(e){if(e!=undefined){var t=e;var r=0;for(var a=0;a<t.length;a++){r+=parseFloat(e[a].Z_SettlementAmountcontent_KUT)}r=r.toFixed(2);return r.replace(/\B(?=(\d{3})+(?!\d))/g,",")}},formatDate:function(e){var t=sap.ui.core.format.DateFormat.getDateTimeInstance({pattern:"dd.MM.yyyy HH:mm"});var r=new Date(e);var a=t.format(r);return a},formatCheckBox:function(e){if(e==="true"){return"Yes"}else{return"No"}}}});
},
	"com/sap/bmi/scp/apps/complaintforms/model/models.js":function(){sap.ui.define(["sap/ui/model/json/JSONModel","sap/ui/Device"],function(e,n){"use strict";return{createDeviceModel:function(){var i=new e(n);i.setDefaultBindingMode("OneWay");return i}}});
},
	"com/sap/bmi/scp/apps/complaintforms/view/ApproverScreen.view.xml":'<mvc:View xmlns:mvc="sap.ui.core.mvc" xmlns="sap.m" xmlns:l="sap.ui.layout" xmlns:core="sap.ui.core" xmlns:m="sap.m" xmlns:u="sap.uxap" controllerName="com.sap.bmi.scp.apps.complaintforms.controller.ApproverScreen" displayBlock="true" height="100%"><u:ObjectPageLayout id="ObjectPageLayout" showTitleInHeaderContent="true"><u:headerTitle><u:ObjectPageDynamicHeaderTitle><u:expandedHeading><HBox><Title text="{/Messages/Message1/ServiceRequestCollection/ServiceRequest/ID}" wrapping="true" class="sapUiTinyMarginEnd sapUiTinyMarginBottom"/><Title text="{/Messages/Message1/ServiceRequestCollection/ServiceRequest/Name}" wrapping="true" class="sapUiTinyMarginEnd sapUiTinyMarginBottom"/></HBox></u:expandedHeading></u:ObjectPageDynamicHeaderTitle></u:headerTitle><u:sections><u:ObjectPageSection titleUppercase="false" title="{i18n>CustomerInformation}"><u:subSections><u:ObjectPageSubSection titleUppercase="false"><u:blocks><sap.ui.layout.form:SimpleForm xmlns:sap.ui.layout.form="sap.ui.layout.form" xmlns:sap.ui.core="sap.ui.core" editable="true" maxContainerCols="2" layout="ResponsiveGridLayout" labelSpanXL="4" labelSpanL="4" labelSpanM="6" labelSpanS="12" adjustLabelSpan="true" emptySpanXL="0" emptySpanL="1" emptySpanM="0" emptySpanS="0" columnsXL="1" columnsL="1" columnsM="1" singleContainerFullSize="false"><sap.ui.layout.form:content><Label text="{i18n>CustomerID}" class="sapUiTinyMarginEnd"/><Text text="{/Messages/Message1/ServiceRequestCollection/ServiceRequest/PartyID}"/><Label text="{i18n>CustomerName}" class="sapUiTinyMarginEnd"/><Text text="{/Messages/Message1/ServiceRequestCollection/ServiceRequest/AddressSnapshotDisplayName/AddressSnapshotDisplayName/FormattedName}"/><Label text="{i18n>CustomerMainAddress}" class="sapUiTinyMarginEnd"/><Text text="{/Messages/Message1/ServiceRequestCollection/ServiceRequest/FormattedPostalAddressDescription}"/><Label text="{i18n>CustomerBMIType}" class="sapUiTinyMarginEnd"/><Text text="{/Messages/Message1/ServiceRequestCollection/ServiceRequest/Z_Case_BMIType1_KUT}"/><Label text="{i18n>CustomerBMIType2}" class="sapUiTinyMarginEnd"/><Text text="{/Messages/Message1/ServiceRequestCollection/ServiceRequest/Z_Case_BMIType2_KUT}"/><Label text="{i18n>ContactID}" class="sapUiTinyMarginEnd"/><Text text="{/ContactID}"/><Label text="{i18n>ContactName}" class="sapUiTinyMarginEnd"/><Text text="{/ContactName}"/></sap.ui.layout.form:content></sap.ui.layout.form:SimpleForm></u:blocks></u:ObjectPageSubSection></u:subSections></u:ObjectPageSection><u:ObjectPageSection titleUppercase="false" title="{i18n>ComplaintInformation}"><u:subSections><u:ObjectPageSubSection titleUppercase="false"><u:blocks><sap.ui.layout.form:SimpleForm xmlns:sap.ui.layout.form="sap.ui.layout.form" xmlns:sap.ui.core="sap.ui.core" editable="true" maxContainerCols="2" layout="ResponsiveGridLayout" labelSpanXL="4" labelSpanL="4" labelSpanM="6" labelSpanS="12" adjustLabelSpan="true" emptySpanXL="0" emptySpanL="1" emptySpanM="0" emptySpanS="0" columnsXL="1" columnsL="1" columnsM="1" singleContainerFullSize="false"><sap.ui.layout.form:content><Label text="{i18n>Complaint_Category}" class="sapUiTinyMarginEnd"/><Text text="{/Messages/Message1/ServiceRequestCollection/ServiceRequest/ServiceIssueCategoryCatalogueCategoryDescription/ServiceIssueCategoryCatalogueCategoryDescription/Description}"/><Label text="{i18n>Complaint_Reason}" class="sapUiTinyMarginEnd"/><Text text="{/Messages/Message4/ServiceRequestZComplaintReason_KUTCollection/CodeList/Description}"/><Label text="{i18n>Complaints_status}" class="sapUiTinyMarginEnd"/><Text text="{/Messages/Message6/ServiceRequestServiceRequestUserLifeCycleStatusCodeCollection/CodeList/Description}"/><Label text="{i18n>Emergency_Settlement}" class="sapUiTinyMarginEnd"/><Text text="{/Messages/Message5/ServiceRequestZ_ImmediateSettlement_Header_KUTCollection/CodeList/Description}"/><Label text="{i18n>Invoice_Ref_ID}" class="sapUiTinyMarginEnd"/><Text text="{/Messages/Message1/ServiceRequestCollection/ServiceRequest/RefInvoiceID_KUT}"/><Label text="{i18n>Delivery_Ref_ID}" class="sapUiTinyMarginEnd"/><Text text="{/Messages/Message1/ServiceRequestCollection/ServiceRequest/Z_RefDeliveryID_KUT}"/><Label text="{i18n>Other_Ref_Reason}" class="sapUiTinyMarginEnd"/><Text text="{/Messages/Message1/ServiceRequestCollection/ServiceRequest/Z_OtherReferenceReason_KUT}"/><Label text="{i18n>ComplaintCreatedDate}" class="sapUiTinyMarginEnd"/><Text text="{path:\'/Messages/Message1/ServiceRequestCollection/ServiceRequest/CreationDateTime\', formatter: \'.formatter.formatDate\'}"/><Label text="{i18n>ComplaintCreatedBy}" class="sapUiTinyMarginEnd"/><Text text="{/Messages/Message1/ServiceRequestCollection/ServiceRequest/Createdby/Createdby/FormattedName}"/><Label text="{i18n>HighRisk}" class="sapUiTinyMarginEnd"/><Text text="{path:\'/Messages/Message1/ServiceRequestCollection/ServiceRequest/HighRisk_KUT\', formatter: \'.formatter.formatCheckBox\'}"/><Label text="{i18n>IsJustified}" class="sapUiTinyMarginEnd"/><Text text="{path:\'/Messages/Message1/ServiceRequestCollection/ServiceRequest/Z_Settlementwithreference_KUT\',formatter: \'.formatter.formatCheckBox\'}"/><Label text="{i18n>Complainturl}" class="sapUiTinyMarginEnd"/><Link id="Test" text="Complaint url" press="onPress"></Link></sap.ui.layout.form:content></sap.ui.layout.form:SimpleForm></u:blocks></u:ObjectPageSubSection></u:subSections></u:ObjectPageSection><u:ObjectPageSection titleUppercase="false" title="{i18n>Items}"><u:subSections><u:ObjectPageSubSection titleUppercase="false"><u:blocks><VBox><Table id="idProductsTable" inset="false" items="{path:\'/ItemInfo/foc\'}"><columns><Column hAlign="Center" minScreenWidth="Tablet" demandPopin="true"><Text text="{i18n>ItemNo}"/></Column><Column hAlign="Center" minScreenWidth="Tablet" demandPopin="true"><Text text="{i18n>Product}"/></Column><Column hAlign="Center" minScreenWidth="Tablet" demandPopin="true"><Text text="{i18n>ProductDescription}"/></Column><Column minScreenWidth="Tablet" demandPopin="true" hAlign="Left" ><Text text="{i18n>Quantity}" textAlign="Right"/></Column><Column minScreenWidth="Tablet" demandPopin="true" hAlign="Center"><Text text="{i18n>SettlementMethod}"/></Column><Column hAlign="Center" minScreenWidth="Tablet" demandPopin="true"><Text text="{i18n>SettlementAmount}"/><footer><Text text="{path: \'/ItemInfo/foc\',formatter: \'.formatter.sumSettlementAmount\'}"/></footer></Column><Column hAlign="Center" minScreenWidth="Tablet" demandPopin="true"><Text text="{i18n>PrincipalPlant}"/></Column></columns><items><ColumnListItem><cells><Text text="{ID}"/><Text text="{ProductID}"/><Text text="{Description}"/><HBox  alignItems="Center"><Text text="{path:\'RequestedQuantity\',type: \'sap.ui.model.type.Float\',\n   formatOptions: {\n      maxFractionDigits: 2,\n      roundingMode: \'away_from_zero\'\n   }}"/><Text text="{QuantityMeasureUnitCode}" class="sapUiTinyMarginBegin"/></HBox><Text text="{UserServiceTransactionProcessingTypeCode}"/><HBox alignItems="Start" justifyContent="SpaceAround"><Text text="{path:\'Z_SettlementAmountcontent_KUT\',type: \'sap.ui.model.type.Float\',\n   formatOptions: {\n      maxFractionDigits: 2,\n      roundingMode: \'away_from_zero\'\n   }}"/></HBox><Text text="{ZPlantDescription_SDK}"/></cells></ColumnListItem></items></Table></VBox></u:blocks></u:ObjectPageSubSection></u:subSections></u:ObjectPageSection><u:ObjectPageSection titleUppercase="false" title="{i18n>SettlementInformation}"><u:subSections><u:ObjectPageSubSection titleUppercase="false"><u:blocks><sap.ui.layout.form:SimpleForm xmlns:sap.ui.layout.form="sap.ui.layout.form" xmlns:sap.ui.core="sap.ui.core" editable="true" maxContainerCols="2" layout="ResponsiveGridLayout" labelSpanXL="4" labelSpanL="4" labelSpanM="6" labelSpanS="12" adjustLabelSpan="true" emptySpanXL="0" emptySpanL="1" emptySpanM="0" emptySpanS="0" columnsXL="1" columnsL="1" columnsM="1" singleContainerFullSize="false"><sap.ui.layout.form:content><Label text="{i18n>Total_Cost}" class="sapUiTinyMarginEnd"/><HBox><Text text="{path:\'/Messages/Message1/ServiceRequestCollection/ServiceRequest/Z_CostAllocationcontent_KUT\',type: \'sap.ui.model.type.Float\',\n   formatOptions: {\n      maxFractionDigits: 2,\n      roundingMode: \'away_from_zero\'\n   }}" class="sapUiTinyMarginEnd"/><Text text="{/Messages/Message1/ServiceRequestCollection/ServiceRequest/Z_CostAllocationcurrencyCode_KUT}"/></HBox><Label text="{i18n>Cost_Allocation}" class="sapUiTinyMarginEnd"/><ComboBox id="IdInpCostAllocation" selectedKey="{path:\'/Messages/Message1/ServiceRequestCollection/ServiceRequest/ZCostAllocation_KUT\'}" editable="false"><items><core:Item xmlns:core="sap.ui.core" key="101" text="Cost of complaint"/><core:Item xmlns:core="sap.ui.core" key="111" text="Standard"/><core:Item xmlns:core="sap.ui.core" key="121" text="Planning Logistics &amp; Warehousing (PLW)"/><core:Item xmlns:core="sap.ui.core" key="131" text="Industrial"/></items></ComboBox><Label text="{i18n>Comments}" visible="false" id="IdLblPrevComments"/><Text text="{/Comments}" visible="false" id="IdTxtPrevComments"/></sap.ui.layout.form:content></sap.ui.layout.form:SimpleForm></u:blocks></u:ObjectPageSubSection></u:subSections></u:ObjectPageSection><u:ObjectPageSection titleUppercase="false" title="{i18n>ApprovalLog}"><u:subSections><u:ObjectPageSubSection titleUppercase="false"><u:blocks><VBox><Table id="idApprovalLog" inset="false" items="{path:\'/approver_result\'}"><columns><Column hAlign="Center" minScreenWidth="Tablet" demandPopin="true"><Text text="{i18n>Level}"/></Column><Column hAlign="Center" minScreenWidth="Tablet" demandPopin="true"><Text text="{i18n>ApproverName}"/></Column><Column hAlign="Center" minScreenWidth="Tablet" demandPopin="true"><Text text="{i18n>ApprovedBy}"/></Column><Column hAlign="Center" minScreenWidth="Tablet" demandPopin="true"><Text text="{i18n>CurrentStatus}"/></Column></columns><items><ColumnListItem><cells><Text text="{ApprovalLevel}"/><Text text="{ApproverName}"/><Text text="{ApprovedBy}"/><Text text="{CurrentStatus}"/></cells></ColumnListItem></items></Table></VBox></u:blocks></u:ObjectPageSubSection></u:subSections></u:ObjectPageSection><u:ObjectPageSection titleUppercase="false" title="{i18n>UserComments}"><u:subSections><u:ObjectPageSubSection titleUppercase="false"><u:blocks><sap.ui.layout.form:SimpleForm xmlns:sap.ui.layout.form="sap.ui.layout.form" xmlns:sap.ui.core="sap.ui.core" editable="true" maxContainerCols="2" layout="ResponsiveGridLayout" labelSpanXL="4" labelSpanL="4" labelSpanM="6" labelSpanS="12" adjustLabelSpan="true" emptySpanXL="0" emptySpanL="1" emptySpanM="0" emptySpanS="0" columnsXL="1" columnsL="1" columnsM="1" singleContainerFullSize="false"><sap.ui.layout.form:content><Label text="{i18n>Complaint_App_Reason}" id="lb1" required="true"/><Input id="IdInpComments" value="{oLocalJsonModel>/ComplaintApprovalReason}"/></sap.ui.layout.form:content></sap.ui.layout.form:SimpleForm></u:blocks></u:ObjectPageSubSection></u:subSections></u:ObjectPageSection></u:sections></u:ObjectPageLayout></mvc:View>'
}});
