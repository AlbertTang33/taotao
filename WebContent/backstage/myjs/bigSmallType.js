/**
 * 
 */

var a = '<table>';
	a +='<tr><td height="20" colspan="13" align="center" bgcolor="#EEEEEE"class="tablestyle_title"> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 商品类别列表 &nbsp;</td></tr>';
	a +='<tr></tr><th width="5%" align="center" bgcolor="#EEEEEE">选择</th>';
	a +='<th width="5%" align="center" bgcolor="#EEEEEE">大类ID</th>';
	a +='<th width="5%" align="center" bgcolor="#EEEEEE">大类类名</th>';
	a +='<th width="5%" align="center" bgcolor="#EEEEEE">操作</th></tr></table >';
var b = '<table>';
	b +='<tr><td height="20" colspan="13" align="center" bgcolor="#EEEEEE"class="tablestyle_title"> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 小类商品列表 &nbsp;</td></tr>';
	b +='<tr></tr><th width="5%" align="center" bgcolor="#EEEEEE">选择</th>';
	b +='<th width="5%" align="center" bgcolor="#EEEEEE">小类ID</th>';
	b +='<th width="5%" align="center" bgcolor="#EEEEEE">小类类名</th>';
	b +='<th width="5%" align="center" bgcolor="#EEEEEE">操作</th></tr></table >';
$(function(){
	console.info("初始化detail....");
	bigType();
});


function bigType(d){
	var param = {};
	param.hide = "bigTypeList";
	param.pageNumber = d; 
	var html1 = ' ';
	var Pagehtml;
	ajax("bigSmallType.aspx",{pa:JSON.stringify(param)},function(data){
		var js = eval('('+data+')');
		var maxPageNum = js.maxPageNum;
		var pageNum = js.pageNum;
		var big = js.bigList;
		for(var i = 0 ;i<big.length;i++){
			var bt_name = big[i].bt_name;
			var bt_id = big[i].bt_id;
			html1 += getBigList(bt_id,bt_name); 
		}
		$("#tableBigType").html(a+html1);
		Pagehtml = getBigListPage(pageNum,maxPageNum);
		$("#page").html(Pagehtml);
	});
}

function getBigList(bt_id,bt_name){
	var html = ' ';
	html += '<tr><td bgcolor="#FFFFFF" align="center"><input type="checkbox" name="bt_id" id="22" value="'+bt_id+'" /></td>';
	html +=	'<td bgcolor="#FFFFFF" align="center">'+bt_id+'</td>';
	html +=	'<td bgcolor="#FFFFFF" align="center" id="b_id'+bt_id+'">'+bt_name+'</td>';
	html += '<td bgcolor="#FFFFFF" align="center"><input type="button" onclick="updateInfo('+bt_id+')" value="修改" />';
	html += '<input type="button" onclick="smallInBIgTypeList('+bt_id+')" value="查看大类中小类" /></td>';
	html += '</tr>'
	return html;	
}

function getBigListPage(pageNum,maxPageNum){
	var last = pageNum-1;
	var next = pageNum + 1;
	if(pageNum==1){
		last = pageNum;
	}
	if(pageNum==maxPageNum){
		next = maxPageNum;
	}
	var html ='<tr><td width="50%">共 <span class="right-text09">'+maxPageNum+'</span> 页 | 第 <span class="right-text09">'+pageNum+'</span> 页</td>';
     	html += '<td width="49%" align="right">[<a href="javascript:bigType(1)" class="right-font08">首页</a> | <a href="javascript:bigType('+last+')" class="right-font08">上一页</a>';
    	html += ' | <a href="javascript:bigType('+next+') " class="right-font08">下一页</a> | <a href="javascript:bigType('+maxPageNum+')" class="right-font08">末页</a>]</td>';
    	html += ' <td width="1%"><table width="20" border="0" cellspacing="0" cellpadding="0"></td></tr>';
    return html;
}

function updateInfo(b_id){
	var name = $("#b_id"+b_id).text();
	if(name!=""){
	$("#b_id"+b_id).html("<input type='text' value='"+name+"' id='n"+b_id+"' onblur='lj("+b_id+")'>");
	}
}

function lj(id){
	var name = $("#n"+id).val();
	$("#b_id"+id).html(name);
	update(id);
	
}

function update(id){
	var param = {};
	param.hide = "update";
	param.b_id = id;
	param.bname = $("#b_id"+id).text();
	ajax("bigSmallType.aspx",{pa:JSON.stringify(param)},function(data){
		if(data == "1"){
			alert("修改成功！")
		}
	});
}


function smallInBIgTypeList(bid){
	var smallparam = {};
	smallparam.hide = "smallInBIgTypeList";
	smallparam.bid = bid;
	
	ajax("smallInBIgTypeList.aspx",{pa:JSON.stringify(smallparam)},function(data){
		var js = eval('('+data+')');
		var smallList = js.smallList;
		var html1 = ' ';
		for (var i = 0; i < smallList.length; i++) {
			var st_id = smallList[i].st_id;
			var st_name = smallList[i].st_name;
			html1 += getSmallList(st_id,st_name);
		}
		$("#tableBigType").html(b+html1);
	});
}

function getSmallList(st_id,st_name){
	var html = ' ';
	html += '<tr><td bgcolor="#FFFFFF" align="center"><input type="checkbox" name="bt_id" id="22" value="'+st_id+'" /></td>';
	html +=	'<td bgcolor="#FFFFFF" align="center">'+st_id+'</td>';
	html +=	'<td bgcolor="#FFFFFF" align="center" id="s_id'+st_id+'">'+st_name+'</td>';
	html += '<td bgcolor="#FFFFFF" align="center"><input type="button" onclick="updateSmallInfo('+st_id+')" value="修改" />';
	html += '</td>';
	html += '</tr>'
	return html;
}
function updateSmallInfo(s_id){
	
	var name = $("#s_id"+s_id).text();
	if(name!=""){
		$("#s_id"+s_id).html("<input type='text' value='"+name+"' id='n"+s_id+"' onblur='slj("+s_id+")'>");
	}
}
function slj(id){
	var name = $("#n"+id).val();
	$("#s_id"+id).html(name);
	smallupdate(id);
}

function smallupdate(id){
	var param = {};
	param.hide = "smallupdate";
	param.s_id = id;
	console.log(id);
	param.sname = $("#s_id"+id).text();
	ajax("smallInBIgTypeList.aspx",{pa:JSON.stringify(param)},function(data){
		if(data == "1"){
			alert("修改成功！")
		}
	});
}
