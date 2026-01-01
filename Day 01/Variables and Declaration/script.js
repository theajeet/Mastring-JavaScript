//01).  declaration and intialization
// var, let, const - line-by-line comparison
var a = 10; // decalration and initialization using var
var a; // decelaration using var

let b = 20; // declaration and initialization using let

const dulha = "Ajeet"; // declaration and initialization using const
const dulhan = "Ankita"; // declaration and initialization using const

//02). scope(global, block, function)
//a). functional scope:- it means this is only used in this function.
function varTest() {
    var x = 1;
}
//b). global scope:- it is access able anywhere in the code
var y = 2;
//c). block scope:- it means it is no inside a any curli brackes({})
var z = 3;
{
    let c = 4;
}

//03). reassignment and redeclaration
var m = 5; // declaration and initialization using var
m = 10; // reassignment using var
var m = 15; // redeclaration using var

let n = 25; // declaration and initialization using let
n = 30; // reassignment using let
// let n = 35; // redeclaration using let (not allowed, will throw error)

//04). Temporal Dead Zone (TDZ):- utna are jitne mein js ko pata to hai ki variable karta hai par wo value nahi de sakta.
console.log(p); 


let p = 10; //declaration and initialization using let

// console.log(q); // TDZ mein hai isliye error dega

var w = undifined; //declaration part uper chala gaya
//05). hoisting impact per type
// Hosting:- ek variable ko js mein bannate hai to wo variable do hisso mein toot jaata hai and uska declare part uper chala jaata hai and uska initialization part neeche chala jaata hai.
// var w = 12;

console.log(w); 

w = 12; //initialization part neeche chala gaya