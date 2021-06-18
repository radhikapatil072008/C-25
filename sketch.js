
const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
function setup(){
  var canvas = createCanvas(1200,800);
  engine = Engine.create();
  world = engine.world;
  
  object=Bodies.rectangle(100,100,50,50);
  World.add(world,object);
  console.log(object);

  object2=Bodies.rectangle(200,100,50,50);
  World.add(world,object2);
  //console.log(object);

  object3=Bodies.circle(300,100,40);
  World.add(world,object3);

  object4=Bodies.rectangle(400,100,80,30);
  World.add(world,object4);

  object5=Bodies.rectangle(500,100,10,100);
  World.add(world,object5);

}
function draw()
{
  background(0);
  Engine.update(engine)
  rectMode(CENTER);
  fill("yellow")
  rect(object.position.x,object.position.y,50,50);
  fill("red")
  rect(object2.position.x,object2.position.y,50,50);
  fill("green")
  circle(object3.position.x,object3.position.y,80)
  fill("blue")
  rect(object4.position.x,object4.position.y,80,30)
  fill("skyblue")
  rect(object5.position.x,object5.position.y,30,100)











}
