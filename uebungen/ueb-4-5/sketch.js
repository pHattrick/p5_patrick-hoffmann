let angle = 0;


var gui;

var anz = 100;
var AnzahlX = Math.sqrt(anz);
var AnzahlY = Math.sqrt(anz);
var stepsx;
var stepsy;
var Tropfenlänge = 60;
var Tropfenbreite = 10;
var Wind;
var text;

function setup() {
  createCanvas(1300, 920);

  sliderRange(5, 10, 1);

  gui = createGui('Regen');
  gui.addGlobals('AnzahlX', 'AnzahlY', 'Tropfenlänge', 'Tropfenbreite', 'text','Wind');
  noFill();
  // noLoop();
}


function draw() {
  background(15);
  strokeWeight(2);
  stroke(0);

  text('purple', -66, 0);
  text('rain', 0, 110);

  fill(220);
  noStroke();
  rect(100 - 80, 100, 200, 50, 30);
  ellipse(140 - 80, 100, 50)
  ellipse(170 - 80, 90, 50)
  ellipse(200 - 80, 80, 50)
  ellipse(230 - 80, 90, 50)
  ellipse(260 - 80, 100, 50)

  fill(200);
  noStroke();
  rect(100 + 40, 100, 200, 50, 30);
  ellipse(140 + 40, 100, 50)
  ellipse(170 + 40, 90, 50)
  ellipse(200 + 40, 80, 50)
  ellipse(230 + 40, 90, 50)
  ellipse(260 + 40, 100, 50)

  fill(180);
  noStroke();
  rect(100 + 40 + 120, 100, 200, 50, 30);
  ellipse(140 + 40 + 120, 100, 50)
  ellipse(170 + 40 + 120, 90, 50)
  ellipse(200 + 40 + 120, 80, 50)
  ellipse(230 + 40 + 120, 90, 50)
  ellipse(260 + 40 + 120, 100, 50)

  fill(160);
  noStroke();
  rect(100 + 40 + 120 + 120, 100, 200, 50, 30);
  ellipse(140 + 40 + 120 + 120, 100, 50)
  ellipse(170 + 40 + 120 + 120, 90, 50)
  ellipse(200 + 40 + 120 + 120, 80, 50)
  ellipse(230 + 40 + 120 + 120, 90, 50)
  ellipse(260 + 40 + 120 + 120, 100, 50)

  fill(140);
  noStroke();
  rect(100 + 40 + 120 + 120 + 120, 100, 200, 50, 30);
  ellipse(140 + 40 + 120 + 120 + 120, 100, 50)
  ellipse(170 + 40 + 120 + 120 + 120, 90, 50)
  ellipse(200 + 40 + 120 + 120 + 120, 80, 50)
  ellipse(230 + 40 + 120 + 120 + 120, 90, 50)
  ellipse(260 + 40 + 120 + 120 + 120, 100, 50)

  fill(120);
  noStroke();
  rect(100 + 40 + 120 + 120 + 120 + 120, 100, 200, 50, 30);
  ellipse(140 + 40 + 120 + 120 + 120 + 120, 100, 50)
  ellipse(170 + 40 + 120 + 120 + 120 + 120, 90, 50)
  ellipse(200 + 40 + 120 + 120 + 120 + 120, 80, 50)
  ellipse(230 + 40 + 120 + 120 + 120 + 120, 90, 50)
  ellipse(260 + 40 + 120 + 120 + 120 + 120, 100, 50)

// angle += wind;



  stepsx = width / AnzahlX;
  stepsy = height / AnzahlY;

  fill('#6a0dad');
  for (let x = 0; x <= 800; x += stepsx) {
    for (let y = 0; y <= height; y += stepsy) {
      // push();
      // translate(width / 2, height / 2);
      // point(0, 0);
      // rotate(angle);
      rect(50 + x, 150 + y, Tropfenbreite, Tropfenlänge, 30);
      // pop();
    }
  }

  fill('#6a0dad');
  for (let x = 0; x <= 800; x += stepsx) {
    for (let y = 0; y <= height; y += stepsy) {
      rect(100 + x, 200 + y, Tropfenbreite, Tropfenlänge, 30);

    }
  }

}
