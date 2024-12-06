let radius = 100;
let s = []

let angle = 0

function setup() {
  createCanvas(600, 600);
  
  for(let i= 0; i< 20; i++){
    s[i] = new star(random(0,600), random(0,600))
  }
}

function degreesToRadians(degree){
    return PI*degree/180;
}

function draw() {
   
  background(220);
  experimentStar()
  strokeWeight(1)

}

function experimentStar(){
   push()
  frameRate(15)
  

 // translate(random(0,width), random(0,height))
  strokeWeight(1)
  //rotate(60)


  //rotate(angle)
  
  for(let i = 0; i < 20; i++){
    s[i].drawStar()
    s[i].update()
  }
//   s.drawStar()

   //s.update()
  angle+=0.01
  
  if(angle > TWO_PI){ // remember 2 pi not just pi
    angle = 0
  }
  pop()
}

class star{
    constructor(x, y){
      this.x = x
      this.y = y
      this.r = random(0,100)
    }
  
    update(){
      let fluctuation = random(0,100)
      this.r = fluctuation
      // if(this.r < 0){
      //   this.r = 100
      // }
      console.log("radius", fluctuation)
    }
  
    drawStar(){
      strokeWeight(1)
      for(let  i = 0; i <= 360; i+=72){
        let x = this.x + this.r * cos(degreesToRadians(i))
        let y = this.y + this.r * sin(degreesToRadians(i))
    
        //point(x, y)
    
        let x1 = this.x + this.r*cos(degreesToRadians(i+144))
        let y1 = this.y + this.r*sin(degreesToRadians(i+144))
    
  
        line(x,y, x1, y1)

      }
    }
  
}

/*

final starPaint = Paint()
      ..color = const ui.Color.fromARGB(255, 223, 209, 91)
      ..style = PaintingStyle.fill;

    var centerX = size.width / 2;
    var centerY = size.height / 2;
    const starPoints = 5;

    var starPath = Path();

    var radius = size.width / 2 - 8;
    var inner = radius / 2;
    var rotation = math.pi / 2 * 3;
    var step = math.pi / starPoints;

    starPath.lineTo(centerX, centerY - radius);

    for (var i = 0; i < starPoints; i++) {
      var x = centerX + math.cos(rotation) * radius;
      var y = centerY + math.sin(rotation) * radius;
      starPath.lineTo(x, y);
      rotation += step;

      x = centerX + math.cos(rotation) * inner;
      y = centerY + math.sin(rotation) * inner;
      starPath.lineTo(x, y);
      rotation += step;
    }

    starPath.lineTo(centerX, centerY - radius);
    starPath.close();

    canvas.drawPath(starPath, starPaint);


*/

