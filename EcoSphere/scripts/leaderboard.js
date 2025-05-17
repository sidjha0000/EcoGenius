// Retrieve leaderboard data from localStorage
function getLeaderboard() {
    let leaderboard = JSON.parse(localStorage.getItem("leaderboard"));
    if (!leaderboard) {
        leaderboard = [];
    }
    return leaderboard;
}

// Save leaderboard data to localStorage
function saveLeaderboard(leaderboard) {
    localStorage.setItem("leaderboard", JSON.stringify(leaderboard));
}

// Update leaderboard display
function updateLeaderboard() {
    const leaderboard = getLeaderboard();
    const leaderboardList = document.getElementById("leaderboard-list");
    leaderboardList.innerHTML = '';

    leaderboard.sort((a, b) => b.score - a.score); // Sort leaderboard by score in descending order

    leaderboard.forEach((entry, index) => {
        const entryDiv = document.createElement("div");
        entryDiv.innerHTML = `<span>${index + 1}. ${entry.name}</span> - <span>${entry.score}</span>`;
        leaderboardList.appendChild(entryDiv);
    });
}

// Handle form submission for adding a score
document.getElementById("score-form").addEventListener("submit", function (e) {
    e.preventDefault();
    
    const username = document.getElementById("username").value.trim();
    const score = parseInt(document.getElementById("score").value);

    if (username && !isNaN(score)) {
        const leaderboard = getLeaderboard();
        leaderboard.push({ name: username, score: score });
        saveLeaderboard(leaderboard);
        updateLeaderboard();
    }

    // Reset form
    document.getElementById("username").value = '';
    document.getElementById("score").value = '';
});

// Initial leaderboard display
document.addEventListener("DOMContentLoaded", function() {
    updateLeaderboard();
});
