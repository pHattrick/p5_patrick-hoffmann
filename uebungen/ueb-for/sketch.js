function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(0);
  stroke(255);



  for (let x = 0; x <= width; x += 10) {
    line(x, 0, x, height);


  }

}
