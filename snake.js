
class snake {
    constructor(x,y) {
      this.x = x
      this.y = y
    }
    
    drawSnake(){
      fill('rgb(39,35,35)')
      square(this.x, this.y, 1)
    }
  
    //1 left, 2, right, 3 up, 4 down
    moveSnake(direction){
      
      this.x = Number(this.x)
      this.y = Number(this.y)
      
      if(direction == 1){
        this.x -= 1
      }
      if(direction == 2){
        this.x += 1
      }
      if(direction == 3){
        this.y -= 1
      }
      if(direction == 4){
        this.y += 1
      }
      
    }
    
    setLocation(x,y){
      this.x = x;
      this.y = y;
    }
    
  }
  
  let WIDTH = 600
  let HEIGHT = 600
  
  let scaleFactor = 10 
  // scaling 10 times. thus 600/10 = 60 lines.
  //simplest way to think is now each point/line has 10x10 coordinate. 
  
  let cell = 5  //  600/5 = 120
  
  
  let randomLocation = 0
  
  let sn = new snake(0,0)
  let lines = HEIGHT/scaleFactor
  
  let longSnake = []
  
  function setup() {
    createCanvas(HEIGHT, WIDTH);
    randomLocation = random(lines/4, lines- (lines/4)).toFixed(0) //keeping snake somehwere in the middle.
    sn.setLocation(randomLocation, randomLocation)
    
    let dir = random(0,2);
    console.log(dir)
    
    randomLocation = Number(randomLocation)
    
    //fill snake
    //23 23
    if(dir > 1){
      for(let i = randomLocation; i < randomLocation+5; i++){
        let tempSnake = new snake(i, randomLocation)
        longSnake.push(tempSnake)
         //console.log("added")
      }
    }else{
      for(let i = randomLocation; i < randomLocation+5; i++){
        let tempSnake = new snake(randomLocation, i)
        longSnake.push(tempSnake)
        //console.log("added", i)
      }
    }
    
    console.log("snake..", longSnake)
  }
  
  function updateSnakePosition(direction){
    
    let first = longSnake[0]
    first.x = Number(first.x)
    first.y = Number(first.y)
    
    let temp = new snake(first.x, first.y)
      
      if(direction == 1){
        first.x -= 1
      }
      if(direction == 2){
        first.x += 1
      }
      if(direction == 3){
        first.y -= 1
      }
      if(direction == 4){
        first.y += 1
      }
    
    for(let i = 1; i < longSnake.length; i++){
        let current = new snake(longSnake[i].x, longSnake[i].y)
        longSnake[i].setLocation(temp.x, temp.y)
        temp = current
    }
  }
  
  
  function draw() {
    
    frameRate(10)
    
    push()
    
    background(220);
    
    background(220);
    
    scale(scaleFactor) // 600/60 = 10 lines. 
    // 600/10 = 60 lines.
  
    
    strokeWeight(1/scaleFactor)
    for(let i = 0; i <= 60; i++) {
      line(0, i, WIDTH, i)
      line(i,0, i, HEIGHT)
    }  
  
    console.log("x,y ", sn.x, sn.y)
  
  
    // Check for arrow key presses
    if (keyIsPressed) {
      if (keyCode === LEFT_ARROW) {
        updateSnakePosition(1)
      } else if (keyCode === RIGHT_ARROW) {
        updateSnakePosition(2)
      } else if (keyCode === UP_ARROW) {
        updateSnakePosition(3)
      } else if (keyCode === DOWN_ARROW) {
        //sn.moveSnake(4)
        updateSnakePosition(4)
      }
    }
    for(let i = 0; i < longSnake.length; i++){
      longSnake[i].drawSnake()
    }
    
  }