let v1;
let v2;

let x = 0;

let y = 0;
let p = [1,2,3,4,5,6,7,8,9,10] 

const WIDTH = 600;
const HEIGHT = 600;

let a = 0
let r = 0

class Vec2 {
  constructor(x, y) {
    this.x = x; // Initialize x-coordinate
    this.y = y; // Initialize y-coordinate
  }

  setX(newX) {
    this.x = newX; // Update x-coordinate
  }

  setY(newY) {
    this.y = newY; // Update y-coordinate
  }
}

function setup() {
  createCanvas(WIDTH, HEIGHT);

  noLoop();

  v1 = new Vec2(100, 150);
  v2 = new Vec2(300, 250);
}

function drawGrid() {
  // let cell_w = WIDTH / 10;
  // let cell_h = HEIGHT / 10; // 60

  //   for(let col = 0; col <= WIDTH; col+=cell_w){
  //       line(col, 0, col, HEIGHT);
  //   }

  //   for(let row = 0; row <= HEIGHT; row+=cell_h){
  //       line(0, row, WIDTH, row)
  //   }

  let cell_w = 10;
  let cell_h = 10;

  strokeWeight(0.04);
  for (let i = 0; i <= cell_w; i++) {
    line(i, 0, i, cell_w);

    textSize(1 / 3); // size would be 1 equivalent to 10 so full box. reducing to 10 times would give us value of 1 point inside.
    //text(i, i + 0.03, 0.02, 10);

    //To prove that how using scale of canvas allow you to
    //to work with small numbers so we can work with cell 1 to 10 while performing operations.
    // if(i == 9){
    //   line(i, 0, i+1, 1)
    //   line(i, 1, i+1, 0)// 9,1, 10,0
    // }
  }

  for (let i = 0; i <= cell_w; i++) {
    line(0, i, cell_w, i);

    //text(i, 0, i);
  }

  push();
  translate(5, 0);
  noLoop();

  //  let v = 10 + (-5); //
  // console.log( "ajay v " , v);
  // text(v, 0, 10);// 0 , 10

  for (let i = 0; i <= cell_w; i++) {
    let v = (i  + (-5))*-1 
    //console.log( "ajay v " , i, v);
    text(v, 0.1, i+0.3);// 0 , 10
  }
  pop()
  push()
  translate(0, 5)
  for(let i= 0; i <= cell_w; i++){
    let v = i+(-5)
    text(v, i+0.1, -0.1)
  }

  pop();
}

// function mylerp(x, y, p) {
//   return x + (y - x) * p;
// }

function draw() {
  frameRate(200)
  background(220);
  push();
  scale(60);
  drawGrid();
  pop();
  
  
  
  
  push()
  scale(60)
  translate(5,5)
  textSize(1/3)
  //text("ajay", 0 , 0)
  
  //loop()
 
  strokeWeight(1/6);
  point(0,0)
  
  // point(0,0.1)
  // point(0,0.2)
  // point(0,0.3)
  // point(0,0.4)
  // point(0,0.5)
  // point(0,0.6)
  // point(0,0.7)
  // point(0,0.8)
  // point(0,0.9)
  // point()
  
  //x ++ 
  for(let i=0; i<=5; i++){
    point(i, 0)
  }
  
  //y ++ 
  for(let i=0; i<=5; i++){
    point(0, i)
  }
  
   //x -- 
  for(let i=-5; i<=0; i++){
    point(i, 0)
  }
  
  //y --
  for(let i=-5; i<=0; i++){
    point(0, i)
  }
  
  strokeWeight(0.14)
  
  for(let i = 0; i <=6; i+=0.1){
    let yPoint = sin(i)
    //let xPoint = cos(i)
    //my solution works as well to narrow down 
    //(value - (width / 2)) / (width / 2)
    // yPoint = (yPoint-(2/2)) / (2/2)
    // yPoint /= 2
    
    // diff equation to normalize value from 0 to 1
   // yPoint = (yPoint+1)/2 // normalize to 0 to 1 only. 
    //point(0,-yPoint) // you can see that it gives value from -1 to 1 on y axis beause i m adding in y axies and x is 0 always.
  }
  
  
  let angle = 190
  let radians = degreeToRadians(angle)
  let sinY = sin(radians)//.toFixed(1) //graph is reversed so -1 is 1
  let change = ((sinY) + 1) / 2// by adding 1 you are going to other direction. and you need to divide by 2 because in case of 90 degrees, sinY would be positive 1 and + 1 would make it 2 points.. so by dividing /2 will normalize it to 1
  console.log("angle->",angle)
  console.log("radians->", radians )
  console.log("sin Y coordinate", sinY) 
  console.log("converted ",  change)
  
  stroke(255, 0, 0);
  //point(0, sinY)
  //text("This is sinY point", 0, sinY - 0.3);
  stroke(0, 255,0)
 // text("This is normalized to 1-0 point", 0, change - 0.3);
 // point(0, change)
  
  loop()
  
  //for(let i= 0; i<=360; i++){
  //let r = degreeToRadians(a);
  let p = (sin(r) + 1)/ 2;  // 0/2 will be 0.. 1/2 = 1 so keeps between 1 and 0.
  point(0, p)
  console.log("Ajay, angle " , angle)
  //a += 10
  r += 0.1
  
  if(r == TWO_PI) {
    r = 0
  }
  //}
  pop()
}

function degreeToRadians(degree){
  // 180 PI radians... 90
  return degree*PI/180;
}

function translateAndDraw() {
  translate(5, 5);

  textSize(1 / 3);

  for (let i = 0; i <= cell_w; i++) {
    line(0, i, cell_w, i);

    text(i, 0, i);
  }

  for (let i = 0; i <= cell_w; i++) {
    line(i, 0, i, cell_w);

    textSize(1 / 3); // size would be 1 equivalent to 10 so full box. reducing to 10 times would give us value of 1 point inside.
    text(i, i - 0.2, 0);

    //To prove that how using scale of canvas allow you to
    //to work with small numbers so we can work with cell 1 to 10 while performing operations.
    if (i == 9) {
      line(i, 0, i + 1, 1);
      line(i, 1, i + 1, 0); // 9,1, 10,0
    }
  }

  // let x = lerp(-5,5,0.5)
  // text(x, 0.5 , 0 )
}

// double findReducedValue(double width, double value) =>
//       (value - (width / 2)) / (width / 2);

//(value - (width / 2)) / (width / 2); // range To -> 0 to 1
// 300 - (400/2) 
// 100 
// 100/ 200 = 0.5 so narrowed it down to 0 to 1.
//x / 400 .. 300/400 = 
// (300/400)  - 0.5 == 0.25 


// 0   100   200   300   400 -> screen width.
//-0. -0.5    0    0.5    1.  --> normalized. 
// (-100/400)  - 0.5 --> 

// 0 - (2/2) = 1
// 1/2 = 0.5