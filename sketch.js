const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var hammer;


function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    plane = new Plane(600,600);
    hammer = new Hammer(10,100);
    rubber1 = new Rubber(250,570);
    rubber2 = new Rubber(400,570);
    rubber3 = new Rubber(600,570);
    rubber4 = new Rubber(850,570    );

}

function draw(){
    background("lightBlue");
    Engine.update(engine);


    plane.display();
    hammer.display();
    rubber1.display();
    rubber2.display();
    rubber3.display();
    rubber4.display();
    
 
}