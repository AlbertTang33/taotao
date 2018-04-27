/**
 * 
 */
var  a = '<tr><td height="20" colspan="13" align="center" bgcolor="#EEEEEE"class="tablestyle_title"> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 商品信息列表 &nbsp;</td>';
a+= '</tr><tr><td width="5%" align="center" bgcolor="#EEEEEE" >选择</td>';
a+= '    <td width="10%" height="20" align="center" bgcolor="#EEEEEE">商品名</td>';
a+= '   <td width="10%" align="center" bgcolor="#EEEEEE">商品数量</td>';
a+= '  <td width="10%" align="center" bgcolor="#EEEEEE">商品价格</td>';
a+= '  <td width="5%" align="center" bgcolor="#EEEEEE">商品类型</td>';
a+= '  <td width="10%" align="center" bgcolor="#EEEEEE">商品累计评价</td>';
a+= '  <td width="6%" align="center" bgcolor="#EEEEEE">商品销量</td>';
a+= '   <td width="5%" align="center" bgcolor="#EEEEEE">商品图片</td>';
a+= '  <td width="10%" align="center" bgcolor="#EEEEEE">操作</td>';
a+= '</tr>';
$(function(){
	
	goodsList();
});

//动态生成商品（所有）List 
function goodsList(d){
	var param1 = {};
	param1.hide = "goodsListComment";
	param1.pageNumber = d; 
	
	ajax("goodsList.aspx",{pa1:JSON.stringify(param1)},function(data){
		var js = eval('('+data+')');
		var maxPageNum = js.maxPageNum;
		var pageNum = js.pageNum;
		var smallList = js.smallList;
		var pp = js.p;
		var p_name = pp.st_name;
		var goodsList = js.goodsList;
		var html1 = ' ';
		var html2 = ' ';
		var stHtml = ' ';
		
		for (var i = 0; i < goodsList.length; i++) {
			var id=goodsList[i].g_id;
			var name = goodsList[i].g_name;
			var num = goodsList[i].g_num;
			var price = goodsList[i].g_price;
			var xiaoliang = goodsList[i].g_xiaoliang;
			var pingjia  = goodsList[i].g_pingjia;
			var img =   goodsList[i].g_img;
			html1 += getTRList(id,name,num,price,xiaoliang,pingjia,img,p_name);		
		
		}
		
		for(var i = 0;i<smallList.length;i++){
			var sid = smallList[i].st_id;
			var sname = smallList[i].st_name;
			stHtml += getTRqueryText(sid,sname);
		}
		Pagehtml2 = getPage(pageNum,maxPageNum);
		$("#queryPage").html(stHtml);
		$("#page").html(Pagehtml2);
		
		$("#tableGoods").html(a+html1);
		
	});
}

//动态生成所有商品分页
function getPage(pageNum,maxPageNum){
	var last = pageNum-1;
	var next = pageNum + 1;
	 var html ='<tr><td width="50%">共 <span class="right-text09">'+maxPageNum+'</span> 页 | 第 <span class="right-text09">'+pageNum+'</span> 页</td>';
     html += '<td width="49%" align="right">[<a href="javascript:goodsList(1)" class="right-font08">首页</a> | <a href="javascript:goodsList('+last+')" class="right-font08">上一页</a>';
    	html += ' | <a href="javascript:goodsList('+next+') " class="right-font08">下一页</a> | <a href="javascript:goodsList('+maxPageNum+')" class="right-font08">末页</a>]</td>';
    	html += ' <td width="1%"><table width="20" border="0" cellspacing="0" cellpadding="0"></tr>';
    	return html;
}

//生成搜索表单
function getTRqueryText(sid,sname){
	var html = '<option value="'+sid+'">'+sname+'</option>';
		return html;
}


