package solution.inheritance;

public class Employee extends Person {

	private static double SALARY_RISE_PER_JOBGRADE = 1000;
	private static int RETIREMENT_AGE = 65;
	
	private double salary;
	private int jobGrade;
	
	public Employee(String name, int age, double salary, int jobGrade) {
		super(name, age);
		this.salary = salary;
		this.jobGrade = jobGrade;
	}

	public void winPromotion() {
		jobGrade++;
		salary += SALARY_RISE_PER_JOBGRADE;
	}
	
	public int getYearsToRetirement() {
		return RETIREMENT_AGE - getAge();
	}
	
	@Override
	public String toString() {
		return String.format("%s, earns %.2f, job grade %d", super.toString(), salary, jobGrade);
	}
}
