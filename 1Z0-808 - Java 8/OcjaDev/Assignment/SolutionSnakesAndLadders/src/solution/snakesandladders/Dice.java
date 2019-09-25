package solution.snakesandladders;

public class Dice {

	// Hold a count of occurrences for each dice number 1-6 (note element 0 in the array is just a placeholder).
	private int[] occurrences = new int[7];
	
	public int roll() {
		int number = Utils.getRandomInt(1, 6);
		occurrences[number]++;
		return number;
	}
	
	public void displayStats() {
		System.out.printf("\nDice statistics (occurrences for each dice number):\n");
		for (int i = 1; i < occurrences.length; i++) {
			System.out.printf("  [%d]: %d\n", i, occurrences[i]);
		}
	}
}
