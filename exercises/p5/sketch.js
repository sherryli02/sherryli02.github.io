let button;
var time;


function setup() {
  createCanvas(1000, 600);
  button = createButton('embiggen');
  button.position(800, 400);
  button.mousePressed(drawCircle);
  time = 0;

}


function drawCircle() {
  time = time + 40;
  noStroke();
  background(random(255), random(255), random(255));
  circle(random(1000), random(600), random(0 + time));
  circle(random(1000), random(600), random(0 + time));
  circle(random(1000), random(600), random(0 + time));
  circle(random(1000), random(600), random(0 + time));
  circle(random(1000), random(600), random(0 + time));
  circle(random(1000), random(600), random(0 + time));
  circle(random(1000), random(600), random(0 + time));
}