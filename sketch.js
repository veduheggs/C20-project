
var r = 50;
var g = 100;
var b=205;


function setup(){

  createCanvas(1400,400);
}


function draw(){

  r=map(mouseX,50,1200,30,70);

  g = map(mouseX,100,900,300,400);

  b = map(mouseX,200,1200,200,70);

  background(r,g,b);

  fill("red");

  ellipse(mouseX,200,25,25  );
}