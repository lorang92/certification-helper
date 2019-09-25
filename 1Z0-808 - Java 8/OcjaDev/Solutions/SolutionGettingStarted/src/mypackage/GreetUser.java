package mypackage;

import java.util.Scanner;

public class GreetUser {

	public static void main(String[] args) {

		System.out.println("Greetings dear user!");
		
		Scanner s = new Scanner(System.in);

		System.out.print("What is your name? ");
		String name = s.nextLine();
		System.out.println("Hello, " + name);	
		
		s.close();
	}
}
