var  fixRect
var movingRect
var rect1
var rect2
var rect3
function setup() {
  createCanvas(800,400);
  fixRect=createSprite(400, 200, 50, 50);
  movingRect=createSprite(600,200,50,80);
  fixRect.shapeColor="blue                               "
  movingRect.shapeColor="blue"
rect1=createSprite(200,300,50,50)
rect2=createSprite(700,300,50,50)
rect3=createSprite(200,0,40,40)
rect1.shapeColor="purple"
rect2.velocityX=-5
rect3.velocityY=5
}

function draw()
{
  background(0);    
  movingRect.x=mouseX
  movingRect.y=mouseY 
if(collison(movingRect,rect1))

{ 
  movingRect.shapeColor="green"
}
else{
  movingRect.shapeColor="blue"
}
bounce(rect1,rect3)
bounce(rect2,rect1)

  drawSprites();                      


}
