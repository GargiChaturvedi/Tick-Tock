var hr, mn, sc;

function setup() {
  createCanvas(1280,610);
}

function draw() {
  background(0); 
  
  hr = hour();
  mn = minute();
  sc = second();

  angleMode(DEGREES);
  scAngle = map(sc, 0, 60, 0, 360);
  mnAngle = map(mn, 0, 60, 0, 360);
  hrAngle = map(hr%12, 0, 12, 0, 360);

  translate(640, 305);
  rotate(-90);
  push();
  rotate(scAngle);
  stroke(0, 0, 255);
  strokeWeight(7);
  line(0, 0, 100, 0);
  pop();

  push();
  rotate(mnAngle);
  stroke(0, 255, 0);
  strokeWeight(7);
  line(0, 0, 75, 0);
  pop();

  push();
  rotate(hrAngle);
  stroke(255, 0, 0);
  strokeWeight(7);
  line(0, 0, 50, 0);
  pop();

  noFill();
  strokeWeight(7);
  stroke(0, 0, 255);
  arc(0, 0, 400, 400, 0, scAngle);

  noFill();
  strokeWeight(7);
  stroke(0, 255, 0);
  arc(0, 0, 375, 375, 0, mnAngle);

  noFill();
  strokeWeight(7);
  stroke(255, 0, 0);
  arc(0, 0, 350, 350, 0, hrAngle);
}