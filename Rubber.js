class Rubber {
	constructor(x,y) {
	  var options = {
		'density':4,
		'friction': 1.0,
		'restitution':2
	  };
	  this.body = Bodies.rectangle(x, y, 50, 50, options);
	  this.width = 50;
	  this.height = 40;
	  World.add(world, this.body); 
	};
	display(){
	  //var pos = this.body.position.y;
	  //pos.x = this.body.position.x;
	  //pos.y = mouseY;
	  
  
	  push();
	  var angle = this.body.angle;
	//  translate(this.body.position.x, this.body.position.y);
	  strokeWeight(3);
	  stroke('red')
	  fill('green')
	  rectMode(CENTER)
	  rect(this.body.position.x,this.body.position.y, this.width, this.height);
	  pop();
	};
  };