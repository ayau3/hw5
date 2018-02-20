var x = [];
var y = [];
var xSpeed = [];
var ySpeed = [];
function setup() {
  createCanvas(400, 400);
  colorMode(HSB)
  for (var i = 0; i < 10; i = i + 1) {
    x[i] = random(0, 230);
    y[i] = 220;
    xSpeed[i] = random(1, 2)
    ySpeed[i] = random(2, 5)
  }
}
  
function draw() {
  background(0);
  noStroke();

  // draw pipe
  rect(0, 230, 200, 20);
  
  // draw drip
  for(var i = 0; i < 10; i++) {
  	ellipse(x[i], y[i], 10);
    x[i] = x[i] + xSpeed[i];
    y[i] = y[i] + ySpeed[i];
    
  //if extends past canvas
    if (y[i] > height) {
      // reset
      y[i] = 250;
    }
    if (x[i] > width) {
      //reset
      x[i] =0;
    }
  }
 
}
