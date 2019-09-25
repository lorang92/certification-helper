package demo.initialization;

import java.util.Date;

public class BankAccount {

	// Instance variables.
	private String accountHolder;
	private int id;
	private double balance = 0.0;
	private Date creationTimestamp = new Date();

	private static int nextId = 0;

	// Constructors (see next chapter for more details).
	public BankAccount() {
		accountHolder = "Anonymous";
		id = nextId++;
	}

	public BankAccount(String ah) {
		accountHolder = ah;
		id = nextId++;
	}
	
	// Getters/setters.
	public String getAccountHolder() {
		return accountHolder;
	}

	public void setAccountHolder(String ah) {
		accountHolder = ah;
	}

	public int getId() {
		return id;
	}

	public double getBalance() {
		return balance;
	}

	public Date getCreationTimestamp() {
		return creationTimestamp;
	}

	// Business methods.
	public double deposit(double amount) {
		balance += amount;
		return balance;
	}

	public double deposit(int dollars, int cents) {
		double amount = dollars + cents / 100.0;
		return deposit(amount);
	}

	public double withdraw(double amount) {
		double newBalance = balance - amount;
		if (newBalance < -1000) {
			System.err.println("Insufficient funds to withdraw " + amount);
		} else {
			balance = newBalance;
		}
		return balance;
	}

	public double withdraw(int dollars, int cents) {
		double amount = dollars + cents / 100;
		return withdraw(amount);
	}

	// toString() method.
	@Override
	public String toString() {
		String str = String.format("[%d] %s, %.2f", id, accountHolder, balance);
		return str;
	}
}

