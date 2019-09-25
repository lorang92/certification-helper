package demo.methods;

public class SimpleMethodsDemo {

	public static void main(String[] args) {

		// Call simple methods.
		sayHello();
		sayGoodbye();

		// Call a method that takes parameters.
		repeatMessage("Wales!", 3);

		// Call overloaded methods.
		displayPrice(10.99);
		displayPrice(23, 99);

		// Call a method and assign result to a variable.
		int result = getMin(10, 20);
		System.out.println("The minimum value is " + result);
		
		// Call a method and use result in-situ in an expression.
		System.out.println("The minimum value is " + getMin(10, 20));
	}

	public static void sayHello() {
		System.out.println("Hello");
	}

	public static void sayGoodbye() {
		System.out.println("Goodbye");
	}

	public static void repeatMessage(String message, int count) {
		for (int i = 0; i < count; i++) {
			System.out.println(message);
		}
	}

	public static void displayPrice(double amount) {
		System.out.println("Price $" + amount);
	}

	public static void displayPrice(int dollars, int cents) {
		System.out.println("Price $" + dollars + "." + cents);
	}

	public static int getMin(int num1, int num2) {
		if (num1 < num2)
			return num1;
		else
			return num2;
	}
}
