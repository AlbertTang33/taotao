/**
 * 
 */
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