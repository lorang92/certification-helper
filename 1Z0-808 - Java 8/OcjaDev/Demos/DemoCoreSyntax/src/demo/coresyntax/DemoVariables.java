package demo.coresyntax;

public class DemoVariables {

	public static void main(String[] args) {
		demoBinaryOperators();
		demoUnaryOperators();
	}
	
	private static void demoBinaryOperators() {
		
		int goalsFor = 3;
		int goalsAgainst = 2;

		int totalGoalsInGame = goalsFor + goalsAgainst;
		int scoreDifference  = goalsFor - goalsAgainst;
		
		System.out.println();	
		System.out.println("Total goals in game: " + totalGoalsInGame);
		System.out.println("Score difference: " + scoreDifference);
	}


	private static void demoUnaryOperators() {
		
		int a = 42;

		int b = ++a;  // a is first incremented to 43, then it is assigned to b (so b is 43).
		int c = a++;  // c is assigned the current value of a (43), then a is incremented to 44.
		
		System.out.println();	
		System.out.println("a is " + a);
		System.out.println("b is " + b);
		System.out.println("c is " + c);
	}
}
