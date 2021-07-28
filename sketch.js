
var garden, rabbit;
var gardenImg, rabbitImg;
var appleImg;
var apple;
var leaf, leafImg;
var orangeLeaf, orangeLeafImg;

function preload() {
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  appleImg = loadImage("apple.png");
  leafImg = loadImage("leaf.png");
  orangeLeafImg = loadImage("orangeLeaf.png")
}

function setup() {

  createCanvas(400, 400);

  // Moving background
  garden = createSprite(200, 200);
  garden.addImage(gardenImg);

  //creating boy running
  rabbit = createSprite(180, 300, 30, 30);
  rabbit.scale = 0.09;
  rabbit.addImage(rabbitImg);
}

function createApple() {
  apple = createSprite(random(50, 350), 40, 30, 30);
  apple.scale = 0.09;
  apple.addImage(appleImg);
  apple.velocityY = 3;
  apple.lifetime = 360;
}

function createLeaf() {
  leaf = createSprite(random(50, 350), 40, 30, 30);
  leaf.scale = 0.09;
  leaf.addImage(leafImg);
  leaf.velocityY = 3;
  leaf.lifetime = 360;
}
function createOrangeLeaf() {
  orangeLeaf = createSprite(random(50, 350), 40, 30, 30);
  orangeLeaf.scale = 0.09;
  orangeLeaf.addImage(orangeLeafImg);
  orangeLeaf.velocityY = 3;
  orangeLeaf.lifetime = 360;
}


function draw() {
  background(0);

  var select_sprites = Math.round(random(1, 3))

  if (frameCount % 80 == 0) {
    if (select_sprites == 1) {
      createApple();
    }
    else if (select_sprites == 2) {
      createLeaf();
    }
    else {
      createOrangeLeaf();
    }
  }

  edges = createEdgeSprites();
  rabbit.collide(edges);
  rabbit.x = World.mouseX;

  drawSprites();

}


