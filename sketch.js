var fixedRect, movingRect;
var obj1,obj2
function setup() {
  createCanvas(1200,800);
  obj1 = createSprite(300, 100, 50, 40);
  obj2 = createSprite(800, 400, 90, 80);
  fixedRect = createSprite(400, 100, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(400, 800,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;

  movingRect.velocityY = -5;
  fixedRect.velocityY = +5;
  
}

function draw() {
  background(0,0,0);  
  bounce(movingRect,fixedRect)
  obj1.x=mouseX
  obj1.y=mouseY
  if(isTouching(obj1,obj2)){
    obj1.shapeColor="red"
    obj2.shapeColor="red"
  }else{
    obj1.shapeColor="green"
    obj2.shapeColor="green"
  }
  drawSprites();
}
