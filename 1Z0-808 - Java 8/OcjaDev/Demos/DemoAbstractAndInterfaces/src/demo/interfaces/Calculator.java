package demo.interfaces;

import java.util.*;

public class Calculator implements Freezable, Loggable {

	private List<Operation> operations = new ArrayList<Operation>();
	private boolean frozen = false;

	// Implementation of Freezable.
	public void freeze() {
		frozen = true;
	}

	public void unfreeze() {
		frozen = false;
	}

	// Implementation of Loggable.
	public void logBrief() {
		OUTPUT_STREAM.println("\nBrief log of operations:");
		OUTPUT_STREAM.println("------------------------");
		OUTPUT_STREAM.println("Number of operations: " + operations.size());
		OUTPUT_STREAM.println();
	}

	public void logVerbose() {
		OUTPUT_STREAM.println("\nVerbose log of operations:");
		OUTPUT_STREAM.println("--------------------------");
		for(Operation op: operations) {
			OUTPUT_STREAM.println(op);
		}
		OUTPUT_STREAM.println();
	}

	// Functionality.
	public void add(double num1, double num2) {
		if (!frozen) {
			operations.add(new Operation(num1, "+", num2));
			System.out.printf("%.2f + %.2f = %.2f\n", num1, num2, num1+num2);
		}
	}

	public void subtract(double num1, double num2) {
		if (!frozen) {
			operations.add(new Operation(num1, "-", num2));
			System.out.printf("%.2f - %.2f = %.2f\n", num1, num2, num1-num2);
		}
	}

	public void multiply(double num1, double num2) {
		if (!frozen) {
			operations.add(new Operation(num1, "*", num2));
			System.out.printf("%.2f * %.2f = %.2f\n", num1, num2, num1*num2);
		}
	}
	
	public void divide(double num1, double num2) {
		if (!frozen) {
			operations.add(new Operation(num1, "/", num2));
			System.out.printf("%.2f / %.2f = %.2f\n", num1, num2, num1/num2);
		}
	}
}


