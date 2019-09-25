package solution.snakesandladders;

import java.util.ArrayList;

public class Game {

	private Dice dice = new Dice();
	private Board board = new Board();
	private ArrayList<Player> players = new ArrayList<Player>();
	private ArrayList<String> availableColours = new ArrayList<String>();
	private boolean verboseMode;
	
	public Game(int numPlayers, boolean verboseMode) {

		this.verboseMode = verboseMode;
		if (verboseMode) {
			board.displayAllSquares();
		}
		
		availableColours.add("red");
		availableColours.add("green");
		availableColours.add("blue");
		availableColours.add("yellow");

		for (int i = 0; i < numPlayers; i++) {
			String name = Utils.promptForString("\nPlayer name " + i + " : ");
			String colour = chooseColour();
			players.add(new Player(name, colour));
		}		
	}
	
	public void play() {
		
		int playerNumber = 0;
		
		while (true) {
			
			// Get the next player.
			Player player = players.get(playerNumber);
			System.out.printf("\nNext up, it's %s\n", player.toString());

			if (verboseMode) {
				board.displayNextFewSquaresFor(player);
			}

//			// Player takes a turn...
//			if (verboseMode) {
//				Utils.promptForString("Press Enter to take your turn...");
//			}
			
			int moveAmount = dice.roll();
			System.out.printf("You threw %d\n", moveAmount);

			board.movePlayer(player, moveAmount);
			System.out.printf("Your new position is %d\n", player.getPosition());
			
			// Did the player land on position 100?
			if (player.getPosition() == 100) {
				System.out.println("You are the winner!");
				break;
			}
			
			// Next player's turn.
			playerNumber = (playerNumber + 1) % players.size();
		}
		
		if (verboseMode) {
			dice.displayStats();
		}
	}
	
	private String chooseColour() {

		if (availableColours.size() == 1) {
			String colour = availableColours.get(0);
			System.out.printf("You will be %s\n", colour);
			return colour;
		}
		
		StringBuilder sb = new StringBuilder("Choose a colour out of ");
		for (int i = 0; i < availableColours.size(); i++) {
			sb.append(availableColours.get(i) + " ");
		}
		String prompt = sb.toString();
		
		String colour;
		do {
			colour = Utils.promptForString(prompt).toLowerCase();
		}
		while (!availableColours.contains(colour));
		
		availableColours.remove(colour);
		return colour;
	}
}
