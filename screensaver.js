let y = 100;

function setup() {
  createCanvas(720, 400);
  stroke(0); 
  frameRate(30);
}

function draw() {
  background(255);
  text('LOADING...', 10, 30);
  y = y - 1;
  if (y < 0) {
    y = height;
  }
  line(0, y, width, y);
}
