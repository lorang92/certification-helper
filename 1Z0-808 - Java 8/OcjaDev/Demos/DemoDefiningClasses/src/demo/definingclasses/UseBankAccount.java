package demo.definingclasses;

public class UseBankAccount {

	public static void main(String[] args) {

		BankAccount acc1 = new BankAccount();
		acc1.setId(1);
		acc1.setAccountHolder("John Evans");
		
		BankAccount acc2 = new BankAccount();
		acc2.setId(2);
		acc2.setAccountHolder("Claire Smith");

		workWithBankAccount(acc1);
		workWithBankAccount(acc2);
		
		System.out.println("\nOverdraft limit is " + BankAccount.OVERDRAFT_LIMIT);
		System.out.printf("Interest rate is %.2f\n", BankAccount.getInterestRate());
	}

	public static void workWithBankAccount(BankAccount acc) {

		acc.deposit(100 * Math.random());
		acc.deposit(10, 50);
		System.out.printf("\nBalance after deposits: %.2f\n", acc.getBalance());
		acc.withdraw(30);

		System.out.println(acc.toString()); // Or just acc...
		System.out.printf("Created: %s\n", acc.getCreationTimestamp());
	}
}
