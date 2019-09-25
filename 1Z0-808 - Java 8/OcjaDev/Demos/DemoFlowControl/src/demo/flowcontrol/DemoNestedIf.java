package demo.flowcontrol;

public class DemoNestedIf {

	public static void main(String[] args) {

		int age = 45;
		String gender = "Male";
		System.out.print("You are a ");

		if (age < 18) {

			if (gender.equals("Male")) {
				System.out.println("boy");
			} else {
				System.out.println("girl");
			}

		} else {

			if (age >= 100) {
				System.out.print("centurion ");
			}

			if (gender.equals("Male")) {
				System.out.println("man");
			} else {
				System.out.println("woman");
			}
		}
	}
}
