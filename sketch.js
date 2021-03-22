const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1;

function setup(){
    var canvas = createCanvas(1000,400);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(700,320,70,70);
    box2 = new Box(850,320,70,70);
    ground = new Ground(500,height,1000,20)
    pig1 = new Pig (775, 300)
    bird = new Bird (50,50)
    log1 = new Log (775,250,225,PI/2)

    box3 = new Box (700,200,70,70);
    box4 = new Box (850,200,70,70);

    pig2  = new Pig (775,220);

    log2 = new Log (775,180,225,PI/2);

    box5 = new Box (775,150,70,70);

    log3 = new Log(800,100,150, -PI/7)
    log4 = new Log(720,100,150, PI/7)
}


function draw(){
    background(0);
    Engine.update(engine);
    console.log(box2.body.position.x);
    console.log(box2.body.position.y);
    console.log(box2.body.angle);
    box1.display();
    box2.display();
    ground.display();
    pig1.display();
    bird.display();
    log1.display();
    box3.display();
    box4.display();
    pig2.display();
    log2.display();
    box5.display();
    log3.display();
    log4.display();
    
}