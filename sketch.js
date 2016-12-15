var ball;
var plate;
var breaks = [];
var y = 70;
var bg;
var t = 0;
var player;
var lifes = [];
var number = 3;
var rbutton;

function setup() {
 bg = loadImage("https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Fornax_Dwarf.jpg/600px-Fornax_Dwarf.jpg");
 canvas = createCanvas(600,600);
  Recetpage();
  ball.xspeed = 0;
  ball.yspeed = 0;
  var posit = canvas.width/2 + innerWidth/2;
  var button = createButton("Click here to Start");
  button.mousePressed(Recetpage);

  button.position(posit,200);

 rbutton = createButton("Restart",680,300);
 rbutton.mousePressed(Recover);
 rbutton.position(posit,230);
}

function Recetpage(){
   ball = new Ball ();
  
  plate = new Plate ();

  player = new Game ();


 t = 0;
 number = 3;
  for(i = 0; i < 25; i++ ){
    breaks[i] = new Breaks(55+i*120, y,50);
    if (breaks[i].x + breaks[i].length > width){
      breaks[i].y = breaks[i].y + 70 * floor((breaks[i].x + breaks[i].length/2)/width);
      breaks[i].x = breaks[i].x - width * floor((breaks[i].x + breaks[i].length/2)/width);
    }
  }
}

function draw() {
  background(bg);
  player.lifes();
  player.gameOver();
  player.score();
  player.winGame();
  ball.display();
  ball.move();
  ball.bounce();
  plate.draw();
  plate.move();
  
    fill(75, 127, 232);
  for(i = 0; i < breaks.length; i++){
   breaks[i].createBreaks();
   ball.distroy();
  }
  
  ball.changeDir();
  if(keyIsDown(LEFT_ARROW)) {
    plate.dir(-1);
  }
  if(keyIsDown(RIGHT_ARROW)) {
    plate.dir(1);
  }
  
}
  
function keyReleased (){
  plate.dir(0);
}

/*function keyIsPressed() {
  loop()
}*/
function Recover(){
  loop();

Recetpage();
ball.xspeed = 0;
ball.yspeed = 0;
}










