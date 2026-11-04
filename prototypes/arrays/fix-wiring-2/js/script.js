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

let selectedOutlet = null;
let connections = [];

function setup() {
  createCanvas(800, 800);
  generateOutlets();
}

function draw() {
  background("white");

  let leftCount = 0;
  let rightCount = 0;

  let spacing = height / (level + 1);

  //draw the outlets
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

    drawOutlet(outlet.x, outlet.y, outlet.size, outlet.color);
  }

  // Draw completed connections
  for (let i = 0; i < connections.length; i++) {
    let connection = connections[i];

    push();
    colorMode(HSB);
    stroke(connection.first.color, 100, 100);
    strokeWeight(5);

    line(
      connection.first.x,
      connection.first.y,
      connection.second.x,
      connection.second.y,
    );

    pop();
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
      size: 50,
    });

    outlets.push({
      side: "right",
      color: hue,
      size: 50,
    });
  }

  // shuffle each side independently
  let leftOutlets = outlets.filter(outlet => outlet.side === "left");
  let rightOutlets = outlets.filter(outlet => outlet.side === "right");

  shuffle(leftOutlets, true);
  shuffle(rightOutlets, true);

  outlets = [...leftOutlets, ...rightOutlets];
}


// Check which outlet the player clicked
function mousePressed() {
  for (let i = 0; i < outlets.length; i++) {
    let outlet = outlets[i];

    let distance = dist(mouseX, mouseY, outlet.x, outlet.y);

    if (distance < outlet.size / 2) {
      // Ignore outlets that are already connected
      if (outlet.connected) {
        return;
      }

      // Select the first outlet
      if (selectedOutlet === null) {
        selectedOutlet = outlet;
      } else {
        // Check if the two outlets match
        if (
          selectedOutlet.color === outlet.color &&
          selectedOutlet.side !== outlet.side
        ) {
          connections.push({
            first: selectedOutlet,
            second: outlet,
          });

          selectedOutlet.connected = true;
          outlet.connected = true;

          selectedOutlet = null;

          // Advance when all pairs are connected
          if (connections.length === level) {
            level++;
            connections = [];
            generateOutlets();
          }
        } else {
          selectedOutlet = null;
        }
      }

      return;
    }
  }
}
