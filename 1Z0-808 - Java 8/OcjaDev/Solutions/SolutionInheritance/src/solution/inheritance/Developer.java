package solution.inheritance;

public class Developer extends Employee {

	private static int MAX_SKILLS = 10;
	private String[] skills = new String[MAX_SKILLS];
	private int numSkills = 0;
	
	public Developer(String name, int age, double salary, int jobGrade) {
		super(name, age, salary, jobGrade);
	}
	
	public void addSkill(String skill) {
		if (numSkills < MAX_SKILLS) {
			skills[numSkills++] = skill;
		}
	}

	public boolean hasSkill(String skill) {
		for (int i = 0; i < numSkills; i++) {
			if (skills[i].equalsIgnoreCase(skill))
				return true;
		}
		return false;
	}

	@Override
	public String toString() {
		StringBuilder sb = new StringBuilder();
		for (int i = 0; i < numSkills; i++) {
			sb.append(skills[i] + " ");
		}
		return String.format("%s, skills: %s", super.toString(), sb.toString());
	}
}
