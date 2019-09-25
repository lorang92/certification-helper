package student.java8;

public class Exercise1_Runnable {
    
    public static void main(String[] args) {

        // Part 1: Create a Runnable first, and then pass it to a Thread.
        Runnable r = new MyRunnable1();
        Thread t1 = new Thread(r);
        t1.start();
        
        // Part 2: Create a Runnable and pass it to a Thread directly.
        Thread t2 = new Thread(new MyRunnable2());
        t2.start();

		System.out.printf("This is main thread, running in thread %d\n", Thread.currentThread().getId());
    }
}

class MyRunnable1 implements Runnable {
	@Override
	public void run() {
		System.out.printf("This is runnable #1, running in thread %d\n", Thread.currentThread().getId());
	}	
}

class MyRunnable2 implements Runnable {
	@Override
	public void run() {
		System.out.printf("This is runnable #2, running in thread %d\n", Thread.currentThread().getId());
	}
}
