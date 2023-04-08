var trex, trex_running, trex_collided; //troca edges por trex_collided 08/04
var ground, invisibleGround, groundImage; //adiciona ground e invisibleGround 08/04
function preload(){
  trex_running = loadAnimation("trex1.png","trex3.png","trex4.png");
  trex_collided = loadImage("trex_collided.png"); //carrega imagem do trex collided 08/04
  groundImage = loadImage("ground2.png")
}
function setup() {
  createCanvas(600, 200);  
  //crie um sprite de trex
  trex = createSprite(50,180,20,50);
  trex.addAnimation("running", trex_running); 
  //adicione dimensão e posição ao trex
  trex.scale = 0.5;
  trex.x = 50 

  ground = createSprite(200,180,400,20); //cria o sprite 08/04
  ground.addImage("ground",groundImage); //adiciona imagem ao sprite 08/04
  ground.x = ground.width /2; //cria posição do sprite 08/04
}
function draw() {
  background(220);  
  ground.velocityX = -2; //velocidade do chão indo da direita pra esquerda   08/04
  if (ground.x<0){ //se a posição do chão em x for menor que zero  08/04
    ground.x = ground.width/2; //volta a posição original  08/04
  }  
  //pular quando a tecla espaço for pressionada
  if(keyDown("space")) {
    trex.velocityY = -10;
  }  
  trex.velocityY = trex.velocityY + 0.8   
 //impedir que o trex caia
  trex.collide(ground); //troca o edges[3] por ground  08/04
  drawSprites();
}
