
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine,world;



function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground = new Ground(400,665,900,24);
	
	oneSide = new Dustbin(605,650,171,20);
	twoSide = new Dustbin(530,610,20,100);
	threeSide = new Dustbin(700,610,20,100);

	paper = new Paper(50,610,15);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  ground.display();
  oneSide.display();
  twoSide.display();
  threeSide.display();
  paper.display();

  
  drawSprites();
}
function keyPressed(){
	if(keyCode === UP_ARROW){
    Matter.Body.applyForce(paper.body,paper.body.position,{x:25,y:-39})
	}
}



