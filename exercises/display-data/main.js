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
    name: "L", 
    frequency: 7
  },
  {
    name: "J", 
    frequency: 64
  },
  {
    name: "H", 
    frequency: 81
  }
];

// set the dimensions and margins of the graph
const width = 450,
    height = 450,
    margin = 40;

// The radius of the pieplot is half the width or half the height (smallest one). I subtract a bit of margin.
const radius = Math.min(width, height) / 2 - margin

// append the svg object to the div called 'my_dataviz'
const svg = d3.select("#my_dataviz")
  .append("svg")
    .attr("width", width)
    .attr("height", height)
  .append("g")
    .attr("transform", `translate(${width / 2},${height / 2})`);

// Create dummy data
const data = {a: 9, b: 20, c:30, d:8, e:12}

// set the color scale
const color = d3.scaleOrdinal()
  .range(["#98abc5", "#8a89a6", "#7b6888", "#6b486b", "#a05d56"])

// Compute the position of each group on the pie:
const pie = d3.pie()
  .value(d=>d[1])

const data_ready = pie(Object.entries(data))

// Build the pie chart: Basically, each part of the pie is a path that we build using the arc function.
svg
  .selectAll('whatever')
  .data(data_ready)
  .join('path')
  .attr('d', d3.arc()
    .innerRadius(100)         // This is the size of the donut hole
    .outerRadius(radius)
  )
  .attr('fill', d => color(d.data[0]))
  .attr("stroke", "black")
  .style("stroke-width", "2px")
  .style("opacity", 0.7)




// Example 1 Get Started

// set up styling that will hold the chart
// const width = 1000;
// const height = 1000;
// const margin = {top: 50, bottom: 50, left: 50, right: 50};

// // create svg that will hold chart, you can then target the svg with css to see it
// const svg = d3.select(".d3-container")
// .append("svg")
// .attr("height", height - margin.top - margin.bottom)
// .attr("width", width - margin.left - margin.right)
// .attr("viewBox", [0,0, width, height]);

// // set up the x scale to match how many elements we have in our object
// const x = d3.scaleBand()
// .domain(d3.range(data.length))
// .range([margin.left, width - margin.right])
// .padding(0.1);

// // set up y scale to match the amounts. 0 to 15 will work
// const y = d3.scaleLinear()
// .domain([0,15])
// .range([height - margin.bottom, margin.top]);

// // start creating the bars for the chart.
// // we set up rectangles, as well as sort the data from biggest to smallest
// svg
//   .append("g")
//   .attr("fill", "#D4B7D2")
//   .selectAll("rect")
//   .data(data.sort((a,b) => d3.descending(a.amount, b.amount)))
//   .join("rect")
//   // places data on correct positions
//   .attr("x", (d, i) => x(i))
//   .attr("y", (d) => y(d.amount))
//   .attr("height", d => y(0) - y(d.amount))
//   .attr("width", x.bandwidth())


// // draws bars onto page. try adding another flower to the data to see how it changes.
//   svg.node();

// Example 2: add labels and info to the x and customize CSS

// set up styling that will hold the chart
// const width = 1000;
// const height = 800;
// const margin = {top: 0, bottom: 0, left: 50, right: 50};

// // create svg that will hold chart, you can then target the svg with css to see it
// const svg = d3.select(".d3-container")
// .append("svg")
// .attr("height", height - margin.top - margin.bottom)
// .attr("width", width - margin.left - margin.right)
// .attr("viewBox", [0,0, width, height]);

// // set up the x scale to match how many elements we have in our object
// const x = d3.scaleBand()
// .domain(d3.range(data.length))
// .range([margin.left, width - margin.right])
// .padding(0.1);

// // set up y scale to match the amounts. 0 to 15 will work
// const y = d3.scaleLinear()
// .domain([0,15])
// .range([height - margin.bottom, margin.top]);

// // start creating the bars for the chart.
// // we set up rectangles, as well as sort the data from biggest to smallest
// svg
//   .append("g")
//   .attr("fill", "#D4B7D2")
//   .selectAll("rect")
//   .data(data.sort((a,b) => d3.descending(a.amount, b.amount)))
//   .join("rect")
//   // places data on correct positions
//   .attr("x", (d, i) => x(i))
//   .attr("y", (d) => y(d.amount))
//   .attr("height", d => y(0) - y(d.amount))
//   .attr("width", x.bandwidth())

// // set up labels for x axis
// // the transform moves the labels to the bottom, comment out to see what i mean
// function xAxis(g) {
//   g.attr("transform", `translate(0, ${height - margin.bottom})`)
//   g.call(d3.axisBottom(x).tickFormat(i => data[i].name))
// }

