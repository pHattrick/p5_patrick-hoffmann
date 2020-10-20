
var gui;

var anz = 40;
var distanz = 100;


function setup() {
  createCanvas(800, 800);
  gui = createGui('p5.gui');
  gui.addGlobals('anz', 'distanz');
  noFill();
  noLoop();
}

function draw() {
  background(255);
  strokeWeight(2);
  stroke(0);

  /*
  let stepsx = 40;
  let stepsy = 100;
  for (var x = 20; x < width; x += stepsx) {
  for (var y = 120; y < height; y += stepsy) {
    */

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

/*
      rect(x + 20, y + 40, 10, 40, 30);
      rect(x + 40, y + 90, 10, 40, 30);
*/

      for (let x = 0; x <= anz; x += 1) {
        rect(distanz * x + distanz, distanz * x + distanz, 10, 40);
      }

}
