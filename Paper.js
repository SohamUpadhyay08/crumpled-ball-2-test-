class Paper{
    constructor(x,y,radius) {
      var options = {
          isStatic: false,
          'restitution':0.7,
          'friction':0.1,
          'density':1.0
      }
      this.body = Bodies.circle(x,y,radius,options);
      this.radius = radius;
      this.image = loadImage("images/paper.png");
      World.add(world, this.body);
    }
    display(){
      ellipseMode(RADIUS);
      var pos =this.body.position;
      fill("yellow");
      circle(pos.x, pos.y,this.radius);
    }
  };