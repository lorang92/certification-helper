package solution.inheritance;

public class Student extends Person {

	private String subject;
	private int merits = 0;
	
	public Student(String name, int age, String subject) {
		super(name, age);
		this.subject = subject;
	}

	public void earnMerits(int additionalMerits) {
		merits += additionalMerits;
	}
	
	@Override
	public String toString() {
		return String.format("%s, studies %s, and has %d merits", super.toString(), subject, merits);
	}
}
