
let counter = 0

//for sinDotAnim 
let r = 0

//for sinwave function
let a = 0

//for floating square function
let p = 0 

const CANVAS_WIDTH = 600
const CANVAS_HEIGHT = 600

function setup() {
  createCanvas(CANVAS_WIDTH, CANVAS_HEIGHT);
  //noLoop(); // Stops continuous drawing to focus on one frame
  r = 0; // Initialize r
}

//example to understanding scaling of canvas.

//6x6
function scaleX(x){
  push()
  //if you wanna work with 6 units, then divide by some number to get to 6..
   // 6 * 100 = 600, ... 600/100 = 6... 
  //this will convert it into 6 x 6
  // translate must be used with that unit
  
  // 600 * 6 = 100
  scale(CANVAS_WIDTH/x)
  console.log(x)
  
  // 6 x 6
  
  stroke(0,0,240)
  strokeWeight(x/100)
  //translate(6/2, 6/2)
  
  for(let i = 0; i <= x; i++){
    line(i, 0, i, x)
  }
  
  for(let i = 0; i <= x; i++){
    line(0, i, x, i)
  }
  
  point(0,0)
  
  pop()
  
}

function sinDotAnim(){
  push()
  scale(60) // 600.. / 60 = 10,  // 6 x 10
 
  translate(10/2, 10/2)
  strokeWeight(0.1)
  stroke(255,0,0)
  
  stroke(0,0,0)
  point(0,0)
  stroke(255,0,0)
  let p = (sin(r) + 1) * 0.5;  // 0/2 will be 0.. 1/2 = 1 so keeps between 1 and 0.
  //you can also multiply with 0*5 instead of /2 which will give the same answer.
  point(0, p)
  r += 0.1
  
  r.toFixed(1)
  if(r > TWO_PI) {
    r = 0
  }
  pop()
  console.log("r " , r)
}

function backgroundblink(){
   // Create p5.Color objects to interpolate between.
  let from = color(230, 33, 83);
  let to = color(72, 61, 139);
  
  let factor = sin(counter*counter)
  counter += 1
  let v = lerpColor(from,to, factor) 
  
  background(v)
}

function sinWave(){
  
  push()
  
  scale(60)// 600/60 = 10 .. 10x10
  translate(0, 3)
  
  stroke(30,100,22)
  strokeWeight(1/4)
  
  let p = (sin(a).toFixed(3))   
  let p2 = (sin(a).toFixed(3)) 
  
  
  a+=0.1
  
  point(a.toFixed(1)-0.5, p)
  point(a.toFixed(1), p)
  
  
  if(a > 10){
    a = 0;
    //background(255,255,255)
  }
  
  console.log(p)
  pop()
}

function floatingSquare(){
  
  push()
  //background(255,255,255)
  
  scale(60)
  translate(10/4, 10/2)
  strokeWeight(0.1)
  point(0,0)
  
  let rectSize = 0.5
  
  let squareP = ( sin(p).toFixed(1) + 1 )/ 15
  
  p+=0.1
  
  rect(0-rectSize/2, squareP-rectSize/2, rectSize, rectSize)

  rect(5-rectSize/2, squareP-rectSize/2 , rectSize, rectSize)
  
  if(p > TWO_PI){
    p = 0
  }
  
  pop()
}

let startPoint = 0
let endPoint = 10
let startY = 0

function squareCornerAnim(){
  push()
  //frameRate(30)
  let squareSize = 0.5; // 10x10 grid

  scale(60)
  //translate(10/2, 10/2)
  strokeWeight(0.1)

  line(0,0, 10,10)
  line(10,0, 0,10)
  line(0, 0, 10, 0)
  line(0, 0, 0, 10)
  line(0, 10, 10, 10)
  line(10,10,10, 0)

  rect(0,0, squareSize, squareSize) //top left square
  
  rect(10-squareSize,0, squareSize, squareSize) //top RIGHT square
  
  rect(10-squareSize,10-squareSize,squareSize,squareSize) // bottom right square.
  
  rect(0,10-squareSize,squareSize,squareSize) // bottom LEFT square.
  
  let p = 9.5 * (sin(startPoint) + 1 ) / 2  
  // 9.5* because we scaled canvas to work with small size
  //also square size is 0.5 so to avoid square getting pushed all the way, we are 
  //only extending to 9.5 so square will not beyond bottom right square. 
  
  stroke(0,180,0)
  rect(p,p, squareSize, squareSize) // LEFT to RIGHT
  //rect(p2,p2, squareSize, squareSize) //right to left   // TODO:  cross on other side.  from top right to bottom left

  let p1 = -9.5 * (sin(startPoint) - 1)/2
  //let p2 = 9.5 * (sin(startPoint) + 1) / 2
  
  console.log("pl value ", p1)

  stroke(254,35,250)
  rect(p1, p, squareSize, squareSize) // 1 10 .. 10 1


  startPoint += 0.01

  if(startPoint > TWO_PI){
    startPoint = 0
  }
  pop()
}

function draw() {
  background(200);
  frameRate(80)

  //backgroundblink()
  sinDotAnim()
  //scaleX(6) //scale 6 x 6... 
  sinWave()

  floatingSquare()

  squareCornerAnim()
}