const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1;
var img;


function preload(){

img=loadImage("sprites/bg.png")

}


function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    
    ground = new Ground(600,height,1200,20)

    box1 = new Box(300,300,90,20);
    box2 = new Box(300,290,90,20);
   
    box1 = new Box(500,250,150,100);
   

}

function draw(){
    background(img);
    Engine.update(engine);
    console.log(box2.body.position.x);
    console.log(box2.body.position.y);
    console.log(box2.body.angle);
    
    box1.display();

    ground.display();
}