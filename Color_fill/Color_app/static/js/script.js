document.addEventListener('DOMContentLoaded', () => {
    const containers = document.querySelectorAll('.clickableDiv');
    const colors = document.querySelectorAll('.submitButton');
    const colorName = document.getElementById('color-name');
    // const resetButton = document.getElementById('reset');
    
    let selectedColor = '';

    // Assuming color, colorName, and containers are defined elsewhere in your code
colors.forEach(submitButton => {
    submitButton.addEventListener('click', () => {
        selectedColor = submitButton.getAttribute('data-color');
        colorName.textContent = `Selected Color: ${selectedColor}`; // Fixed template literal
    });
});

containers.forEach(clickableDiv => {
    clickableDiv.addEventListener('click', () => {
        if (selectedColor) {
            const height = clickableDiv.clientHeight;
            const colorHeight = Math.random() * height; // Simulate different water levels

            // Ensure the ::before pseudo-element is styled with JavaScript
            const fill = clickableDiv.querySelector('.fill'); // Use a class selector or appropriate method

            // Apply styles directly to the container
            clickableDiv.style.backgroundColor = selectedColor;

            // Ensure the fill element exists and apply the height
            if (fill) {
                fill.style.height = `${colorHeight}px`; // Fixed template literal
            }
            // c=clickableDiv.style.backgroundColor
            colorName.textContent = `Container filled with ${selectedColor}`; // Fixed template literal
        }
    });
});

containers.forEach(clickableDiv => {
    resetButton.addEventListener('click', () => {
            clickableDiv.style.backgroundColor = '#fff';
            colorName.textContent = 'Select a color to fill a container.';
            clickableDiv.querySelector('::before').style.height = '0';
        });
    });
});