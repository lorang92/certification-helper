package demo.flowcontrol;

import java.util.Scanner;

public class DemoDoWhile {

	public static void main(String[] args) {
		
		String input;
		String ucInput;

		Scanner scanner = new Scanner(System.in);
		do {
			System.out.print("Enter a Norwegian city: ");
			input = scanner.next();
			ucInput = input.toUpperCase();
			
		} while (!(ucInput.equals("OSLO") || ucInput.equals("BERGEN") || ucInput.equals("TRONDHEIM")));
		
		System.out.printf("Thanks, you entered %s\n", input);
		
		scanner.close();

	}
}
