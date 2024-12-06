
let v = 0.5

class ball{
  constructor(x, y, r){
    this.x = x
    this.y = y
    this.r = r
  }
  
  update(x1, y1){
    print(x1, y1)
    if(abs(this.x-x1) > 1 || abs(this.y-y1)> 1){
      if(x1 > this.x) {
      this.x += v;
    }else{
      this.x -= v;
    }
    
    if(y1 > this.y){
      this.y += v
    }else{
      this.y -= v
    }
    }
  
  }
  
  draw(){
    circle(this.x, this.y, this.r)
  }
}

let b = []
let BALLS = 5

function setup() {
  createCanvas(600, 600);
  for(let i = 0; i<BALLS; i++){
    b[i] = new ball(random(1, 600), random(1,600), random(1, 50))
  }
}

function draw() {
  background(220);
  
  for(let i = 0; i<BALLS; i++){
    b[i].draw()
    if(mouseX <= width && mouseY <= height){
      b[i].update(mouseX, mouseY)
    }
  }
}