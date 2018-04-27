$(function(){
	create(1);
});

function create(page){
	//alert(12);
	var p;
	if(page=="goto"){
		p = $("input").eq(0).val();
	}else{
		p = page;
	}
	$.ajax({
		type:"post",
		url:"../fenye",
		data:{
			"page":p,
		},
		success:function(msg){
			var pagebean = JSON.parse(msg);
			//alert(pagebean);
			show(pagebean);
		}
	});
	
}

function show(pagebean){
	
	var list = pagebean.list;
	
	//选中并清空table
	var tb = $("#tb1").empty();
	//向table中添加表头
	tb.append("<tr><th>用户ID</th><th>类型</th><th>姓名</th><th>性别</th><th>邮箱</th><th>手机</th><th>生日</th><th>操作</th>");
	
	for(var i =0;i<list.length;i++){
		var tr = $("<tr></tr>");
		var td_id = $("<td>"+list[i].user_id+"</td>");
		var td_type = $("<td>"+list[i].user_type+"</td>");
		var td_name = $("<td>"+list[i].user_name+"</td>");
		var td_sex = $("<td>"+list[i].sex+"</td>");
		var td_email = $("<td>"+list[i].email+"</td>");
		var td_phone = $("<td>"+list[i].phone+"</td>");
		var td_birthday = $("<td>"+list[i].birthday.replace(0,"")+"</td>");
		var html = "<td class='list_data_op'>";
		html = html + "<a href='updateUser?cmd=jump&userid="+list[i].user_id+"'><img title='编辑' src='images/bt_edit.gif' class='op_button' /></a>";
		//html = html + "<img onclick=del("+"'"+list[i].user_name+"'"+"); id='"+list[i].user_id+"'title='删除' src='images/bt_del.gif' class='op_button' />";
		html = html+"</td>";
		var td_cz= $(html);
		tr.append(td_id);
		tr.append(td_type);
		tr.append(td_name);
		tr.append(td_sex);
		tr.append(td_email);
		tr.append(td_phone);
		
		//tr.append(td_gender);
		tr.append(td_birthday);
		tr.append(td_cz);
		
		tb.append(tr);
	}
	
	//清空div
	var div = $("#div").empty();
	var str = "<span id='sp' name='"+pagebean.page+"'>当前第"+pagebean.page+"页共"+pagebean.totalPage+"页共"+pagebean.totalCount+"条</span>";
	str = str + "<a href='javascript:void(0)' onclick='create(1)' >首页|</a>";
	str = str + "<a href='javascript:void(0)' onclick='create("+(pagebean.page-1)+")'>上一页|</a>";
	str = str + "<a href='javascript:void(0)' onclick='create("+(pagebean.page+1)+")'>下一页|</a>";
	str = str + "<a href='javascript:void(0)' onclick='create("+pagebean.totalPage+")'>尾页</a>";
	str = str + "<input type='text' size='1' />";
	str = str + "<a href='javascript:void(0)' onclick=create('goto')>go</a>"; 
	//把str放入div
	div.append(str);
	
	
}