function reverseString(str) {
    // Use the built-in split(), reverse(), and join() methods to reverse the string
    return str.split('').reverse().join('');
  }
  
  // Test the function with different input strings
  console.log(reverseString("hello")); // Output: "olleh"
  console.log(reverseString("world")); // Output: "dlrow"
  console.log(reverseString("12345")); // Output: "54321"
  console.log(reverseString("abcde")); // Output: "edcba"