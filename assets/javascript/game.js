// Allow dat DOM to load
$(document).ready(function() {
    // Allow the entire page to load
    $(window).on("load", function() {
    // Create variables for random (goal) number, total wins, total losses
    var randoNum;
    var wins;
    var losses;


// Welcome to the Crystal Kingdom! - gameplay pseudocode

// At start of New Game:
    // Display random number between 19 - 200
    // Assign random hidden numerical value to each crystal between 1 - 12
    for(var i = 0; i < 4; i++) {
        var random = Math.floor((Math.random() * 12) + 1);
        console.log(random);

        $(".crystal-gem").attr("data-crystalvalue")
    }

    // Hide player's total score until they click a crystal

// When player clicks a crystal, it will add the assigned numerical value of the crystal to the player's total

// Player wins if they match random number exactly

// Player loses if they go over random number

// Game restarts when player wins or loses and appropriate counter increments

// Wins Counter

// Losses Counter





    })

});

