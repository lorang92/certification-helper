package student.initialization;

import java.util.Date;

public class Employee {

	// Instance data.
	private String name;
	private double salary;
	private Date joined = new Date();
	
	// Getters and setters.
	public String getName() {
		return name;
	}
	public void setName(String n) {
		name = n;
	}

	public double getSalary() {
		return salary;
	}
	public void setSalary(double s) {
		salary = s;
	}

	public Date getJoined() {
		return joined;
	}
	public void setJoined(Date j) {
		joined = j;
	}

	// Business methods.
	public void payRaise(double amount) {
		salary = salary + amount;
	}
	
	public void payBonus() {
		// Give employee a 1% bonus.
		salary = salary * 1.01;
	}
	
	public void payBonus(double percentBonus) {
		// Give employee a bonus as specified by parameter.
		salary = salary + (salary * percentBonus / 100);
	}
	
	public void payBonus(double percentBonus, double min, double max) {
		// Give employee a bonus as specified by percentBonus, if salary is in range.
		if (salary >= min && salary <= max) {
			payBonus(percentBonus);
		}
	}

	
	// toString() method.
	@Override
	public String toString() {
		String str = String.format("%s earns %.2f, joined %s", name, salary, joined);
		return str;
	}
}
