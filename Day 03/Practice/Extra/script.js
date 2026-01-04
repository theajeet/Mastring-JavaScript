// 01). Logical AND (&&) operator:-
let x = 10;
let y = 20;

if(x > 5 && y < 25) {
    console.log("A"); // A
} else {
    console.log("B");
}

// 02). Logical OR (||) operator:-
let isAdmain = true;
let isLoggedIn = false;
if(isAdmain || isLoggedIn) {
    console.log("Access granted"); // Access granted
} else {
    console.log("Access denied");
}

// 03). Logical NOT (!) operator:-
let temp = 35;

if(!(temp < 30)) {
    console.log("Hot"); // Hot
} else {
    console.log("Present");
}

// 04). Truthy and Falsy values:-
let a = 0;

if(a) {
    console.log("Truthy");
} else {
    console.log("Falsy"); // Falsy
}

// 05). Ternary operator with multiple conditions:-
let score = 78;

let grade = (score >= 90) ? "A" : (score >= 75) ? "B" : (score >= 60) ? "C" : "Fail";

console.log(grade); // B

// 06). Ternary operator with multiple conditions:-
let points = 120;

let status = (points > 100) ? "Gold" : (points > 50) ? "Silver" :
"Bronze";

console.log(status); // Gold

// 07). Ternary operator with logical operators:-
let loggedIn = true;
let hasToken = false;

let access = (loggedIn && hasToken) ? "Allow" : "Deny";

console.log(access); // Deny

// 08). Increment operators:-
let b = 5;
b++; // post-increment operator

console.log(b); // 6

// 09). increment operators:-
let c = 7;
++c; // pre-increment operator

console.log(c); // 8

// 10). increment operators with assignment:-
let d = 3;
let e = d++; // post-increment operator

console.log(d, e); // 4 3

// 11). increment operators with assignment:-
let p = 4;
let q = ++p; // pre-increment operator

console.log(p, q); // 5 5

// 12). Decrement operators:-
let m = 10;
console.log(m--); // 10 (post-decrement operator)
console.log(m);   // 9

// 13). increment operators in expressions:-
let n = 5;
let result = n++ + ++n; // 5 + 7
console.log(result); // 12

// 14). increment operators with functions:-
let likes = 100;

function likePost() {
    return ++likes; // pre-increment operator
}

console.log(likePost()); // 101
console.log(likes); // 101

// 15). Decrement operators in expressions:-
let count = 5;

if(count-- === 5) { // post-decrement operator
    console.log("Matched"); // Matched
} else {
    console.log("Not Matched");
}