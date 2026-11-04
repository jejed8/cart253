/**
 * Flower Of Love
 * Jeremy Duverseau
 * 
 * HOW EMBARRASSING! I HAVE NO DESCRIPTION OF MY PROJECT!
 * PLEASE REMOVE A GRADE FROM MY WORK IF IT'S GRADED!
 */

"use strict";

/**
 * OH LOOK I DIDN'T DESCRIBE SETUP!!
*/
function setup() {
    createCanvas(800, 800);

}

function drawPistil(x, y, size, color) {
    push();
    fill(color);
    noStroke();
    ellipse(x, y, size);
    pop();
}

function drawPetal(x, y, size, color) {
    push();
    fill(color);
    noStroke();
    ellipse(x, y, size, size * 4);
    pop();
}


let petals = [];

function drawFlower(x, y, petalCount) {

    // Empty the array before creating new petals
    petals = [];

    // Add the requested number of petals to the array
    for (let i = 0; i < petalCount; i++) {
        petals.push({
            size: 50,
            color: "white"
        });
    }

    // Draw the petals around the pistil
    for (let i = 0; i < petals.length; i++) {
        push();

        translate(x, y);
        rotate(TWO_PI / petals.length * i);

        drawPetal(0, -100, petals[i].size, petals[i].color);

        pop();
    }

    // Draw the pistil
    drawPistil(x, y, 100, "#ffe600");
}

/**
 * OOPS I DIDN'T DESCRIBE WHAT MY DRAW DOES!
*/
function draw() {
    background("lightblue");

    drawFlower(width / 2, height / 2, 8);

}