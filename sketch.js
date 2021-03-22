var backgroundImg
var blueBalloon
var greenBalloon
var pinkBalloon
var redBalloon
var Bow
var Arrow
var score=0
var arrows;
var redBGroup,greenBGroup,blueBGroup,pinkBGroup

function preload() {
  backgroundImg=loadImage ("background0.png")
  blueBalloon=loadImage ("blue_balloon0.png")
  greenBalloon=loadImage ("green_balloon0.png")
  pinkBalloon=loadImage ("pink_balloon0.png")
  redBalloon=loadImage ("red_balloon0.png")
  Bow=loadImage ("bow0.png")
  Arrow=loadImage ("arrow0.png")
}
function setup() {
  createCanvas(600, 600);
  bow=createSprite (550,300,20,20)
  bow.addImage ("bow0.png",Bow)
  
  arrows = createGroup();
  redBGroup = createGroup();
  greenBGroup = createGroup();
  blueBGroup = createGroup();
  pinkBGroup = createGroup();
}

function draw() {
background(backgroundImg)
drawSprites();
  
  text("score: "+score,550,20)
  if (mouseDown("leftButton")) {
    createArrow();
  }
  
  bow.y=World.mouseY
  
  
   if (frameCount%100 == 0 ){
    populateRedBalloons();
   }
  
   if (frameCount%110 == 0 ){
    populateGreenBalloons();
   }
  
   if (frameCount%90 == 0 ){
    populateBlueBalloons();
   }
  
   if (frameCount%80 == 0 ){
    populatePinkBalloons();
   }
  

  if(arrows.collide(redBGroup)){
     redBGroup.destroyEach();
     score=score+1;
     }
  
  if(arrows.collide(greenBGroup)){
     greenBGroup.destroyEach();
     score=score+1;
     }
  
  if(arrows.collide(blueBGroup)){
     blueBGroup.destroyEach();
     score=score+1;
     }
  
  if(arrows.collide(pinkBGroup)){
     pinkBGroup.destroyEach();
     score=score+1;
     }

}

function createArrow(){
  var arrow=createSprite(550,bow.y,20,20);
  arrow.velocityX = -3
  arrow.addImage ("arrow0.png",Arrow)
  arrow.scale = 0.3
  arrows.add(arrow);
}

function populateRedBalloons(){

  redB = createSprite (random(50,450),600,20,20)
  redB.addImage ("red_balloon0.png",redBalloon)
  redB.scale = 0.09
  redB.velocityY = -2
  redB.setCollider ("circle",0,0,100)
  redB.debug=false
  
  redBGroup.add(redB);
 
}

function populateGreenBalloons(){
 
  greenB = createSprite (random(50,450),600,20,20)
  greenB.addImage ("green_balloon0.png",greenBalloon)
  greenB.scale = 0.09
  greenB.velocityY = -2
  greenB.setCollider ("circle",0,0,100)
  greenB.debug=false
  
  greenBGroup.add(greenB)
}

function populateBlueBalloons(){

  blueB = createSprite (random(50,450),550,20,20)
  blueB.addImage ("blue_balloon0.png",blueBalloon)
  blueB.scale = 0.09
  blueB.velocityY = -2
  blueB.setCollider ("circle",0,0,100)
  blueB.debug=false
  
  blueBGroup.add(blueB)
}

function populatePinkBalloons(){

  pinkB = createSprite (random(50,450),600,20,20)
  pinkB.addImage ("pink_balloon0.png",pinkBalloon)
  pinkB.scale = 1
  pinkB.velocityY = -2
  pinkB.setCollider ("circle",0,0,100)
  pinkB.debug=false
  
  pinkBGroup.add(pinkB)
}