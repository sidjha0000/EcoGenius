// Handling Journal Entries
const form = document.getElementById("journal-form");
const entriesList = document.getElementById("entries-list");

// Load existing journal entries from localStorage and display them
document.addEventListener("DOMContentLoaded", function() {
    const savedEntries = JSON.parse(localStorage.getItem("journalEntries")) || [];
    savedEntries.forEach(entry => {
        displayEntry(entry.date, entry.activity, entry.thoughts);
    });
});

form.addEventListener("submit", function(event) {
    event.preventDefault();
    
    const date = document.getElementById("date").value;
    const activity = document.getElementById("activity").value;
    const thoughts = document.getElementById("thoughts").value;

    if (date && activity && thoughts) {
        // Create the entry object
        const entry = {
            date: date,
            activity: activity,
            thoughts: thoughts
        };

        // Display the new entry
        displayEntry(date, activity, thoughts);

        // Save the entry to localStorage
        saveEntryToLocalStorage(entry);

        // Clear form fields after submission
        form.reset();
    } else {
        alert("Please fill in all fields!");
    }
});

// Function to display an entry on the page
function displayEntry(date, activity, thoughts) {
    const entry = document.createElement("div");
    entry.classList.add("entry");

    const entryDate = document.createElement("div");
    entryDate.classList.add("date");
    entryDate.textContent = `Date: ${date}`;
    
    const entryActivity = document.createElement("h4");
    entryActivity.textContent = `Action: ${activity}`;
    
    const entryThoughts = document.createElement("p");
    entryThoughts.textContent = `Reflection: ${thoughts}`;

    entry.appendChild(entryDate);
    entry.appendChild(entryActivity);
    entry.appendChild(entryThoughts);

    entriesList.appendChild(entry);
}

// Function to save the entry to localStorage
function saveEntryToLocalStorage(entry) {
    let savedEntries = JSON.parse(localStorage.getItem("journalEntries")) || [];
    savedEntries.push(entry);
    localStorage.setItem("journalEntries", JSON.stringify(savedEntries));
}
