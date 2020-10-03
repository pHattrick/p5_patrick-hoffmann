function setup() {
  createCanvas(1600, 800);
  background(255);
  strokeWeight(2);
  stroke(0);
  noFill();
}

function draw() {
  let stepsx = 200;
  let stepsy = 400;
  for (var x = 0; x < width; x += stepsx) {
    for (var y = 0; y < height; y += stepsy) {

      noFill();
      beginShape();
      vertex(0 + x, 0 + y);
      vertex(200 + x, 0 + y);
      vertex(200 + x, 400 + y);
      vertex(0 + x, 400 + y);
      endShape(CLOSE);

      fill(40);
      triangle(0 + x, 0 + y, 100 + x, 200 + y, 200 + x, 0 + y);
      triangle(0 + x, 400 + y, 100 + x, 200 + y, 200 + x, 400 + y);
      //
      // fill(50);
      // triangle(0 + x, 400 + y, 100 + x, 300 + y, 200 + x, 400 + y);
      // triangle(0 + x, 0 + y, 100 + x, 100 + y, 200 + x, 0 + y);
      //
      // fill(60);
      // triangle(0 + x, 100 + y, 100 + x, 200 + y, 0 + x, 300 + y);
      // triangle(200 + x, 100 + y, 100 + x, 200 + y, 200 + x, 300 + y);
      //
      // line(0 + x, 200 + y, 200 + x, 200 + y);
      // line(100 + x, 100 + y, 100 + x, 300 + y);
    }
  }
}
