// Allow dat DOM to load
$(document).ready(function() {
    // Create array to hold images
    crystals = ['assets/images/rose.png','assets/images/pearl.png','assets/images/garnet.png', 'assets/images/amethyst.png'];
    // Create variables for current power level, total wins, total losses
    var counter = 0;
    var wins = 0;
    var losses = 0;
    // Write the values (wins or losses) to the appropriate HTML elements
    $('#win').text(wins);
    $('#lose').text(losses);
    
    // Run the game (call the functions)
    setCrystals();
    newGame();


// Welcome to the Crystal Kingdom! - gameplay pseudocode


// Display random number between 19 - 200

// Assign random hidden numerical value to each crystal between 1 - 12

// Hide player's total score until they click a crystal

// When player clicks a crystal, it will add the assigned numerical value of the crystal to the player's total

// Player wins if they match random number exactly

// Player loses if they go over random number

// Game restarts when player wins or loses and appropriate counter increments

// Wins Counter

// Losses Counter







});

