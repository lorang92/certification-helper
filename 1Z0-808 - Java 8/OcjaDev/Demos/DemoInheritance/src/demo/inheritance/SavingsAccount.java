package demo.inheritance;

public class SavingsAccount extends BankAccount {

	// Define additional instance data.
	private boolean premium;
	private boolean goneOverdrawn;

	
	// Constructor.
	public SavingsAccount(String accountHolder, boolean premium) {
		super(accountHolder);
		this.premium = premium;
	}

	
	// Additional methods.
	public void applyInterest() {
		if (balance < 0) {
			// Sorry mate, no interest if you're overdrawn.
		}
		else if (premium && !goneOverdrawn) {
			balance = balance * 1.30;
		}
		else {
			balance = balance * 1.15;
		}
		goneOverdrawn = false;
	}

	
	// Overrides of members from superclass.
	@Override
	public double withdraw(double amount) {
		super.withdraw(amount);
		if (balance < 0) {
			goneOverdrawn = true;
		}
		return balance;
	}
	
	
	@Override
	public String toString() {
		String str = String.format("%s [%s, %s]", 
						super.toString(),
						premium ? "Premium" : "Normal",
					    goneOverdrawn ? "gone overdrawn" : "not gone overdrawn");
		return str;
	}
}
