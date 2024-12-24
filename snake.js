
class V2{
    constructor(x,y){
      this.x = x
      this.y = y
    }
  }
  
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
  
  let direction = 3
  
  let fRate = 10
  let updateFood = false
  
  function getRandomLocation() {
    return random(lines/4, lines- (lines/4)).toFixed(0) 
  }
  
  function getRandomFoodLocation() {
    return random(0,lines).toFixed(0) 
  }
  
  function setup() {
    createCanvas(HEIGHT, WIDTH);
    randomLocation = getRandomLocation() //keeping snake somehwere in the middle.
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
    sn.setLocation(getRandomLocation(), getRandomLocation())
  }
  
  function updateSnakePosition(){
    
    let extend = false
    let first = longSnake[0]
    first.x = Number(first.x)
    first.y = Number(first.y)
    
    let temp = new snake(first.x, first.y)
      
      if(direction == 1){
        if(first.x > 0) {
          first.x -= 1
        }else{
          first.x = lines
        }
        
        if(first.x == sn.x && first.y == sn.y){
          extend = true
        }
      }
      if(direction == 2){
      
        if(first.x < lines){
          first.x += 1
        }else{
          first.x = 0
        }
        if(first.x == sn.x && first.y == sn.y){
          extend = true
        }
      }
      if(direction == 3){
        
        if(first.y >= 0){
          first.y -= 1
        }else{
          first.y = lines
        }
        
        if(first.y == sn.y && first.x == sn.x){
          extend = true
        }
      }
      if(direction == 4){
        if(first.y <= lines){
          first.y += 1
        }else{
          first.y = 0
        }
        
        if(first.y == sn.y && first.x == sn.x){
          extend = true
        }
        
      }
    
    for(let i = 1; i < longSnake.length; i++){
        let current = new snake(longSnake[i].x, longSnake[i].y)
        longSnake[i].setLocation(temp.x, temp.y)
        temp = current
    }
    
    if(extend){
      updateFood = true
      if(direction == 1 || direction == 2) {
        longSnake.push(new snake(temp.x + 1, temp.y))
      }
      if(direction == 3 || direction == 4) {
        longSnake.push(new snake(temp.x, temp.y + 1))
      }
    }
    
    if(updateFood){
      sn.setLocation(getRandomFoodLocation(), getRandomFoodLocation())
      updateFood = false
    }
    
  }
  
  
  function draw() {
    
    frameRate(fRate)
    
    push()
    
    background(220);
    
    background(220);
    
    scale(scaleFactor) // 600/60 = 10 lines. 
    // 600/10 = 60 lines.
  
    
      sn.drawSnake()
    
    strokeWeight(1/scaleFactor)
    for(let i = 0; i <= 60; i++) {
      line(0, i, WIDTH, i)
      line(i,0, i, HEIGHT)
    }  
  
    console.log("x,y ", sn.x, sn.y)
  
  
    // Check for arrow key presses
    if (keyIsPressed) {
      if (keyCode === LEFT_ARROW) {
        //updateSnakePosition(1)
        direction = 1
      } else if (keyCode === RIGHT_ARROW) {
        //updateSnakePosition(2)
        direction = 2
      } else if (keyCode === UP_ARROW) {
        //updateSnakePosition(3)
        direction = 3
      } else if (keyCode === DOWN_ARROW) {
        //sn.moveSnake(4)
        direction = 4
        //updateSnakePosition(4)
      }
    }
    for(let i = 0; i < longSnake.length; i++){
      longSnake[i].drawSnake()
    }
    updateSnakePosition()

  }