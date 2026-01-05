/* Build a calculator:-
// Using switch + arithmetic operators
function calc(a, b, operator) {
// +, -, *, /
} */
function calc(a, b, operator) {
  switch (operator) {
    case "+":
      return a + b;

    case "-":
      return a - b;

    case "*":
      return a * b;

    case "/":
      if (b === 0) {
        return "Error: Division by zero";
      }
      return a / b;

    default:
      return "Invalid operator";
  }
}
console.log(calc(10, 5, "+")); // 15
console.log(calc(10, 5, "-")); // 5
console.log(calc(10, 5, "*")); // 50
console.log(calc(10, 5, "/")); // 2
console.log(calc(10, 0, "/")); // Error
