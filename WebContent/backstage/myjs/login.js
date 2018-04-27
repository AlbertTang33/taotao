/**
 * 
 */
/**
 * 
 */

function login2(){
	var vuser = $("#user").val();
	var vpass = $("#password").val();
	var vhide = $("#hide").val();
	if(vuser==null || vpass==null || vuser=="" || vpass==""){
		return;
	}
	ajax("login.aspx",{u_name:vuser,u_pwd:vpass,hide:vhide},function(data){
		console.info(data);
		if(data == 1){
			location.href = "login.aspx?hide=jump";
		}else if(data == 2){
			$("#msg").show();
		}else if(data == 3){
			location.href = "login.aspx?hide=backIndex";
		}
	});
	
}

function login(){
	var vuser = $("#user").val();
	var vpass = $("#password").val();
	var vhide = $("#hide").val();
	if(vuser==null || vpass==null || vuser=="" || vpass==""){
		return;
	}
	ajax("dojsp/dologin.jsp",{u_name:vuser,u_pwd:vpass,hide:vhide},function(data){
		
		console.info(data);
		if(data == 1){
			location.href = "login.aspx?hide=jump";
		}else if(data == 2){
			$("#msg").show();
		}else if(data == 3){
			location.href = "login.aspx?hide=backIndex";
		}
	});
	
}

function register1(){
	var vuser = $("#email").val();
	var vpass = $("#password1").val();
	var vrpass = $("#passwordRepeat1").val();
	var v = $("#reader-me")[0];
	
	if(vpass!=vrpass){
		alert("密码不一致！1");
		return;
	}
	if(v.checked != true){
		alert("请同意服务！");
		return;
	}
	if(vuser==null || vpass==null || vuser=="" || vpass==""){
		return;
	}
	ajax("login.aspx",{u_email:vuser,u_pwd:vpass,hide:"reg1"},function(data){
		//console.info(data);
		if(data == 1){
			alert("注册成功！")
			location.href = "login.jsp";
		}else if(data == 2){
			location.href = "index.jsp";
		}
	});
	
}

$(function(){
	 $("#email").blur(function(){
		 if($("#email").val()){
			 var r = /^(\w)+(\.\w+)*@(\w)+((\.\w+)+)$/;
			 if(!r.test($("#email").val())){
				 $("#msgre").show();
			 }
		  }
		if($("#email").val()){	 
			 ajax("login.aspx",{u_email:$("#email").val(),hide:"ckEmail"},function(data){
					console.info(data);
					if(data > 0){//有数据存在，不能使用该EMAIL
						$("#msgre1").show();
					}
			});
	 	}
	});
	$("#email").focus(function(){
			 $("#msgre").hide();
			 $("#msgre1").hide();
	});
	
	$("#phone").blur(function(){
		if($("#phone").val()){
			 var r = /^1[3|4|5|6|7|8]\d{9}$/;
			 if(!r.test($("#phone").val())){
				 $("#msgre2").show();
			 }
		}
		if($("#phone").val()){	 
			 ajax("login.aspx",{tel:$("#phone").val(),hide:"ckTel"},function(data){
					console.info(data);
					if(data > 0){//有数据存在，不能使用该EMAIL
						$("#msgre3").show();
					}
			});
	 	}
	});
	$("#phone").focus(function(){
			 $("#msgre2").hide();
			 $("#msgre3").hide();
	});
});

function register2(){
	var vuser = $("#phone").val();
	var vpass = $("#password2").val();
	var vrpass = $("#passwordRepeat2").val();
	var v = $("#reader-me2")[0];
	
	if(vpass!=vrpass){
		alert("密码不一致！2");
		return;
	}	
	if(v.checked != true){
		alert("请同意服务！");
		return;
	}
	if(vuser==null || vpass==null || vuser=="" || vpass==""){
		return;
	}
	ajax("login.aspx",{tel:vuser,pwd:vpass,hide:"reg2"},function(data){
		//console.info(data);
		if(data == 1){
			alert("注册成功！")
			location.href = "login.jsp";
		}else if(data == 2){
			location.href = "index.jsp";
		}
	});
	
}

var htmlhead ='<tr><th>用户名</th><th>用户ID</th><th>商品图标</th><th>商品名</th><th>商品属性</th><th>商品价格</th><th>商品评价</th></tr> ';


