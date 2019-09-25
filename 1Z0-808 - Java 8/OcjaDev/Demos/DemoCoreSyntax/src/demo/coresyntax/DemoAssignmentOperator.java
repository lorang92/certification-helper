package demo.coresyntax;


public class DemoAssignmentOperator {

	public static void main(String[] args) {
		
		// ---------------------------------
		// Primitive-type assignment
		// ---------------------------------
		int a = 100;
		int b = 200;

		a = b;		// a is now 200.
		b += 50;	// a won't change here.
		
		System.out.println();	
		System.out.println("a is " + a);	// Prints 200.
		System.out.println("b is " + b);	// Prints 250.

		
		// ---------------------------------
		// Reference-type assignment
		// ---------------------------------

		StringBuilder s1 = new StringBuilder("Hello");
		StringBuilder s2 = new StringBuilder("Goodbye");
		
		s1 = s2;				// s1 now points to the same StringBuilder object as s2.
		s2.append(" World");	// s1 will see the change here.
		
		System.out.println("s1 is " + s1);	// Prints Goodbye World
		System.out.println("s2 is " + s2);	// Prints Goodbye World
		
	}
}
