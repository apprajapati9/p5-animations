let v = 0

let angle = 0
let changeRate = 0.01

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(0);
  //noLoop()
  
  v = (( sin(frameCount * 0.09 ) + 1)/ 2).toFixed(2) // based on frameCount getting 0 - 1 value 
  let mv = map(v, 0, 1, 1,255) // mapping value oscillation of 0-1 to 1-255 for alpha value.
  
  //print(mv)
  let myColor = color(0, 255, 0, mv);
  
  stroke(myColor)
  fill(myColor)
  circle(width/2, height/5, 100)
  
 // R:241, G:195, B:56
  myColor = color(241, 195, 56, mv);
  stroke(myColor)
  fill(myColor)
  circle(width/2, height/2, 100)
  
  
  myColor = color(255, 0, 0, mv);
  stroke(myColor)
  fill(myColor)
  circle(width/2, height/1.25, 100)
  
  angle += 0.050
  
  if(angle > TWO_PI){
    angle = 0
  }  
  
  print(mv)
}