/**
 * Blackout
 * Jeremy Duverseau
 *
 */

const hiddenCircle = {
  x: 450,
  y: 450,
  size: 50,
  fill: "#000000",
  fills: {
    noOverlap: "#000000",
    overlap: "#00ff00"
  }
};

let backgroundColor = {
    background: '#000000',
    backgrounds: {
        noOverlap: "#000000",
        overlap: "#ffffff"
    }
}

const mouseCircle = {
  x: undefined, // will be mouseX
  y: undefined, // will be mouseY
  size: 10,
  fill: "#ffffff"
};

/**
 * create the canvas
 */
function setup() {
  createCanvas(600, 600);
}

/**
 * move the mouse circle, check the overlap, reveal the hidden circle and change the background
*/

function draw() {
  
  // Move user circle
  mouseCircle.x = mouseX;
  mouseCircle.y = mouseY;

  /*
  * Conditionals borrowed from Pippin Barr's "Overlapping Circles"
  * https://editor.p5js.org/pippinbarr/sketches/NLnxtLMat
  */
  
  // Check overlap
  // Calculate distance between circles centres
  const d = dist(mouseCircle.x, mouseCircle.y, hiddenCircle.x, hiddenCircle.y);
  // Check if that distance is smaller than their two radii
  const overlap = (d < mouseCircle.size/2 + hiddenCircle.size/2);

  // Set fill based on whether they overlap
  if (overlap) {
    hiddenCircle.fill = hiddenCircle.fills.overlap;
    backgroundColor.background = backgroundColor.backgrounds.overlap;
  }
  else {
    hiddenCircle.fill = hiddenCircle.fills.noOverlap;
    backgroundColor.background = backgroundColor.backgrounds.noOverlap;
  }

  // set the background colour
  background(backgroundColor.background);
  
  // draw the hidden circle
  push();
  noStroke();
  fill(hiddenCircle.fill);
  ellipse(hiddenCircle.x, hiddenCircle.y, hiddenCircle.size);
  pop();
  
  // draw the mouse circle
  push();
  noStroke();
  fill(mouseCircle.fill);
  ellipse(mouseCircle.x, mouseCircle.y, mouseCircle.size);
  pop();
}