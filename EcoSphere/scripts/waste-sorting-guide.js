// Handle the toggle of category descriptions when clicked
const categories = document.querySelectorAll('.category');

categories.forEach(category => {
    category.addEventListener('click', function() {
        const description = this.querySelector('.description');
        description.classList.toggle('visible');
    });
});
