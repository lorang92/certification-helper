package demo.flowcontrol;

public class DemoUnconditionalJumps {

	public static void main(String[] args) {

		// Display some numbers that are not multiples of 3, until we get to a number that has ten factors (or we get to 100).
		outerScope:
		for (int num = 1; num <= 100; num++) {
			
			// Stop if the number has ten factors;
			for (int i = 1, factorCount = 0; i <= num; i++) {
				if (num % i == 0) {
					factorCount++;
					if (factorCount == 10) {
						System.out.printf("%d has ten factors, so we'll stop now\n", i);
						break outerScope;
					}
				}
			}
			
			// Skip the number if it is a multiple of 3.
			if (num % 3 == 0) {
				continue;
			}
			System.out.printf("%d\n", num);
		}
		System.out.println();

	}

}
