package student.flowcontrol;

import com.sun.org.apache.xpath.internal.operations.Bool;

import java.util.LinkedList;
import java.util.List;

public class Program {

	public static void main(String[] args) {

		// Write your code here, to explore the use of operators and flow control.
		//System.out.println(getFactorial(12));

		/*
		List<Integer> primes = new LinkedList<>();
		primes = getPrimes(100);
		System.out.println(primes);
*/
		printTimesTable();
	}

	private static long getFactorial(long number){
		long result = number;
		for(long i = 1; i < number; i++){
			result *= i;
		}
		return result;
	}

	private static List<Integer> getPrimes(int number){
		List<Integer> result = new LinkedList<>();
		if(number >= 2){
			result.add(2);
		}
		for(int i = 3; i <= number; i+=2) {

			if (isPrime(i)) result.add(i);
		}
		return result;
	}

	private static boolean isPrime(int number){
		for (int i = 2; i*i<number; i++){
			if (number%i == 0){
				return false;
			}
		}
		return true;
	}

	private static void printTimesTable(){
		for (int i = 1; i<=10; i++){
			for (int j = 1; j<=10; j++){
				if(j==1) {
					System.out.print(i*j + "\t|\t");
				}else {
					System.out.print(i * j + "\t");
				}
			}
			if(i==1) System.out.print("\n\t+\t-\t-\t-\t-\t-\t-\t-\t-\t-\t");
			System.out.println("");
		}
	}
}
