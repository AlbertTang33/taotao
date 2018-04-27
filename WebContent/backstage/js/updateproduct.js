$(function(){
	var a = $("#user_name").val();
});

function updatefirst(msg){
	var fc_type =prompt("请输入更改后的名字:");
	fc_type = fc_type.trim();
	if (fc_type){
		
		var fc_id = msg;
		//alert(fc_id);
		//alert(fc_type);
		$.ajax({
			type:"post",
			url:"productType?cmd=updateFirst",
			data:{"fc_id":fc_id,"fc_type":fc_type},
		    success:function(m){
		    	location.href="productType?cmd=showOne";
		    }
		});
	}
}


function updatesectype(msg){
	var sc_type =prompt("请输入更改后的名字:");
	sc_type = sc_type.trim();
	if (sc_type){

		var sc_id = msg;
		//alert(sc_id);
		//alert(sc_type);
		$.ajax({
			type:"post",
			url:"productType?cmd=updateSecType",
			data:{"sc_id":sc_id,"sc_type":sc_type},
			success:function(m){
				location.href="productType?cmd=showTwo";
			}
		});
	}
}

function updatesecfcid(msg){
	var fc_id =prompt("请输入更改后的一级目录ID:");
	fc_id = fc_id.trim();
	if (fc_id){

		var sc_id = msg;
		//alert(sc_id);
		//alert(fc_id);
		$.ajax({
			type:"post",
			url:"productType?cmd=updateSecFCID",
			data:{"sc_id":sc_id,"fc_id":fc_id},
			success:function(m){
				location.href="productType?cmd=showTwo";
			}
		});
	}
}
