const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1,box2,box3,box4,box5;
var ground;
var pig,pig1
var log,log1,log2,log3;
var bird;

function setup(){
    var canvas = createCanvas(1600,755);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(1000,700,50,50);
    box2= new Box(1200,700,50,50);
    box3=new Box (1000,600,50,50);
    box4=new Box (1200,600,50,50);
    box5=new Box (1100,500,50,50);
    ground= new Ground(800,730,1600,10);
    pig = new Pig (1100,700);
    pig1=new Pig(1100,600);
    log= new Log (1100,630,250,PI/2);
    log1= new Log (1100,530,250,PI/2);
    log2= new Log (1030,450,125,PI/7)
    log3= new Log (1150,450,125,-PI/7);
    bird=new Bird (200,200);

}

function draw(){
    background(0);
    Engine.update(engine);
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    ground.display();
    pig.display();
    pig1.display();
    log.display();
    log1.display();
    log2.display();
    log3.display();
    bird.display();
}