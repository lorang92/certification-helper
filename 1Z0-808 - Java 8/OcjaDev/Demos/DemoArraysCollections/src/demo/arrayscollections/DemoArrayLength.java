package demo.arrayscollections;

import java.util.Scanner;

public class DemoArrayLength {

	public static void main(String[] args) {

		final String[] DAYS_OF_WEEK = { "Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday" };

		Scanner scanner = new Scanner(System.in);

		System.out.print("\nEnter a day number: ");
		int dayNumber = scanner.nextInt();

		if (dayNumber < 0 || dayNumber >= DAYS_OF_WEEK.length) {
			System.out.printf("Day %d is out of range\n", dayNumber);
		} 
		else {
			System.out.printf("Day %d is %s\n", dayNumber, DAYS_OF_WEEK[dayNumber]);
		}
		
		scanner.close();
	}
}
