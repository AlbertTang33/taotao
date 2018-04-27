$(function(){
	
	$(".comment-list .item-opinion li").click(function() {
		$(this).prevAll().children('i').removeClass("active");
		$(this).nextAll().children('i').removeClass("active");
		$(this).children('i').addClass("active");
	});
	
	
	$(".am-btn am-btn-danger").click(function() {
		//alert(aa);
		/* $.ajax({
			type:"post",
			url:"commentlist",
			data:{"comment_nr":comment_nr,"comment_pic":comment_pic,"comment_score":comment_score,"comment_time":comment_time,"user_id":user_id,"product":product},
			success:function(msg){
			} 
		});*/
	});
	
});
function sendComment(){
	/*$(".am-btn am-btn-danger").click(function) {
		//alert(aa);
		*/
			var comment_nr1=$("#nr1").val();
		    var comment_nr2=$("#nr2").val();
		    var comment_pic=$("#zp1").val();
		    var comment_score1=$("#o1").val();
		    var comment_score2=$("#o2").val();
		    var comment_score3=$("#o3").val();
		    var comment_time=System.currentTimeMillis();
		    alert(comment_nr1);
		    alert(comment_nr2);
			/*var comment_pic=$("#zp").val();
			var comment_score=$("#hzc").val();
			var comment_time=new Date();
			var user_id=("#yh").val();*/
	//alert(123);
			$.ajax({
				type:"post",
				url:"../commentlist?cmd=123",
				data:{"comment_nr1":comment_nr1,"comment_nr2":comment_nr2,"comment_pic":comment_pic,"comment_score1":comment_score1,"comment_score2":comment_score2,"comment_score3":comment_score3,"comment_time":comment_time},
				success:function(msg){
					
				} 
			});
}