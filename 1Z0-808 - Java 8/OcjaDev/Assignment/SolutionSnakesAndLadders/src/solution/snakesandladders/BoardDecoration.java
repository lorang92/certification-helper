package solution.snakesandladders;

public abstract class BoardDecoration {

	protected int length;

	public BoardDecoration(boolean isLong) {
	
		if (isLong) {
			length = Utils.getRandomInt(20,40);
		}
		else {
			length = Utils.getRandomInt(5,10);
		}
	}
	
	public abstract int minAllowablePosition();
	public abstract int maxAllowablePosition();
	public abstract int getMoveAmount();
	public abstract String getLandingMessage(); 
}
