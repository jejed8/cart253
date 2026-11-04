/**
 * Flower Of Love
 * Jeremy Duverseau
 *
 * HOW EMBARRASSING! I HAVE NO DESCRIPTION OF MY PROJECT!
 * PLEASE REMOVE A GRADE FROM MY WORK IF IT'S GRADED!
*/

"use strict";

let petals = [];


// create the canvas and generate the petals

function setup() {
  createCanvas(800, 800);

  // generate a random number of petals
  let petalCount = floor(random(8, 25));

  // add the petals to the array
  for (let i = 0; i < petalCount; i++) {
    petals.push({
      size: 50,
      color: "white",
      angle: (TWO_PI / petalCount) * i,
      distance: 100,
      falling: false,
      x: 0,
      y: 0,
      speed: 0,
    });
  }
}

// draw the psitil

function drawPistil(x, y, size, color) {
  push();
  fill(color);
  noStroke();
  ellipse(x, y, size);
  pop();
}

/**
 * draw a petal
 */

function drawPetal(x, y, size, color) {
  push();
  fill(color);
  stroke("#ebe9e9");
  //noStroke();
  ellipse(x, y, size, size * 4);
  pop();
}

// draw the flower using the generated petals

function drawFlower(x, y) {

    for (let i = 0; i < petals.length; i++) {
        let petal = petals[i];

        push();

        if (petal.falling) {

            // Increase falling speed (gravity)
            petal.speed += 0.15;

            // Move the petal downward
            petal.y += petal.speed;

            // Position the falling petal
            translate(petal.x, petal.y);
            rotate(petal.angle);

        } else {

            // Keep the petal attached to the flower
            translate(x, y);
            rotate(petal.angle);
            translate(0, -petal.distance);
        }

        drawPetal(0, 0, petal.size, petal.color);

        pop();
    }

    drawPistil(x, y, 100, "#ffe600");
}

//draw the scene

function draw() {
  background("lightblue");

  drawFlower(width / 2, height / 2);
}


// make petal fall when clicked
// Got help for this section of the code

function mousePressed() {
  let flowerX = width / 2;
  let flowerY = height / 2;

  for (let i = petals.length - 1; i >= 0; i--) {
    let petal = petals[i];

    // Ignore petals that have already been picked
    if (petal.falling) {
      continue;
    }

    // calculate the petal's position
    let petalX = flowerX + sin(petal.angle) * petal.distance;
    let petalY = flowerY - cos(petal.angle) * petal.distance;

    // calculate mouse position relative to petal
    let dx = mouseX - petalX;
    let dy = mouseY - petalY;

    // account for the petal's rotation
    let localX = dx * cos(petal.angle) + dy * sin(petal.angle);
    let localY = -dx * sin(petal.angle) + dy * cos(petal.angle);

    // check whether the click is inside the ellipse
    let hit =
      sq(localX / (petal.size / 2)) + sq(localY / (petal.size * 2)) <= 1;

    if (hit) {
      petal.falling = true;
      petal.x = petalX;
      petal.y = petalY;
      petal.speed = 0;

      break;
    }
  }
}
