/* 04). Weather advice:-
let weather = "rainy";
// Use switch-case to print what to wear */
let weather = "rainy";

switch (weather) {
  case "sunny":
    console.log("Wear light clothes and sunglasses ☀️");
    break;

  case "rainy":
    console.log("Carry an umbrella and wear a raincoat 🌧️");
    break;

  case "cold":
    console.log("Wear warm clothes like a jacket 🧥");
    break;

  case "snowy":
    console.log("Wear heavy winter clothes and boots ❄️");
    break;

  default:
    console.log("Weather unknown. Dress comfortably.");
}
