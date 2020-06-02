/****
* A very useful reference for collision detection written in Processing 
* http://www.jeffreythompson.org/collision-detection/table_of_contents.php
*
*/
var diameter = 60; 

var targetcolor = 'red';

function setup() {
  createCanvas(400, 400);
  fill(targetcolor);
}


function draw() {
  background(220);
  
  fill(targetcolor);
  ellipse(width/2, height/2, 100, 100);
  
  fill('white');
  ellipse(mouseX, mouseY, diameter, diameter);
  
  if (dist(mouseX, mouseY, width/2, height/2) < diameter/2 + 50){
    targetcolor = 'blue';
  }
  else{
    targetcolor = 'red';
  }

}
