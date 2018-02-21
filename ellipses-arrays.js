var x = []
var y = []
var d = []
var c = []
function setup() {
  createCanvas(400, 400);
  colorMode(HSB)
  for (var i = 0; i < 50; i = i + 1) {
    x[i] = random(0, width);
    y[i] = random(0, height);
    d[i] = random(0,50)
    c[i] = random(0, 230)
  }
}
  
function draw() {
  background(255);
  noStroke();

  for (var i = 0; i < 50; i = i + 1) {
    fill(c[i], 100, 200);
    ellipse(x[i], y[i], d[i])
    
    // 1% of the time
  if (random() < 0.01) {
    // random diameter between 10 and 400
    d[i] = random(10, 100);
  }
  }
}
