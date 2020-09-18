function setup() {
createCanvas(800, 1000);
background(100);
}

function draw() {
background(230,50,20);

let a=0;
let b=255

fill(0,0);

a+=30;
b-=20
rect(a+20,50,100+a,13+a);
strokeWeight(5);
fill(80, 220, 250, 255-b);

a+=30;
b-=20
rect(a+20,50,100+a,21+a);
strokeWeight(5);
fill(80, 220, 250, 255-b);

a+=30;
b-=20
rect(a+20,50,100+a,34+a);
strokeWeight(5);
fill(80, 220, 250, 255-b);

a+=30;
b-=20
rect(a+20,50,100+a,55+a);
strokeWeight(5);
fill(80, 220, 250, 255-b);

a+=30;
b-=20
rect(a+20,50,100+a,89+a);
strokeWeight(5);
fill(80, 220, 250, 255-b);

a+=20;
b-=10
rect(a+20,50,100+a,144+a);
strokeWeight(5);
fill(80, 220, 250, 255-b);

a+=30;
b-=20
rect(a+20,50,100+a,233+a);
strokeWeight(5);
fill(80, 220, 250, 255-b);

a+=30;
b-=20
rect(a+20,50,100+a,377+a);
strokeWeight(5);
fill(80, 220, 250, 255-b);

a+=30;
b-=20
rect(a+20,50,100+a,610+a);
strokeWeight(5);
fill(80, 220, 250, 255-b);






}
