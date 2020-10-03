let angle = 0;

function setup() {
  createCanvas(600, 600);
  angleMode(DEGREES);


}

function draw() {


  background(0, 0, 0, 10);
  noFill();
  stroke(255);
  rectMode(CENTER); //mit diesem Befehl wird das Rechteck von der Mitte her gezeichnet statt von der oberen linken Ecke



  push();
  translate(width / 2, height / 2);
  rotate(angle);
  ellipse(200, 0, 100, 100);
  pop();

  push();
  translate(width / 2, height / 2);
  rotate(angle);
  rect(0, 0, 200, 200)
  pop();



  angle = angle + 3;
}
