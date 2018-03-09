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

        // Write function for pulling random number between 19 - 200
        function randoNumFromInt(min,max) {
            return Math.floor(Math.random() * (max - min + 1) + min);
        };

        // Create variable to hold the randomly pulled number
        var numberToMatch = randoNumFromInt(19,200);

        // Grab the power-level ID and use numberToMatch to fill in text
        $('#power-level').text(numberToMatch);

        // Create on-click function for crystalImage class
        $('.crystalImage').on('click', function() {
            // Update the Current Power Level with the random number generated for that particular image (parseInt returns first number in a string, the string being the data-num attribute from "this" which is the .crystalImage)
            counter = counter + parseInt($(this).data('num'));

            // Update Current Power Level with new value of counter
            $('#current-power').text(counter);
            
            // Use if-else statement for win/loss scenarios
            if (counter == numberToMatch) {
                // Change status to win 
                $('#status').text('You Won!!!');
                // Increment win counter
                wins++;
                $('#win').text(wins);
                // Reset crystals
                $('#crystals').empty();
                setCrystals();
                // Start New Game
                newGame();
            } 
            else if (counter > numberToMatch) {
                // Change status to lose
                $('#status').text('Oh No! You Lost!');
                // Increment loss counter
                losses++;
                $('#lose').text(losses);
                // Reset crystals
                $('#crystals').empty();
                setCrystals();
                // Start New Game
                newGame();
            }
        });
    }

});

