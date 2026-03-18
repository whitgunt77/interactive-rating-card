const ratingForm = document.getElementById('rating-form');
const ratingState = document.getElementById('rating-state');
const thankYouState = document.getElementById('thank-you-state');
const selectedRatingText = document.getElementById('selected-rating');

ratingForm.addEventListener('submit', (e) => {
    e.preventDefault();

    // Get the selected value from the radio group
    const formData = new FormData(ratingForm);
    const rating = formData.get('rating');

    if (rating) {
        // Update the text in the thank you card
        selectedRatingText.textContent = rating;

        // Switch states
        ratingState.classList.add('hidden');
        thankYouState.classList.remove('hidden');
    }
});