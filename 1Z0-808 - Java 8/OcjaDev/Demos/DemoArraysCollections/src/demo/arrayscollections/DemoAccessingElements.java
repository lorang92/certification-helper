package demo.arrayscollections;

import java.io.File;

public class DemoAccessingElements {

	public static void main(String[] args) {

		final int[] DAYS_IN_MONTH = {0, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31};
		
		File[] logFiles = { 
				  new File("C:\\errors.log"),
				  new File("C:\\access.log"),
				  new File("C:\\audit.log")
				};
		
		System.out.println("Days in February: " + DAYS_IN_MONTH[2]);
		
		logFiles[0] = new File("C:\\fatalErrors.log");
		System.out.println("logFile[0]: " + logFiles[0].getAbsolutePath());
	}
}
