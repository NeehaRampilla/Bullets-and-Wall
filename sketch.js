var wall, thickness;
var bullet,speed,weight;
function setup() {
  createCanvas(1600,400);
  wall= createSprite(1200, 200, thickness,height/2);
  bullet= createSprite(50,200,30,5);
  wall.shapeColor="blue";
  bullet.shapeColor="white";
  speed=random(223,321);
  weight=random(30,52);
  bullet.velocityX=speed;
  thickness=random(22,83);
}

function draw() {
  background(0);  
 
if (hasCollided(bullet,wall)){
  bullet.velocityX=0;
var damage=0.5* weight*speed*speed/(thickness*thickness*thickness);
if (damage>10){
  wall.shapeColor=color(225,0,0);
}
if (damage<10){
  wall.shapeColor=color(0,225,0);
}
}
  drawSprites();
}
function hasCollided(bullet,wall){
  bulletRightEdge=bullet.x+bullet.width;
  wallLeftEdge=wall.x;
  if (bulletRightEdge>=wallLeftEdge){
    return true;
  }else{
    return false;
  }
 
}
