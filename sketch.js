function setup() {
  createCanvas(400, 400);
  background(220);
}

function mousePressed() {
  setTimeout(
    makeFish,
    2000,
    random(0, width), 
    random(0, height), 
    random(30, 80), 
    color(random(255), random(255), random(255)) 
  );
}

function makeFish(xPos, yPos, size, colour) {
  fill(colour);
  noStroke();

  // Fish body (square)
  rect(xPos, yPos, size, size / 2);

  // Fish tail (triangle at the left)
  triangle(
    xPos, yPos + size / 4, 
    xPos - size / 2, yPos, 
    xPos - size / 2, yPos + size / 2 
  );

  // Fish head (triangle at the right)
  triangle(
    xPos + size, yPos, 
    xPos + size, yPos + size / 2, 
    xPos + size + size / 2, yPos + size / 4 
  );
}

