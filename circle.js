class circle 
{
  constructor(x, y, r) 
  {
    
    this.body = Bodies.circle(x, y, r);
    this.r = r;
    World.add(world, this.body);
  }

  show() {
    let pos = this.body.position;

    push();
    ellipseMode(RADIUS);
    stroke(255);
    fill(127);
    ellipse(pos.x, pos.y, this.r);
    pop();
  }
}