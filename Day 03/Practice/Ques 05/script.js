/* Score logic:-
Score logic:-
let marks = 82;
// Print "Excellent", "Good", "Average", or "Fail" based on ranges */
let marks = 82;

if (marks >= 90 && marks <= 100) {
    console.log("Excellent");
} else if (marks >= 75 && marks < 90) {
    console.log("Good");
}
else if (marks >= 50 && marks < 75) {
    console.log("Average");
} else if (marks < 50 && marks >= 0) {
    console.log("Fail");
} else {
    console.log("Invalid marks");
}