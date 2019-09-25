package solution.flowcontrol;

public class Exercise1 {

	public static void main(String[] args) {

		int num = 6;
		int result = 1;
		
		System.out.println("Calculating the factorial of " + num);
		while (num >= 1) {
			result *= num;
			num--;
		}
		
		System.out.println("The result is " + result);
	}
}
