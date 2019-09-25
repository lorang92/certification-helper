package solution.flowcontrol;

public class Exercise3 {

	public static void main(String[] args) {

		for (int r = 1; r <= 10; r++) {
			for (int c = 1; c <= 10; c++) {
				int num = r * c;
				System.out.print(num + " ");
			}
			System.out.println();
		}
	}
}
