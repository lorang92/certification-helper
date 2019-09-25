package demo.flowcontrol;

public class DemoIf {

	public static void main(String[] args) {

		int age = 25;

		// Basic if-test.
		if (age >= 18) {
			System.out.println("You are 18 or older");
		}

		// if-else test.
		if (age >= 30) {
			System.out.println("You are 30 or older");
		} else {
			System.out.println("You are younger than 30");
		}

		// if-else-if test.
		if (age >= 65) {
			System.out.println("You are 65 or older");
		} else if (age >= 50) {
			System.out.println("You are between 50 and 64");
		} else if (age >= 21) {
			System.out.println("You are between 21 and 49");
		} else {
			System.out.println("You are younger than 21");
		}
	}
}
