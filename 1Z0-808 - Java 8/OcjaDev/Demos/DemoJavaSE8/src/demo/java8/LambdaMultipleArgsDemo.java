package demo.java8;

interface Calculation<T> {
    T perform(T op1, T op2);
}

public class LambdaMultipleArgsDemo {
    
    public static void main(String[] args) {

        // Example 1.
        System.out.println("Example 1: Implicit typing.");
        doCalculation(100, 75, (a, b) -> a + b);

        // Example 2.
        System.out.println("\nExample 2: Explicit typing.");
        doCalculation(100, 75, (Integer a, Integer b) -> a - b);
    }

    private static <T> void doCalculation(T val1, T val2, Calculation<T> calculation) {
        T result = calculation.perform(val1, val2);
        System.out.println("Calculation result: " + result); 
    }
}

