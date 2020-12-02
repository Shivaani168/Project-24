class Paper {
    constructor(x,y,radius){
    this.radius=radius;
    var option ={
    isStatic:false,  
    restitution:0.3,
    friction:0.5,
    density:1.2
    }
    this.body = Bodies.circle(x,y,radius,option)
    World.add(world,this.body)
    } 
    display(){
    var pos = this.body.position;
    var angle = this.body.angle;
    
    push();
    translate(pos.x,pos.y)
    rotate(angle)
    angleMode(RADIANS)
    ellipseMode(RADIUS)
    fill("red")
    stroke("red")
    ellipse(0,0,this.radius)
    pop();
    }
    }   