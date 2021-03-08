var canvas;
var music;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    //create 4 different surfaces
    Block1 = createSprite(150, 600, 200, 30);
    Block1.shapeColor = "Lime"
    Block2 = createSprite(300, 600, 200, 30);
    Block2.shapeColor = "HotPink"
    Block3 = createSprite(450, 600, 200, 30);
    Block3.shapeColor = "Purple"
    Block4 = createSprite(600, 600, 200, 30);
    Block4.shapeColor = "Red"

    Box = createSprite(random(20,750), 400, 50,50);
    Box.shapeColor = "white"
    Box.velocityX = 4;
    Box.velocityY = 9;


    //create box sprite and give velocity

}

function draw() {
    background(rgb(169,169,169));
    //create edgeSprite
    drawSprites();
    Edge = createEdgeSprites();
    Box.bounceOff(Edge)
    if(Block1.isTouching(Box) && Box.bounceOff(Block1)){
        Box.shapeColor = "Lime"
    }
    if(Block2.isTouching(Box) && Box.bounceOff(Block2)){
        Box.shapeColor = "HotPink"
    }
    if(Block3.isTouching(Box) && Box.bounceOff(Block3)){
        Box.shapeColor = "Purple"
    }
    if(Block4.isTouching(Box) && Box.bounceOff(Block4)){
        Box.shapeColor = "Red"
    }

    //add condition to check if box touching surface and make it box
}
