var phn,phnImg;
var s,sImg;
var gui;
var mood;
var state = 2;
var rainI,fogI,sunI,snowI;
var sadI,happyI;
var n = null;

function preload()
{
  phnImg = loadImage("icons/phn.jpg");
  sImg = loadImage("icons/bg.jpg");

  

  sadI = loadImage("icons/sad.jpeg");
  happyI = loadImage("icons/happy.jpeg");
 
}

function setup()
{
 var canvas = createCanvas(windowWidth,windowHeight);



 phn = createSprite(windowWidth/2,windowHeight/2);
 phn.addImage(phnImg);
 phn.scale = 1.9;

  s = createSprite(779,365,327,560);
  s.addImage(sImg);

  
   gui = new Weather();
   
   mood = new Mood();
}

function draw()
{
 background(255);

 

 drawSprites();
 
 if(state === 0)
 {
  gui.display();
 }
 
 
  if(state === 1)
  {
   mood.display();
  }

 
  
  if(state === 2)
  {
   
  }
    

 fill(0);
 text(mouseX +","+mouseY ,mouseX,mouseY);



 
}