var PLAY=1;
var END=0;
var gameState = PLAY;

var captain,ground,jokerground,thanos,brick;
var box1,box2,sheild,brick1,brick2,test;
var Score;


function setup(){
createCanvas(windowWidth,windowHeight); 
 captain=createSprite(80,400,20,50);
captain.addImage("captain",captainimage)
 captain.scale=0.1;
  ground=createSprite(windowWidth/3,windowHeight/1.2,1000,10);
  ground.addImage("ground",groundimg);
 jokerground=createSprite(90,500,90,90);
  jokerground.visible=false;
  thanos=createSprite(windowWidth/1.2,500,20,20);
  thanos.addImage("thanos",thanosimg);
  thanos.scale=0.1;
 box1=createSprite(580,1,100,50);
  box1.visible=false;
 box2=createSprite(580,630,100,50);
  box2.visible=false;
  thanos.velocityY=-50;
  sheild=createSprite(80,400,20,20);
  sheild.addImage("sheild",sheildimg);
  sheild.scale=0.1
  brick=createSprite(750,0,20,4000);
  brick.visible=false;
  brick2=createSprite(10,10,800,10);
  brick2.visible=false;
  brick1=createSprite(80,650,800,10);
  brick1.visible=false;
  Score = 0;
 
}
function preload(){
captainimage=loadImage("Captain-America-PNG-Photo.png");  
backgroundimg=loadImage("11097.jpg")  
groundimg=loadImage("PikPng.com_snowdrift-png_5324149.png");
thanosimg=loadImage("ClipartKey_2829772.png")
  sheildimg=loadImage("captain-america-s-shield-clint-barton-iron-man-s-h-i-e-l-d-captain-america-2888bb93094ecbb690d825db7073bb1e.png")
endsong=loadSound("Alan Silvestri - Portals (From Avengers Endgame Audio Only) (1).mp3");
  startimg=loadImage("pngfind.com-resume-icon-png-2017441.png");
  
}

function draw(){


  
 if(gameState === PLAY){
 
 
  
  
  
   if(sheild.isTouching(brick)){
   sheild.x=80;
   sheild.y=400;
   sheild.velocityX=0;
 }
  
  if(keyDown("up")){
    captain.y = captain.y - 4;
  } 
  
  if(keyDown("down")){
    captain.y = captain.y + 4;
  }
   captain.depth=ground.depth;
  captain.depth=captain.depth+1
  
  captain.depth=sheild.depth;
captain.depth=captain.depth+1;
  
  if(keyDown("space")){
    sheild.velocityX=70;
     touches = []; 
  }
 
 sheild.y=captain.y 
  
 thanos.bounceOff(box1) ;
 thanos.bounceOff(box2) ;
  
  captain.bounce(brick2);
  captain.bounce(brick1);
  
  if(sheild.isTouching(thanos)){
    Score=Score+1;
    sheild.x=80;
   sheild.y=400;
    
  }
//thanos.debug=true;

}  

  
background(backgroundimg);
  
  
 
 
 
  

  
  

  

  
 drawSprites();
    textSize(50);
  fill("blue");
   text("Score= " + Score, 100,50);
}