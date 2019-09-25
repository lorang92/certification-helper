package demo.flowcontrol;

public class DemoSwitch {

	public static void main(String[] args) {

		// Let's say the first day of the week (i.e. day 1) is Monday.
		int dayOfWeek = 6; // Saturday

		// Determine what time a shop closes, depending of day of week.
		int shopClosingTime;
		
		switch (dayOfWeek) {

		case 4:
			shopClosingTime = 20; // Shop closes 2000h (i.e. 8pm) on Thursdays.
			break;

		case 5:
		case 6:
			shopClosingTime = 19; // Shop closes 1900h (i.e. 7pm) on Fridays and Saturdays.
			break;

		case 7:
			shopClosingTime = 16; // Shop closes 1600h (i.e. 4pm) on Sundays.
			break;

		default:
			shopClosingTime = 17; // Shop closes 1700h (i.e. 5pm) on all other days.
			break;
		}
		
		System.out.printf("Today is day %d, and closing time is %d00h\n", dayOfWeek, shopClosingTime);
	}
}
