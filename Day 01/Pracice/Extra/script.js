console.log(nm); // undefined
var nm = "Harsh";

// console.log(age); // ReferenceError: Cannot access 'age' before initialization
// let age = 25;

var x = 1; // Global scope
{
    var x = 2; // Same global scope
}
console.log(x); // 2

let a = 10; // block scope // global scope
{
    let a = 20;
    console.log("Inside: ", a); // 20
}
console.log("Outside: ", a); // 10