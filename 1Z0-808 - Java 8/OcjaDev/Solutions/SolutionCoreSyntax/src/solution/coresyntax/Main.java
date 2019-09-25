package solution.coresyntax;

import java.util.Scanner;

public class Main {

	public static void main(String[] args) {

		String cityName = "Swansea";
		long population = 225000;
		double longitude = 4.5;
		double latitude = 51.9;

		double avgAnnualRainfall = 12345; // It rains a lot in Swansea!
		double avgAnnualSunHours = 1000;  // Not so sunny either!

		System.out.println("General info for " + cityName);
		System.out.println("-----------------------------------------------");
		System.out.println(
				"Population " + population 
				+ "\nLongitude " + longitude 
				+ "\nLatitute " + latitude
				+ "\nAverage annual rainfall " + avgAnnualRainfall
				+ "\nAverage annual hours of sunshine " + avgAnnualSunHours);

		double males = population / 2;
		double minutesLaterThanLondon = 60 * (longitude / 15); // 15 degrees = 1 hour on the international clock.
		double degreesFromPole = 90 - latitude;

		long currentPopulation = population++;
		long populationAfter1Birth = population;
		long populationAfter2Births = ++population;

		double avgMonthlyRainfall = avgAnnualRainfall / 12;
		double avgDailySunHours = avgAnnualSunHours / 365;

		System.out.println("\nDetails for " + cityName);
		System.out.println("-----------------------------------------------");
		System.out.println(
				"Statistical male count " + males
				+ "\nMinutes later than London " + minutesLaterThanLondon
				+ "\nDegrees from Pole " + degreesFromPole
				+ "\nCurrent population " + currentPopulation
				+ "\nPopulation after 1 birth " + populationAfter1Birth
				+ "\nPopulation after 2 births " + populationAfter2Births
				+ "\nAverage monthly rainfall " + avgMonthlyRainfall 
				+ "\nAverage daily hours of sunshine " + avgDailySunHours);

		
		// Optional part.
		Scanner s = new Scanner(System.in);
		final double PI = 3.1415;

		System.out.print("Please enter the radius of a circle: ");
		double radius = s.nextDouble();
		
		double area = PI * radius * radius;
		double circumference = 2 * PI * radius;
		
		System.out.println("Area of circle: " + area);
		System.out.println("Circumference:  " + circumference);
		
		s.close();
	}
}
