package solution.initialization;

public class UseEmployee {

	public static void main(String[] args) {

		Employee emp1 = new Employee("Chris Smith", 20000);
		System.out.println("Details for emp1: " + emp1);

		Employee emp2 = new Employee("Susan Evans");
		System.out.println("Details for emp2: " + emp2);

		emp2.setName("Susan Williams");
		emp2.payRaise(500);
		System.out.println("Updated details for emp2: " + emp2);
	}
}
