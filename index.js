let homeIncrement = document.getElementsByClassName("big-score")[0]; // Access the first element with the class
let guestIncrement = document.getElementsByClassName("big-score2")[0]; // Access the first element with the class


let liveHomeScore = parseInt(homeIncrement.innerText) || 0; // Parse the current score as a number, default to 0 if NaN
let liveGuestScore = parseInt(guestIncrement.innerText) || 0;
// Generic function to update the score
function incrementScore(incrementValue) {
    liveHomeScore += incrementValue; // Increment the score
    homeIncrement.innerText = liveHomeScore; // Update the displayed score
}

// Functions for specific increments
function plus1() {
    incrementScore(1);
}

function plus2() {
    incrementScore(2);
}

function plus3() {
    incrementScore(3);
}

// Decrement functions
function minus11() {
    incrementScore(-1);
}
function minus22() {
    incrementScore(-2);
}
function minus33() {
    incrementScore(-3);
}

function incrementScore2(x){
    liveGuestScore += x;
    guestIncrement.innerText = liveGuestScore;
}

function pluss1(){
    incrementScore2(1);
}
function pluss2(){
    incrementScore2(2);
}
function pluss3(){
    incrementScore2(3);
}

// Decrement functions
function minus1() {
    incrementScore2(-1);
}
function minus2() {
    incrementScore2(-2);
}
function minus3() {
    incrementScore2(-3);
}