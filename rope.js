class Rope{
    constructor(bodyA,bodyB){
        var options={
            bodyA: bodyA,
            bodyB: bodyB,
            length: 200,
            stiffness:0.1
        }
        this.chain=Matter.Constraint.create(options);
        World.add(world, this.chain);

    }
    display(){
        var pointA= this.chain.bodyA.position;
        var pointB= this.chain.bodyB.position;
        strokeWeight(4);
        stroke("yellow");
        var rand=random(20,100);

        line(pointA.x, pointA.y, pointB.x, pointB.y);


    }
}