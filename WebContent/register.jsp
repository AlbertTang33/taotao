<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>注册</title>
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta name="viewport"
	content="width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no">
<meta name="format-detection" content="telephone=no">
<meta name="renderer" content="webkit">
<meta http-equiv="Cache-Control" content="no-siteapp" />

<link rel="stylesheet" href="assets/css/amazeui.min.css" />
<link href="css/dlstyle.css" rel="stylesheet" type="text/css">
<script src="assets/js/jquery.min.js"></script>
<script src="assets/js/amazeui.min.js"></script>
<script type="text/javascript">
$(function(){
	$("#submit_email").click(function(){
		var cmd = $("#cmd_e").val();
		var email = $("#email").val();
		var pwd_e = $("#pwd_e").val();
		var passwordRepeat_e = $("#passwordRepeat_e").val();
		$.ajax({
			type:"post",
			url:"user",
			data:{
				"cmd":cmd,
				"email":email,
				"pwd_e":pwd_e,
				"passwordRepeat_e":passwordRepeat_e
				},
			success:function(msg){
				var message = $.session.get('msg');
				consolo.log(message);
				if(message.match('邮箱注册成功')){
					window.location.href = "index.jsp";
				}else{
					window.location.href = "register.jsp";
				}
			}
		});
	});
	
	$("#submit_phone").click(function(){
		var cmd = $("#cmd_p").val();
		var phone = $("#phone").val();
		var pwd_p = $("#password_p").val();
		var passwordRepeat_p = $("#passwordRepeat_p").val();
		$.ajax({
			type:"post",
			url:"user",
			data:{
				"cmd":cmd,
				"phone":phone,
				"pwd_p":pwd_p,
				"passwordRepeat_p":passwordRepeat_p
				},
			success:function(msg){
				
			}
		});
	});
});
</script>
</head>
<body>
	<div class="login-boxtitle">
		<a href="home/demo.html"><img alt="" src="images/logobig.png" /></a>
	</div>

	<div class="res-banner">
		<div class="res-main">
			<div class="login-banner-bg">
				<span></span><img src="images/big.jpg" />
			</div>
			<div class="login-box">

				<div class="am-tabs" id="doc-my-tabs">
					<ul class="am-tabs-nav am-nav am-nav-tabs am-nav-justify">
						<li class="am-active"><a href="">邮箱注册</a></li>
						<li><a href="">手机号注册</a></li>
					</ul>
                   
					<div class="am-tabs-bd">
					    
						<div class="am-tab-panel am-active">
							<form action="">
                                <input type="hidden" name="cmd_e" id="cmd_e" value="register_email" />
								<div class="user-email">
									<label for="email" style="padding-top: 12px;" ><i class="am-icon-envelope-o"></i></label> <input
										type="email" name="email" id="email" placeholder="请输入邮箱账号">
								</div>
								<div class="user-pass">
									<label for="password" style="padding-top: 12px;"><i class="am-icon-lock"></i></label> <input
										type="password" name="pwd" id="pwd_e" placeholder="设置密码">
								</div>
								<div class="user-pass">
									<label for="passwordRepeat" style="padding-top: 12px;"><i class="am-icon-lock"></i></label>
									<input type="password" name="pwd_repeat" id="passwordRepeat_e"
										placeholder="确认密码">
								</div>

							</form>
							<div class="login-links">
								<label for="reader-me"> <input id="reader-me" type="checkbox" /> 点击表示您同意商城《服务协议》
								</label>
							</div>
							
							<div class="am-cf">
								<input type="submit" name="" value="注册"
									class="am-btn am-btn-primary am-btn-sm am-fl" id="submit_email">
							</div>
                        
						</div>
						

						<div class="am-tab-panel">
							<form action="" >
							<input type="hidden" name="cmd_p" id="cmd_p" value="register_phone" />
								<div class="user-phone">
									<label for="phone"><i
										class="am-icon-mobile-phone am-icon-md"></i></label> <input type="tel"
										name="phone" id="phone" placeholder="请输入手机号">
								</div>
								<div class="verification">
									<label for="code"><i class="am-icon-code-fork"></i></label> <input
										type="tel" name="" id="code" placeholder="请输入验证码"> <a
										class="btn" href="javascript:void(0);"
										onclick="sendMobileCode();" id="sendMobileCode"> <span
										id="dyMobileButton">获取</span></a>
								</div>
								<div class="user-pass">
									<label for="password"><i class="am-icon-lock"></i></label> <input
										type="password" name="pwd" id="password_p" placeholder="设置密码">
								</div>
								<div class="user-pass">
									<label for="passwordRepeat"><i class="am-icon-lock"></i></label>
									<input type="password" name="pwd_repeat" id="passwordRepeat_p"
										placeholder="确认密码">
								</div>
							</form>
							<div class="login-links">
								<label for="reader-me"> <input id="reader-me" type="checkbox" /> 点击表示您同意商城《服务协议》
								</label>
							</div>
							<div class="am-cf">
								<input type="submit" name="" value="注册"
									class="am-btn am-btn-primary am-btn-sm am-fl" id="submit_phone">
							</div>

							<hr>
						</div>

						<script>
							$(function() {
								$('#doc-my-tabs').tabs();
							})
						</script>

					</div>
				</div>

			</div>
		</div>

		<div class="footer ">
			<div class="footer-hd ">
				<p>
					<a href="# ">恒望科技</a> <b>|</b> <a href="# ">商城首页</a> <b>|</b> <a
						href="# ">支付宝</a> <b>|</b> <a href="# ">物流</a>
				</p>
			</div>
			<div class="footer-bd ">
				<p>
					<a href="# ">关于恒望</a> <a href="# ">合作伙伴</a> <a href="# ">联系我们</a> <a
						href="# ">网站地图</a> <em><a href="http://www.5imoban.net/"
						target="_blank" title="html静态模板">我爱模板网</a></em>
				</p>
			</div>
		</div>
</body>
</html>