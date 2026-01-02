// 01). predict the result: true + false, null + 1, 5 + "5", !!undefined?
console.log(true + false); // 1
console.log(null + 1);    // 1
console.log(5 + "5");    // "55"
console.log(!!undefined); // false

// 02). why NaN is a number?
typeof NaN === 'number' // true

// 03). undefined vs null?
let x;
console.log(x); // undefined: variable declared but not assigned
let y = null;
console.log(y); // null: variable explicitly assigned to have no value

// 05). "5" + 1 vs "5" - 1?
console.log("5" + 1); // "51": string concatenation
console.log("5" - 1); // 4: string converted to number for subtraction