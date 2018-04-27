<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"  %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>添加商品</title>
<link href="css/test1.css" rel="stylesheet" type="text/css">
<script type="text/javascript" src="js/updateuser.js"></script>
</head>
<body>
   <table width="100%" cellSpacing=0 cellPadding=0 border="0px">
		<tr>
			<td class="page_title">商品信息管理</td>
			<td class="page_title_middle">&nbsp;</td>
			<td width=3><IMG height=32 src="images/m_mpr.gif" width=3></td>
		</tr>
	</table>
	
	<table class="query_form_table" cellSpacing=1 cellPadding=1>
		<tr>
			<td width=100% height=30 align=left
				background="images/m_table_top.jpg" colspan="6"><strong>&nbsp;商品信息>所有商品>添加商品 </strong></td>
		</tr>
		
		<tr>
			<td colspan="4" align="center">
				<button class="common_button" onClick="help('');">帮助</button>&nbsp;&nbsp;
				
				<a href="productType?cmd=showThree">返回</a>
			</td>
		</tr>
	</table>

	<br />
	<form action="updateUser?cmd=update&user_id=${user.user_id }" method="post">
	<table id="tb1" class="data_list_table" cellSpacing=1 cellPadding=1
		style="text-align: center;">
		<tr>
		    <td>用户ID(不可修改)</td>
		    <td><input readonly value="${user.user_id }" name="user_id"/></td>
		</tr>
		<tr>
		    <td>用户类型(不可修改)</td>
		    <td><input readonly value="${user.user_type }" name="user_type"/></td>
		</tr>
		<tr>
		    <td colspan="2"></td>
		</tr>
		<tr>
		    <td>用户名</td>
		    <td><input type="text" placeholder="请输入用户名" name="user_name"/></td>
		</tr>
		<tr>
		    <td>用户昵称</td>
		    <td><input type="text" placeholder="请输入昵称" name="nick_name"/></td>
		</tr>
		<tr>
		    <td>密码</td>
		    <td><input type="password" placeholder="请输入密码" name="user_pwd"/></td>
		</tr>
		<tr>
		    <td>确认密码</td>
		    <td><input type="password" placeholder="请再次输入密码" name="user_pwd_re"/></td>
		</tr>
		<tr>
		    <td colspan="2"></td>
		</tr>
		<tr>
		    <td>性别</td>
		    <td><input type="text" placeholder="请输入性别（男或女）" name="sex"/></td>
		</tr>
		<tr>
		    <td>邮箱</td>
		    <td><input type="text" placeholder="请输入邮箱" name="email"/></td>
		</tr>
		<tr>
		    <td>电话</td>
		    <td><input type="text" placeholder="请输入电话" name="phone"/></td>
		</tr>
		<tr>
		    <td colspan="2"></td>
		</tr>
		<tr>
		    <td>身份证号</td>
		    <td><input placeholder="请输入身份证号" name="id_card"/></td>
		</tr>
		<tr>
		    <td>生日</td>
		    <td><input type="date" name="birthday"/></td>
		</tr>
		<tr>
		    <td>积分</td>
		    <td><input disabled="disabled" placeholder="${user.bonus_points }" /></td>
		</tr>
		<tr>
		    <td colspan="2"></td>
		</tr>
		<tr>
		    <td>评论路径</td>
		    <td><input disabled="disabled" placeholder="${user.commentpath }" /></td>
		</tr>
		<tr>
		    <td>其他(保留字段)</td>
		    <td><input type="text" placeholder="其他" name="user_remark"/></td>
		</tr>
		<tr>
		    <td>操作</td>
		    <td><input type="submit" value="添加"/></td>
		</tr>
	</table>
	</form>
	<div align="center" id="div">
		
	</div>
</body>
  
</html>