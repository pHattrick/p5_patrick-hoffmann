function setup(){
    createCanvas(400, 400);

}

function draw(){
    clear();
    for(let i=5;i<height;i+=5){ //aeussere Schleife Schleifenzähler wird für y Position benutzt
        for(let j=5;j<width;j+=5) { //innere Schleife Schleifenzähler wird für x Position benutzt
            ellipse(j, i, 30, 30);
        }
    }
    noLoop();
}
