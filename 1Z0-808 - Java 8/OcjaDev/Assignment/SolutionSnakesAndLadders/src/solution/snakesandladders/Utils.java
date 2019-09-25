package solution.snakesandladders;

import java.util.Scanner;

public class Utils {

	private static Scanner scanner = new Scanner(System.in);
	
	public static int getRandomInt(int min, int max) {
		int range = max - min + 1;	// +1 ensures the maxiumum number is possible.
		double randomNumber = Math.random() * range;
		return min + (int)randomNumber;
	}
	
	public static int promptForInt(String prompt, int min, int max) {
		int number;
		do {
			System.out.print(prompt);
			number = scanner.nextInt();
		}
		while (number < min || number > max);
		return number;
	}
	
	public static String promptForString(String prompt) {
		System.out.print(prompt);
		return scanner.next();
	}

	public static boolean promptForYesNo(String prompt) {
		while (true) {
			System.out.print(prompt);
			String input = scanner.next().toLowerCase();
			if (input.equals("yes"))
				return true;
			else if (input.equals("no"))
				return false;
		}
	}
}
