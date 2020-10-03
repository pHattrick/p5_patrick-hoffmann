var gui;
var params = {

  // Anzahl Iterationen
  anz: 10,
  anzMin: 1,
  anzMax: 30,
  anzStep: 5,

  // Groesse
  size: 300,
  sizeMin: 100,
  sizeMax: 600,
  sizeStep: 10

};

function setup() {
  createCanvas(windowWidth, windowHeight);
  gui = createGui('Wähle Anzahl Iterationen und Groesse');
  gui.setPosition(windowWidth - 250, 20);
  gui.addObject(params);
  noFill();
  // only call draw when then gui is changed
  noLoop();
}

function draw() {
  strokeWeight(2);
  background(242, 161, 184);
  var distance = (height - params.size) / params.anz;
  for (var i = 1; i <= params.anz; i++) {
    strokeWeight(i);
    rect(distance * i, distance * i, params.size, params.size);
  }
}
