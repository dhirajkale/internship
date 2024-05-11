function calculateArea() {
    // Get the length and width of the rectangle from the HTML elements
    const length = document.getElementById("length").value;
    const width = document.getElementById("width").value;
  
    // Calculate the area of the rectangle
    const area = length * width;
  
    // Display the area of the rectangle in the HTML element with id "result"
    document.getElementById("result").innerHTML = "The area of the rectangle is: " + area + " square units";
  }