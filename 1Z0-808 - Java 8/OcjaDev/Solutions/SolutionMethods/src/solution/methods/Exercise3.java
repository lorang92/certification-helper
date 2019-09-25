package solution.methods;

import java.util.Scanner;

public class Exercise3 {

	public static void main(String[] args) {

		// Create a Scanner object, to read input from the keyboard (i.e. System.in).
		Scanner scanner = new Scanner(System.in);
		
		// Ask the user to enter a year.
		int year = promptUserForNumber("Please enter a year between 0 and 2099 inclusive: ", scanner, 0, 2099);

		// Ask the user to enter a month.
		int month = promptUserForNumber("Please enter a month between 1 and 12 inclusive: ", scanner, 1, 12);

		boolean isLeapYear = calcIsLeapYear(year);
		int daysInMonth = calcDaysInMonth(month, isLeapYear);
        String monthName = calcMonthName(month);

		// Ask the user to enter a day.
		int day = promptUserForNumber("Please enter a day between 1 and " + daysInMonth + " inclusive: ", scanner, 1, daysInMonth);

		// Output info.
		System.out.println("\nThe specified date is " + day + "/" + month + "/" + year);
		
		System.out.println("\nHere are all the dates (in full format) in " + month + "/" + year);
        for (int d = 1; d <= daysInMonth; d++) {
			System.out.println("  " + d + calcSuffix(d) + " " + monthName + " " + year);
        }
	}
	
	
	private static int promptUserForNumber(String promptMessage, Scanner scanner, int min, int max) {
		
		int num = 0;
		do {
			System.out.print(promptMessage);
			num = scanner.nextInt();
		}
		while (num < min || num > max);
		return num;
	}
	
	
	private static boolean calcIsLeapYear(int year) {
		return ((year % 4 == 0) && !(year % 100 == 0)) || 
                (year % 400 == 0);
	}
	
	
	private static int calcDaysInMonth(int month, boolean isLeapYear) {
		
		int daysInMonth;
		switch (month) {
			case 2:	
				if (isLeapYear) 
					daysInMonth = 29;
				else
					daysInMonth = 28;
				break;
				
			case 4:
			case 6:
			case 9:
			case 11:
				daysInMonth = 30;
				break;
				
			default:
				daysInMonth = 31;
				break;
		}
		return daysInMonth;
	}
	
	
	private static String calcMonthName(int month) {

		String monthName;
		switch (month) {
			case 1:  monthName = "January"; 	break;
			case 2:  monthName = "February"; 	break;
			case 3:  monthName = "March"; 		break;
			case 4:  monthName = "April"; 		break;
			case 5:  monthName = "May"; 		break;
			case 6:  monthName = "June"; 		break;
			case 7:  monthName = "July"; 		break;
			case 8:  monthName = "August"; 		break;
			case 9:  monthName = "September"; 	break;
			case 10: monthName = "October"; 	break;
			case 11: monthName = "November"; 	break;
			case 12: monthName = "December"; 	break;
			default: monthName = "Not Known";	break;	// Should never happen
		}
		return monthName;
	}
	
	
	private static String calcSuffix(int day) {
		
    	String suffix;
		switch (day) {
			case 1:  
			case 21:
			case 31:
				suffix = "st";
				break;
					
			case 2:  
			case 22:
				suffix = "nd";
				break;
	
			case 3:  
			case 23:
				suffix = "rd";
				break;
					
			default:
				suffix = "th";
				break;
		}
		return suffix;
	}
}