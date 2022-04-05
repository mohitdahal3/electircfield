let w = 41;
let grid;

function setup(){
  createCanvas(windowWidth-5 , windowHeight-5);
  grid = new Grid();
}

function draw(){
  background(255);
  grid.show();
}

function keyPressed(){
  if(key == '='){
    grid.checkMouse(1);
  }else if(key == '-'){
    grid.checkMouse(-1);
  }else if(key == ' '){
    grid = new Grid();
  }else if(key == 'x'){
    grid.rem();
  }else if(key == '1'){
    grid.setCharge(1);
  }else if(key == '2'){
    grid.setCharge(2);
  }else if(key == '3'){
    grid.setCharge(3);
  }else if(key == '4'){
    grid.setCharge(4);
  }else if(key == '5'){
    grid.setCharge(5);
  }else if(key == '6'){
    grid.setCharge(6);
  }else if(key == '7'){
    grid.setCharge(7);
  }else if(key == '8'){
    grid.setCharge(8);
  }else if(key == '9'){
    grid.setCharge(9);
  }else if(key == '0'){
    grid.setCharge(0);
  }
}

function drawArrow(vec , c){
  let cell = c
  stroke(0);
  fill(0);
  strokeWeight(2);
  let x = cell.x * w;
  let y = cell.y * w;
  let sp = int(w / 3);
  let m = vec.mag();
  m = constrain(map(m,0,55,0,1) , 0 , 1);
  sp *= m;
  push();
  translate(x + w/2 , y + w/2);
  rotate(vec.heading());
  line(-sp , 0 , sp , 0);
  triangle(sp , 0 , sp/2 , -sp/2 , sp/2 , sp/2);
  pop();
}

function drawPlusMinus(x , y , plus){
  stroke(255);
  strokeWeight(1);
  let s = int(w/8);
  x = int(x);
  y = int(y);
  line(x-s , y , x+s , y);
  if(plus){
    line(x , y-s , x , y+s);
  }
  
}

function arrayRemove(arr, value) { 
    return arr.filter(function(ele){ 
        return ele != value; 
    });
}