//搜索商品
function goodsqueryList(page){
	var param = {};
	param.hide = "comment";
	var p = $("#queryPage").val();
	param.stid = p;
	param.pageNum = page;
	ajax("goodsQueryByName.aspx",{pa:JSON.stringify(param)},function(data){
		var js = eval('('+data+')');
		var maxPageNum = js.maxPageNum;
		var pageNum = js.pageNum;
		var smallList = js.smallList;
		var pp = js.p;
		var p_name = pp.st_name;
		var goodsList = js.goodsList;
		var html1 = ' ';
		var QueryPagehtml = ' ';
		var stHtml = ' ';
		for (var i = 0; i < goodsList.length; i++) {
			var id=goodsList[i].g_id;
			var name = goodsList[i].g_name;
			var num = goodsList[i].g_num;
			var price = goodsList[i].g_price;
			var xiaoliang = goodsList[i].g_xiaoliang;
			var pingjia = goodsList[i].g_pingjia;
			var img = goodsList[i].g_img;
			html1 += getTRQuery(id,name,num,price,xiaoliang,pingjia,img,p_name);
		}
		QueryPagehtml = getQueryPage(pageNum,maxPageNum);
		$("#page").html(QueryPagehtml);
		$("#tableGoods").html(a+html1);
	});
}

function getTRList(id,name,num,price,xiaoliang,pingjia,img,p_name){
	var html = '<tr>'; 
	 	html += '<td bgcolor="#FFFFFF" align="center"><input type="checkbox" name="g_id" id="g11" value="'+id+'" /></td>';
		html +=	'<td bgcolor="#FFFFFF">'+name+'</td>';
		html +=	'<td bgcolor="#FFFFFF">'+num+'</td>';
		html +=	'<td bgcolor="#FFFFFF">'+price+'</td>';
		html +=	'<td bgcolor="#FFFFFF">'+p_name+'</td>';
		html +=	'<td bgcolor="#FFFFFF">'+pingjia+'</td>';
		html +=	'<td bgcolor="#FFFFFF">'+xiaoliang+'</td>';
		html +=	'<td bgcolor="#FFFFFF" ><img src=ImgServlet?fileName='+img+' width='+100+' height='+100+' ></td>';
		html += '<td bgcolor="#FFFFFF" align="center"><input type="button" onclick="updateInfo('+id+')" value="修改" /></a>';
		html += '<input type="button" onclick="queryInfo('+id+')" value="查看" /></td>';
		html += '</tr>'
		return html;
}

function getTRQuery(id,name,num,price,xiaoliang,pingjia,img,p_name){
	var html = '<tr><td bgcolor="#FFFFFF" id="g22"><input type="checkbox" name="g_id" id="g11" value="'+id+'" /></td>';
		html +=	'<td bgcolor="#FFFFFF">'+name+'</td>';
		html +=	'<td bgcolor="#FFFFFF">'+num+'</td>';
		html +=	'<td bgcolor="#FFFFFF">'+price+'</td>';
		html +=	'<td bgcolor="#FFFFFF">'+p_name+'</td>';
		html +=	'<td bgcolor="#FFFFFF">'+pingjia+'</td>';
		html +=	'<td bgcolor="#FFFFFF">'+xiaoliang+'</td>';
		html +=	'<td bgcolor="#FFFFFF" ><img src=ImgServlet?fileName='+img+' width='+100+' height='+100+' ></td>';
		html += '<td bgcolor="#FFFFFF" align="center"><input type="button" onclick="updateInfo('+id+')"value="修改"/></a>';
		html += '<input type="button" onclick="queryInfo('+id+')" value="查看" /></td></tr>';
		return html;
}

//动态生成搜索商品分页
function getQueryPage(pageNum,maxPageNum){
	var last = pageNum-1;
	var next = pageNum + 1;
	 var html ='<td width="50%">共 <span class="right-text09">'+maxPageNum+'</span> 页 | 第 <span class="right-text09">'+pageNum+'</span> 页</td>';
     html += '<td width="49%" align="right">[<a href="javascript:goodsqueryList(1)" class="right-font08">首页</a> | <a href="javascript:goodsqueryList('+last+')" class="right-font08">上一页</a>';
    	html += ' | <a href="javascript:goodsqueryList('+next+') " class="right-font08">下一页</a> | <a href="javascript:goodsqueryList('+maxPageNum+')" class="right-font08">末页</a>]</td>';
    	html += ' <td width="1%"><table width="20" border="0" cellspacing="0" cellpadding="0">';
    	return html;
}