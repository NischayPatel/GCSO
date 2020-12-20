function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);

  speed = random(55,90)
  weight = random(400,1500)

  car = createSprite(50,200,50,50);
  car.velocityX = speed;
  car.shapeColor("white");

  wall = createSprite(700,200,200,100);
  wall.shapeColor(0);
}

function draw() {
  background(255,255,255);  
if(wall.x-car.x<(car.width+wall.width)/2) {

  car.velocityX = 0;
  var deformation = 0.5*weight*speed*speed/22500;
  if(deformation>180){
    car.shapeColor = color(255,0,0); 
     }
  if(deformation<180 && deformation>100){
    car.shapeColor = color(230,230,0);
  }
  if(deformation<100){
   car.shapeColor = color(0,255,0); 
  }
}
  drawSprites();
}
