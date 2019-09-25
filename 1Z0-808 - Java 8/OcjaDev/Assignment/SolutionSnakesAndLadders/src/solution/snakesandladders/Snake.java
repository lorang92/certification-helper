package solution.snakesandladders;

public class Snake extends BoardDecoration {
	
	public Snake(boolean isLong) {
		super(isLong);
	}
	
	@Override
	public int minAllowablePosition() {
		return length + 1;  // E.g. a snake that's 20 squares long can start at square 21. It would take you back to square 1.
	}
	
	@Override
	public int maxAllowablePosition() {
		return 99;	// A snake can start at position 99.
	}
	
	@Override
	public int getMoveAmount() {
		return -length;
	}
	
	@Override
	public String toString() {
		return String.format("Snake, would take you back %d places", length);
	}
	
	@Override
	public String getLandingMessage() {
		return String.format("You landed on a snake! Go back %d places", length);
	}
}
