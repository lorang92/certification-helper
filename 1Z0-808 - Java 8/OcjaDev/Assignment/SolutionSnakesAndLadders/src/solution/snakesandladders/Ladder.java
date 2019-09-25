package solution.snakesandladders;

public class Ladder extends BoardDecoration {
	
	public Ladder(boolean isLong) {
		super(isLong);
	}
	
	@Override
	public int minAllowablePosition() {
		return 2;  // A ladder can start at square 2.
	}
	
	@Override
	public int maxAllowablePosition() {
		return 99 - length;  // E.g. a ladder that's 20 squares long can start at square 79. It would take you up to square 99.
	}

	@Override
	public int getMoveAmount() {
		return +length;
	}
	
	@Override
	public String toString() {
		return String.format("Ladder, would take you forward %d places", length);
	}
	
	@Override
	public String getLandingMessage() {
		return String.format("You landed on a ladder! Go forward %d places", length);
	}	
}
