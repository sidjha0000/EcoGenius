// Handle form submission (without backend)
document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form from submitting to backend

    // Get form values
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    // Store form data in localStorage
    const formData = {
        name: name,
        email: email,
        message: message
    };

    // Save data to localStorage with a unique key
    localStorage.setItem("contactFormData", JSON.stringify(formData));

    // Show SweetAlert2 confirmation message
    Swal.fire({
        title: 'Thank You!',
        text: `Hi ${name}, your message has been received successfully. We will get back to you shortly.`,
        icon: 'success',
        confirmButtonText: 'OK'
    });

    // Optional: Clear the form fields after submission
    document.getElementById("contactForm").reset();
});
