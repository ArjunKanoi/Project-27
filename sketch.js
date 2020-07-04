var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;
	roof = new Roof(400,200,400,20);
	bob1 = new Bob(200,400,50);
	bob2 = new Bob(250,400,50);
	bob3 = new Bob(300,400,50);
	bob4 = new Bob(350,400,50);
	bob5 = new Bob(400,400,50);


	chain = new Rope(roof.body, bob1.body);
	chain2 = new Rope(roof.body, bob2.body);
	chain3 = new Rope(roof.body, bob3.body);
	chain4 = new Rope(roof.body, bob4.body);
	chain5 = new Rope(roof.body, bob5.body);


	//packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:1.5, isStatic:false});
	//World.add(world, packageBody);
	

	//Create a Ground
	//ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	//World.add(world, ground);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  roof.display();
  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  chain.display();
  chain2.display();
  chain3.display();
  chain4.display();
  chain5.display();

  
  drawSprites();
 
}



