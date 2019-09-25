package student.methods;

public class DateProcessing {

	public static void main(String[] args) {

		// Declare variables for a hard-coded day, month, and year.
		int day = 3, month = 12, year = 2017;

		boolean isLeapYearFlag = ((year % 4 == 0) && !(year % 100 == 0)) || 
				                  (year % 400 == 0);

		int daysInMonth;
		switch (month) {
			case 2:	
				if (isLeapYearFlag) 
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

		System.out.println("\nThe specified date is " + day + "/" + month + "/" + year);
		
		System.out.println("\nHere are all the dates (in full format) in " + month + "/" + year);
        for (int d = 1; d <= daysInMonth; d++) {

        	String suffix;
			switch (d) {
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

			System.out.println("  " + d + suffix + " " + monthName + " " + year);
        }
	}
}