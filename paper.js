class Paper {
    constructor(x,y,height,width) {
        var properties = {
            isStatic: false,
            restitution: 0.5,
            friction: 0.5,
            density: 1.2
        }
        this.body = Bodies.circle(x , y , 20 , properties);
        this.image = loadImage("paper.png")
        this.height = height
        this.width = width
        World.add(world,this.body) 
    }
    display()   {
        push();
        var pos = this.body.position;
        translate(pos.x,pos.y);
        imageMode(CENTER);
        image(this.image , 0,0,this.width,this.height);
        pop();
    }
}