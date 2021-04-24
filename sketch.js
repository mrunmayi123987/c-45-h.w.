var girlImg , girl;
var background,backgroundImg;
var invisibleground;
var bflyimg1,bflyimg,bflyimg2;
var bfly,bfly1,bfly2;
var butterflyGroup;
var score=0;
var jumpSound,diesound;
var butterfly;
function preload(){

girlImg = loadImage("images/girl_image.jpg");
backgroundImg = loadImage("images/gardenImage.png");
bflyimg = loadImage("images/butterfly.png");
bflyimg1 = loadImage("images/butterfly(1).png");
bflyimg2 = loadImage("images/butterfly2.png");

jumpSound = loadSound("jump.mp3");
diesound = loadSound("die.mp3");
}



function setup() {
  createCanvas(1200,800);

  background = createSprite(600,200,20,20);
background.addImage(backgroundImg);

invisibleground=createSprite(600,750,1200,20);
invisibleground.visible=false;

  girl = createSprite(400, 200, 50, 50);
girl.addImage(girlImg);
girl.scale=0.2;

butterfly = createSprite(900,100,20,20);

text("score"+score,50,50);
}

function draw() {
 // background(255,255,255);  

background.velocityX=-5;
invisibleground.velocityX=-5;

if(invisibleground.x<0){

invisibleground.x=600;
}

if(background.x<0){

  background.x=600;
  }



if(keyDown("space")&&girl.y>=100){;
girl.velocityY=-12;
jumpSound.play();
}

girl.velocityY=girl.velocityY+0.8;

girl.collide(invisibleground); 



spawnButterfly();


if(butterfly.collide(girl)){
//butterfly.destroyEach();
  //butterflyGroup.destroyEach();
  score=score+1
  diesound.play();
}

  drawSprites();

  

}

function spawnButterfly(){
if(frameCount%100===0){
 butterfly = createSprite(900,100,20,20);
butterfly.velocityX=-5;

butterfly.y=random(100,200);

var rand = Math.round(random(1,3));
switch(rand){
case 1: butterfly.addImage(bflyimg);
        break;
case 2: butterfly.addImage(bflyimg1);
        break;        
case 3: butterfly.addImage(bflyimg2);
        break;
        default:break;
}
butterfly.lifetime=200;
butterfly.scale=0.2;
//butterflyGroup.add(butterfly);
} 

}