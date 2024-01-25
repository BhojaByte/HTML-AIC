// take input from user in which he will put a value between 1 to 20
//  after taking the input we shall display the table from entered value till 20

// Function to display the multiplication tables
function displayTables() {
    // Get user input
    var userInput = prompt("Enter a number between 1 and 20:");
  
    // Convert the user input to a number
    var num = parseInt(userInput);
  
    // Check if the input is a valid number between 1 and 20
    if (isNaN(num) || num < 1 || num > 20) {
      alert("Please enter a valid number between 1 and 20.");
      return;
    }
  
    document.write("<h2>Multiplication Tables from " + num + " to 20:</h2>");
  
    // Loop for each number from entered value to 20
    for (var i = num; i <= 20; i++) {
      document.write("<h3>Multiplication Table for " + i + ":</h3>");
      document.write("<ul>");
      // Inner loop for multiplication table from 1 to 10
      for (var j = 1; j <= 10; j++) {
        document.write("<li>" + i + " * " + j + " = " + (i * j) + "</li>");
      }
      document.write("</ul>");
    }
  }
  
  // Call the function to display the tables
  displayTables();
  