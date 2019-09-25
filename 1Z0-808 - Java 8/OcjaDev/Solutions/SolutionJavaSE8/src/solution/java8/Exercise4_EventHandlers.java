package solution.java8;

import javafx.application.Application;
import javafx.geometry.Insets;
import javafx.scene.Scene;
import javafx.scene.control.Button;
import javafx.scene.layout.HBox;
import javafx.stage.Stage;

public class Exercise4_EventHandlers extends Application {
    
	public static void main(String... args) {
        launch(args);
    }
    
	@Override
	public void start(Stage primaryStage) {
	
	    // Create a HBox, will be the root pane in our GUI.
	    HBox root = new HBox();
	    root.setPadding(new Insets(15, 12, 15, 12));
	    root.setSpacing(10);
	    
	    // Create 'Hello' button and handle its click event via a lambda expression.
	    Button btn1 = new Button();
	    btn1.setText("Say 'Hello'");
	    btn1.setOnAction(e -> System.out.println("You clicked Hello"));
	
	    // Create 'Goodbye' button and handle its click event via a lambda expression.
		Button btn2 = new Button();
	    btn2.setText("Say 'Goodbye'");
	    btn2.setOnAction(e -> System.out.println("You clicked Goodbye"));

	    // Add all the controls to the root pane.
	    root.getChildren().addAll(btn1, btn2);

	    // Initialise and show the stage for our GUI.
	    primaryStage.setScene(new Scene(root, 300, 250));
	    primaryStage.setTitle("My Cool Gui App");
	    primaryStage.show();
	}
}
