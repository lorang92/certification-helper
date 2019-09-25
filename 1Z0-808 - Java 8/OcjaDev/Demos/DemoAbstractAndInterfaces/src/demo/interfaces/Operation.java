package demo.interfaces;

public class Operation {
	
	public double operand1, operand2;
	public String operator;
	
	public Operation(double operand1, String operator, double operand2) {
		this.operand1 = operand1;
		this.operator = operator;
		this.operand2 = operand2;
	}
	
	@Override
	public String toString() {
		return String.format("%.2f %s %.2f", operand1, operator, operand2);
	}
}
