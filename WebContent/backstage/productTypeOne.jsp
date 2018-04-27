<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"  %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>商品类别更新</title>
<link href="css/test1.css" rel="stylesheet" type="text/css">
<script type="text/javascript" src="js/jquery-3.1.1.min.js" ></script>
<script type="text/javascript" src="js/updateproduct.js"></script>
</head>
<body>
   <table width="100%" cellSpacing=0 cellPadding=0 border="0px">
		<tr>
			<td class="page_title">商品类别管理</td>
			<td class="page_title_middle">&nbsp;</td>
			<td width=3><IMG height=32 src="images/m_mpr.gif" width=3></td>
		</tr>
	</table>
	
	<table class="query_form_table" cellSpacing=1 cellPadding=1>
		<tr>
			<td width=100% height=30 align=left
				background="images/m_table_top.jpg" colspan="6"><strong>&nbsp;类别信息>一级类别 </strong></td>
		</tr>
		
		<tr>
			<td colspan="4" align="center">
				<!-- <button class="common_button" onClick="help('');">帮助</button>&nbsp;&nbsp; -->
				<a href="productType?cmd=showOne">上一级</a>
				&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
				<a href="productType?cmd=showTwo">下一级</a>
			</td>
		</tr>
	</table>

	<br />
	<table id="tb1" class="data_list_table" cellSpacing=1 cellPadding=1
		style="text-align: center;">
		  
		<tr>
			<th>一级商品ID(不可修改)</th>
			<th>一级商品名称(单击可修改)</th>
			<th>操作</th>
		</tr>
		
		<c:forEach var="firstclass" items="${requestScope.fcl}">
			<tr>
				<td>${firstclass.getId() }</td>
				<td onclick="updatefirst('${firstclass.getId() }')">${firstclass.getType() }</td>
				<td class="list_data_op">
				    <%-- <a href="productType?cmd=updateOne&fc_id=${firstclass.getId() }"><img title="编辑" src="images/bt_edit.gif" class="op_button" /></a> --%>
				    <a href="javascrpt:void(0)"><img title="编辑" src="images/bt_edit.gif" class="op_button" /></a>
				    <!-- <img onClick="del('“${stu.getStu_name()}”');" id="${stu.getStu_no() }" title="删除" src="images/bt_del.gif" class="op_button" />  -->
				</td>
			</tr>
		</c:forEach>
		
	</table>
	<div align="center" id="div">
		
	</div>
</body>
  
</html>