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
    // newGame();

    // Dynamically create four crystals with random hidden numerical values between 1 - 12 using a function called setCrystals
    function setCrystals() {
        // Create an empty array
        var numbers = []
        // Use a while loop to keep generating random numbers until the array is "full" (four numbers)
            while(numbers.length < 4) {
                // Generate a random number
                var randomNumber = Math.ceil(Math.random() * 12);
                var found = false;
                // Assign it to the array [I STILL  NEED HELP UNDERSTANDING THIS PROCESS]
                for (var i = 0; i < numbers.length; i++) {
                    if (numbers[i] == randomNumber) {
                        found = true;
                        break;
                    }
                }
                if(!found)numbers[numbers.length] = randomNumber;
            }
        console.log(numbers);

    // Use a for-loop to iteratre through the array of numbers, creating four image tags in the "crystals" <div>, assigning the four images from the crystals array and the four randomNumbers to each new tag
        for (i = 0; i < numbers.length; i++) {
            // Image tag selector
            var imageCrystal = $('<img>');
            // Add the appropriate number from the numbers array to the new image tag
            imageCrystal.attr('data-num', numbers[i]);
            // Add the appropriate image from the crystals array
            imageCrystal.attr('src', crystals[i]);
            // Add an alt to each image tag
            imageCrystal.attr('alt', 'A Crystal Gem');
            // Add classes to each image tag
            imageCrystal.addClass('crystalImage img-fluid')
            $('#crystals').append(imageCrystal);
        }
    }

    // Start a New Game with a function called newGame
    function newGame() {
        // Reset Current Power Level (counter) to zero using the current-power ID
        counter = 0;
        $('#current-power').text(counter);
    }
// Welcome to the Crystal Kingdom! - gameplay pseudocode
 

// Display random number between 19 - 200



// Hide player's total score until they click a crystal

// When player clicks a crystal, it will add the assigned numerical value of the crystal to the player's total

// Player wins if they match random number exactly

// Player loses if they go over random number

// Game restarts when player wins or loses and appropriate counter increments

// Wins Counter

// Losses Counter







});

