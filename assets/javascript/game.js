// Allow dat DOM to load
$(document).ready(function() {
    // Create variables for random (goal) number, total wins, total losses
    var randoNum;
    var wins;
    var losses;


// Welcome to the Crystal Kingdom! - gameplay pseudocode

// At start of New Game:
    // Display random number between 19 - 200

// Assign random hidden numerical value to each crystal between 1 - 12
    // Write function that will get a random value from a range of numbers
    function getRandomValue(min, max) {
        return Math.random() * (max - min) + min;
    };
    // Grab the images and dynamically add data-attribute using result from getRandomValue function
    // ID selectors
    var getGem1 = $("#gem1");
    var getGem2 = $("#gem2");
    var getGem3 = $("#gem3");
    var getGem4 = $("#gem4");



    // I can't figure this one out so far, so I'm going to try a more laborious, but easier to understand method.
        // for(var i = 0; i < 4; i++) {
        //     var random = Math.floor((Math.random() * 12) + 1);
        //     console.log(random);

        //     $(".crystal-gem").attr("data-crystalvalue");
        // }

// Hide player's total score until they click a crystal

// When player clicks a crystal, it will add the assigned numerical value of the crystal to the player's total

// Player wins if they match random number exactly

// Player loses if they go over random number

// Game restarts when player wins or loses and appropriate counter increments

// Wins Counter

// Losses Counter







});

