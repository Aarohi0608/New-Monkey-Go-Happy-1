var PLAY = 1;
var END = 0;
var monkey , monkey_running;
var banana ,bananaImage, obstacle, obstacleImage;
var FoodGroup, obstacleGroup;
var survivalTime = 0;
var gameState = PLAY;


function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacelImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(600,400);
  
 monkey = createSprite(80,315,20,20);
 monkey.addAnimation("running",monkey_running);
 monkey.scale =  0.1;
  
 ground = createSprite(5,350,600,10);
 ground.velocityX = -3;
 ground.x = ground.width/2;
  
  foodGroup = new Group();
  obstacleGroup = new Group();

  
  
}


function draw() {

  background("skyblue");
  
  ground.x = ground.width/2;
  
  monkey.collide(ground);
 
    
if(frameCount % 20  === 0){
  
  survivalTime = survivalTime + 1;
  
}
  
text("Survival Time :" + survivalTime,50,50);
  
if(keyDown("space") && monkey.y>235){
  
  monkey.velocityY = -12;
  
 
}
  
    monkey.velocityY  = monkey.velocityY + 0.8;
  
  
  
  
  food();
  obstacles();

  drawSprites();
  
}

function food(){
  
  if(frameCount % 80 === 0){
    banana = createSprite(600,200,10,20);
    
    banana.addImage(bananaImage);
    
    banana.scale = 0.1;
    
    banana.y = Math.round(random(120,200));
    
    banana.velocityX = -3;
    
    banana.lifetime = 250;
    
    banana.depth = monkey.depth;
    
    monkey.depth = monkey.depth + 1;
    
    foodGroup.add(banana);
    
  }
}
  
  function obstacles(){
    
    if(frameCount % 300 === 0){
      
      obstacle = createSprite(600,330,20,20);
      
      obstacle.addImage(obstacelImage);
      
      obstacle.scale = 0.1;
      
      obstacle.velocityX = -3;
      
      obstacle.lifetime = 250;
      
      obstacle.depth  = monkey.depth;
      
      monkey.depth = monkey. depth +1;
      
    }
    
    
    
    
  }
  
  
  






    
    
    
  
  







