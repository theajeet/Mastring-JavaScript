// DataTypes:- data ka type.
// 01). primitives:- aisis saari values jinko copy karne par tumhe ek real copy mil jhaaye. like:- string, number, boolean, null, undefined, symbol, bigInt.
// string:- double quotes-> "", single quotes-> '', backticks-> ``.
// number:- 12, 12.3.
// boolean:- true, false.
// null:- aapne jaan boojs kar koi value nahi di.
// undefined:- aapone ek variable banaya aur usey value nahi di to jo value by default mili wo h undefined.
// symbol:- unique immutable value.
// future mein hum koi libraries use karenge ab is case mein un libraires mein kai baar kuchh fields hoti hai jinse similar hum bhi banaa dete hai aur galti se humaari banaai hui fields us libarary ki original fields ko change kar deta hai.
/*let obj = {
    uid: 1,
    name: "Ajeet",
    age: 20,
    email: "ajeetkuntal0005@gmail.com",
};
let a = Symbol("uid");
obj[a] = "0005";*/
// bigInt:- 
let a = 9007199254740991n;


// 02). reference:- inko copy karne par real copy nah milegi but aapko reference milega  parent ka. like:- arrays[], objects{}, functions().
// arrays:- 
let b = [1, 2, 3];
let c = b;
c.pop();
// objects:-
let d = {
    name: "Ajeet",
};
let e = d;
// e.name = "Kuntal";

// 03). Dynamic typing:- js mein static nahi hai and yaha par hai dynamic typing matlab hai aap data ko change kar skte ho kyuki yaha par dynamic data types hai.

// 04). typeof quirks (eg., typeof null === 'object').

// 05). Type Coercison (== vs ===):- concept jismein aapka ek type automatically convert hohjaayega.
"5" + 1; // "51"
"5" - 1; // 4

// 06). Truthy and Falsy values.
// Falsy values:- 0, "", null, undefined, NaN, false.
// rest all are truthy values.