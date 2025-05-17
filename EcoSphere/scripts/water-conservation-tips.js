// Mark a tip as completed when clicked
const tips = document.querySelectorAll('.tip');

tips.forEach(tip => {
    tip.addEventListener('click', function() {
        this.classList.toggle('completed');
    });
});
