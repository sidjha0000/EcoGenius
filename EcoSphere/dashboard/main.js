document.addEventListener("DOMContentLoaded", function() {
    const username = document.getElementById("username");
    username.textContent = "Eco Warrior"; // Example: Change user name dynamically

    // Eco Score Animation
    let score = 10; 
    const scoreElement = document.getElementById("eco-score");
    scoreElement.textContent = score;

    // Progress Bar Animation
    const progressBar = document.getElementById("progress");
    progressBar.style.width = score + "%";
});
