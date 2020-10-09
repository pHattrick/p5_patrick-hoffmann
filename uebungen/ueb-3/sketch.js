function setup() {
  createCanvas(1600, 1080);
  background(255);
  strokeWeight(2);
  stroke(0);
  noFill();
}

function draw() {

  let stepsx = 120;
  let stepsy = 180;
  for (var x = 0; x < width; x += stepsx) {
    for (var y = 0; y < height; y += stepsy) {

      noFill();
      stroke(45, 46, 131);
      strokeWeight(4);
      beginShape();
      vertex(60 + x, 0 + y);
      vertex(120 + x, 30 + y);
      vertex(120 + x, 90 + y);
      vertex(60 + x, 120 + y);
      vertex(0 + x, 90 + y);
      vertex(0 + x, 30 + y);
      endShape(CLOSE);


      fill(47, 172, 102, 1);
      stroke(47, 172, 102);
      strokeWeight(4);
      beginShape();
      vertex(60 + x, 60 + y);
      vertex(120 + x, 90 + y);
      vertex(120 + x, 150 + y);
      vertex(60 + x, 180 + y);
      vertex(0 + x, 150 + y);
      vertex(0 + x, 90 + y);
      endShape(CLOSE);


      noFill();
      stroke(230, 51, 42);
      strokeWeight(4);
      beginShape();
      vertex(120 + x, 90 + y);
      vertex(180 + x, 120 + y);
      vertex(180 + x, 180 + y);
      vertex(120 + x, 210 + y);
      vertex(60 + x, 180 + y);
      vertex(60 + x, 120 + y);
      endShape(CLOSE);


      // line(30, 20, 85, 75);

    }
  }
}
