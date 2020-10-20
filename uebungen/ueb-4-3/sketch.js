
var gui;

var anz = 10;
var distanz = 50;
var laenge = 40;
var breite = 10;

function setup() {
  createCanvas(windowWidth, windowHeight);

  gui = createGui('p5.gui');
  gui.addGlobals('anz', 'distanz','laenge','breite');
  noFill();
  noLoop();
}

function draw() {
  background(255);
  strokeWeight(2);
  stroke(0);



      fill(220);
      noStroke();
      rect(100-80, 100, 200, 50, 30);
      ellipse(140-80, 100, 50)
      ellipse(170-80, 90, 50)
      ellipse(200-80, 80, 50)
      ellipse(230-80, 90, 50)
      ellipse(260-80, 100, 50)

      fill(200);
      noStroke();
      rect(100+40, 100, 200, 50, 30);
      ellipse(140+40, 100, 50)
      ellipse(170+40, 90, 50)
      ellipse(200+40, 80, 50)
      ellipse(230+40, 90, 50)
      ellipse(260+40, 100, 50)

      fill(180);
      noStroke();
      rect(100+40+120, 100, 200, 50, 30);
      ellipse(140+40+120, 100, 50)
      ellipse(170+40+120, 90, 50)
      ellipse(200+40+120, 80, 50)
      ellipse(230+40+120, 90, 50)
      ellipse(260+40+120, 100, 50)

      fill(160);
      noStroke();
      rect(100+40+120+120, 100, 200, 50, 30);
      ellipse(140+40+120+120, 100, 50)
      ellipse(170+40+120+120, 90, 50)
      ellipse(200+40+120+120, 80, 50)
      ellipse(230+40+120+120, 90, 50)
      ellipse(260+40+120+120, 100, 50)

      fill(140);
      noStroke();
      rect(100+40+120+120+120, 100, 200, 50, 30);
      ellipse(140+40+120+120+120, 100, 50)
      ellipse(170+40+120+120+120, 90, 50)
      ellipse(200+40+120+120+120, 80, 50)
      ellipse(230+40+120+120+120, 90, 50)
      ellipse(260+40+120+120+120, 100, 50)

      fill(120);
      noStroke();
      rect(100+40+120+120+120+120, 100, 200, 50, 30);
      ellipse(140+40+120+120+120+120, 100, 50)
      ellipse(170+40+120+120+120+120, 90, 50)
      ellipse(200+40+120+120+120+120, 80, 50)
      ellipse(230+40+120+120+120+120, 90, 50)
      ellipse(260+40+120+120+120+120, 100, 50)


            // rect(x + 20, y + 40, 10, 40, 30);
            // rect(x + 40, y + 90, 10, 40, 30);


            for (let x = 0; x <= anz; x += 0) {
              rect(distanz * x + distanz, distanz * x + distanz, breite, laenge,30);

            }

            for (let y = 20; y <= anz; y += 4) {
              rect(distanz * y + distanz, distanz * y + distanz, breite, laenge,30);
              fill(14)
            }

}
