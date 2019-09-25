package demo.arrayscollections;

import java.io.File;

public class DemoArrayInitializers {

	public static void main(String[] args) {

		@SuppressWarnings("unused")
		final int[] DAYS_IN_MONTH = {0, 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31};

		@SuppressWarnings("unused")
		File[] logFiles = { 
				  new File("C:\\errors.log"),
				  new File("C:\\access.log"),
				  new File("C:\\audit.log")
				};
	}
}
