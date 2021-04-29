class Drop{
    constructor (x,y) {
var options = {
       friction : 1.0,
restitution : 0.5

}
    this.body=Bodies.circle(x,y,5,options)
    this.radius=5
   World.add(world,this.body)

}
  update(){
            if(this.body.position.y> height){
          Matter.Body.setPosition(this.body, {x:random(0,400),y:(0,400)})
      }
  }
 display(){
     var pos=this.body.position
noStroke()
fill ("blue")                  
ellipseMode(RADIUS)
ellipse(pos.x,pos.y,this.radius,this.radius)   
    
}
}  