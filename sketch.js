var DustbinObject,PaperObject,GroundObject;
var paperImg,dustbinImg;


const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;

function setup() {
	createCanvas(1600, 700);
	rectMode(CENTER)

	engine = Engine.create();
	world = engine.world;

	GroundObject = new Ground(width/2,670,width,20);
	DustbinObject = new Dustbin(1200,650);
	PaperObject = new Paper (200,450,70);

	//Create the Bodies Here.
	var render = Render.create(
		{
			element : document.body,
			engine : engine,
			options : {
				width : 1600,
				height : 700,
				wireframes : false
			} 
		}
	)


	Engine.run(engine);

	Render.run(render);
  
}


function draw() {
  rectMode(CENTER);
  
  background("lightblue");
  
	PaperObject.display()
	GroundObject.display()
	DustbinObject.display()
	


  drawSprites();
 
}

function keyPressed(){
	if(keyCode === UP_ARROW){
	Matter.Body.applyForce(PaperObject.body,PaperObject.body.position,{x:130,y:-145});
}
}