
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint= Matter.Constraint;

var ground, miniG, miniG2
var block1,block3,block4,block5,block6,block7,block8,block9
//var bg = "sprites/bg1.png";
var backgroundImg

//var hexa_image, hexa

var chain

function preload() {
  getBackgroundImg() 
  bg=loadImage("backg/bg1.png")
  bg=loadImage("backg/bg2.jpg")
  //hexa_image=loadImage("polygon.png")

}



function setup() {
	createCanvas(800, 600);


	engine = Engine.create();
	world = engine.world;
 

    ground= new Ground(400,580,1000,20)
    miniG1= new Ground(640,250,220,20)

 
    block1=new Block2(580,225,30,30)
    block2=new Block(610,225,30,30)
    block3=new Block2(640,225,30,30)
    block4=new Block(670,225,30,30)
    block5=new Block2(700,225,30,30)
    block6=new Block2(610,195,30,30)
    block7=new Block(640,195,30,30)
    block8=new Block2(670,195,30,30)
    block9=new Block2(640,165,30,30)

  

    hexa=Bodies.circle(50,200,20)
    World.add(world,hexa)

    chain=new Chain(hexa,{x:150,y:200})

    


    Engine.run(engine);
}


function draw() {
  if(backgroundImg)
        background(backgroundImg);
  rectMode(CENTER);
 // background();
  ellipseMode(CENTER)
  ellipse(hexa.position.x,hexa.position.y,20,20)

  ground.display()
  miniG1.display()
  block1.display()
  block2.display()
  block3.display()
  block4.display()
  block5.display()
  block6.display()
  block7.display()
  block8.display()
  block9.display()


  chain.display()

  

  fill("gold")
    imageMode(CENTER)
    //image(hexa_image,hexa.position.x,hexa.position.y,40,40)
  

 
  drawSprites();
 
}
function mouseDragged(){
  Matter.Body.setPosition(hexa, {x: mouseX , y: mouseY});
}


function mouseReleased(){
  chain.fly();
}
  function keyPressed(){
    if(keyCode===32){
     chain.attach(hexa)
}
  }
async function getBackgroundImg(){
  var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Tokyo");
  var responseJSON = await response.json();

  var datetime = responseJSON.datetime;
  var hour = datetime.slice(11,13);
  
  if(hour>=06 && hour<=18){
      bg = "backg/bg1.png";
  }
  else{
      bg = "backg/bg2.jpg";
  }
  
backgroundImg = loadImage(bg);
    console.log(backgroundImg);
}
  