// script.js

document.addEventListener('DOMContentLoaded', function() {
    let count = 0;  // Initial count

    // Select DOM elements
    const countDisplay = document.querySelector('.count h2');
    const incrementButton = document.querySelector('.incrementbutton');
    const decrementButton = document.querySelector('.button');
    const resetButton = document.querySelector('div button');

    // Function to update the count display
    function updateDisplay() {
        countDisplay.textContent = count;
    }

    // Increment the counter
    incrementButton.addEventListener('click', function() {
        count++;
        updateDisplay();
    });

    // Decrement the counter
    decrementButton.addEventListener('click', function() {
        if (count > 0) {  // Prevent count from going below 0
            count--;
            updateDisplay();
        }
    });

    // Reset the counter to 0
    resetButton.addEventListener('click', function() {
        count = 0;
        updateDisplay();
    });
});
