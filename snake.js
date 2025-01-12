
class V2{
    constructor(x,y){
      this.x = x
      this.y = y
    }
  }
  
  class snake {
    constructor(x,y, c) {
      this.x = x
      this.y = y
      this.c = c
    }

    drawHead() {
      fill(this.c) 
      stroke(this.c)
      circle(this.x/2, this.y/2, 1)
    }
    
    drawSnake(num, dir){
  
      if(num == 0){
        circle(this.x, this.y, 1.2)
        fill('black')

        if(dir == 1 || dir == 2){
           circle(this.x, this.y-0.3, 0.4)
           circle(this.x, this.y+0.3, 0.4)
        }else {
          circle(this.x-0.3, this.y, 0.4)
          circle(this.x+0.3, this.y, 0.4)
        }
        
        // 1 left 
        strokeWeight(.25)
        if(dir == 1)
          line(this.x, this.y, this.x-1, this.y)
        
        //right
        if(dir == 2){
          line(this.x, this.y, this.x+1, this.y)
        }

        if(dir == 3){
          line(this.x, this.y, this.x, this.y-1)
        }

        if(dir == 4)
           line(this.x, this.y, this.x, this.y+1)

        strokeWeight(0.1)
      }else{
        fill(this.c)
        stroke(this.c)
        circle(this.x, this.y, 1)
      }

      //Uncomment below code in case wanna show snake's num/size
      // fill('black')
      // strokeWeight(0.01)
      // textSize(0.8);
      // text(num, this.x-.2, this.y) 
    }
    
    swalloAnim(){
      fill(this.c)
      stroke(this.c)
      square(this.x, this.y, 2)
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
    
    setColor(c){
      this.c = c
    }
    
  }
  
  let WIDTH = 600
  let HEIGHT = 600
  
  let scaleFactor = 20
  // scaling 10 times. thus 600/10 = 60 lines.
  //simplest way to think is now each point/line has 10x10 coordinate. 
  
  let cell = 5  //  600/5 = 120
  
  
  let randomLocation = 0
  
  let sn = new snake(0,0,'green')
  let lines = (HEIGHT/scaleFactor)
  
  let longSnake = []
  
  let direction = 3
  
  let fRate = 15
  let updateFood = false
  
  function getRandomLocation() {
    return random(lines/4, lines- (lines/4)).toFixed(0) 
  }
  
  function getRandomFoodLocation() {
    return random(0,lines).toFixed(0) 
  }
  
  function getRandomColor() {
    let r = random(1,255)
    let g= random(1,255)
    let b = random(1,255)
    return color(r,g,b)
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
        let tempSnake = new snake(i, randomLocation, 'green')
        longSnake.push(tempSnake)
         //console.log("added")
      }
    }else{
      for(let i = randomLocation; i < randomLocation+5; i++){
        let tempSnake = new snake(randomLocation, i, 'green')
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
    
    let temp = new snake(first.x, first.y, 'green')
      
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
        
        if(first.y > 0){
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
        let current = new snake(longSnake[i].x, longSnake[i].y, 'green')
        longSnake[i].setLocation(temp.x, temp.y)
        temp = current
    }
    
    if(extend){
      updateFood = true
      if(direction == 1 || direction == 2) {
        longSnake.push(new snake(temp.x + 1, temp.y, 'green'))
      }
      if(direction == 3 || direction == 4) {
        longSnake.push(new snake(temp.x, temp.y + 1, 'green'))
      }
      
      let foodC = sn.c //color of snake
      for(let i = 0; i < longSnake.length; i++){
          longSnake[i].c = foodC
          longSnake[i].c = 'green'
      }
    }
    
    if(updateFood){
      sn.setLocation(getRandomFoodLocation(), getRandomFoodLocation())
      sn.setColor(getRandomColor())
      updateFood = false
    }
    
  }
  
  
  function draw() {
    
    frameRate(fRate)
    
    push()
    
    background(220);
    
    scale(scaleFactor) // 600/60 = 10 lines. 
    // 600/10 = 60 lines.
  
    
    sn.drawSnake()
    

    strokeWeight(1/scaleFactor)
    // for(let i = 0; i <= 60; i++) {
    //   line(0, i, WIDTH, i)
    //   line(i,0, i, HEIGHT)
    // }  
  
    // line(0, 0, 1, 1)
    // line(0, 1, 1, 0)

    // //just to test and 
    // line(9, 9, 10, 10)
    // line(9, 10, 10, 9)
    console.log("x,y ", sn.x, sn.y)
  

        // Check for arrow key presses
        if (keyIsPressed) {
          if (key === 'a' || keyCode === LEFT_ARROW) {
            //updateSnakePosition(1)
            direction = 1
          } else if (key === 'd' || keyCode === RIGHT_ARROW) {
            //updateSnakePosition(2)
            direction = 2
          } else if (key === 'w' || keyCode === UP_ARROW) {
            //updateSnakePosition(3)
            direction = 3
          } else if (key === 's' || keyCode === DOWN_ARROW) {
            //sn.moveSnake(4)
            direction = 4
            //updateSnakePosition(4)
          }
        }
    for(let i = 0; i < longSnake.length; i++){
      longSnake[i].drawSnake(i, direction)
      // if(i != 0){
      //   longSnake[i].drawSnake()
      // }else{
      //   longSnake[i].drawHead()
      // }
    }
    updateSnakePosition()
    
    
  }