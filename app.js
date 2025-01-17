document.querySelectorAll('.card-button').forEach(button => {
    button.addEventListener('click', function() {
        const cardContent = this.closest('.card1').querySelector('.card-content');
        if (cardContent) {
            cardContent.classList.toggle('hidden');
            this.textContent = cardContent.classList.contains('hidden') ? '+' : '-';
        }
    });
});
