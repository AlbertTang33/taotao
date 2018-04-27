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
			<td class="page_title">商品信息管理</td>
			<td class="page_title_middle">&nbsp;</td>
			<td width=3><IMG height=32 src="images/m_mpr.gif" width=3></td>
		</tr>
	</table>
	
	<table class="query_form_table" cellSpacing=1 cellPadding=1>
		<tr>
			<td width=100% height=30 align=left
				background="images/m_table_top.jpg" colspan="6"><strong>&nbsp;商品信息>所有商品>更改商品</strong></td>
		</tr>
		
		<tr>
			<td colspan="4" align="center">
				<!-- <button class="common_button" onClick="help('');">帮助</button>&nbsp;&nbsp; -->
				<a href="#">帮助</a>
				&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
				<a href="productType?cmd=showThree">返回</a>
			</td>
		</tr>
	</table>

	<br />
	<form action="productType?cmd=updateProduct" method="post">
	<table id="tb1" class="data_list_table" cellSpacing=1 cellPadding=1
		style="text-align: center;">
		<tr>
		    <td>商品ID(不可修改)</td>
		    <td><input readonly value="${product.id }" name="product_id"/></td>
		</tr>
		<tr>
		    <td>商品名称</td>
		    <td><input type="text" placeholder="${product.name }" name="product_name"/></td>
		</tr>
		<tr>
		    <td colspan="2"></td>
		</tr>
		<tr>
		    <td>折扣</td>
		    <td><input type="text" placeholder="${product.discount }" name="discount"/></td>
		</tr>
		<tr>
		    <td>上线时间</td>
		    <td><input type="date"  name="publishtime"/></td>
		</tr>
		<tr>
		    <td>是否上架(请输入1为上架,0为下架)</td>
		    <td><input type="text" placeholder="${product.forsale }" name="forsale"/></td>
		</tr>
		<tr>
		    <td>销售量(不可修改)</td>
		    <td><input readonly value="${product.sales }" name="sales"/></td>
		</tr>
		<tr>
		    <td colspan="2"></td>
		</tr>
		<tr>
		    <td>库存量</td>
		    <td><input type="text" placeholder="${product.count }" name="count"/></td>
		</tr>
		<tr>
		    <td>所属二级商品ID</td>
		    <td><input type="text" placeholder="${product.sc_id }" name="sc_id"/></td>
		</tr>
		<tr>
		    <td>商品属性ID</td>
		    <td><input type="text" placeholder="${product.att_id }" name="att_id"/></td>
		</tr>
		<tr>
		    <td colspan="2"></td>
		</tr>
		<tr>
		    <td>浏览次数(不可修改)</td>
		    <td><input readonly value="${product.visits }" name="visits"/></td>
		</tr>
		<tr>
		    <td>预留字段</td>
		    <td><input type="text" placeholder="${product.remark }" name="remark"/></td>
		</tr>
		
		<tr>
		    <td>操作</td>
		    <td><input type="submit" value="提交"/></td>
		</tr>
	</table>
	</form>
	<div align="center" id="div">
		
	</div>
</body>
  
</html>