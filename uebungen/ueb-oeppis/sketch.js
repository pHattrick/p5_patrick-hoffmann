function setup() {
  createCanvas(800, 800);
  noFill();
  noLoop();
}

function draw() {
  background(220);
  strokeWeight(12);

  for (let x = 0; x <= 10; x += 1) {
    rect(25 * x + 25, 25 * x + 25, 500, 500);


    ellipse(25 * x + 25, 25 * x + 25, 500, 500);
    strokeWeight(5);
    console.log(x)
  }


}