// // set up labels for y axis
// function yAxis(g){

// }


// //draws the labels onto the page. this puts them at the top by default so the you need to transform their position.
// svg.append("g").call(xAxis);

// // draws bars onto page. try adding another flower to the data to see how it changes.
//   svg.node();


// Example 3 Customize the Y

// set up styling that will hold the chart
// const width = 1000;
// const height = 800;
// const margin = {top: 0, bottom: 0, left: 50, right: 50};

// // create svg that will hold chart, you can then target the svg with css to see it
// const svg = d3.select(".d3-container")
// .append("svg")
// .attr("height", height - margin.top - margin.bottom)
// .attr("width", width - margin.left - margin.right)
// .attr("viewBox", [0,0, width, height]);

// // set up the x scale to match how many elements we have in our object
// const x = d3.scaleBand()
// .domain(d3.range(data.length))
// .range([margin.left, width - margin.right])
// .padding(0.1);

// // set up y scale to match the amounts. 0 to 15 will work
// const y = d3.scaleLinear()
// .domain([0,15])
// .range([height - margin.bottom, margin.top]);

// // start creating the bars for the chart.
// // we set up rectangles, as well as sort the data from biggest to smallest
// svg
//   .append("g")
//   .attr("fill", "#D4B7D2")
//   .selectAll("rect")
//   .data(data.sort((a,b) => d3.descending(a.amount, b.amount)))
//   .join("rect")
//   // places data on correct positions
//   .attr("x", (d, i) => x(i))
//   .attr("y", (d) => y(d.amount))
//   .attr("height", d => y(0) - y(d.amount))
//   .attr("width", x.bandwidth())

// // set up labels for x axis
// // the transform moves the labels to the bottom, comment out to see what i mean
// function xAxis(g) {
//   g.attr("transform", `translate(0, ${height - margin.bottom})`)
//   g.call(d3.axisBottom(x).tickFormat(i => data[i].name))
// }

// // set up labels for y axis
// function yAxis(g){
//   g.attr("transform", `translate(${margin.left}, 0)`)
//   .call(d3.axisLeft(y).ticks(null, data.format))
// }


// // draw the labels onto the page for y
// svg.append("g").call(yAxis);

// //draws the labels onto the page. this puts them at the top by default so the you need to transform their position.
// svg.append("g").call(xAxis);

// // draws bars onto page. try adding another flower to the data to see how it changes.
//   svg.node();

// Example 4 Add a little interactivity with a class
// set up styling that will hold the chart
// const width = 1000;
// const height = 800;
// const margin = {top: 0, bottom: 0, left: 50, right: 50};

// // create svg that will hold chart, you can then target the svg with css to see it
// const svg = d3.select(".d3-container")
// .append("svg")
// .attr("height", height - margin.top - margin.bottom)
// .attr("width", width - margin.left - margin.right)
// .attr("viewBox", [0,0, width, height]);

// // set up the x scale to match how many elements we have in our object
// const x = d3.scaleBand()
// .domain(d3.range(data.length))
// .range([margin.left, width - margin.right])
// .padding(0.1);

// // set up y scale to match the amounts. 0 to 15 will work
// const y = d3.scaleLinear()
// .domain([0,15])
// .range([height - margin.bottom, margin.top]);

// // start creating the bars for the chart.
// // we set up rectangles, as well as sort the data from biggest to smallest
// svg
//   .append("g")
//   .attr("fill", "#D4B7D2")
//   .selectAll("rect")
//   .data(data.sort((a,b) => d3.descending(a.amount, b.amount)))
//   .join("rect")
//   // places data on correct positions
//   .attr("x", (d, i) => x(i))
//   .attr("y", (d) => y(d.amount))
//   .attr("height", d => y(0) - y(d.amount))
//   .attr("width", x.bandwidth())
//   //add a class
//   .attr("class", "rectangle")

// // set up labels for x axis
// // the transform moves the labels to the bottom, comment out to see what i mean
// function xAxis(g) {
//   g.attr("transform", `translate(0, ${height - margin.bottom})`)
//   g.call(d3.axisBottom(x).tickFormat(i => data[i].name))
// }

// // set up labels for y axis
// function yAxis(g){
//   g.attr("transform", `translate(${margin.left}, 0)`)
//   .call(d3.axisLeft(y).ticks(null, data.format))
// }


// // draw the labels onto the page for y
// svg.append("g").call(yAxis);

// //draws the labels onto the page. this puts them at the top by default so the you need to transform their position.
// svg.append("g").call(xAxis);

// // draws bars onto page. try adding another flower to the data to see how it changes.
//   svg.node();
