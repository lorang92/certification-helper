package demo.coresyntax;

public class DemoBinaryOperators {

	public static void main(String[] args) {
		
		int goalsFor = 3;
		int goalsAgainst = 2;

		int totalGoalsInGame = goalsFor + goalsAgainst;
		int scoreDifference  = goalsFor - goalsAgainst;
		
		System.out.println();	
		System.out.println("Total goals in game: " + totalGoalsInGame);
		System.out.println("Score difference: " + scoreDifference);
	}
}
