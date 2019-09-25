package solution.definingclasses;

import java.util.Date;

public class UseEmployee {

	public static void main(String[] args) {
		doTest1();
		doTest2();
	}

	
	private static void doTest1() {
	
		System.out.println("In doTest1()...");

		Employee emp = new Employee();
		
		emp.setName("Chris Smith");
		emp.setSalary(20000);
		emp.setJoined(new Date());

		emp.payRaise(500);
		emp.setName("Chris Jones");

		System.out.println("Employee details: " + emp);
	}


	private static void doTest2() {
		
		System.out.println("\nIn doTest2()...");

		// Create employee, and give a default bonus (1%).
		Employee emp1 = new Employee();
		emp1.setName("Siv");
		emp1.setSalary(9000);		
		emp1.payBonus();
		System.out.println("emp1 details after bonus: " + emp1);

		// Create employee, and give a 10% bonus.
		Employee emp2 = new Employee();		
		emp2.setName("Joe");
		emp2.setSalary(9000);		
		emp2.payBonus(10);
		System.out.println("emp2 details after bonus: " + emp2);

		// Create employee, and give a 10% bonus if salary between 8000 and 20000.
		Employee emp3 = new Employee();		
		emp3.setName("Adi");
		emp3.setSalary(9000);		
		emp3.payBonus(10, 8000, 20000);
		System.out.println("emp3 details after bonus: " + emp3);

		// Create employee, and give a 10% bonus if salary between 10000 and 20000.
		Employee emp4 = new Employee();		
		emp4.setName("Ole");
		emp4.setSalary(9000);		
		emp4.payBonus(10, 10000, 20000);
		System.out.println("emp4 details after bonus: " + emp4);
	}
}
