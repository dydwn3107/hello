package jdbc;

import java.io.IOException;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

@WebServlet("/updateMemberServlet")
public class UpdateMemberServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;

	public UpdateMemberServlet() {
		super();

	}

	protected void doGet(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {

		response.getWriter().append("Served at: ").append(request.getContextPath());
	}

	protected void doPost(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		
		request.setCharacterEncoding("utf-8");
		response.setContentType("text/json;charset=utf-8");
		
		String id = request.getParameter("mid");
		String nm = request.getParameter("mnm");
		String pw = request.getParameter("mpw");
		System.out.println(id);
		System.out.println(nm);
		System.out.println(pw);
		Member mem = new Member();
		mem.setMemberId(id);
		mem.setMemberName(nm);
		mem.setMemberPw(pw);
		
		MemberManage dao = MemberManage.getInstance();
		// 정상처리되면 retCode
		if (dao.updateMember(mem)) {
			String json = "{\"retCode\": \"success\", \"memberId\": \""+id+"\", \"memberPw\": "+pw+", \"memberName\": \""+nm+"\"}";
			response.getWriter().print(json);
		} else {
			String json = "{\"retCode\": \"fail\"}";
			response.getWriter().print(json);
		}
	}

}
