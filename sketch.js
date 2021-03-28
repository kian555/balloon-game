var blueB,greenB,redB,pinkB,bg,bow;
var blueBImg,greenBImg,redBImg,pinkBImg,bgImg,bowImg;
var arrow,arrowImg;
var blueG,greenG,redG,pinkG,arrowG;
var score=0;

function preload(){
bgImg=loadImage("background0.png");
  blueBImg=loadImage("blue_balloon0.png");
  greenBImg=loadImage("green_balloon0.png");
  redBImg=loadImage("red_balloon0.png");
  pinkBImg=loadImage("pink_balloon0.png");
  bowImg=loadImage("bow0.png");
  arrowImg=loadImage("arrow0.png")
}

function setup() {
  createCanvas(600, 600);
  bg=createSprite(0,0,600,600);
  bg.addImage(bgImg);
  bg.scale=3
  bg.velocityX=-2;
  
  bow=createSprite(500,300,20,20);
  bow.addImage(bowImg);
  
  redG=new Group();
  blueG=new Group();
  greenG=new Group();
  pinkG=new Group();
  arrowG=new Group();
  
  
}

function draw() {
if(bg.x<0){
bg.x=width/2;
}
bow.y=mouseY;
  if(keyDown("space")){
  createArrow()
  }
if(frameCount%80===0){
var r=Math.round(random(1,4));
  if(r===1){
  spawnRedB()
  }
  else if(r===2){
  spawnBlueB()
   
  }
  else if(r===3){
    spawnGreenB()
    
    
  }
  else{
    spawnPinkB()
   
    
  }
}
if(arrowG.isTouching(redG)){
arrowG.destroyEach()
redG.destroyEach()
score=score+1;

  
}
  if(arrowG.isTouching(blueG)){
arrowG.destroyEach()
blueG.destroyEach()
score=score+3;

}
  if(arrowG.isTouching(greenG)){
arrowG.destroyEach()
greenG.destroyEach()
score=score+5;

}
  if(arrowG.isTouching(pinkG)){
arrowG.destroyEach()
pinkG.destroyEach()
score=score+7;

}
drawSprites()
text("Score: "+score,400,50)
}
function spawnRedB(){
  redB=createSprite(0,300,20,20);
  redB.addImage(redBImg);
  redB.velocityX=2;
  
  redB.y=Math.round(random(50,450))
  redB.scale=0.1;
  redB.lifetime=300;
  redG.add(redB);
  
  }
function spawnBlueB(){
  blueB=createSprite(0,300,20,20);
  blueB.addImage(blueBImg);
  blueB.velocityX=2;
 
  blueB.y=Math.round(random(50,450))
  blueB.scale=0.1;
  blueB.lifetime=300;
  blueG.add(blueB)
  
  }
function spawnPinkB(){
  pinkB=createSprite(0,300,20,20);
  pinkB.addImage(pinkBImg);
  pinkB.velocityX=2;
 
  pinkB.y=Math.round(random(50,450))
  pinkB.scale=1.1;
  pinkB.lifetime=300;
  pinkG.add(pinkB)
  }
function spawnGreenB(){
  greenB=createSprite(0,300,20,20);
  greenB.addImage(greenBImg);
  greenB.velocityX=2;
 
  greenB.y=Math.round(random(50,450))
  greenB.scale=0.1;
  greenB.lifetime=300
  greenG.add(greenB);
  }
function createArrow(){
arrow=createSprite(450,300,20,20);
  arrow.addImage(arrowImg);
  arrow.scale=0.2
  arrow.velocityX=-3;
  arrow.y=bow.y
  arrow.lifetime=200
  arrowG.add(arrow)
}


