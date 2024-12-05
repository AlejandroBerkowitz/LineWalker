let randomWalker = [];
let maxWalker;
function setup() {
  createCanvas(400, 400);
  background('black');
  maxWalker = 5;
  let colorPalette = ['rgb(0,0,255)', 'rgb(0,255,0)', 'rgb(255,0,0)', 'rgb(255,255,0)', 'rgb(0,255,255)'];
  
  for (i = 0; i < maxWalker; i++){
    randomWalker.push(new walker(random(0, width), random(0, height), random(-5, 10), colorPalette[i]));
  }
  
}

function draw() {
  
  for (i = 0; i< maxWalker; i++){
    randomWalker[i].display();
    randomWalker[i].walkingDirection();
    randomWalker[i].keepInCanvas();
  }
}

function widnowResized() {
  resizeCanvas(windowWidth, windowHeight);
}
