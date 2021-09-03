var backgroundImg ,background1
var cat,c1,c2,c3;
var mouse,m1,m2,m3;

function preload() {
    //load the images here
backgroundImg=loadImage("images/garden.png")
c1=loadAnimation("images/cat1.png")
c2=loadAnimation("images/cat2.png","images/cat3.png")
c3=loadAnimation("images/cat4.png")



m1=loadAnimation("images/mouse1.png")
m2=loadAnimation("images/mouse2.png","images/mouse3.png")
m3=loadAnimation("images/mouse4.png")
}


function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here
//background1=addImage("backgroundImg")

cat=createSprite(900,700)
mouse=createSprite(200,700)

cat.addAnimation("catSleeping",c1)
mouse.addAnimation("mouseStanding",m1)
cat.scale=0.2
mouse.scale=0.1
}

function draw() {

    background(backgroundImg);
    //Write condition here to evalute if tom and jerry collide
if(cat.x-mouse.x<(cat.width-mouse.width)/2){
cat.velocityX=0
cat.addAnimation("catDone",c3)
cat.changeAnimation("catDone")

mouse.addAnimation("mouseStp",m3)
mouse.changeAnimation("mouseStp")

}





    drawSprites();
}


function keyPressed(){

if(keyCode===LEFT_ARROW){
mouse.addAnimation("mouseteasing",m2)
mouse.changeAnimation("mouseteasing")
mouse.framDelay=25
cat.velocityX=-10
cat.addAnimation("catidiot",c2)
cat.changeAnimation("catidiot")
}

}