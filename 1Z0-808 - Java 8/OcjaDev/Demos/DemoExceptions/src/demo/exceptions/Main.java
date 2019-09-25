package demo.exceptions;

import java.io.BufferedWriter;
import java.io.FileWriter;
import java.io.IOException;
import java.io.PrintWriter;

public class Main {

	public static void main(String[] args) {
	
		try {
			writeMessageToFile("Hello world", "MyFile.txt");
		}
		catch (IOException ex) {
			System.err.println(ex.getMessage());
		}
	}
	
	private static void writeMessageToFile(String msg, String filename) throws IOException {
		
		PrintWriter out = null;
		try {
			out = new PrintWriter(new BufferedWriter(new FileWriter(filename)));
			out.println(msg);
			System.out.println("Written MyFile.txt successfully");
		}
		finally {
			if (out != null) {
				out.close();
			}				
		}
	}
}
