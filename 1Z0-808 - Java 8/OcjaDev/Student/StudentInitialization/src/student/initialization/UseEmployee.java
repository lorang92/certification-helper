package student.initialization;

import java.util.Date;

public class UseEmployee {

	public static void main(String[] args) {

		Employee emp = new Employee();
		
		emp.setName("Chris Smith");
		emp.setSalary(20000);
		emp.setJoined(new Date());

		emp.payRaise(500);
		emp.setName("Chris Jones");

		System.out.println("Employee details: " + emp);
	}
}
