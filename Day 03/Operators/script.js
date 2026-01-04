/* 01). Operators:- 
types of operators:- Arithmetic, Comparsion, Logical, Assignment, Unary, Ternary */
// Arithmetic Operators:- +, -, *, /, %, **
console.log(2 + 3); // Addition // 5
console.log(5 - 2); // Subtraction // 3
console.log(4 * 2); // Multiplication // 8
console.log(8 / 2); // Division // 4
console.log(10 % 3); // Modulus (means remainder) // 1
console.log(2 ** 3); // 2 raised to the power 3 // 8

// Comparsion Operators:- ==, ===, !=, !==, >, <, >=, <=
console.log(12 == 13); // Equal to // false
console.log(12 == "12"); // Equal to // true
console.log(12 === "12"); // Strict Equal to // false
console.log(12 != 13); // Not Equal to // true
console.log(12 !== 13); // Strict Not Equal to // true
console.log(12 > 13); // Greater than // false
console.log(12 < 13); // Less than // true
console.log(12 >= 12); // Greater than or Equal to // true
console.log(12 <= 13); // Less than or Equal to // true

// Assignment Operators:- =, +=, -=, *=, /=, %=
let a = 10; // Assignment
console.log(a+=5); // Addition Assignment // 15
console.log(a-=3); // Subtraction Assignment // 12
console.log(a*=2); // Multiplication Assignment // 24
console.log(a/=4); // Division Assignment // 6
console.log(a%=4); // Modulus Assignment // 2

// Logical Operators:- &&, ||, !
console.log(true && false); // Logical AND:- means both conditions must be true then answer is true // false
console.log(true || false); // Logical OR:- means if any one condition is true then answer is true // true
console.log(!true); // Logical NOT:- negates the value // false

// Unary Operators:- typeof, +, -, !, ++, --
console.log(typeof 42); // typeof:- operator returns the type of the operand // "number"
console.log(+ "5"); // Unary plus:- converts its operand to a number // 5
console.log(- "5"); // Unary minus converts its operand to a number and negates it // -5
console.log(!12); // Logical NOT:- negates the value // false
let b = 5;
console.log(++b); // Increment operator:- increases the operand by 1 // 6
console.log(--b); // Decrement operator:- decreases the operand by 1 // 5

// Ternary Operator:- condition ? expr1 : expr2
12 > 13 ? console.log("true") : console.log("false"); // false
