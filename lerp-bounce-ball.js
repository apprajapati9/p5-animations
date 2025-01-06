
// lerp is linear interpolation between two points

let a = 200
let b = 300

let t = 0.01

let s = -0.01

function mylerp(a, b, t) {
  return a + (b - a) * t
}


function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  
  //line(200,0, 200,400)
  //line(300,0, 300,400)
  
  let p = mylerp(a, b, sin(t))
  
  fill('red')
  circle(p,100, 50)
  
  
  

  if(t >= PI){ //TWO_PI and PI change behavior
    t = 0
  }
   t += 0.1
}