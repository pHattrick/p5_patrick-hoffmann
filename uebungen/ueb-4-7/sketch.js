let angle=45;

var gui;

var drehung=90;
var Rechts = 30;
var Links = -30


function setup() {
  createCanvas(450, 450);
  background(0);
  noFill();
  rectMode(CENTER);
  stroke(255);
  strokeWeight(3);
  angleMode(DEGREES);

sliderRange(0, 30, 1);

  gui = createGui('Wind');
  gui.addGlobals('Links','Rechts');
  noFill();
  noLoop();
}

function draw() {

// steps =

  let steps = 30;
  angle+=1;
  background(0)
  for (let x = 0; x <= width; x += steps) {
    push();//Koordinatensystem abspeichern
    translate(x,height/2);//in die Mitte des jeweiligen Elements schieben
    point(0,0);//aktuelle Nullposition markieren
    rotate(angle);
    rect(0, 0, 40, 20);
    pop();

  }
}
