package solution.usingclasses;

import java.util.Scanner;

public class FunWithStrings {

	private static Scanner scanner = new Scanner(System.in); 

	public static void main(String[] args) {

		String postcode = getStringInput("Please enter your postcode: ");
		String city     = getStringInput("Please enter your city: ");
		String country  = getStringInput("Please enter your country: ");
		
		String address = postcode + ", " + city;
		address += ", " + country;
		
		System.out.println("Your address is " + address);
		System.out.println("Your address length is " + address.length());
		
		if (country.toUpperCase().equals("WALES")) {
			System.out.println("Congratulations, you live in Wales!");
		}
		else {
			System.out.println("Sadly you don't live in Wales. Time to move?");
		}
		
		System.out.println("The first two characters in your postcode are " + postcode.substring(0, 2));
		
		postcode = postcode.replace('A', 'Z');
		System.out.println("If your postcode contained any 'A's, they are now 'Z's: " + postcode);
	}
	
	private static String getStringInput(String promptMessage) {
		System.out.print(promptMessage);
		return scanner.nextLine();
	}
}
