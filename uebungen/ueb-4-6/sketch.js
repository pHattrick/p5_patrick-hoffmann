//Windrad
let key = '06e280b15621fb57f14de8e91c05e79e'; // https://weatherstack.com/product -- dein key!
let windstaerke;
let angle = 0;
let windrad = 0;
// let daynight;


//GUI
var gui;
// var gui2;
var anz = 100;
var AnzahlX = Math.sqrt(anz);
var Regenstärke = Math.sqrt(anz);
var stepsx;
var stepsy;
var Regentropfenlänge = 60;
var Regentropfenbreite = 20;
var Textgroesse=100;
var wind;
var fillColor = ['#1d116d'];
var drawFill = true;



function setup() {
  createCanvas(1300, 920);

  let url = 'https://api.weatherstack.com/current?access_key=' + key + '&query=zurich';
  loadJSON(url, gotWeather);

  angleMode(DEGREES);

  sliderRange(5, 10, 1);

  gui = createGui('Züriwätter');
  gui.addGlobals('drawFill', 'Regentropfenbreite','Regentropfenlänge', 'Regenstärke','Textgroesse');
  noFill();

  // input = createInput();
  //   input.position(20, height-50);
  //   button=createButton('SUBMIT');
  //   button.position(input.x+input.width+10, height-50);
  //   button.mousePressed(reloadJson);



}


function draw() {
  background(15);

  // if "is_day": "yes" {
  //   background(200);
  // } else {
  //   background(15);
  // }


  strokeWeight(2);
  stroke(0);

  //Wolken
  fill(220);
  noStroke();
  rect(100 - 80 + 250, 100, 200, 50, 30);
  ellipse(140 - 80 + 250, 100, 50)
  ellipse(170 - 80 + 250, 90, 50)
  ellipse(200 - 80 + 250, 80, 50)
  ellipse(230 - 80 + 250, 90, 50)
  ellipse(260 - 80 + 250, 100, 50)

  fill(200);
  noStroke();
  rect(100 + 40 + 250, 100, 200, 50, 30);
  ellipse(140 + 40 + 250, 100, 50)
  ellipse(170 + 40 + 250, 90, 50)
  ellipse(200 + 40 + 250, 80, 50)
  ellipse(230 + 40 + 250, 90, 50)
  ellipse(260 + 40 + 250, 100, 50)

  fill(180);
  noStroke();
  rect(100 + 40 + 120 + 250, 100, 200, 50, 30);
  ellipse(140 + 40 + 120 + 250, 100, 50)
  ellipse(170 + 40 + 120 + 250, 90, 50)
  ellipse(200 + 40 + 120 + 250, 80, 50)
  ellipse(230 + 40 + 120 + 250, 90, 50)
  ellipse(260 + 40 + 120 + 250, 100, 50)

  fill(160);
  noStroke();
  rect(100 + 40 + 120 + 120 + 250, 100, 200, 50, 30);
  ellipse(140 + 40 + 120 + 120 + 250, 100, 50)
  ellipse(170 + 40 + 120 + 120 + 250, 90, 50)
  ellipse(200 + 40 + 120 + 120 + 250, 80, 50)
  ellipse(230 + 40 + 120 + 120 + 250, 90, 50)
  ellipse(260 + 40 + 120 + 120 + 250, 100, 50)

  fill(140);
  noStroke();
  rect(100 + 40 + 120 + 120 + 120 + 250, 100, 200, 50, 30);
  ellipse(140 + 40 + 120 + 120 + 120 + 250, 100, 50)
  ellipse(170 + 40 + 120 + 120 + 120 + 250, 90, 50)
  ellipse(200 + 40 + 120 + 120 + 120 + 250, 80, 50)
  ellipse(230 + 40 + 120 + 120 + 120 + 250, 90, 50)
  ellipse(260 + 40 + 120 + 120 + 120 + 250, 100, 50)

  fill(120);
  noStroke();
  rect(100 + 40 + 120 + 120 + 120 + 120 + 250, 100, 200, 50, 30);
  ellipse(140 + 40 + 120 + 120 + 120 + 120 + 250, 100, 50)
  ellipse(170 + 40 + 120 + 120 + 120 + 120 + 250, 90, 50)
  ellipse(200 + 40 + 120 + 120 + 120 + 120 + 250, 80, 50)
  ellipse(230 + 40 + 120 + 120 + 120 + 120 + 250, 90, 50)
  ellipse(260 + 40 + 120 + 120 + 120 + 120 + 250, 100, 50)


  // angle += 1;
  angle += windrad;

  push();
  translate(width / 2, height / 2);
  fill(255);
  textSize(Textgroesse);
  // textSize(120);
  rotate(angle);
  textAlign(CENTER);
  text('Züri', 0, 0);
  text('Wind', 0, 90);

  pop();

  // Regen Ja/Nein
  if (drawFill) {
    fill(fillColor);
  } else {
    noFill();
  }

  // Regentropfen (doppelte Schleife)
  stepsx = width / AnzahlX;
  stepsy = height / Regenstärke;


  for (let x = 250; x <= 980; x += stepsx) {
    for (let y = 0; y <= height; y += stepsy) {
      rect(50 + x, 150 + y, Regentropfenbreite, Regentropfenlänge, 30);
      }
    }


    for (let x = 250; x <= 980; x += stepsx) {
      for (let y = 0; y <= height; y += stepsy) {
        rect(100 + x, 200 + y, Regentropfenbreite, Regentropfenlänge, 30);
      }
    }

  }


  function gotWeather(weather) {
    // Get the wind speed in km
    windstaerke = weather.current.wind_speed; // Angaben in km!

    windrad = map(windstaerke, 0, 200, 0, 10); // in Rotationsgrad mappen. Bei 200stdkm dreht sich das Windrad nun 10 Grad weiter pro Frame

daynight = weather.is_day;
    //console.log(windrad)

  }


// function reloadJson(){
//     // reload JSon kreiert eine neue url für die API mit dem Ort, den die User eingegeben haben
//
//     let ort = input.value();
//     let url = 'http://api.weatherstack.com/current?access_key='+key+'&query='+ort;
//
//     // dann lädt die Funktion gotWeather diese neuen Daten
//     loadJSON(url, gotWeather);
// }
