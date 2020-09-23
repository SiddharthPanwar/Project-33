const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine,world;
var ground1;
var particles = [];
var plinkos = [];
var divisions = [];
var divisionHeight = 300;
var score = 0;
function setup() {
  var canvas = createCanvas(480,800);
  engine = Engine.create();
  world = engine.world;

  ground1 = new Ground(240,height,480,20);
  for (var k=0; k <=width; k = k+80){
    divisions.push(new Divisions(k,height-divisionHeight/2,10,divisionHeight))
  }
  
  for (var j = 55; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,75));
    }

    for (var j = 30; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,175));
    }

     for (var j = 55; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,275));
    }

     for (var j = 30; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,375));
    }
}

function draw() {
  background(0,0,0); 
  textSize(20)
  text("Score : "+score,20,30); 
  Engine.update(engine);
  ground1.display();
  for (var k = 0; k < divisions.length; k++) {
    divisions[k].display();
  }
  for (var j = 0; j < plinkos.length; j++) {
    plinkos[j].display();
    
  }
  if(frameCount%60===0){
    particles.push(new Particle(random(width/2-30, width/2+30), 10,10));
    score++;
  }
  for (var j = 0; j < particles.length; j++) {
   
    particles[j].display();
  }
  
}