class rope{
	constructor(body1,body2,pointA,pointB)
	{
		this.pointA=pointA
		this.pointB=pointB
		var options={
			bodyA:body1,
			bodyB:body2,
			pointB:{x:this.pointA, y:this.pointB}
		}
	//create rope constraint here
		this.link=Matter.Constraint.create(options)
		World.add(world, this.link);
	}
    //create display() here 
	display(){
		line(this.link.bodyA.position.x,this.link.bodyA.position.y,this.link.bodyB.position.x+this.pointA,this.link.bodyB.position.y+this.pointB)
	}
}
