let p = 0.01

function setup() {
  createCanvas(400, 400);
}

//doing the same thing but with mousex instead of sin(x) to get to 0 to 1.. 
//using map to accomplish that..
// map(this, from, to, toThis, toThat)
// so mouse 0 to width  to 0 to 1 
function simpleLerpMouse(){
    let from = color(218, 165, 32);
    let to = color(72, 61, 139);
    
    let color1 = color(255,0,0)
    let color2 = color(255,255,255)
    
    //(sin(p)+1)*0.5
    // doing same as sin but following mouse's x to generate 0 to 1
    let p = map(mouseX, 0, width, 0, 1)
    
    //let color3 = lerpColor(from, to, (sin(p)+1)*0.5)
    
    let color3 = lerpColor(color1, color2, p)
    
    fill(color3)
    circle(width/2, height/2, 120) //r = 120, d= 240
  
}

function simpleLerp(){
   
  let from = color(218, 165, 32);
  let to = color(72, 61, 139);
  
  let color1 = color(255,0,0)
  let color2 = color(255,255,255)
  
  //let color3 = lerpColor(from, to, (sin(p)+1)*0.5)
  
  let color3 = lerpColor(color1, color2, (sin(p)+1)*0.5)
  
  fill(color3)
  circle(width/2, height/2, 120) //r = 120, d= 240

  
  //line(width/2-60, height/2-60, width/2+60, height/2+60)
  
  p += 0.2
  if(p > TWO_PI){
    p = 0.001
  }
}

function draw() {
  background(220);
  //simpleLerp()
  simpleLerpMouse()
}