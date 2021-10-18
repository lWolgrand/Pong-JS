//Var
let xBall = 300;
let yBall = 200;
let dBall = 20;
let raio = dBall / 2;

//var speed
let speedXball = 4;
let speedYball = 4;

//var raquetes
xR = 5;
yR = 150;
wR = 10;
hR = 90;

//var oponete
let rXoponente = 385;
let rYoponente = 150;
let speedOponente;

//placar do game
let meusPontos = 0;
let pontosDoOponente = 0;
let encostou = false;

//sons
let play;
let raquetada;
let ponto;

function preload(){
  play = loadSound("trilha.mp3");
  raquetada = loadSound("raquetada.mp3");
  ponto = loadSound("ponto.mp3");
}

function setup() {
  createCanvas(400, 400);
  play.loop();
  }


function draw() {  
  background(0)
  showBall();
  moveBall();
  verify();
  raquete(xR, yR);
  movimento();  
  colide();
  encostarRbiblio(xR,yR);
  encostarRbiblio(rXoponente, rYoponente);
  raquete(rXoponente, rYoponente);
  mRoponente();
  //encostarRbiblioPonete();
  incluiPlacar();
  marcador();  
}
function showBall(){
  
  circle( xBall, yBall, dBall);// Desenho da bola
}
function moveBall(){
  
  xBall += speedXball;//VelociadeX
  yBall += speedYball;//VelocidadeY  
}
function verify(){
    
  if (xBall + raio > width || xBall - raio < 0){
    speedXball *= -1;
  }// condições do X
  
   if (yBall + raio > height || yBall - raio < 0){
    speedYball *= -1;
  }// Condições do Y
  
}
function raquete(x,y){
  rect(x, y, wR, hR)
  
  
}
function raqueteOponente(){
  rect(rXoponente, rYoponente, wR, hR)
}
function movimento(){
  if (keyIsDown(UP_ARROW)){
    yR -=10;
  }
   if (keyIsDown(DOWN_ARROW)){
    yR +=10;
  }
}
function colide(){
  if (xBall - raio < xR + wR && yBall - raio < yR + hR && yBall + raio > yR){
    speedXball *= -1;
    raquetada.play();
  }
  
}
function encostarRbiblio(x,y){
  encostou = 
  collideRectCircle(x,y,wR,hR, xBall, yBall, raio);
  if (encostou){
    speedXball *= -1;
    raquetada.play();
  }
}


//function encostarRbiblioPonete(){
  //encostou = 
 // collideRectCircle(rXoponente,rYoponente,wR,hR, xBall, yBall, raio);
 // if (encostou){
 //   speedXball *= -1;
 // }
//}

function mRoponente(){
  speedOponente = yBall - rYoponente - hR / 2 - 30;
  rYoponente += speedOponente;
}
function incluiPlacar(){
  textAlign(CENTER);
  textSize(20);
  fill(color(50,205,50));
  rect(165, 10, 40, 20)
  fill(255);
  text(meusPontos, 190, 26);
  fill(color(50, 205, 50));
  rect(215, 10, 40, 20);
  fill(255);
  text(pontosDoOponente, 230, 26);
  
}
function marcador(){
  if(xBall > 590){
    meusPontos +=1;
    ponto.play();
  }
  if(xBall < 10){
    pontosDoOponente +=1;
    ponto.play();
  }
  
}

