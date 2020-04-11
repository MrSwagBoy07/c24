class Bird {
    constructor(x, y) {
      var options = {
          'restitution':0.8,
          'friction':10.0,
          'density':1.0
      }
      this.body = Bodies.rectangle(x, y,15,15, options);
      this.width = 15;
      this.height = 15;
      
      World.add(world, this.body);

    }
    display(){
      var pos =this.body.position;
      pos.x=mouseX;
      var angle=this.body.angle;
      pos.y=mouseY;
      push();
      translate(pos.x,pos.y);
      rotate(angle);
      rectMode(CENTER);
      fill("blue");
      rect(0,0, this.width, this.height);
      pop();
    }
  };
  