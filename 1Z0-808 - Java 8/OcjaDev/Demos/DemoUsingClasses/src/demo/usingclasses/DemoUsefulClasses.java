package demo.usingclasses;

import java.util.Scanner;

public class DemoUsefulClasses {

	public static void main(String[] args) {
		demoScanner();
		demoMath();
		demoString();
		demoStringBuilder();
		demoStringBuffer();
	}

	
	public static void demoScanner() {

		@SuppressWarnings("resource")
		Scanner scanner = new Scanner(System.in);

		System.out.print("\nEnter a String: ");
		String s = scanner.next();

		System.out.print("Enter an int: ");
		int i = scanner.nextInt();

		System.out.print("Enter a double: ");
		double d = scanner.nextDouble();

		System.out.println("Your string was " + s);
		System.out.println("Your integer was " + i);
		System.out.println("Your double was " + d);
	}

	
	public static void demoMath() {

		double angle = Math.PI / 4;
		System.out.println("Sin: " + Math.sin(angle));
		System.out.println("Cos: " + Math.cos(angle));
		System.out.println("Tan: " + Math.tan(angle));
		System.out.println("In degrees: " + Math.toDegrees(angle));

		double radius = 10.0;
		System.out.println("Circle area: " + Math.PI * radius * radius);

		double num = -10.5;
		System.out.println("Absolute value: " + Math.abs(num));
		System.out.println("Max of num,20:  " + Math.max(num, 20));
		System.out.println("Min of num,20:  " + Math.min(num, 20));
		System.out.println("Ceiling value:  " + Math.ceil(num));
		System.out.println("Floor value:    " + Math.floor(num));
		System.out.println("Rounded value:  " + Math.round(num));

		System.out.println("Random number: " + Math.random());
	}

	
	public static void demoString() {

		@SuppressWarnings("resource")
		Scanner scanner = new Scanner(System.in);

		System.out.print("\nFirst name? ");
		String firstName = scanner.nextLine();

		System.out.print("Last name? ");
		String lastName = scanner.nextLine();

		String fullName = firstName + " " + lastName;
		String fullNameLC = fullName.toLowerCase();

		System.out.println(fullNameLC);
	}

	
	public static void demoStringBuilder() {

		StringBuilder sb1 = new StringBuilder("Hello");

		sb1.append(" world");
		sb1.append('!');

		sb1.insert(5, " Andy and the rest of the");
		sb1.insert(10, 43);

		String str1 = sb1.toString();
		System.out.println(str1);

		StringBuilder sb2 = sb1;
		sb2.replace(6, 9, "Fred");
		sb2.reverse();

		String str2 = sb2.toString();
		System.out.println(str2);
	}

	public static void demoStringBuffer() {

		StringBuffer sb1 = new StringBuffer("Hello");

		sb1.append(" world");
		sb1.append('!');

		sb1.insert(5, " Andy and the rest of the");
		sb1.insert(10, 43);

		String str1 = sb1.toString();
		System.out.println(str1);

		StringBuffer sb2 = sb1;
		sb2.replace(6, 9, "Fred");
		sb2.reverse();

		String str2 = sb2.toString();
		System.out.println(str2);
	}
}
