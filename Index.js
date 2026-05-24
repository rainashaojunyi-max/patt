let img;
let cols, rows; let size = 10;
let tiles = [];
let mode = 4;

function preload() {
  img = loadImage("patt.png");
}

function setup() {
  img.resize(400, 0);
  createCanvas(img.width, img.height);
  cols = width/size;
  rows = height/size;
  
  for (let i=0; i<cols; i++) {
    tiles[i] = [];
    for (let j=0; j<rows; j++) {
      tiles[i][j] = img.get(i*size, j*size, size, size);
    }
  }
  
  // noLoop();
}

function draw() {
  background(220);
  // image(img, 0, 0);

  for (let i=0; i<cols; i++) {
    for (let j=0; j<rows; j++) {
      let x = i*size;
      let y = j*size;
      push();
      translate(x, y); 
  
      if (mode === 0) {
        image(tiles[i][j], 0, 0);
      } else if (mode === 1) {
        scale(-1, 1);
        image(tiles[i][j], -size, 0);
      } else if (mode === 2) {
        scale(1, -1);
        image(tiles[i][j], 0, -size);
      } else if (mode === 3) {
        scale(-1, -1);
        image(tiles[i][j], -size, -size);
      } else {
        if (i > floor(mouseX / size)) {
          translate(size/2, size/2);
          let angle = floor(random(4)) * PI/2;
          rotate(angle);
          image(tiles[i][j], -size/2, -size/2);
        } else {
          image(tiles[i][j], 0, 0);
        }
        
      }
      
      
      pop();
    }
  }
}