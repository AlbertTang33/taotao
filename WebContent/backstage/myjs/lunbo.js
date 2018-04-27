/**
 * 
 */
var	a = '<tr><th width="5%" align="center" bgcolor="#EEEEEE">&nbsp;</th>'
	a += '<th width="10%" height="20" align="center" bgcolor="#EEEEEE">轮播ID</th>'
	a += '<th width="10%" height="20" align="center" bgcolor="#EEEEEE">轮播图片</th>'
	a += '<th width="10%" height="20" align="center" bgcolor="#EEEEEE">商品轮播状态</th>'
	a += '<th width="10%" height="20" align="center" bgcolor="#EEEEEE">是否轮播</th></tr>'

$(function(){
	chaxun();
	console.info 

("初始化detail....");
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
	
	ajax("LunBo.aspx",{pa:JSON.stringify(param)},function(data){
		var js = eval('('+data+')');
		var list = js.list;
		var allrows = js.allows;
		maxPage = Math.ceil(allrows/2);
		
		var html1 = ' ';
		for(var i = 0; i < list.length; i++){
			console.log();
			var cid=list[i].c_ID;
			var gid=list[i].g_id;
			var show=list[i].c_show;
			var img=list[i].g_img;
			html1 += getList(img,cid,gid,show);
		}
		$("#tab1").html(a+html1);
	});
}


//更新
function update(cid){
	var param = {};
	param.cid = cid;
	param.hide = "update";
	
	ajax("LunBo.aspx",{pa:JSON.stringify(param)},function(data){
		if(data=="1"){
			alert("商品已设为显示");
		}
		if(data=="0"){
			alert("商品已设为不显示");
		}
		$("#s"+cid).text(data);
	});
}


//单个推荐商品
function getList(img,cid,gid,show){
	var html = '<tr><td bgcolor="#FFFFFF" align="center"><input type = "CheckBox"></td>';
		html += '<td bgcolor="#FFFFFF" align="center">'+gid+'</td>';
		html += '<td bgcolor="#FFFFFF" align="center"><img width="100" height="100" src="ImgServlet?fileName='+img+'" /></td><th id="s'+cid+'" >'+show+'</th>';
		html += '<td bgcolor="#FFFFFF" align="center"><input type = "button" value = "是" onclick="update('+cid+')">';
		html += '<input type = "button" value = "否" onclick="update('+cid+')"></td></tr>';
		return html;
}
