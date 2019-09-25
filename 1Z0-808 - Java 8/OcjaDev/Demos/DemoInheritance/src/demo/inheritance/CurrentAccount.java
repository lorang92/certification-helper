package demo.inheritance;

public class CurrentAccount extends BankAccount {

	// Define additional instance data.
	private double[] chequeBook;
	private int chequesWritten;

	
	// Constructors.
	public CurrentAccount(String accountHolder, int chequeBookSize) {
		super(accountHolder);
		chequeBook = new double[chequeBookSize];
	}

	
	// Additional methods.
	public void writeCheque(double amount) {
		if (chequesWritten == chequeBook.length) {
			System.out.printf("Can't write cheque for %.2f\n", amount);
		} 
		else {
			System.out.printf("Written cheque for %.2f\n", amount);
			chequeBook[chequesWritten++] = amount;
			withdraw(amount);
		}
	}

	
	public void displayCheques() {
		for (int i = 0; i < chequesWritten; i++) {
			System.out.printf("Cheque %d: %.2f\n", i, chequeBook[i]);
		}
	}

	
	// Overrides of members from superclass.
	@Override
	public String toString() {
		String str = String.format("%s [%d cheques written]", super.toString(), chequesWritten);
		return str;
	}
}
