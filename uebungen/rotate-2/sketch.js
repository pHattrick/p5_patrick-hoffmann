let angle=0;

function setup() {
	createCanvas(600, 600);
	angleMode(DEGREES);


}

function draw() {


	background(0,0,0,10);
	noFill();
	stroke(255);
    rectMode(CENTER);//mit diesem Befehl wird das Rechteck von der Mitte her gezeichnet statt von der oberen linken Ecke

    rect(width/2,height/2, 200,200);  
  
	push();
	translate(width/2,height/2);
	rotate(angle);
	ellipse(200,0,100,100);
	pop();




	angle=angle+1;
}