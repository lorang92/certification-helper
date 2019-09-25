package demo.coresyntax;

public class DemoUnaryOperators {

	public static void main(String[] args) {
		
		int a = 42;

		int b = ++a;  // a is first incremented to 43, then it is assigned to b (so b is 43).
		int c = a++;  // c is assigned the current value of a (43), then a is incremented to 44.
		
		System.out.println();	
		System.out.println("a is " + a);
		System.out.println("b is " + b);
		System.out.println("c is " + c);
	}
}
