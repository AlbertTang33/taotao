/**
 * 
 */

		//首页不经过后台带参数跳转到搜索页面
		function search(){
			var vsearch = $("#searchInput").val();
			
			location.href = "search.jsp?search="+vsearch;
		}

		
		
		
		
		
		
		//初始化搜索页面
		$(function(){
			console.info("初始化detail....");
			firstsearch();
		});
		
		
		var curPage = 1; //当前页
		var maxPage = -1; //最大页
		//第一次搜索
		function firstsearch(dir,order){
			
				if(dir == 1){ //首页
					curPage = 1;
				}else if(dir == 2){//上
					curPage--;
				}else if(dir == 3){//下
					curPage++;
				}else if(dir == 4){//尾
					curPage = maxPage;
				}
				
				if(order==null){
					order = "g_id";
				}
				
				var search = "search";
				var param = {};
				param.search = getReqVal(search);
				param.hide = "firstsearch";
				param.curPage = curPage;
				param.order = order;
				console.info("param.order="+param.order);
				
				ajax("search.aspx",{pa:JSON.stringify(param)},function(data){
					var js = eval('('+data+')');
					//分页商品集合
					var GoodsList=js.GoodsList;
					//分页图片集合
					var imglist=js.imglist;
					//小类名字
					var Mapsname=js.Mapsname;
					//总行数
					var allrows = js.allcount;
					//返回搜索内容
					var sc = js.search;
					console.info("js.allcount="+js.allcount);
					//根据总行数算出最大页数
					maxPage = Math.ceil(allrows / 12);

					console.info("maxPage="+maxPage);
					
					var html1 = ' ';
					for(var i = 0; i < GoodsList.length; i++){
						var gid = GoodsList[i].g_id;
						var gname = GoodsList[i].g_name;
						var gprice = GoodsList[i].g_price;
						var gxl = GoodsList[i].g_xiaoliang;
						var img = imglist[i].g_img;
						html1 += GoodsHtml(gid,img,gname,gprice,gxl);
					}
					$("#Goods").html(html1);
					
					var html2 = '<dd class="select-all selected"><a href="#">全部</a></dd>';
					for(var i = 0; i < Mapsname.length; i++){
						var sid=Mapsname[i].st_id
						var sname=Mapsname[i].st_name;
						html2 += SnameHtml(sid,sname);
					}
					$("#div1").html(html2);
					
					//分页局部刷新
					var html3 = '<li class="am-disabled"><a href="#">&laquo;</a></li>'
						html3 += '<li class="am-active"><a href="javascript:firstsearch(1)">首页</a></li>'
						html3 += '<li><a href="javascript:firstsearch(2)">上一页</a></li>'
						html3 += '<li id="pagecount"><p>当前第'+curPage+'页，共'+maxPage+'页</p></li>'
						html3 += '<li><a href="javascript:firstsearch(3)">下一页</a></li>'
						html3 += '<li><a href="javascript:firstsearch(4)">尾页</a></li>'
						html3 += '<li><a href="#">&raquo;</a></li>'
					$("#fenye").html(html3);
					
					var html4 = '<span id="searchInput2" class="fl">'+sc+'</span>'
						html4 += '<span class="total fl">搜索到<strong class="num">'+allrows+'</strong>件相关商品</span>';
					$("#pp1").html(html4);
					
				});	
		}
		
		

		
		//第二次查询
		curPage = 1; 
		maxPage = -1;
		function secondSearch(dir,id,order){
			console.log(order);
			if(dir == 1){ //首页
				curPage = 1;
			}else if(dir == 2){//上
				curPage--;
			}else if(dir == 3){//下
				curPage++;
			}else if(dir == 4){//尾
				curPage = maxPage;
			}
			
			if(order == null){
				order="g_id";
			}
			
			var param = {};
			param.search=id;
			param.hide = "secondsearch";
			param.curPage = curPage;
			param.order = order;
			console.info("param.search="+param.search);
			console.info("param.order="+param.order);
			ajax("search.aspx",{pa:JSON.stringify(param)},function(data){
				var js = eval('('+data+')');
				//第二次查询集合
				var goodslist = js.goodslist;
				//第二次小类名字
				var stp = js.stp
				//第二次查询商品图片
				var imglist = js.imglist;
				//获得二次查询的总行数
				var allrows = js.count;
				//根据总行数算出最大页数
				maxPage = Math.ceil(allrows / 12);
		
				//第二次查询局部刷新
				var html1 = ' ';
				for(var i = 0; i < goodslist.length; i++){
					var gid = goodslist[i].g_id;
					var gname = goodslist[i].g_name;
					var gprice = goodslist[i].g_price;
					var gxl = goodslist[i].g_xiaoliang;
					var img = imglist[i].g_img;
					html1 += GoodsHtml(gid,img,gname,gprice,gxl);
				}
				$("#Goods").html(html1);
				//分页局部刷新
				var html2 = '<li class="am-disabled"><a href="#">&laquo;</a></li>'
					html2 += '<li class="am-active"><a href="javascript:secondSearch(1,'+id+')">首页</a></li>'
					html2 += '<li><a href="javascript:secondSearch(2,'+id+')">上一页</a></li>'
					html2 += '<li id="pagecount"><p>当前第'+curPage+'页，共'+maxPage+'页</p></li>'
					html2 += '<li><a href="javascript:secondSearch(3,'+id+')">下一页</a></li>'
					html2 += '<li><a href="javascript:secondSearch(4,'+id+')">尾页</a></li>'
					html2 += '<li><a href="#">&raquo;</a></li>'
				$("#fenye").html(html2);

				var gg="g_xiaoliang";
				var gp="g_price"
				var	html3 = '<li><a title=\'销量\' href=\'javascript:secondSearch(1,'+id+',\"'+gg+'\")\'>销量排序</a></li>';
					html3 += '<li><a title=\'价格\' href=\'javascript:secondSearch(1,'+id+',\"'+gp+'\")\'>价格排序</a></li>';
				console.info(html3);
				$("#tjsearch").html(html3);
					
				var html4 = '<span id="searchInput2" class="fl">'+stp.st_name+'</span>'
					html4 += '<span class="total fl">搜索到<strong class="num">'+allrows+'</strong>件相关商品</span>';
				$("#pp1").html(html4);
			});
		}
	


		//单个商品
		function GoodsHtml(gid,img,name,price,xl){
				var html = '<li onclick="introduction('+gid+');"><div class="i-pic limit"><img width="210px" height="210px" src="ImgServlet?fileName='+img+'" />'
					html += '<p class="title fl">'+name+'</p><p class="price fl">'
					html += '<b>¥</b><strong>'+price+'</strong></p><p class="number fl">'
					html += '销量<span>'+xl+'</span></p></div></li>'
		
					return html;
		}

		//单个小类名字	
		function SnameHtml(id,name){
				var html = '<dd><a href="javascript:secondSearch(1,'+id+')">'+name+'</a></dd>'
					return html;
		}
		
		
		
		//不通过后台两个JSP页面之间传值
		function getReqVal(strName){
				//获取页面的完整请求地址
				var strHref = decodeURI(location.href);
				//http://1n83jrrylqrv5tg:8081/web_shop1/getUrlValue.jsp?a=123&b=456&c=是否
				var intPos = strHref.indexOf("?");
				var strRight = strHref.substr(intPos + 1);
				//a=123&b=456&c=是否
				var arrTmp = strRight.split("&");
				for(var i = 0; i < arrTmp.length; i++){
					//a=123
					var arrTemp = arrTmp[i].split("=");
					if(arrTemp[0].toUpperCase() == strName.toUpperCase()) 
					return arrTemp[1];
				}
				return "";
		}

		
		//跳转商品详情页
		function introduction(id){
			location.href = "GoodsAction.aspx?id="+id;
		}
