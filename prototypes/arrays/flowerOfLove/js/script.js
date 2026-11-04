/**
 * Flower Of Love
 * Jeremy Duverseau
 * 
 * HOW EMBARRASSING! I HAVE NO DESCRIPTION OF MY PROJECT!
 * PLEASE REMOVE A GRADE FROM MY WORK IF IT'S GRADED!
*/

"use strict";

let petals = [];

/**
 * create the canvas and generate the petals
*/
function setup() {
    createCanvas(800, 800);

    // generate a random number of petals
    let petalCount = floor(random(8, 25));

    // add the petals to the array
    for (let i = 0; i < petalCount; i++) {
        petals.push({
            size: 50,
            color: "white"
        });
    }
}

/**
 * draw the pistil
*/
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
    stroke('#ebe9e9')
    //noStroke();
    ellipse(x, y, size, size * 4);
    pop();
}

/**
 * draw the flower using the generated petals
*/

function drawFlower(x, y) {

    // draw each petal around the pistil
    for (let i = 0; i < petals.length; i++) {
        push();

        // move the origin to the flower's center
        translate(x, y);

        // rotate each petal evenly around the pistil
        rotate(TWO_PI / petals.length * i);

        // draw the petal
        drawPetal(0, -100, petals[i].size, petals[i].color);

        pop();
    }

    // draw the pistil on top of the petals
    drawPistil(x, y, 100, "#ffe600");
}

/**
 * draw the scene
*/

function draw() {
    background("lightblue");

    drawFlower(width / 2, height / 2);
}