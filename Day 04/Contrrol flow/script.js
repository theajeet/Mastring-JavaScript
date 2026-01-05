// 01). Control flow:-
// if, else, else-if:-
// if example:-
if(12 < 13) {
    console.log("12 is less than 13");
}
// if else example:-
if(12 > 13) {
    console.log("12 is greater than 13");
} else {
    console.log("12 is not greater than 13");
}
// if else-if example:-
if(12 > 13) {
    console.log("12 is greater than 13");
} else if(12 < 13) {
    console.log("12 is less than 13");
} else {
    console.log("12 is equal to 13");
}
// switch case:-
let day = 3;
switch(day) {
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saturday");
        break;
    case 7:
        console.log("Sunday");
        break;
    default:
        console.log("Invalid day number");
}

// 02). early return pattern:-
function getVal(val) {
    if(val < 100) return "A";
    else if(val < 75) return "B";
    else if(val < 50) return "C";
    else return "D";
}

console.log(getVal(89));