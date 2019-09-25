package demo.arrayscollections;

public class DemoArrayTraversal1 {

	public static void main(String[] args) {
		
		final String[] DAYS_OF_WEEK = {"Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"};
	
		System.out.println("\nDays of week, using a for loop.");
		for (int i = 0; i < DAYS_OF_WEEK.length; i++) {
			System.out.println("Day " + i + " is " + DAYS_OF_WEEK[i]);
		}
	}
}
