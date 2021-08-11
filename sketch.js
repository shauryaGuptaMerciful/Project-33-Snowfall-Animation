const Engine = Matter.Engine;
const World =  Matter.World;
const Bodies = Matter.Bodies;

var backgroungImg;
var boy;
var snow = [];
var newSnow = [];
var r;

function preload(){
  backgroundImg = loadImage("snow2.jpg");
  boyImg = loadImage("boy-5657127_960_720.png");
}



function setup() {
  engine = Engine.create();
  world = engine.world;
  createCanvas(800,400);

  fall()
  sFall()
  for(r = 0; r<snow.length; r++){
    snow[r].display()
  }
  for(s = 0; s<snow.length; s++){
    newSnow[s].display()
  }

  ground = new Ground(600,height,1200,20);
  boy = createSprite(200, 300, 200, 200);
  boy.scale = 0.35;
  boy.addImage(boyImg);

}

function draw() {
  background(backgroundImg);  
  Engine.update(engine);



  if(boy.y<265){
  boy.y = boy.y+10
  }

if(keyDown("left")){
  boy.x = boy.x - 10;
}

if(keyDown("right")){
  boy.x = boy.x + 10;
}

if(keyDown("space") && boy.y>200 ){
  boy.y = boy.y - 20;
}

  drawSprites();
}

function fall(){
  if(frameCount%5===0){
    snow.push(new Snow(random(0,800),0,50,50))
  }
}

function sFall(){
  if(frameCount%5===0){
    newSnow.push(new Snow2(random(0,800),0,40,40))
  }
}

//  https://atulya1110.github.io/c33/