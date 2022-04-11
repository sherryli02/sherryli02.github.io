let days = [
	{name: "Friday", speed: 50, amount: 20},
	{name: "Saturday", speed: 10, amount: 40},
	{name: "Sunday", speed: 80, amount: 80}
];

let container = document.querySelector(".graph");
let i = 0;

function display(day) {
  // creates a new div; appends that div to the container
  let newItem = document.createElement("div");
  let dayDiv = container.appendChild(newItem);
  // increase the counter variable by one
  i++;
  // adds a shared class to each new div
  newItem.classList.add("day");
  // adds a specific class to each new div
  newItem.classList.add("day" + [i]);
  // places the  name and amount to the div
  dayDiv.innerHTML = day.name;
  // sets height to the amount. try changing height to width, or padding
  dayDiv.style.letterSpacing = day.speed + "px";
  dayDiv.style.fontSize = day.amount + "px";

  console.log(day);
}
// loops through and runs the display function for each one
days.forEach(display);