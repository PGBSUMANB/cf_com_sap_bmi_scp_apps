// var i =  $.context.counter;
// for(var i =0; i< $.context.approver_result.length ;i++)
// {
//     for(var j = 0 ; j< $.context.UserEmailId.emailDetails.length ; j++)
//     {
//         if($.context.approver_result[i].ApproverId === $.context.UserEmailId.emailDetails[j].userName)
//         {
//             if ($.context.UserEmailId.emailDetails.length != undefined){
//             $.context.approver_result[i].ApproverName = $.context.UserEmailId.emailDetails.displayName;
//             }else{$.context.approver_result[i].ApproverName = $.context.UserEmailId.emailDetails[j].displayName;} 
//         }
//     }
//  $.context.approver_result[i].ApproverName = $.context.UserEmailId.displayName;
// }
// $.context.counter =  $.context.counter + 1;
if ($.context.UserEmailId.emailDetails.length == undefined){
    $.context.approver_result[0].ApproverName = $.context.UserEmailId.emailDetails.displayName;
    $.context.approver_result[0].ApproverEmail = $.context.UserEmailId.emailDetails.emails;
}
else{
    for(var i =0; i< $.context.approver_result.length ;i++)
{
   
    var users = $.context.approver_result[i].ApproverId.replace(" , ",",");
    users = users.replaceAll(" ","");
    var approverIdTab = users.split(",");
    
    for(var k =0; k< approverIdTab.length ; k++)
    {      
    
    for(var j = 0 ; j< $.context.UserEmailId.emailDetails.length ; j++)
    {
        if(approverIdTab[k] === $.context.UserEmailId.emailDetails[j].userName)
        {
            
            if($.context.approver_result[i].ApproverName === "")
            {
                $.context.approver_result[i].ApproverName = $.context.UserEmailId.emailDetails[j].displayName;
                $.context.approver_result[i].ApproverEmail = $.context.UserEmailId.emailDetails[j].emails;
            }
            else
            {
                $.context.approver_result[i].ApproverName = $.context.approver_result[i].ApproverName + "," + $.context.UserEmailId.emailDetails[j].displayName;
                $.context.approver_result[i].ApproverEmail = $.context.approver_result[i].ApproverEmail + "," + $.context.UserEmailId.emailDetails[j].emails;
            }
        }
    }
}
if(i == "0")
{
   $.context.Approverlevel1 = $.context.approver_result[i].ApproverName; 
}
else if(i == "1")
{
    $.context.Approverlevel2 = $.context.approver_result[i].ApproverName;
}
else if(i == "2")
{
    $.context.Approverlevel3 = $.context.approver_result[i].ApproverName;
}
else if(i == "3")
{
    $.context.Approverlevel4 = $.context.approver_result[i].ApproverName;
}
else if(i == "4")
{
    $.context.Approverlevel5 = $.context.approver_result[i].ApproverName;
}
}
$.context.userstemp = users; 
    $.context.ApproverIdtemp = approverIdTab; 
}
