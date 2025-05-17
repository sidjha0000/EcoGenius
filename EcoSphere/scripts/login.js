document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('login-form');
    const usernameInput = document.getElementById('username');
    const passwordInput = document.getElementById('password');
    const loginFailMessage = document.getElementById('login-fail-message');

    form.addEventListener('submit', function (e) {
        e.preventDefault(); // Prevent the form from refreshing the page

        const username = usernameInput.value;
        const password = passwordInput.value;

        // Get the list of users from localStorage
        const users = JSON.parse(localStorage.getItem('users')) || [];

        // Find the user by matching username and password
        const user = users.find(user => user.username === username && user.password === password);

        if (user) {
            // Redirect to the home page or dashboard
            window.location.href = '../dashboard/index.html';  // Redirect to a success page
        } else {
            // Show login failure message
            loginFailMessage.style.display = 'block';
        }
    });
});
