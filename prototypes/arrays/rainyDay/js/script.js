/**
 * Rainy Day
 * Jeremy Duverseau
 * 
 * Animated scene of raindrops falling
 */

"use strict";

let raindrops = [];

function setup() {
  createCanvas(800, 800);

  for (let i = 0; i < 100; i++) {
    let raindrop = {
      x: random(0, width),
      y: random(-height, 0),
      speed: random(2, 8),
      hue: 208,
    };

    raindrops.push(raindrop);
  }
}


// draw the scene
function draw() {
  background('#2e3149');

  // loop through every raindrop
  for (let drop of raindrops) {

    // move the raindrop down
    drop.y += drop.speed;

    // draw the raindrop
    raindrop(drop.x, drop.y, drop.speed, drop.hue);

    // reset when the raindrop reaches the bottom
    if (drop.y > height) {
      drop.y = random(-100, 0);
      drop.x = random(0, width);
    }
  }
}


// draw a raindrop
function raindrop(x, y, speed, hueValue) {
  push();

  colorMode(HSB);
  fill(hueValue, 100, 100);
  noStroke();

  ellipse(x, y, 3, speed * 2);

  pop();
}