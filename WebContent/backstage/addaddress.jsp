<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"  %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>添加地址</title>
<link href="css/test1.css" rel="stylesheet" type="text/css">
<script type="text/javascript" src="js/updateuser.js"></script>
</head>
<body>
   <table width="100%" cellSpacing=0 cellPadding=0 border="0px">
		<tr>
			<td class="page_title">用户地址管理</td>
			<td class="page_title_middle">&nbsp;</td>
			<td width=3><IMG height=32 src="images/m_mpr.gif" width=3></td>
		</tr>
	</table>
	
	<table class="query_form_table" cellSpacing=1 cellPadding=1>
		<tr>
			<td width=100% height=30 align=left
				background="images/m_table_top.jpg" colspan="6"><strong>&nbsp;地址信息>所有地址>添加地址 </strong></td>
		</tr>
		
		<tr>
			<td colspan="4" align="center">
				<button class="common_button" onClick="help('');">帮助</button>&nbsp;&nbsp;
				
				<a href="productType?cmd=showThree">返回</a>
			</td>
		</tr>
	</table>

	<br />
	<form action="updateaddress?cmd=addAddress" method="post">
	<table id="tb1" class="data_list_table" cellSpacing=1 cellPadding=1
		style="text-align: center;">
		<tr>
		    <td>用户ID</td>
		    <td><input readonly value="10000001" name="user_id" /></td>
		</tr>
		<tr>
		    <td colspan="2"></td>
		</tr>
		<!-- 地址ID可以不显示，在后台用sequence序列号自动生成 -->
		<tr>
		    <td>地址ID</td>
		    <td><input type="text" placeholder="请输入地址id" name="address_id" /></td>
		</tr>
		<tr>
		    <td colspan="2"></td>
		</tr>
		<tr>
		    <td>收货人姓名</td>
		    <td><input type="text" placeholder="请输入收货人姓名" name="consignee"/></td>
		</tr>
		<tr>
		    <td colspan="2"></td>
		</tr>
		<tr>
		    <td>收货人电话</td>
		    <td><input type="text" placeholder="请输入昵称" name="phone"/></td>
		</tr>
		<tr>
		    <td colspan="2"></td>
		</tr>
		<tr>
		    <td>省/自治区/直辖市</td>
		    <td><input type="text" placeholder="请输入省/自治区/直辖市" name="province"/></td>
		</tr>
		<tr>
		    <td colspan="2"></td>
		</tr>
		<tr>
		    <td>地级市/区/县</td>
		    <td><input type="text" placeholder="请输入地级市/区/县" name="city"/></td>
		</tr>
		<tr>
		    <td colspan="2"></td>
		</tr>
		<tr>
		    <td>区/县/县级市</td>
		    <td><input type="text" placeholder="请输入区/县/县级市" name="district"/></td>
		</tr>
		<tr>
		    <td colspan="2"></td>
		</tr>
		<tr>
		    <td>门牌号</td>
		    <td><input type="text" placeholder="请输入门牌号" name="housenumber"/></td>
		</tr>
		<tr>
		    <td colspan="2"></td>
		</tr>
		<tr>
		    <td>邮政编码</td>
		    <td><input type="text" placeholder="请输入电话" name="zipcode"/></td>
		</tr>
		<tr>
		    <td colspan="2"></td>
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