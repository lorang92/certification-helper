package solution.snakesandladders;

public class Player {

	private String name;
	private String colour;
	private int position = 1;
	
	public Player(String name, String colour) {
		this.name = name;
		this.colour = colour;
	}
	
	public int getPosition() {
		return position;
	}
	
	public void setPosition(int position) {
		this.position = position;
	}
	
	public String getName() {
		return name;
	}
	
	@Override
	public String toString() {
		return String.format("%s [%s] on square %d", name, colour, position);
	}
}
