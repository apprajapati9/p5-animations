
const CANVAS_WIDTH = 600
const CANVAS_HEIGHT = 600

let angles = []
let angleV = []
let r = 3


function setup(){
    createCanvas(600, 400)
    let total = floor(width / (r*2)) //floor to remove decimal points
    for(let i = 0; i <= total; i++){
        angles[i] = map(i, 0, total, 0, 2* TWO_PI) // for 2 complete wave you can multiply by 2*two_pi
        angleV[i] =  0.1 + i/100 ///random(-0.1, 0.1)
    }
}

function draw(){
    background(0)
    translate(300,200) //center 
    //fill(252, 238, 33)
    noFill()
    stroke(252,238,33)
    
    beginShape()
    for(let i = 0; i< angles.length; i++){
        let x = map(i , 0 , angles.length, -300, 300)
        let y = map(sin(angles[i]), -1, 1, -200, 200)
        strokeWeight(1)
       // line(x,0,x,y)
        //vertex(x,y)
        circle(x, y, r*2)
        angles[i] += 0.01;
        //angles[i] += angleV[i]
    }
    endShape()
}