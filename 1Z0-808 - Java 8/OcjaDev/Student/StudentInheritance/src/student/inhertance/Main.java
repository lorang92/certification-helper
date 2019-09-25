package student.inhertance;

import org.omg.CORBA.PERSIST_STORE;
import org.omg.PortableServer.POAPackage.ServantAlreadyActive;

public class Main {
    public static void main(String[] args) {

        StringBuilder s1 = new StringBuilder("Java");
        String s2 = "Love";

        s1.append(s2);
        s2.substring(4);
        int foundAt = s1.indexOf(s2);
        System.out.println(foundAt);

		// Write code here, to test the functionality of your inheritance hierarchy.
        Person p = new Person("Morten", 28);
        System.out.println(p.toString());

        Student s = new Student("Morten", 28, "Java");
        s.earnMerits();
        System.out.println(s.toString());

        Employee e = new Employee("Thomas", 45, 510000, 3);
        System.out.println(e);
        e.givePromotion(5);
        System.out.println(e);
        System.out.println(e.getYearsToRetirement());
	}
}

class Person {
    private String name;
    private int age;

    public Person(String name, int age) {
        this.name = name;
        this.age = age;
    }
    public Person(){
    }

    public int getAge() {
        return age;
    }

    @Override
    public String toString() {
        return name + ": " + age + " år";
    }
}

class Student extends Person{
    private String subject;
    private int merits;

    public Student(){
        super();
    }
    public Student(String name, int age, String subject){
        super(name, age);
        this.subject = subject;
        this.merits = 0;
    }

    public void earnMerits(){
        merits++;
    }

    @Override
    public String toString() {
        return super.toString()
                + " Subject: " + subject
                + " Number of merits: " + merits;
    }
}

class Employee extends Person{
    private int salary;
    private int jobGrade;

    public Employee(String name, int age, int salary, int jobGrade) {
        super(name, age);
        this.salary = salary;
        this.jobGrade = jobGrade;
    }

    public Employee(int salary, int jobGrade) {
        this.salary = salary;
        this.jobGrade = jobGrade;
    }

    @Override
    public String toString() {
        return super.toString() + " Salary: " + salary + " Job grade: " + jobGrade;
    }

    public void givePromotion(){
        jobGrade ++;
        salary += 1000;
    }

    public void givePromotion(int numberOfJobGrades){
        jobGrade += numberOfJobGrades;
        salary += 1000*numberOfJobGrades;
    }

    public int getYearsToRetirement(){
        return 65 - this.getAge();
    }
}
