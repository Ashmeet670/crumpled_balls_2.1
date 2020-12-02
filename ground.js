class Ground {
    constructor(x,y,width,height,color) {
        var properties = {
            isStatic: true,
        }
        this.body = Bodies.rectangle(x,y,width,height,properties)
        this.width = width
        this.height = height
        this.color = color
        World.add(world,this.body) 
    }
    display(){
        rectMode(CENTER)
        fill(this.color)
        rect(this.body.position.x,this.body.position.y,this.width,this.height)
        
    }
}