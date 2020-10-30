
let key = '06e280b15621fb57f14de8e91c05e79e'; // https://weatherstack.com/product -- dein key!
let windstaerke;
let angle = 0;
let windrad = 0;

var gui;

var anz = 100;
var anzahlX = Math.sqrt(anz);
var anzahlY = Math.sqrt(anz);
var stepsx;
var stepsy;
var Tropfenlänge = 60;
var Tropfenbreite = 10;
var text



function setup() {
  createCanvas(850, windowHeight);

  let url = 'https://api.weatherstack.com/current?access_key=' + key + '&query=istanbul'; //Achtung gratis key unterstützt SSL nicht
  loadJSON(url, gotWeather);
  // rectMode(CENTER);
  angleMode(DEGREES);


  sliderRange(5, 10, 1);

  gui = createGui('p5.gui');
  gui.addGlobals('anzahlX', 'anzahlY', 'Tropfenlänge', 'Tropfenbreite', 'text');
  noFill();

}

function draw() {
  background(15);
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

  // angle += 1;
  // push();
  // translate(width/2, height/2);
  // fill(255);
  // textSize(150);
  // rotate(angle);
  // text('purple', 200, 500);
  // text('rain', 282, 630);
  // pop();

  // angle += 1;
  angle += windrad;

  push();
  translate(width/2, height/2);
  fill(255);
  textSize(120);
  rotate(angle);
  text('purple', -66, 0);
  text('rain', 0, 110);
  pop();


  // rect(x + 20, y + 40, 10, 40, 30);
  // rect(x + 40, y + 90, 10, 40, 30);


  //     for (let x = 0; x <= anz; x += anzahlX) {
  //     for (let y = 0; y <= anz; y += anzahlY) {
  //       rect(width/stepsx,width/stepsy, breite, laenge,30);
  // }
  // }
  stepsx = width / anzahlX;
  stepsy = height / anzahlY;

  fill('#6a0dad');
  for (let x = 0; x <= 800; x += stepsx) {
    for (let y = 0; y <= height; y += stepsy) {
      rect(50 + x, 150 + y, Tropfenbreite, Tropfenlänge, 30);

    }
  }

  fill('#6a0dad');
  for (let x = 0; x <= 800; x += stepsx) {
    for (let y = 0; y <= height; y += stepsy) {
      rect(100 + x, 200 + y, Tropfenbreite, Tropfenlänge, 30);

    }
  }

}



  // for (let x = 0; x <= width; x += anz) {
  //   for (let y = 0; y <= height; y += distanz) {
  //     rect(75 + x, 190 + y, breite, laenge, 30);
  //
  //   }
  // }


  // for (let y = 20; y <= anz; y += 4) {
  //   rect(distanz * y + distanz, distanz * y + distanz, breite, laenge,30);
  //   fill(14)
  // }

  // let stepsx = 40;
  // let stepsy = 100;
  //
  // for (var x = 20; x < width; x += stepsx) {
  //   for (var y = 120; y < height; y += stepsy) {
  function gotWeather(weather) {
      // Get the wind speed in km
      windstaerke = weather.current.wind_speed; // Angaben in km!

      windrad = map(windstaerke, 0, 200, 0, 10); // in Rotationsgrad mappen. Bei 200stdkm dreht sich das Windrad nun 10 Grad weiter pro Frame

      //console.log(windrad)



}
