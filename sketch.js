function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);
}

function draw() {
  background(255,255,255);  
  drawSprites();
}
Text("SCORE:"+ScopedCredential,750,40);
blocks1.score();
blocks2.score();
blocks3.score();
blocks4.score();
blocks5.score();
blocks6.score();
blocks7.score();
blocks8.score();
blocks9.score();
 
score(){
  if(this.visibility<0 && this.visibility >-105){

    score++;
  }
}