class Bob {
  constructor(x, y,radius) {
    var options = {
        'restitution':0.8,
        'friction':0.3,
        'density':1.0
    }
    this.body = Bodies.circle(x, y, radius);
    this.width = radius;
    this.height = radius;
    
    World.add(world, this.body);
  }
  display(){
    var pos =this.body.position;
    var angle = this.body.angle;
    push();
    translate(pos.x, pos.y);
    rotate(angle);
    rectMode(CENTER);
    fill("purple");
    ellipse(0, 0, this.width, this.height);
    pop();
  }
};

