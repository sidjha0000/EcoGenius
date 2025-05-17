document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('register-form');
    const successMessage = document.getElementById('registration-success-message');

    form.addEventListener('submit', function (e) {
        e.preventDefault(); // Prevent the form from refreshing the page

        const username = document.getElementById('username').value;
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;

        // Simple validation
        if (username === "" || email === "" || password === "") {
            alert('Please fill all the fields!');
            return;
        }

        // Create a user object to store in localStorage
        const userData = {
            username: username,
            email: email,
            password: password
        };

        // Get existing user data from localStorage (if any)
        let users = JSON.parse(localStorage.getItem('users')) || [];

        // Check if the username already exists in the stored users data
        const userExists = users.some(user => user.username === username);

        if (userExists) {
            alert('Username already exists! Please choose a different one.');
        } else {
            // Add new user to the array of users
            users.push(userData);

            // Store updated users array back to localStorage
            localStorage.setItem('users', JSON.stringify(users));

            // Show success message below the form
            successMessage.style.display = 'block';  // Show the success message

            // Optionally, reset the form
            form.reset();
        }
    });
});
