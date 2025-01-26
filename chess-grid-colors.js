
let CW = 800
let CH = 800

let scaleFactor = 80 // 800/20 = 40 lines.

let rows = CH/scaleFactor
let cols = CW/scaleFactor

function setup() {
  createCanvas(CW, CH);
}

function draw() {
  background(220);
  
  push()
  scale(scaleFactor)
  strokeWeight(1/scaleFactor)
  
  for(let i = 0; i <= rows; i++){
    line(i, 0, i, rows)
    line(0, i, cols, i)
  }
  
  //rect(9,9,1)
  
  for(let i = 0; i < rows; i++) {
    for(let j = 0; j < cols; j++) {
      
      
      let v = i+j // taking rows into consideration to switch between 0 and 1 initially to set the grid pattern.
      
      if(v%2 == 0) {
        fill('black')
        rect(j,i,1)
      }else{
        fill('white')
        rect(j,i,1)
      }
      
      
      //WORKS..
//         let x = i+j
//         let y = i
      
//        if(j % 2 == 0){
//          fill('black')
//          rect(x,y,1)
//          rect(y,x,1)
//        }else{
//          fill('white')
//          rect(x,y,1)
//          rect(y,x,1)
//        }
    }
  }
  
  pop()
  
}