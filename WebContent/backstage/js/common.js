function reload(){
	window.location.reload();
}
function help(msg){
	alert('��ӭʹ��'+msg);
}

function to(no){
	window.location.href=url;
}
function back(){
	history.go(-1);
}
function save(url){
	alert('����ɹ���');
	to(url);
}
function add(url){
	alert('�½��ɹ���');
	to(url);
}
function del(msg){
	if (window.confirm("确定要删除联系人"+msg+"?")){
		
		var img = event.target;
		var stu_no = img.id;
		/*
		// 发起删除请求
		location.href="delete?no="+stu_no;
		*/
		var page = $("#sp").attr("name");
		//alert(page);
		$.ajax({
			type:"post",
			url:"delete",
			data:{"no":stu_no,"page":page},
			success:function(msg){
				
				var pagebean = JSON.parse(msg);
				//alert(pagebean);
				show(pagebean);
				
				/*
				// msg  是json 字符串  ---》 json对象
				var stus = JSON.parse(msg);
				// 获取表格对象 并清空
				var tb = $("#tb1").empty();
				// 追加表头
				tb.append("<tr><th>学号</th><th>姓名</th><th>性别</th><th>职位</th><th>邮箱</th><th>手机</th><th>备注</th><th>操作</th></tr>");
				
				// 遍历json对象   jquery $.each(function(index,value){})
				$.each(stus,function(index,stu){
					var tr = $("<tr></tr>");
					var td_no = $("<td>"+stu.stu_no+"</td>");
					var td_name = $("<td>"+stu.stu_name+"</td>");
					var td_sex = $("<td>"+stu.stu_gender+"</td>");
					var td_job = $("<td>"+stu.stu_position+"</td>");
					var td_email = $("<td>"+stu.stu_phone+"</td>");
					var td_phone = $("<td>"+stu.stu_email+"</td>");
					var td_remark = $("<td>"+stu.stu_tips+"</td>");
					
					
					var html = "<td class='list_data_op'>";
					html = html + "<a href='update?no="+stu.stu_no+"'><img title='编辑' src='images/bt_edit.gif' class='op_button' /></a>";
					html = html + "<img onclick=del("+"'"+stu.stu_name+"'"+"); id='"+stu.stu_no+"'title='删除' src='images/bt_del.gif' class='op_button' />";
					html = html+"</td>";
					var td_cz= $(html);
					tr.append(td_no);
					tr.append(td_name);
					tr.append(td_gender);
					tr.append(td_position);
					tr.append(td_phone);
					tr.append(td_email);
					tr.append(td_tips);
					tr.append(td_cz);
					
					tb.append(tr);
				});
			*/	
			}
		});
		
	}
}
function setCurTime(oid){
	var now=new Date();
	var year=now.getYear();
	var month=now.getMonth();
	var day=now.getDate();
	var hours=now.getHours();
	var minutes=now.getMinutes();
	var seconds=now.getSeconds();
	var timeString = year+"-"+month+"-"+day+" "+hours+":"+minutes+":"+seconds;
	var oCtl = document.getElementById(oid);
	oCtl.value = timeString;
}
function indexjump(){
	var page = $("input").eq(0).val();
	location.href="fenye?cmd=main&page="+page;
}