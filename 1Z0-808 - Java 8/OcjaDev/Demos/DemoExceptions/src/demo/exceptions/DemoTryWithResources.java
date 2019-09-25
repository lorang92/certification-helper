package demo.exceptions;

import java.io.*;
import java.nio.charset.Charset;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.nio.file.Files;
import java.util.zip.ZipFile;
import java.util.zip.ZipEntry;
import java.util.Enumeration;

public class DemoTryWithResources {

	private static final String path = "C:\\OcjaDev\\Temp";

	public static void main(String[] args) {
		demoExplicitClosing();
		demoImplicitClosing();
		demoMultipleImplicitClosing();
	}

	private static void demoExplicitClosing() {

		BufferedWriter bw = null;

		try {
			bw = new BufferedWriter(new FileWriter(path + "\\TempFile1.txt"));
			bw.write("Hello world");
			bw.newLine();
			bw.write("Have a nice day");
			bw.newLine();
			bw.write("Goodbye");
			bw.newLine();

		} catch (IOException ex) {
			System.err.println("IOException occurred: " + ex);

		} finally {
			if (bw != null) {
				try {
					bw.close();
				} catch (IOException ex) {
					System.err.println("IOException occurred: " + ex);
				}
			}
		}
	}

	private static void demoImplicitClosing() {

		try (BufferedWriter bw = new BufferedWriter(new FileWriter(path + "\\TempFile2.txt"))) {
			bw.write("Bonjour tout le monde");
			bw.newLine();
			bw.write("Bonne journée");
			bw.newLine();
			bw.write("Au revoir");
			bw.newLine();

		} catch (IOException ex) {
			System.err.println("IOException occurred: " + ex);
		}
	}

	private static void demoMultipleImplicitClosing() {

		Charset charset = Charset.forName("US-ASCII");
		Path outputFilePath = Paths.get(path + "\\CountryFlagsContent.txt");

		// Use a try-with-resources statement, to open the zipfile and create the output text file.
		try (
			ZipFile zf = new ZipFile(path + "\\CountryFlags.zip");
		    BufferedWriter bw = Files.newBufferedWriter(outputFilePath, charset)
		) {

			// Enumerate each entry in the zipfile.
			Enumeration<? extends ZipEntry> entries = zf.entries();
			while (entries.hasMoreElements()) {

				// Get the entry name, and write it to the output text file.
				String newLine = System.getProperty("line.separator");
				String zipEntryName = ((ZipEntry) entries.nextElement()).getName() + newLine;
				bw.write(zipEntryName);
			}
		}
		catch (IOException ex) {
			System.err.println("IOException occurred: " + ex);
		}
	}
}
