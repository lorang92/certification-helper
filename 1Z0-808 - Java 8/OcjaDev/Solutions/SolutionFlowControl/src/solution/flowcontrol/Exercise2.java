package solution.flowcontrol;

public class Exercise2 {

	public static void main(String[] args) {

		// Simple implementation...
		for (int num = 1; num < 1000; num++) {
			
			boolean isPrime = true;
			for (int f = 2; f < num; f++) {
				if (num % f == 0) {
					isPrime = false;
					break;
				}
			}
			
			if (isPrime) {
				System.out.println(num + " is prime");
			}
			else {
				System.out.println(num + " is not prime");
			}
		}
	}
}