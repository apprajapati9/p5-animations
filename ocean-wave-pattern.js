
class cell{
    constructor(x, y, radius, angle){
      this.positionX = x
      this.positionY = y
      this.r = radius
      this.angle = angle
      this.x = 0
      this.y = 0
    }
    
    update(){
      this.x = this.r * cos(this.angle) //x distance from center
      this.y = this.r * sin(this.angle) // y distance from center
      this.angle += 0.09
    }
  
    
    drawCell(){
      strokeWeight(5)
      //point(this.x, this.y)
      //point(this.positionX, this.positionY) //center point
      strokeWeight(1)
      
      fill(0,22,11)
      circle(this.positionX+this.x, this.positionY+this.y, this.r)
      
      //line(this.positionX+this.x, this.positionY+this.y, this.positionX, this.positionY)
     // circle(this.positionX, this.positionY, this.r)
    }
  
   
  }
  
  
  let dots = []
  
  let c = new cell(200, 200, 12, 1)
  
  const CANVAS_HEIGHT = 600
  const CANVAS_WIDTH = 600
  
  let cols = 20;  // 30*20 = 600
  let rows = 20;
  
  let radius = 5
  
  let cellSize = CANVAS_WIDTH/rows //60
  
  let angleLoc = 100
  
  /* .... outside columns
  0 1 2
  1 1 2 
  */
  
  function setup() {
    createCanvas(CANVAS_WIDTH, CANVAS_HEIGHT);
    //console.log(rows, cols)
    
    for(let i = 0; i < cols; i++ ){
        dots[i] = []
        for(let j = 0 ; j < rows; j++){
          let r = 10
          dots[i][j] = new cell(cellSize*i+(r*2), cellSize*j+(r*2), radius, i+j) //
          console.log("value of j ", cellSize*j)
          //i+j== 01,02,03,04
          //      11,12,13,14
          //by doing this pattern emerges..
          // 01 -> 1, 02 -> [2]
          // 11 -> [2]  12 -> 3
          //as you can see pervious [0][2] is [1][1]st element sync
          //that's why angles sync for cross pattern and wave illusion emerges.
        }
    }
    
    // 0 0, 0 60, 0 120
  }
  
  function draw() {
    background(220);
    
    strokeWeight(15)
    for(let i = 0; i < cols; i++ ){
       // dots[i] = []
        for(let j =  0 ; j < rows; j++){
          
          dots[i][j].drawCell()
          dots[i][j].update()
        
      
          //0 60, 0 60
          //0 120 0 120
        }
    }
  }