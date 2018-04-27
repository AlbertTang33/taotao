
<%@page import="java.util.List"%>
<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"  %>
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>异步刷新分页+存储过程</title>
<link href="css/test1.css" rel="stylesheet" type="text/css">
<script type="text/javascript" src="js/jquery-3.1.1.min.js" ></script>
<script type="text/javascript" src="js/json2.js"></script>
<script type="text/javascript" src="js/common.js"></script>
<script type="text/javascript" src="js/fenye.js"></script>
</head>
<body>
   <table width="100%" cellSpacing=0 cellPadding=0 border="0px">
		<tr>
			<td class="page_title">用户信息管理</td>
			<td class="page_title_middle">&nbsp;</td>
			<td width=3><IMG height=32 src="images/m_mpr.gif" width=3></td>
		</tr>
	</table>
	<table class="query_form_table" cellSpacing=1 cellPadding=1>
		<tr>
			<td width=100% height=30 align=left
				background="images/m_table_top.jpg" colspan="6"><strong>&nbsp;用户信息>所有用户 </strong></td>
		</tr>
		
		<tr>
			<td colspan="4" align="center">
				<button class="common_button" onClick="help('');">帮助</button>&nbsp;&nbsp;
				
				<a href="usermanage.jsp">返回</a>
			</td>
		</tr>
	</table>

	<br />
	<table id="tb1" class="data_list_table" cellSpacing=1 cellPadding=1
		style="text-align: center;">
		
	</table>
	<div align="center" id="div">
		
	</div>
</body>
  
</html>