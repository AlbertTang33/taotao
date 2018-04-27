<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>地址展示</title>
<link href="css/test1.css" rel="stylesheet" type="text/css">
<script type="text/javascript" src="js/jquery-3.1.1.min.js" ></script>
<script type="text/javascript" src="js/json2.js"></script>
<!-- <script type="text/javascript" src="js/common.js"></script> -->
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
				background="images/m_table_top.jpg" colspan="6"><strong>&nbsp;地址信息>所有地址 </strong></td>
		</tr>
		
		<tr>
			<td colspan="4" align="center">
				<button class="common_button" onClick="help('');">帮助</button>&nbsp;&nbsp;
				
				<a href="updateaddress?cmd=show">返回</a>
			</td>
		</tr>
	</table>

	<br />
    <table id="tb1" class="data_list_table" cellSpacing=1 cellPadding=1
		style="text-align: center;">
		  
		<tr>
			<th>地址ID</th>
			<th>用户ID</th>
			<th>收货人名字</th>
			<th>收货人电话</th>
			<th>省/自治区/直辖市</th>
			<th>市/区</th>
			<th>区/县</th>
			<th>门牌号</th>
			<th>邮编</th>
			<th>操作</th>
		</tr>
		
		<c:forEach var="address" items="${requestScope.list}">
			<tr>
				<td>${address.getAddress_id() }</td>
				<td>${address.getUser_id() }</td>
				<td>${address.getConsignee() }</td>
				<td>${address.getPhone() }</td>
				<td>${address.getProvince() }</td>
				<td>${address.getCity() }</td>
				<td>${address.getDistrict() }</td>
				<td>${address.getHousenumber() }</td>
				<td>${address.getZipcode() }</td>
				<td class="list_data_op">
				    <a href="updateaddress?cmd=showone&address_id=${address.getAddress_id() }"><img title="编辑" src="images/bt_edit.gif" class="op_button" /></a>
				    <img onClick="del('“${stu.getStu_name()}”');" id="${stu.getStu_no() }" title="删除" src="images/bt_del.gif" class="op_button" />
				</td>
			</tr>
		</c:forEach>
		
	</table>
	<div align="center" id="div">
		<!-- <input type="button" style="width: 200px; height: 30px;" /> -->
		<button style="width: 100px; height: 30px;"><a href="addaddress.jsp">添加地址</a></button>
	</div>
</body>
</html>