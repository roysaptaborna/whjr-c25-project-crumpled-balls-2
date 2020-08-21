class Ground {
	constructor(x, y, w, h) {
		this.body = Bodies.rectangle(x, y, w, h);
		this.body.isStatic = true;
		World.add(engine.world, this.body);
		this.width = w;
		this.height = h;
	}
	display() {
		rectMode(CENTER);
		rect(this.body.position.x, this.body.position.y, this.width, this.height);
	}
}
