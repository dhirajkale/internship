function calculate(num1, num2, operation, callback) {
    let result;
  
    switch (operation) {
      case '+':
        result = num1 + num2;
        break;
      case '-':
        result = num1 - num2;
        break;
      case '*':
        result = num1 * num2;
        break;
      case '/':
        if (num2 !== 0) {
          result = num1 / num2;
        } else {
          result = 'Error: Division by zero';
        }
        break;
      default:
        result = 'Error: Invalid operation';
    }
  
    callback(result);
  }
  
  // Example usage:
  function printResult(result) {
    console.log(`The result is: ${result}`);
  }
  
  calculate(10, 2, '+', printResult); 
  calculate(10, 2, '-', printResult); 
  calculate(10, 2, '*', printResult); 
  calculate(10, 2, '/', printResult); 
  calculate(10, 0, '/', printResult);  
  calculate(10, 2, '%', printResult); 