angle = 0
speed = 0.05

range = 100

function setup() {
  createCanvas(600, 600);
}

function draw() { 
  background(0,10); //This is a secret to the trail, without transparent background, trail won't work.
  
  let x = cos(angle) * range;
  let y = sin(angle) * range;
  
  let x2 = cos(-angle)*range;
  let y2 = sin(-angle)*range;
  
  push()
  translate(300,300)
  
  noStroke()
  fill('green')
  circle(x,y,50)
  
  fill('green')
  circle(y,x,50)
  
  //circle(x2,y2, 50)
  
  // fill('red')
  // strokeWeight(10)
  // point(x,y)
  pop()
  
  angle = angle + speed;
  
}