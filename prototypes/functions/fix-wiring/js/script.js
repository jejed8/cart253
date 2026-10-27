/**
 * Title of Project
 * Author Name
 * 
 * HOW EMBARRASSING! I HAVE NO DESCRIPTION OF MY PROJECT!
 * PLEASE REMOVE A GRADE FROM MY WORK IF IT'S GRADED!
 */

"use strict";

/**
 * OH LOOK I DIDN'T DESCRIBE SETUP!!
*/
let male = [
    {x: 0, y: 100, color: undefined},
    {x: 0, y: 300, color: undefined},
    {x: 0, y: 500, color: undefined}
];

let female = [
    {x: 550, y: 100, color: undefined},
    {x: 550, y: 300, color: undefined},
    {x: 550, y: 500, color: undefined}
];

let colors = ["yellow", "purple", "green"];



function setup() {
    createCanvas(600, 600);

    // assign a random color to each square
    for (let i = 0; i < male.length; i++) {
        male[i].color = random(colors);
        female[i].color = random(colors);
    }

}


/**
 * OOPS I DIDN'T DESCRIBE WHAT MY DRAW DOES!
*/
function draw() {

    // draw the male squares
    for (let i = 0; i < male.length; i++) {
        fill(male[i].color);
        rect(male[i].x, male[i].y, 50, 50);
    }

    // draw the female squares
    for (let i = 0; i < female.length; i++) {
        fill(female[i].color);
        rect(female[i].x, female[i].y, 50, 50);
    }

}