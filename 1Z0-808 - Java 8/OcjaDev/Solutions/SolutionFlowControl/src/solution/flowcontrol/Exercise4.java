package solution.flowcontrol;

public class Exercise4 {

	public static void main(String[] args) {

		// Loop through all the rows.
		for (int r = 1; r <= 10; r++) {

			// Print a row of stars before each row in the table.
			for (int i = 0; i < 62; i ++) {
				System.out.print("*");
			}
			System.out.println();

			// Loop through all the columns for the current row.
			for (int c = 1; c <= 10; c++) {

				// Calculate the number to print.
				int num = r * c;

				// Print a * followed by the appropriate amount of leading spaces (to align numbers nicely).
				System.out.print("* ");
				for (int tempNum = num; tempNum < 100; tempNum *= 10) {
					System.out.print(" ");
				}

				// Print the number followed by a trailing space.
				System.out.print(num + " ");
				
			}
			
			// At the end of each row, print a trailing * and then a line-feed.
			System.out.println(" *");
		}

		// Print a row of stars after the final row in the table.
		for (int i = 0; i < 62; i ++) {
			System.out.print("*");
		}
}
}

