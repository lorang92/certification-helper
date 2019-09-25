package solution.usingclasses;

import java.util.Scanner;

public class FunWithMath {

	private static Scanner scanner = new Scanner(System.in); 

	public static void main(String[] args) {

		double angleInDegrees = getDoubleInput("Please enter an angle in degrees: ");
		double angleInRadians = angleInDegrees * 2 * Math.PI / 360;
		
		System.out.printf("Angle (degrees) is %.4f, sin is %.4f, cos is %.4f, tan is %.4f\n\n", 
				           angleInDegrees,
				           Math.sin(angleInRadians),
				           Math.cos(angleInRadians),
				           Math.tan(angleInRadians));
		
		double favouriteNumber = getDoubleInput("Enter your favourite fractional number: ");
		
		System.out.printf("For %.4f, log is %.4f, log10 is %.4f, exp is %.4f\n\n", 
		           favouriteNumber,
		           Math.log(favouriteNumber),
		           Math.log10(favouriteNumber),
		           Math.exp(favouriteNumber));

		System.out.printf("minimum of %.4f and 100 is %.4f\n", favouriteNumber, Math.min(favouriteNumber,  100));
		System.out.printf("maximum of %.4f and 100 is %.4f\n", favouriteNumber, Math.max(favouriteNumber,  100));
		System.out.printf("ceil(%.4f) is %.4f\n", favouriteNumber, Math.ceil(favouriteNumber));
		System.out.printf("floor(%.4f) is %.4f\n", favouriteNumber, Math.floor(favouriteNumber));
		System.out.printf("round(%.4f) is %d\n\n", favouriteNumber, Math.round(favouriteNumber));

		System.out.printf("abs(%.4f) is %.4f\n", favouriteNumber, Math.abs(favouriteNumber));
		System.out.printf("%.4f cubed is %.4f\n", favouriteNumber, Math.pow(favouriteNumber, 3));
		System.out.printf("%.4f square root is %.4f\n\n", favouriteNumber, Math.sqrt(favouriteNumber));
		
		System.out.printf("Here's a random number: %.4f\n", Math.random());
		System.out.printf("Here's another: %.4f\n", Math.random());
		System.out.printf("And one more: %.4f\n", Math.random());
	}


	private static double getDoubleInput(String promptMessage) {
		System.out.print(promptMessage);
		return scanner.nextDouble();
	}
}
