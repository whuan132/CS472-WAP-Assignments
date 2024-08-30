import org.json.JSONObject;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.io.PrintWriter;

@WebServlet("/calculate")
public class CalculateServlet extends HttpServlet {
    protected void doPost(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        response.setContentType("application/json");
        PrintWriter out = response.getWriter();

        String add1 = request.getParameter("add1");
        String add2 = request.getParameter("add2");
        String mult1 = request.getParameter("mult1");
        String mult2 = request.getParameter("mult2");

        JSONObject result = new JSONObject();

        try {
            if (!add1.isEmpty() && !add2.isEmpty()) {
                int sum = Integer.parseInt(add1) + Integer.parseInt(add2);
                result.put("sum", sum);
            }

            if (!mult1.isEmpty() && !mult2.isEmpty()) {
                int product = Integer.parseInt(mult1) * Integer.parseInt(mult2);
                result.put("product", product);
            }
        } catch (NumberFormatException e) {
            result.put("error", "Please enter valid numbers.");
        }

        out.print(result.toString());
    }
}
