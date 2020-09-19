function setup() {
  createCanvas(800, 800);
  background(200, 450, 20);
}

function draw() {
  // Example showing RADIUS and CENTER ellipsemode with 2 overlaying ellipses
  triangle(340, 540, 460, 540, 400, 600);
  // triangle(340,540, 460,540, 400,480);
  triangle(340, 540, 270, 480, 400, 480);
  triangle(540, 480, 460, 540, 400, 480);
  // triangle(540,480, 490,410, 400,480);
  // triangle(310,410, 270,480, 400,480);

  // triangle(340,350, 450,350, 400,480);
  triangle(340, 350, 450, 350, 400, 260);

  triangle(490, 410, 450, 350, 400, 480);

  triangle(340, 350, 310, 410, 400, 480);


}






// function draw() {
//   // Example showing RADIUS and CENTER ellipsemode with 2 overlaying ellipses
//   ellipseMode(RADIUS);
//   fill(255);
//   ellipse(400, 300, 250 , 250); // Outer white ellipse
//   ellipseMode(CENTER);
//
//   ellipseMode(RADIUS);
//   fill(255);
//   ellipse(300, 200, 80, 80); // Outer white ellipse
//   ellipseMode(CENTER);
//   fill(100);
//   ellipse(310, 210, 80, 80); // Inner gray ellipse
//
//   ellipseMode(RADIUS);
//   fill(255);
//   ellipse(500, 200, 80, 80); // Outer white ellipse
//   ellipseMode(CENTER);
//   fill(100);
//   ellipse(510, 210, 80, 80); // Inner gray ellipse
//
//   fill(100);
//   ellipse(400, 450, 80, 80); // Inner gray ellipse
// ellipseMode(CENTER);
//
//   ellipseMode(RADIUS);
//   fill(255);
//   ellipse(400, 300, 20, 20); // Outer white ellipse
//   ellipseMode(CENTER);
// }
