package demo.inheritance;

import java.util.Date;

public class BankAccount {

	// Instance data.
	private String accountHolder;
	protected double balance = 0.0;
	private Date creationTimestamp = new Date();
	
	// Constructors.
	public BankAccount() {
		accountHolder = "Anonymous"; 
	}
	
	public BankAccount(String a) {
		accountHolder = a;
	}
	
	// Getters/setters.
	public String getAccountHolder() {
		return accountHolder;
	}
	
	public void setAccountHolder(String a) {
		accountHolder = a;
	}

	public final double getBalance() {
		return balance;
	}

	public final Date getCreationTimestamp() {
		return creationTimestamp;
	}
	
	// Business methods.
	public double deposit(double amount) {
		balance += amount;
		return balance;
	}
	
	public double deposit(int dollars, int cents) {
		double amount = dollars + cents/100;
		return deposit(amount);
	}
	
	public double withdraw(double amount) {
		double newBalance = balance - amount;
		if (newBalance < -1000) {
			System.err.println("Insufficient funds to withdraw " + amount);
		}
		else {
			balance = newBalance;
		}
		return balance;
	}
	
	public double withdraw(int dollars, int cents) {
		double amount = dollars + cents/100;
		return withdraw(amount);
	}

	// toString() method.
	@Override
	public String toString() {
		String str = String.format("%s, %.2f", accountHolder, balance);
		return str;
	}
}