var pv = [];

function cm(id,u_id,g_id){		
	if(pv[id]==null){
		alert("请给出评价！");
		return;
	}	
	var a = encodeURI($("#gpj_content" + id).val());
	if( a == null || a =="" || a =="undefined"){
		alert("请输入评价内容！");
		return;
	}
	ajax("CommentAction.aspx",{gpj_content:a,gqj_id:id,g_id:g_id,u_id:u_id,gpj_type:pv[id],hide:"commit"},function(data){		
		if(data>0){
			$("#"+id).remove();
		}else{
			alert("修改失败");
		}
	});
}


function pl(num,d){
//	console.info("num,d:"+num+"___"+d);
	pv[d] = num;
}



/**
 * 分页查询
 * 
 */
var curPage = 1;//当前页
var maxPage = -1;//最大页

$(function(){
	console.info("初始化detail。。。");
	load();	
});


function load(dir){	
	var text1 = $("#text1").val();

	if(dir == 1){//首页		
		curPage = 1;
	}else if(dir == 2 && curPage > 1){//上一页
			curPage--;				
	}else if(dir == 3 && curPage < maxPage){//下一页
			curPage++;				
	}else if(dir == 4){//尾页
		curPage = maxPage;
		
	}
	
	//JS端组装JSON数据
	var param = {};
	param.hide = "cx";
	param.curPage = curPage;
	param.text1=text1;

	
	//JSON数据传到后台需要先转成字符串，使用JSON.stringify(JSON对象)，返回字符串
		ajax("ChaXunAction.aspx",{pa:JSON.stringify(param)},function(data){
		if(data == 1){
		}else if(data == 2){
		}else{	
			//如果后台返回的是JSON字符串，则先转为JS端JSON对象，使用eval('('+JSON字符串+')')
			
			var js = eval('('+data+')');
			//使用JSON对象.KEY获取VALUE内容
			var mylist = js.ctlist;
			//所有行
			var allrows = js.maxpg;
			
		
		
			//最大页
			
			maxPage = parseInt(allrows / 3);
		
			if(allrows % 3 > 0){
				maxPage++;
			}
			
			
			var allhtml = '';
			//这里的VALUE内容是LIST，循环遍历LIST，单个对象为POJO
			for(var i = 0; i< mylist.length;i++){
				var pojo = mylist[i];
				
				//换掉评论内容
				allhtml +=getLi(pojo);
			}
			$("#ct").html(htmlhead+allhtml);
			}
		});
	}
	
//单条评论
function getLi(pojo){
	
	var html ='<tr><td>'+pojo.u_name+'</td><td>'+pojo.u_id+'</td><td><img src="ImgServlet?fileName='+pojo.g_img+'"  width="100px" height="100px" ></td>';
	html += '<td><p class="item-basic-info">'+pojo.g_name+'</p><td><span>颜色：洛阳牡丹</span><span>包装：裸装</span></td>';
	html += '<td>'+pojo.g_price+'</td><td>';
	if(pojo.gpj_content==null || pojo.gpj_content ==''){
		html += '<a  target="_top" class="h">该商品暂未评价！</a>';
	}else{
		html += '<a target="_top" class="h">'+pojo.gpj_content+'</a></td></tr>';
	}
	
	return html;
}



/**
 * 
 * @param action 请求地址
 * @param params 参数 {key:value1,key2:value2}
 * @param met 回调方法
 * @param datetype 参数类型 默认json
 * @param type 请求类型 默认post
 * @param isasync 是否异步 默认ture
 */
function ajax(aspx,params,met,datetype,type,isasync){
	
	if(aspx == 'undefined'){
		alert("请填写请求地址");
		return;
	}
	
	if(params == 'undefined'){
		params = {};
	}
	
	if(isasync == 'undefined'){
		isasync = true;
	}
	if(type == 'undefined'){
		type = 'post';
	}
	if(datetype == 'undefined'){
		datetype = 'json';
	}
	
	$.ajax({ 
		url: aspx, 
		type: type,
		dataType: datetype,
		data:params,
		async:isasync,
		context: document.body, 
		success: function(data){
			met(data);
		},
		error: function(){
			
		}
	});
	
}

