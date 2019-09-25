package demo.arrayscollections;

public class DemoArrayTraversal2 {

	public static void main(String[] args) {
		
		final String[] DAYS_OF_WEEK = {"Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"};
	
		System.out.println("\nDays of week, using an enhanced for loop.");
		for (String dayOfWeek : DAYS_OF_WEEK) {
			System.out.println("Here's a day: " + dayOfWeek);
		}
	}
}
