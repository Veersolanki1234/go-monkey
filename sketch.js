
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score
var ground;
var survivalTime=0;



function preload(){
  
  
  monkey_running=     loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
 
}



function setup() {
   //creating monkey
     monkey = createSprite(80,315,2020);
     monkey.addAnimation(" moving",monkey_running);
     monkey.scale=0.1

  ground = createSprite(400,350,900,10);
  ground.velocityX=-4;
  ground.x = ground.width /2;
  console.log(ground.x)
 
 
  
}


function draw() {
background(255);
  
  
  
  if (ground.x < 0){
      ground.x = ground.width/2;
  }
  
  
    if(keyDown("space")&& monkey.y >= 100) {
        monkey.velocityY = -12;
 }
          stroke("white");
          textSize(20);
          fill("white");
          text("Score: "+score,500,50);
  
          stroke("black");
          textSize(20);
          fill("black");  
          survivalTime=Math.ceil(frameCount/frameRate())
            text("Survival Time: "+ survivalTime,100,50);
  
   monkey.velocityY = monkey.velocityY + 0.8
  
   monkey.collide(ground);
  
  drawSprites();
  
  
  
  
}
function spawnObstacles() {


var obstacle = createSprite(600,165,10,40);
   obstacle.addImage(obstaceImage);
   
obstacle.scale =0; 
    obstacle.lifetime = 300;

    
 
 }