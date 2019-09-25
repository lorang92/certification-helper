package solution.java8;


public class Exercise1_Runnable {
    
    public static void main(String[] args) {

        // Part 1: Create a Runnable as a lambda expression first, and then pass it to a Thread.
        Runnable r = () -> System.out.printf("This is runnable #1, running in thread %d\n", Thread.currentThread().getId());
        Thread t1 = new Thread(r);
        t1.start();
        
        
        // Part 2: Create a Runnable as a lambda expression and pass it to a Thread directly.
        Thread t2 = new Thread( () -> System.out.printf("This is runnable #2, running in thread %d\n", Thread.currentThread().getId()) );
        t2.start();

		System.out.printf("This is main thread, running in thread %d\n", Thread.currentThread().getId());
    }
}

