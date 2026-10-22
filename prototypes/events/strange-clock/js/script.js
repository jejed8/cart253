/**
 * Strange Clock
 * Jeremy Duverseau
 * 
 * "What a strange way to watch the time pass by..."
 * 
 * Five squares pulse in different colors at different time intervals,
 * creating a visual representation of time passing.
 * 
 */

"use strict";

// Stores the properties of each light (colors, x position and delay)

let oneSec = {
    color: {
        off: "white",
        on: "lime"
    },
    currentColor: "white",
    x: 100,
    delay: 1000
};

let fiveSec = {
    color: {
        off: "white",
        on: "yellow"
    },
    currentColor: "white",
    x: 300,
    delay: 5000
};

let tenSec = {
    color: {
        off: "white",
        on: "pink"
    },
        currentColor: "white",
    x: 500,
    delay: 10000
}

let thirthySec = {
    color: {
        off: "white",
        on: "cyan"
    },
        currentColor: "white",
    x: 700,
    delay: 30000
}

let sixtySec = {
    color: {
        off: "white",
        on: "purple"
    },
        currentColor: "white",
    x: 900,
    delay: 60000
}

/**
* Creates the canvas and starts a timer for each light
*/
function setup() {
    createCanvas(1000, 600);
    background('lightgrey');

    setInterval(pulseOneLight, oneSec.delay);
    setInterval(pulseFiveLight, fiveSec.delay);
    setInterval(pulseTenLight, tenSec.delay);
    setInterval(pulseThirthyLight, thirthySec.delay);
    setInterval(pulseSixtyLight, sixtySec.delay);
}



/**
* Draws all five squares on the canvas
* Their current colors determine whether they appear lit or unlit
*/
function draw() {
    drawSquare(oneSec);
    drawSquare(fiveSec);
    drawSquare(tenSec);
    drawSquare(thirthySec);
    drawSquare(sixtySec);
}


// Turns the one-second light on, then turns it off after 300 milliseconds

function pulseOneLight() {
    oneSec.currentColor = oneSec.color.on;

    setTimeout(function() {
        oneSec.currentColor = oneSec.color.off;
    }, 300);
}

// Turns the five-second light on, then turns it off after 300 milliseconds

function pulseFiveLight() {
    fiveSec.currentColor = fiveSec.color.on;

    setTimeout(function() {
        fiveSec.currentColor = fiveSec.color.off;
    }, 300);
}

// Turns the ten-second light on, then turns it off after 300 milliseconds

function pulseTenLight() {
    tenSec.currentColor = tenSec.color.on;

    setTimeout(function() {
        tenSec.currentColor = tenSec.color.off;
    }, 300);
}

// Turns the thirty-second light on, then turns it off after 300 milliseconds

function pulseThirthyLight() {
    thirthySec.currentColor = thirthySec.color.on;

    setTimeout(function() {
        thirthySec.currentColor = thirthySec.color.off;
    }, 300);
}

// Turns the sixty-second light on, then turns it off after 300 milliseconds

function pulseSixtyLight() {
    sixtySec.currentColor = sixtySec.color.on;

    setTimeout(function() {
        sixtySec.currentColor = sixtySec.color.off;
    }, 300);
}

// Draws a square using the properties of the light passed as an argument

function drawSquare(square) {
    push();
    rectMode(CENTER);
    noStroke();
    fill(square.currentColor);
    rect(square.x, 300, 100, 100);
    pop();
}