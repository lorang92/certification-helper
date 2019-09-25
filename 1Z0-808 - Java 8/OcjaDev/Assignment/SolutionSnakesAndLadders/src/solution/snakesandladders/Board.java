package solution.snakesandladders;


public class Board {

	private static final int VIEW_DISTANCE = 6;
	private static final int NUM_SQUARES = 100;

	// This array indicates if a snake or ladder starts on each square (element 0 in the array is just a placeholder).
	//  - If there is a snake in a square, the array element points to a Snake object.
	//  - If there is a ladder in a square, the array element points to a Ladder object.
	//  - Otherwise, the array element is null.
	private BoardDecoration[] boardDecorations = new BoardDecoration[NUM_SQUARES + 1];

	// Constructor, sets up all the snakes and ladders on the board.
	public Board() {

		// Create 1 long snake and 3 small snakes, and add them all to the board at random locations.
		addToBoard(new Snake(true));
		for (int i = 0; i < 3; i++) {
			addToBoard(new Snake(false));
		}

		// Create 1 long ladder and 3 small ladders, and add them all to the board at random locations.
		addToBoard(new Ladder(true));
		for (int i = 0; i < 3; i++) {
			addToBoard(new Ladder(false));
		}
	}

	// Helper method, to find a free square where we can put a long/short snake/ladder.
	private void addToBoard(BoardDecoration b) {
		while (true) {
			int square = Utils.getRandomInt(b.minAllowablePosition(), b.maxAllowablePosition());
			if (boardDecorations[square] == null) {
				boardDecorations[square] = b;
				break;
			}
		}
	}

	// Try to move a player a certain amount, taking into account possible overshoots of square 100 and snakes/ladders.
	public void movePlayer(Player player, int proposedMoveAmount) {
		
		// Initially let's assume we can just move the proposed amount.
		int endPosition = player.getPosition() + proposedMoveAmount;

		// Now see if the player has shot past the finishing square and needs to bounce back a bit.
		int overshoot = endPosition - NUM_SQUARES;
		if (overshoot > 0) {
			endPosition = NUM_SQUARES - overshoot;
		}
		
		// Now see if the player has landed on a snake/ladder.
		BoardDecoration bd = boardDecorations[endPosition];
		if (bd != null) {
			System.out.printf("%s\n", bd.getLandingMessage());
			endPosition += bd.getMoveAmount();
		}
		
		player.setPosition(endPosition);
	}
	
	// Display the positions of all the snakes and ladders on the board.
	public void displayAllSquares() {
		System.out.printf("Here are all the snakes and ladders on the board:\n");
		for (int i = 1; i <= NUM_SQUARES; i++) {
			displaySquare(i);
		}
	}
	// Display the next few squares ahead of a player.
	public void displayNextFewSquaresFor(Player player) {
		int endSquare = Math.min(player.getPosition() + VIEW_DISTANCE, 100);
		for (int square = player.getPosition() + 1; square <= endSquare; square++) {
			displaySquare(square);
		}
	}
	
	// Helper method, to display info about 1 square.
	private void displaySquare(int square) {
		if (boardDecorations[square] != null) {
			System.out.printf("  On square %d is a %s\n", square, boardDecorations[square]);
		} 
	}
}