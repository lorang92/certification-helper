package demo.java8;

import java.util.function.Predicate;

public class LambdaReturnValueDemo {
    
    public static void main(String[] args) {

        Person aPerson = new Person("Peter", 27, false);

        // Example 1.
        System.out.println("Example 1: Returning a value from a single-line lambda expression.");
        doTest(aPerson, p -> p.getAge() >= 20 && p.getAge() <= 30);

        // Example 2.
        System.out.println("\nExample 2: Returning a value from a multi-line lambda expression.");
        doTest(aPerson, p -> {
            int age = p.getAge();
            return age >= 20 && age <= 30 && p.isWelsh();
        });
    }

    private static <T> void doTest(T obj, Predicate<T> predicate) {
        if (predicate.test(obj)) {
            System.out.println("Predicate test is true for object: " + obj.toString());
        } else {
            System.out.println("Predicate test is false for object: " + obj.toString());
        }
    }
}

