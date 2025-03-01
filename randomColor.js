// Function to generate a random color
function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

const themeBtn = document.getElementById('theme-btn');

// Add click event listener to the image
themeBtn.addEventListener('click', function() {
    
    document.body.style.backgroundColor = getRandomColor();
});
