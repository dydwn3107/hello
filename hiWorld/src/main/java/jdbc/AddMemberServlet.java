package jdbc;

import java.io.IOException;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

@WebServlet("/addMemberServlet")
public class AddMemberServlet extends HttpServlet {
	private static final long serialVersionUID = 1L;

	public AddMemberServlet() {
		super();

	}

	protected void doGet(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		
	}
	protected void doPost(HttpServletRequest request, HttpServletResponse response)
			throws ServletException, IOException {
		// 요청정보 param.
		request.setCharacterEncoding("utf-8");
		response.setContentType("text/json;charset=utf-8");
		
		String id = request.getParameter("mid");
		String pw = request.getParameter("mpw");
		String nm = request.getParameter("mnm");
		
		Member member = new Member(); //member 클래스에 항목들 담아서 매개값으로 넘겨줌
		member.setMemberId(id);
		member.setMemberPw(pw);
		member.setMemberName(nm);
		
		MemberManage dao = MemberManage.getInstance();
		int addCnt = dao.registCustomer(member);
		
		// 처리결과를 ajax 호출한 페이지로 반환
		if(addCnt == 1) { //정상처리되면 1값 return
			// {"retCode": "success", "memberId": "user1", "memberPw": 1234, "mamberName": "사용자"}
			String json = "{\"retCode\": \"success\", \"memberId\": \" "+id+"\", \"memberPw\": "+pw+", \"memberName\": \""+nm+"\"}";
			response.getWriter().print(json);
		} else { //실패
			String json = "{\"retCode\": \"fail\"}";
			response.getWriter().print(json);
		}
	}

}
