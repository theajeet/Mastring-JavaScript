// 04). Write a function isEmpty(value) that checks if a given value is null , undefined , or ""?
function isEmpty(value) {
    return value === null || value === undefined || value === "";
}
// Test cases
console.log(isEmpty(null));        // true
console.log(isEmpty(undefined));   // true
console.log(isEmpty(""));          // true