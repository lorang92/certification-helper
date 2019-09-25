package demo.flowcontrol;

import java.util.Scanner;

public class DemoWhile {

	public static void main(String[] args) {

		// Display 1 – 5.
		int i = 1;
		while (i <= 5) {
			System.out.printf("%d ", i);
			i++;
		}
		System.out.println();
		
		// Display the first 5 odd numbers.
		i = 1;
		int oddNumber = 1;
		while (i <= 5) {
			System.out.printf("%d ", oddNumber);
			i++;
			oddNumber += 2;
		}
		System.out.println();

		// Read 5 strings from the console, and output in uppercase.
		Scanner scanner = new Scanner(System.in);
		i = 1;
		String str;
		while (i <= 5) {
			System.out.printf("Enter string %d: ", i);
			str = scanner.next().toUpperCase();
			System.out.printf("In uppercase... %s\n", str);
			i++;
		}
		System.out.println();
		scanner.close();
	}
}
