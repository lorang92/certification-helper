package solution.inheritance;

public class Main {

	public static void main(String[] args) {

		// Create a Student.
		System.out.println("Creating a Student...");
		Student s = new Student("John", 21, "Physics");
		s.earnMerits(5);
		System.out.println(s);
		
		// Create an Employee.
		System.out.println("\nCreating an Employee...");
		Employee e = new Employee("Charlie", 27, 25000, 10);
		e.winPromotion();
		e.winPromotion();
		System.out.println(e);
		System.out.println("Years to retirement: " + e.getYearsToRetirement());
		
		// Create a Developer.
		System.out.println("\nCreating a Developer...");
		Developer d = new Developer("Zak", 40, 35000, 5);
		d.winPromotion();
		d.addSkill("Java");
		d.addSkill("C#");
		d.addSkill("Scala");
		System.out.println(d);
		System.out.println("Has Java skill? " + d.hasSkill("Java"));
	}
}
