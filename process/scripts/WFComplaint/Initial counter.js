
var i = $.context.ApprovalLevel - 1;
$.context.indexvalue = i;
$.context.CurrentUser = $.context.ApproverIdRes.Result[0].ApproverIdRes[i].ApproverId;
$.context.CurrentApproverID = $.context.approver_result[i].ApproverId;
$.context.CurrentApproverLevel = $.context.approver_result[i].ApprovalLevel;
$.context.CurrentApproverName = $.context.approver_result[i].ApproverName;
$.context.CurrentApproverEmail = $.context.approver_result[i].ApproverEmail;
$.context.CurrentApproverStatus = $.context.approver_result[i].CurrentStatus;
$.context.CurrentApprovedBy = $.context.approver_result[i].ApprovedBy;
$.context.startedAt = $.info.startedAt;
