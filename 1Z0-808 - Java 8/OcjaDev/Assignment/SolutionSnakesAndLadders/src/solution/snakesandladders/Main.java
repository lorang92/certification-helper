package solution.snakesandladders;

public class Main {

	public static void main(String[] args) {

		boolean playAgain;		
		do {
			System.out.println("\n----------------------------------------------------------------------------------");
			System.out.println("Snakes and Ladders Game");
			System.out.println("----------------------------------------------------------------------------------\n");

			int numPlayers = Utils.promptForInt("How many players [1-4]? ", 1, 4);

			Game game = new Game(numPlayers, true);
			Utils.promptForString("Press any key, followed by Enter, to start the game...\n");
			game.play();
			
			playAgain = Utils.promptForYesNo("\nPlay again [yes | no]? ");
		}
		while (playAgain);
		
		System.out.println("\n----------------------------------------------------------------------------------");
		System.out.println("That's all folks");
		System.out.println("----------------------------------------------------------------------------------\n");
	}
}
