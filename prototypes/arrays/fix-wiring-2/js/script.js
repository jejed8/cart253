
/**
 * Fix the wiring
 * Jeremy Duverseau
 *
 * A color-matching game where the player connects
 * male and female outlets of the same color.
 * Each side has one outlet of each color, arranged randomly.
 */

"use strict";

let outlets = [];
let level = 1;

function setup() {
  createCanvas(800, 800);
  generateOutlets();
}

//draw the outlets
function draw() {
  background("white");

  let leftCount = 0;
  let rightCount = 0;

  let spacing = height / (level + 1);

  for (let i = 0; i < outlets.length; i++) {
    let outlet = outlets[i];

    //position outlet left and right depending on their side property
    if (outlet.side === "left") {
      outlet.x = 100;
      leftCount++;
      outlet.y = leftCount * spacing;
    } else {
      outlet.x = width - 100;
      rightCount++;
      outlet.y = rightCount * spacing;
    }

    drawOutlet(
      outlet.x,
      outlet.y,
      outlet.size,
      outlet.color
    );
  }
}

function drawOutlet(x, y, size, color) {
  push();
  colorMode(HSB);
  fill(color, 100, 100);
  noStroke();
  ellipse(x, y, size);
  pop();
}

// generate a pair of color matching outlets and push them into the outlets array
function generateOutlets() {
  outlets = [];

  for (let i = 0; i < level; i++) {
    let hue = (i * 137.5) % 360;

    outlets.push({
      side: "left",
      color: hue,
      size: 50
    });

    outlets.push({
      side: "right",
      color: hue,
      size: 50
    });
  }
}
