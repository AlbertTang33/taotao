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
				background="images/m_table_top.jpg" colspan="6"><strong>&nbsp;商品信息>所有商品 </strong></td>
		</tr>
		
		<tr>
			<td colspan="4" align="center">
				<!-- <button class="common_button" onClick="help('');">帮助</button>&nbsp;&nbsp; -->
				<a href="#">上一页</a>
				&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
				<a href="#">下一页</a>
			</td>
		</tr>
	</table>

	<br />
	<table id="tb1" class="data_list_table" cellSpacing=1 cellPadding=1
		style="text-align: center;">
		  
		<tr>
			<th>商品ID</th>
			<th>商品名称</th>
			<th>商品折扣</th>
			<th width="200px">上线时间</th>
			<th width="200px">在售状态</th>
			<th>库存量</th>
			<th>销售量</th>
			<th>所属二级商品ID</th>
			<th>商品属性ID</th>
			<th>商品浏览次数</th>
			<!-- <th>预留字段</th> -->
			<th>操作</th>
		</tr>
		
		<c:forEach var="product" items="${requestScope.pl}">
			<tr>
				<td>${product.getId() }</td>
				<td>${product.getName() }</td>
				<td>${product.getDiscount() }</td>
				<td width="200px">${product.getPublishtime() }</td>
				
				<c:choose>
					<c:when test="${product.getForsale() == 0 }">
						<td width="200px">下架状态<button onclick="shangjia('${product.getId() }')">点击上架</button></td>
					</c:when>
					<c:otherwise>
						<td width="200px">上架状态<button onclick="xiajia('${product.getId() }')">点击下架</button></td>
					</c:otherwise>
				</c:choose>
				<td>${product.getSales() }</td>
				<td>${product.getCount() }</td>
				<td>${product.getSc_id() }</td>
				<td>${product.getAtt_id() }</td>
				<td>${product.getVisits() }</td>
				<%-- <td>${product.getRemark() }</td> --%>
				<td class="list_data_op">
				    <%-- <a href="productType?cmd=updateOne&fc_id=${firstclass.getId() }"><img title="编辑" src="images/bt_edit.gif" class="op_button" /></a> --%>
				    <a href="productType?cmd=showProduct&product_id=${product.getId() }"><img title="编辑" src="images/bt_edit.gif" class="op_button" /></a>
				    <img onClick="del('“${stu.getStu_name()}”');" id="${stu.getStu_no() }" title="删除" src="images/bt_del.gif" class="op_button" />
				</td>
			</tr>
		</c:forEach>
		
	</table>
	<div align="center" id="div">
		<!-- <input type="button" style="width: 200px; height: 30px;" /> -->
		<button style="width: 100px; height: 30px;"><a href="addproduct.jsp">添加商品</a></button>
	</div>
</body>
  
</html>