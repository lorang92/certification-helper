package demo.flowcontrol;

public class DemoFor {

	public static void main(String[] args) {

		// Display the first 5 odd numbers.
		for (int i = 1, oddNumber = 1; i <= 5; i++, oddNumber += 2) {
			System.out.printf("%d ", oddNumber);
		}
		System.out.println();

		// Display 100 – 50, in downward steps of 10.
		for (int i = 100; i >= 50; i -= 10) {
			System.out.printf("%d ", i);
		}
		System.out.println();

		// Loop indefinitely. Uncomment this code to test it.
		/* 
		int i = 0;
		for (;;) {
			System.out.printf("%d\n", i++);
		}
		*/
	}
}
