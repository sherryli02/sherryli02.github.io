let days = [
	{name: "Friday", speed: 50, amount: 20},
	{name: "Saturday", speed: 10, amount: 40},
	{name: "Sunday", speed: 80, amount: 80}
];

// First show all the flowers and create divs for each of them
let container = document.querySelector(".graph");
// create a counter variable that will give us each flowers number in the array
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
  // places the flower name and amount to the div
  dayDiv.innerHTML = day.name;
  // sets height of flower to the amount. try changing height to width, or padding
  dayDiv.style.letterSpacing = day.speed + "px";
  dayDiv.style.fontSize = day.amount + "px";

  console.log(day);
}
// loops through the flowers and runs the displayFlowers function for each one
days.forEach(display);