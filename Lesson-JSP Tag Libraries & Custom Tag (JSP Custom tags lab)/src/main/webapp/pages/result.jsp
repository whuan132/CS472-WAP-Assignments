<%@ taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core" %>
<%@ page contentType="text/html;charset=UTF-8" language="java" %>
<%@ taglib prefix="ct" uri="http://example.com/tags" %>
<html>
<head>
    <title>Beer Recommendations</title>
</head>
<body>
<h2>Beer Recommendations</h2>
<div>
    <!-- Retrieve and display beer styles from the request attribute -->
    <c:forEach var="style" items="${styles}">
        <br>try: ${style}
    </c:forEach>
    <br>
</div>
<div>
    <ct:currentDateTime color="red" size="12px" /><br><br>
</div>
<div>
    <a href="pages/selectBeer.jsp">Back to selection</a>
</div>
</body>
</html>
