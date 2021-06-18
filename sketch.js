var canvas;
var music;
var b1 , b2 ,b3,b4 
var box
var edges 


function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);
    b1 = createSprite(8,580,360,30)
    b1.shapeColor = "blue"

    b2 = createSprite(295,580,200,30)
    b2.shapeColor = "orange"

    b3 = createSprite(515,580,200,30)
    b3.shapeColor = "pink"

    b4 = createSprite(740,580,220,30)
    b4.shapeColor = "green"

    box = createSprite(random(20,750),100,40,40)
    box.shapeColor = "white"
    box.velocityX = 4
    box.velocityY = 9




    //create 4 different surfaces



    //create box sprite and give velocity

}

function draw() {
    background(rgb(169,169,169));

    edges = createEdgeSprites();
    box.bounceOff(edges)
    //create edgeSprite
    if (b1.isTouching(box)&box.bounceOff(b1)){
        box.shapeColor = "blue"
        music.play();
    }


    if (b2.isTouching(box)&box.bounceOff(b2)){
        box.shapeColor = "orange"
        music.play();
    }


    if (b3.isTouching(box)&box.bounceOff(b3)){
        box.shapeColor = "pink"
        music.play();
    }

    if (b4.isTouching(box)&box.bounceOff(b4)){
        box.shapeColor = "green"
        music.play();
    }


    drawSprites()
    //add condition to check if box touching surface and make it box
}
