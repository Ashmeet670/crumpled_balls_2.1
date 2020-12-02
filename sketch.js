
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


var paperBody,ground
var bin1,bin2,bin3
var binImage , paperImage
var bin

function preload()
{
	binImage = loadImage("dustbingreen.png")
}

function setup() {
	createCanvas(1200, 400);


	bin = createSprite(1005,270,30,30)
	bin.addImage(binImage)
	bin.scale = 0.35

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	paper = new Paper(200,200,50,50)

	ground = new Ground(600,350,width,20,"white")

	bin1 = new Bin(1055,281,20,100,"green");
	bin2 = new Bin(960,281,20,100,"green");
	bin3 = new Bin(1010,330,100,20,"green");

	wall = new Bin(1200,40,20,600,"red")
	

	Engine.run(engine);

	
  
}


function draw() {
  rectMode(CENTER);
  background("white");



  if(keyDown("up_arrow")){
	  Matter.Body.applyForce(paper.body,paper.body.position,{x:5,y:-14});
  }
	  
  

	

	ground.display();

	paper.display();
	
	bin1.display();
	bin2.display();
	bin3.display();

	wall.display();
	


  drawSprites();
 
}



