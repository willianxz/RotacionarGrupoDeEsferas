var angle = 0.0;
var speed = 0.05;
var option = 1;

function setup() {
 createCanvas(windowWidth, windowHeight);
 noStroke(); 
}

function draw() {
 var lo = map(mouseX, 0, width, 10, 300);
 var li = map(mouseY, 0, height,10, 300);
 
 if(option == 1){
   background(255);
   fill(0);
   text("Salve apertando o digito S", 100, windowHeight - 50);
 }
 
 translate(width/2, height/2);
 rotate(angle);
 for(var i = 0;i < 5; i++){
   push();
   
   rotate(i*TWO_PI/5);
   translate(0, lo);
   fill(255, 0, random(100));
   ellipse(0, 0, 20, 20);
   
   rotate(angle);
   
   for(var j = 0; j < 5; j++){
     push();
     rotate(j*TWO_PI/5);
     translate(0, li);
     ellipse(0, 0, 20, 20);
     pop();
   }   
   pop();
 }
 
 resetMatrix(); 
 angle += speed; 
}

function mousePressed(){
  if(option == 1){
     option = 0;
  }else{
   option = 1;
 }
 
 fill(255);
 rect(100, windowHeight - 60, 150, 20);
}

function keyPressed() {
  if (keyCode == 83) {        
    saveCanvas('padrao', 'jpg');
  } 
}
