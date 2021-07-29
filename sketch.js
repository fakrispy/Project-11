var trackImg
var track
var runnerImg
var runner
function preload(){
  //pre-load images
  trackImg = loadImage("path.png");
  runnerImg = loadImage("Runner-2.png")
}

function setup(){
  createCanvas(400,400);
  //create sprites here
  track = createSprite(200, 200, 10, 20);
  track.addImage(trackImg, 200, 200, 30, 40);
  track.scale = 0.5;
  track.velocityY = 4


  runner = createSprite(200, 200, 10, 20);
  runner.addImage(runnerImg, 200, 200, 10, 20);
  runner.scale = 0.1;
 
  

  





  }


function draw() {
  background("red");
  drawSprites();
  if(track.y>400){
    track.y = height/2;
  }
}
