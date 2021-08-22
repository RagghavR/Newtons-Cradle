const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var roof;
//Create multiple bobs, mulitple ropes varibale here


function setup() {
	createCanvas(800, 600);
	rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;

	var roof_options={
		isStatic:true			
	}

	roof = Bodies.rectangle(400,100,230,20,roof_options);
    World.add(world,roof);

	Engine.run(engine);
	circle1 = new circle (320,400,20)
	circle2 = new circle (360,400,20)
	circle3 = new circle (400,400,20)
	circle4 = new circle (440,400,20)
	circle5 = new circle (480,400,20)
	rope1 = new rope(circle1.body,roof,-80,0)
	rope2 = new rope(circle2.body,roof,-40,0)
	rope3 = new rope(circle3.body,roof,-0,0)
	rope4 = new rope(circle4.body,roof,40,0)
	rope5 = new rope(circle5.body,roof,80,0)

}

function draw() {
  rectMode(CENTER);
  background("#99004d");
  circle1.show()
  circle2.show()
  circle3.show()
  circle4.show()
  circle5.show()
  rope1.display()
  rope2.display()
  rope3.display()
  rope4.display()
  rope5.display()

  rect(roof.position.x,roof.position.y,230,20);

  //call display() to show ropes here

  
  //create ellipse shape for multiple bobs here

 
}

//Write keyPressed function and apply force on pressing up_arrow key on the first bob.
function keyPressed(){
	if(keyCode == UP_ARROW){
		Matter.Body.applyForce(circle1.body,circle1.body.position,{x:-0.1,y:-0.1})
	}
}