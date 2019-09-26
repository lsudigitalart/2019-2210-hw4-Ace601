//let circle = {x:400, y:400, diameter:50};
var backColor
var score = 0 
let scoreFont; 
let img
var ts = "Escape the Corn Maze";
var avatarX = 235  
var avatarY = 555
var avatarD = 25
let rx1 = 675
let ry1 =270
let rectWidth = 60
let rectHeight = 10
//corn maze barriers
let move=5
let vertexWidth = [];
let vertexHeight =[];
//let vertex = [];
let ellipseX = 485
let ellipseY = 535
let ellipseD = 25

//function preload(){
//scoreFont = loadFont ("/Permanent_Marker/PermanentMarker-Regular.ttf");
//img=loadImage("/2019-2210-hw4-ACE601/smiley.jpeg");
//}

function setup(){
createCanvas(800,800)



}




function draw(){
keyPressed();

background(0)

backColor = color("orange")
fill(255,195,30)
strokeWeight(4)
   textSize(30);
  textFont('Helvetica');
  text(ts, 10, 30);  





textSize(50);
  text(score, 700, 40);




stroke(255)
fill(20,200,30)
rect(50,275,700,450)

//avatar 
noStroke()
fill(255,255,255)
ellipse(ellipseX,ellipseY, ellipseD)

  
//fill(242, 214, 60)
stroke(242, 214, 60)
strokeWeight(25)
//line(110,350,685,350)
noFill()
  beginShape();
vertex(110,350)
vertex(685,350)
vertex(685,685)
vertex(110,685)
vertex(110,425)
vertex(600,425)
vertex(600,625)
vertex(195,625)
vertex(195,495)
vertex(535,495)
vertex(535,575)
vertex(265,575)



endShape();

//EXIT
rect(rx1,ry1,rectWidth,rectHeight)
if (ellipse == rx1){
	    	Score = 100;}
if (ellipseX>rx1- rectWidth&&ellipseX<rx1+rectWidth&&ellipseY>ry1-rectHeight&&ellipseY<ry1+rectHeight){

score=100

}


//vertices.displace(ellipse)

if(ellipseX > vertex - vertexWidth-50 && ellipseX < vertex + vertexWidth-50 && ellipseY > vertex - vertexHeight-50 && ellipseY <vertex + vertexHeight-50){
move = move * -1;

}

else {move = 5;
     }


function keyPressed(){

if(keyCode==UP_ARROW&&keyIsPressed){
  ellipseY=ellipseY-move;
}

  if(keyCode==DOWN_ARROW&&keyIsPressed){
    ellipseY=ellipseY+move;
  }

    if(keyCode==LEFT_ARROW&&keyIsPressed){
      ellipseX=ellipseX-move;
    }
      
      if(keyCode==RIGHT_ARROW&&keyIsPressed){
       ellipseX=ellipseX+move;
      }
}





}
