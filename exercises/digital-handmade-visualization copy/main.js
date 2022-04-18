let data = [
  {
    name: "M", 
    frequency: 64
  },
  {
    name: "A", 
    frequency: 17
  },
  {
    name: "J", 
    frequency: 7
  },
  {
    name: "L", 
    frequency: 50
  },
  {
    name: "H", 
    frequency: 81
  }
];

let container = document.querySelector(".graph");
let i = 0;

function display(data) {
  // creates a new div; appends that div to the container
  let newItem = document.createElement("div");
  let dataDiv = container.appendChild(newItem);
  // increase the counter variable by one
  i++;
  // adds a shared class to each new div
  newItem.classList.add("data");
  // adds a specific class to each new div
  newItem.classList.add("data" + [i]);
  // places the  name and amount to the div
  dataDiv.innerHTML = data.name;
  dataDiv.style.width = data.frequency * 5 + "px";
  dataDiv.style.height = data.frequency * 3.5 + "px";
  const randomColor = Math.floor(Math.random()*16777215).toString(16);
  dataDiv.style.backgroundColor = "#" + randomColor;
  dataDiv.style.fontSize = data.frequency + 10 + "px";

  console.log(data);
}
// loops through and runs the display function for each one
data.forEach(display);