/* 03). LoggIn Message:- 
let isLoggedIn = true;
let isAdmin = false;
// Show different messages based on combination */
let isLoggedIn = true;
let isAdmin = false;

if (isLoggedIn && isAdmin) {
  console.log("Welcome Admin! You have full access.");
} else if (isLoggedIn && !isAdmin) {
  console.log("Welcome User! You have limited access.");
} else {
  console.log("Please log in to continue.");
}
