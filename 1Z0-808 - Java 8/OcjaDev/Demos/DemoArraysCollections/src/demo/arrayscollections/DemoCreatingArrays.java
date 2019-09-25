package demo.arrayscollections;

import java.util.Scanner;

public class DemoCreatingArrays {

	@SuppressWarnings("unused")
	public static void main(String[] args) {

		// Array of primitives, of well-known size.
		double[] planetMasses = new double[9];
		
		// Array of objects, of well-known size.
		String[] planetNames = new String[9];

		Scanner scanner = new Scanner(System.in);

		// Array of whatever, whose size is determined dynamically at run time.
		System.out.print("How many exams do you want to take? ");
		int numExams = scanner.nextInt();
		int[] examMarks = new int[numExams];
		
		scanner.close();
	}
}
