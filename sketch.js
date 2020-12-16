var ground;
var monkey , monkey_running;
var banana ,bananaImage, obstacle, obstacleImage;
var FoodGroup, obstacleGroup;
var score;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png");
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 

    
}



function setup() {
  createCanvas(600,200);
  
  monkey = createSprite(50,189,10,10);
  monkey.addAnimation("monkey",monkey_running);
  monkey.scale = 0.1;
    
  
  ground = createSprite(300,190,1200,10)
  ground.velocityX = -10 

  obstacleGroup = new Group()
  foodGroup = new Group()
 
  score = 0;
}


function draw() { 
background("white")
 
text("survival Time:"+ score,100,10);

  
  
  if(ground.x <0 ){
      ground.x = ground.width/2
  }
  
   monkey.velocityY = monkey.velocityY + 0.8;

  
   monkey.collide(ground)
  
  
  
  if(keyDown("space")&& monkey.y == 154.3){
    monkey.velocityY = -12
    
 
  }
   if(frameCount % 10 === 0){
    score += 1
  }
  
console.log(monkey.y)
  
  
  spawnBananas();
  spawnObstacles();
  drawSprites();

} 
 function spawnBananas(){
   if(frameCount % 80 == 0 ){
     banana = createSprite(600,Math.round(random(40,100)),10,10)
     banana.addImage("banana",bananaImage)
     banana.velocityX = -5
     banana.scale = 0.1
     foodGroup.add(banana)
   }
 }

 function spawnObstacles(){
   if(frameCount % 80 == 0 ){
     obstacle = createSprite(600,167,10,10)
     obstacle.addImage("obstacle",obstacleImage);
     obstacle.velocityX = -10
     
     obstacle.scale = 0.1
     
     obstacleGroup.add(obstacle)
     
     
   }
 }





