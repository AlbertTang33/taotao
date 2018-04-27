/**
 * 
 */
/**
 * 
 */
var	a = '<tr><th width="5%" align="center" bgcolor="#EEEEEE">&nbsp;</th>'
	a += '<th width="10%" height="20" align="center" bgcolor="#EEEEEE">商品ID</th>'
	a += '<th width="10%" height="20" align="center" bgcolor="#EEEEEE">商品名</th>'
	a += '<th width="10%" height="20" align="center" bgcolor="#EEEEEE">商品图片</th>'
	a += '<th width="10%" height="20" align="center" bgcolor="#EEEEEE">商品显示状态</th>'
	a += '<th width="10%" height="20" align="center" bgcolor="#EEEEEE">商品注释</th>'
	a += '<th width="10%" height="20" align="center" bgcolor="#EEEEEE">是否显示</th>'
	a += '</tr>';

$(function(){
	chaxun();
	
});

	var curPage = 1; 
	var maxPage = -1;
//查询
function chaxun(dir){
	if(dir == 1){ //首页
		curPage = 1;
	}else if(dir == 2){//上
		if(curPage<2){
			curPage = 1;
		}
		else{
			curPage--;
		}
	}else if(dir == 3){//下
		if(curPage == maxPage){
		curPage=maxPage;
		}
		else{
			curPage++;
		}
	}else if(dir == 4){//尾
		curPage = maxPage;
	}
	var param = {};
	param.curPage = curPage;
	param.hide = "chaxun";
	
	ajax("tuijian.aspx",{pa:JSON.stringify(param)},function(data){
		var js = eval('('+data+')');
		var list = js.list;
		var imglist = js.imglist
		var allrows = js.allows;
		maxPage = Math.ceil(allrows/2);
		
		var html1 = ' ';
		for(var i = 0; i < list.length; i++){
			console.info 

			("list[i].g_name="+list[i].g_name);
			var tjid=list[i].tj_id;
			var gid=list[i].g_id;
			var name=list[i].g_name;
			var show=list[i].tj_show;
			var reamrk=list[i].reamrk;
			var img=imglist[i].g_img;
			html1 += getList(img,tjid,gid,name,show,reamrk);
		}
		$("#tab1").html(a+html1);
	});
}


//更新
function update(tjid){
	var param = {};
	param.tjid = tjid;
	param.hide = "update";
	
	ajax("tuijian.aspx",{pa:JSON.stringify(param)},function(data){
		if(data=="1"){
			alert("商品已设为显示");
		}
		if(data=="0"){
			alert("商品已设为不显示");
		}
		$("#s"+tjid).text(data);
	});
}

//单个推荐商品
function getList(img,tjid,gid,name,show,reamrk){
	var html = '<tr><td bgcolor="#FFFFFF" align="center"><input type = "CheckBox"></td>';
		html += '<td bgcolor="#FFFFFF" align="center">'+gid+'</td>';
		html += '<td bgcolor="#FFFFFF" align="center">'+name+'</td>';
		html += '<td bgcolor="#FFFFFF" align="center"><img width="100" height="100" src="ImgServlet?fileName='+img+'" /></td >';
		html += '<td bgcolor="#FFFFFF" align="center" id="s'+tjid+'" >'+show+'</td>';
		html += '<td bgcolor="#FFFFFF" align="center" >'+reamrk+'</td>';
		html += '<td bgcolor="#FFFFFF" align="center">';
		html +=	'<input type = "button" value = "是" onclick="update('+tjid+')">';
		html += '<input type = "button" value = "否" onclick="update('+tjid+')"></td></tr>';
		
		return html;
}
