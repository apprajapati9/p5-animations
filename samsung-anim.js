let r = 50
let circles = []

let angle = 0.1
let diff = 0
let change = 0

class colorDots{
  constructor(x, y, c){
    this.x = x
    this.y = y
    this.c = c
  }
}

function setup() {
  createCanvas(400, 400);
  
  for(let i = 0; i < 4; i++){
    circles[i] = i*90;
  }
  
  for(let i = 0; i < 4; i++){
    print(circles[i])
  }
}

function toRadians(degrees){
  return PI*degrees/180;
}


function draw() {
  background(255);
  frameRate(60)
  
  push()
  translate(200,200)
  rotate(angle)
  stroke("#0974f1")
  for(let i = 0; i < 4; i++){
    let rad = toRadians(circles[i])
    let y = r * sin(rad) 
    let x = r * cos(rad)
    if(i < 3){
        fill('#210cae')
        circle(x,y, 20)
    }else{
      stroke('#1CAC78')
      fill('#1CAC78')
      circle(x,y, 20)
    }
  }
  
  r = lerp(20,50,  (sin(frameCount * 0.09) + 1) / 2)
  
  pop()
    
  angle = (angle + 0.08) 

  if(angle >= 360){
    angle = 0
  }
  print(angle)
    
}