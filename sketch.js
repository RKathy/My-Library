var fixedRect, movingRect,object1,object2,object3;
function setup() {
  createCanvas(800,400);
  fixedRect = createSprite(400, 300, 50, 50);
  object1=createSprite(100,300,32,32);
  object2=createSprite(200,100,29,29);
  object3=createSprite(300,100,35,35);
  movingRect = createSprite(0,300,30,30);
  movingRect.debug = true;
  fixedRect.debug = true;
  object1.debug=true;
  object2.debug=true;
  object3.debug=true;

  object1.velocityX=4;
  fixedRect.velocityX=-4;

  fixedRect.shapeColor = "green";
  movingRect.shapeColor = "green";
  object1.shapeColor="green";
  object2.shapeColor="green";
  object3.shapeColor="green";

  
}

function draw() {
  background(255,255,255);  
  movingRect.x = mouseX;
  movingRect.y = mouseY;
  
  console.log("Distance when touches "+ (fixedRect.width/2 + movingRect.width/2));
  console.log("Distance between the rectangles "+ (movingRect.x - fixedRect.x));

  if(isTouching(movingRect, object2)){
    fixedRect.shapeColor = "green";
    movingRect.shapeColor = "blue";
  }
  else
  {
    fixedRect.shapeColor = "green";
    movingRect.shapeColor = "green";
  }
  console.log(isTouching(movingRect, object3));
  bounceOff(object1,fixedRect);
 
  drawSprites();
}

