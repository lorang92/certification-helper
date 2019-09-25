package demo.inheritance;

import java.util.ArrayList;
import java.util.List;

public class UseAccounts {

	public static void main(String[] args) {
		demoPolymorphism();
		demoPolymorphicCollections();
	}
	

	public static void demoPolymorphism() {
		BankAccount sa = new SavingsAccount("Mickey", true);
		BankAccount ca = new CurrentAccount("Donald", 50);
		
		processAccount(sa);
		processAccount(ca);
	}

	
	public static void demoPolymorphicCollections() {
		ArrayList<BankAccount> accounts = new ArrayList<>();
		accounts.add(new SavingsAccount("Pluto", true));
		accounts.add(new CurrentAccount("Goofy", 50));
		
		processAccounts(accounts);
	}

	
	public static void processAccount(BankAccount account) {

		System.out.println("\nProcessing account: " + account);
		account.withdraw(200);
		account.deposit(300);
		
		// Utilize type-specific behaviour (avoid doing this if possible)
		if (account instanceof SavingsAccount) {
			SavingsAccount temp = (SavingsAccount)account;
			temp.applyInterest();
			
		} else if (account instanceof CurrentAccount) { 
			CurrentAccount temp = (CurrentAccount)account;
			temp.writeCheque(25.00);
			temp.writeCheque(36.00);
			temp.displayCheques();
		}
		
		System.out.println("Updated account details: " + account.toString());
	}

	
	public static void processAccounts(List<BankAccount> accounts) {
		for (BankAccount account: accounts) {
			processAccount(account);
		}
	}
}
