package solution.java8;

import java.util.Arrays;
import java.util.List;
import java.util.concurrent.Callable;
import java.util.concurrent.ExecutionException;
import java.util.concurrent.ExecutorService;
import java.util.concurrent.Executors;
import java.util.concurrent.Future;

public class Exercise2_Callable {
    
    public static void main(String... args) {

        // Create a list of objects that implement Callable<String> as lambda expressions.
        List<Callable<String>> list = Arrays.asList(
                () -> "This is the result from callable #1",
                () -> "This is the result from callable #2",
                () -> "This is the result from callable #3"
        );
        
        // Create an ExecutorService, invoke all the callable tasks, and get their results.
        ExecutorService service = Executors.newFixedThreadPool(2);
        List<Future<String>> futures = null;
        try {
            futures = service.invokeAll(list);
            for (Future<String> future : futures) {
                System.out.println(future.get());
            }
            
        } 
        catch (InterruptedException | ExecutionException e1) {		// Note Java 7 exception syntax!
            e1.printStackTrace();
        }
        service.shutdown();    
    }
}

