var Bg
var Boy,boyImg;
var Girl,girlImg;
var shuttle,shuttleImg;
var racket,racketImgI;
var edges;
var yellowGround;
function preload(){
  Bg = loadImage("BgImg.webp")
  boyImg = loadImage("BoyImg.png")
  girlImg = loadImage("GirlI.png")
  shuttleImg = loadImage("ShuttleImg.png")
  racketImgI = loadImage("racketImg.png")
}

function setup() {
  createCanvas(displayWidth-30,displayHeight-30);
  Boy = createSprite(300,displayHeight-400)
  Boy.debug=false;
  Boy.setCollider("rectangle",0,0,250,430);
  Boy.addImage(boyImg)
  Boy.scale=0.8
  Girl = createSprite(displayWidth-270,displayHeight-400)
  Girl.addImage(girlImg)
  Girl.scale=0.8;
  shuttle = createSprite(displayWidth-320,displayHeight-500)
  shuttle.addImage(shuttleImg)
  shuttle.scale=0.4;
  shuttle.debug=false;
  shuttle.setCollider("circle",0,0,40)
  racket = createSprite(170,displayHeight-490)
  racket.addImage(racketImgI);
  racket.scale=0.4;
  racket.debug=false;
  racket.setCollider("circle",-30,-70,80)
  yellowGround = createSprite(displayWidth/2-30,displayHeight-350)
  yellowGround.visible=false;
  edges =createEdgeSprites()

}


function draw() {
  background(Bg);
  if(keyDown("s")){
    shuttle.velocityX=Math.round(random(-4,-7));
    shuttle.y=Math.round(random(200,400));
  }
 
  if(keyDown("right")){
  Boy.x=Boy.x+2
  racket.x=racket.x+2
  }
  if(keyDown("left")){
    Boy.x=Boy.x-2
    racket.x=racket.x-2
    }
    if(keyDown("up")){
      Boy.y=Boy.y-2
      racket.y=racket.y-2
      }
      if(keyDown("down")){
        Boy.y=Boy.y+2
        racket.y=racket.y+2
        }
        if(shuttle.isTouching(racket)){
          shuttle.velocityX=Math.round(random(4,7))
        }
        if(keyDown("a")){
          Girl.x=Girl.x+2
          }
          if(keyDown("d")){
            Girl.x=Girl.x-2
            }

  drawSprites();
}