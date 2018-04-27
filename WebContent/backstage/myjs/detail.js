
/**
 * 
 */

var curPage = 1; //当前页
var maxPage = -1; //最大页

$(function(){
	console.info("初始化detail....");
	load();
});

function load(dir){
	
	if(dir == 1){ //首页
		curPage = 1;
	}else if(dir == 2){//上
		if(curPage > 1){
			curPage--;
			}
	}else if(dir == 3){//下
		if(curPage != maxPage){
			curPage++;
			}
	}else if(dir == 4){//尾
		curPage = maxPage;
	}
	
	console.info("load....");
	//JS端组装JSON数据
	var param = {};
	param.hide = "comment";
	param.curPage = curPage;
	param.g_id = $("#g_id").text();
	
	//JSON数据传到后台需要先转成字符串，使用JSON.stringify(JSON对象)，返回字符串
	ajax("dt.aspx",{pa:JSON.stringify(param)},function(data){
		console.info(data);
		if(data == 1){
		}else if(data == 2){
		}else{
			
			//如果后台返回的是JSON字符串，则先转为JS端JSON对象,使用eval('('+JSON字符串+')')
			var js = eval('('+data+')');
			//alert(js.list);
			//使用JSON对象.KEY获取VALUE内容
			var mylist = js.ctlist;
			//所有行
			var allrows = js.maxpg;
			//最大页
			maxPage = Math.round(allrows / 3);
			
			if(allrows % 3 >= 1){
				maxPage++;
			}
			console.info("最大页"+maxPage);
			var allhtml = '';
			//这里的VALUE内容是LIST，循环遍历LIST,单个对象为POJO1
			for(var i = 0; i < mylist.length; i++){
				//使用POJO.属性名获取具体属性值
				console.info(mylist[i].gpj_content);
				//把评论内容换掉
				var nDate = new Date(mylist[i].gpj_time).toLocaleString();  
				allhtml += getLi(mylist[i].u_id,nDate,mylist[i].gpj_content,mylist[i].gpj_type);
				
			}
			$("#ct").html(allhtml);
		}
	});
	
}

//单条评论
function getLi(name,time,content,type){
	var html = '<li class="am-comment"><a href=""><img class="am-comment-avatar" src="images/hwbn40x40.jpg" /></a>';
	html += '<div class="am-comment-main"><header class="am-comment-hd"><div class="am-comment-meta">';
	html += '<a href="#link-to-user" class="am-comment-author">用户'+name+'</a>评论于';
	html += '<time datetime="">'+time+'</time></div></header>';
	html += '<div class="am-comment-bd"><div class="tb-rev-item " data-id="255776406962">';
	html += '<div class="J_TbcRate_ReviewContent tb-tbcr-content ">'+content;
	html +='<input type="hidden" id="pj'+name+'" value="'+type+'">';
	html += '</div></div></div></div></li>';
	
	return html;
}

