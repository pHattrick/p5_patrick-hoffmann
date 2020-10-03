var gui;

var anz = 10;
var distanz = 25;


function setup() {
  createCanvas(windowWidth, windowHeight);
  gui = createGui('p5.gui');
gui.addGlobals('anz', 'distanz');
  noFill();
  noLoop();
}

function draw() {
  background(220);
  strokeWeight(12);

  for (let x = 0; x <= anz ; x += 1) {
    rect(distanz * x + distanz, distanz * x + distanz, 500, 500);
    console.log(x)
  }

}
