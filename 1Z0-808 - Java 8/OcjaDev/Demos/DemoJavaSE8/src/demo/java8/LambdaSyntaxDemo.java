package demo.java8;

interface Command<T> {
    void execute(T target);
}

public class LambdaSyntaxDemo {
    
    public static void main(String[] args) {

        Person aPerson = new Person("Michu", 27, false);

        // Example 1.
        System.out.println("Example 1: Single-line lambda expression.");
        Command<Person> displayPersonName = p -> System.out.println(p.getName());
        displayPersonName.execute(aPerson);

        // Example 2.
        System.out.println("\nExample 1: Multi-line lambda expression.");
        Command<Person> displayPersonInfo = p -> {
            System.out.println(p.getName()); 
            System.out.println(p.getAge()); 
            System.out.println(p.isWelsh());
        };
        displayPersonInfo.execute(aPerson);

        // Example 3.
        System.out.println("\nExample 3: Pass a lambda expression into a method.");
        doCommand(aPerson, p -> System.out.println(p.isWelsh()));
    }

    private static <T> void doCommand(T obj, Command<T> command) {
        command.execute(obj);
    }
}