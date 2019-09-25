package demo.java8;

import java.time.Duration;
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.LocalTime;
import java.time.Period;
import java.time.ZoneId;
import java.time.ZonedDateTime;
import java.time.format.DateTimeFormatter;
import java.time.temporal.ChronoUnit;
import java.time.temporal.TemporalQueries;

public class DateTimeDemo {

	public static void main(String... args) {
		demoDateTimeClasses();
		demoDateTimeMethods();
		demoIntervals();
	}
	
	private static void demoDateTimeClasses() {
		
		// LocalDate.
		LocalDate today = LocalDate.now();
		System.out.println("LocalDate.now(): " + today);
		
		LocalDate todayJST = LocalDate.now(ZoneId.of("Asia/Tokyo"));
		System.out.println("LocalDate.now('Asia/Tokyo'): " + todayJST);

		// LocalTime.
		LocalTime now = LocalTime.now();
		System.out.println("LocalTime.now(): " + now);
		
		LocalTime nowJST = LocalTime.now(ZoneId.of("Asia/Tokyo"));
		System.out.println("LocalTime.now('Asia/Tokyo'): " + nowJST);

		// LocalDateTime.
		LocalDateTime nowToday = LocalDateTime.now();
		System.out.println("LocalDateTime.now(): " + nowToday);

		LocalDateTime nowTodayJST = LocalDateTime.now(ZoneId.of("Asia/Tokyo"));
		System.out.println("LocalDateTime.now('Asia/Tokyo'): " + nowTodayJST);
		
		// ZonedDateTime.
		ZonedDateTime zonedNowToday = ZonedDateTime.now();
		System.out.println("ZonedDateTime.now(): " + zonedNowToday);

		ZonedDateTime zonedNowTodayJST = ZonedDateTime.now(ZoneId.of("Asia/Tokyo"));
		System.out.println("ZonedDateTimeJST.now(): " + zonedNowTodayJST);
	}
	

	private static void demoDateTimeMethods() {
		
		LocalDateTime nowToday = LocalDateTime.now();
		System.out.printf("\nToday is %s, day # %d\n", nowToday.getDayOfWeek(), nowToday.getDayOfYear());
		System.out.printf("Time is %2d:%2d:%2d\n", nowToday.getHour(), nowToday.getMinute(), nowToday.getSecond());
		
		LocalDateTime lunchTomorrow = nowToday.plusDays(1).minusHours(4);
		System.out.printf("Tomorrow is %s, day # %d\n", lunchTomorrow.getDayOfWeek(), lunchTomorrow.getDayOfYear());
		System.out.printf("Lunch tomorrow: %2d:%2d:%2d\n", lunchTomorrow.getHour(), lunchTomorrow.getMinute(), lunchTomorrow.getSecond());

		System.out.println("nowToday.isBefore(lunchTomorrow)? " + nowToday.isBefore(lunchTomorrow)); 
		System.out.println("nowToday.isAfter(lunchTomorrow)?  " + nowToday.isAfter(lunchTomorrow)); 

		System.out.println("Formatted as a date:    " + nowToday.format(DateTimeFormatter.ISO_LOCAL_DATE));
		System.out.println("Formatted as a time:    " + nowToday.format(DateTimeFormatter.ISO_LOCAL_TIME));
		System.out.println("Formatted as a pattern: " + nowToday.format(DateTimeFormatter.ofPattern("dd/MM/yyyy, h:mm:ss a")));
		
		LocalTime now   = nowToday.query(TemporalQueries.localTime());
		LocalDate today = nowToday.query(TemporalQueries.localDate());
		System.out.println("Query for local time gives: " + now);
		System.out.println("Query for local date gives: " + today);
	}
	
	private static void demoIntervals() {
		
		LocalDate date1 = LocalDate.parse("2015-05-01");
		LocalDate date2 = LocalDate.parse("2015-08-08");
		
		Period periodToKickOff = Period.between(date1, date2);
		System.out.printf("\nPeriod until the 2015-16 Premier League season kicks off: %s\n", periodToKickOff);
		System.out.printf("Months: %d\n", periodToKickOff.getMonths());
		System.out.printf("Days: %d\n",periodToKickOff.getDays());

		LocalTime time1 = LocalTime.parse("16:00:00");
		LocalTime time2 = LocalTime.parse("17:30:00");
		Duration durationToTea = Duration.between(time1,  time2);
		System.out.printf("Duration until teatime: %s\n", durationToTea);
		System.out.printf("Seconds: %d\n", durationToTea.getSeconds());
		
		long days  = ChronoUnit.DAYS.between(date1, date2);
		long weeks = ChronoUnit.WEEKS.between(date1, date2);
		long nanos = ChronoUnit.NANOS.between(time1, time2);
		System.out.printf("Using ChronoUnit, days=%d, weeks=%d, nanos=%d\n", days, weeks, nanos);
	}
}
