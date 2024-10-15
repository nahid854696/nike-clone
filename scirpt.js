// Initialize the current position
let currentPosition = 0;

// Number of cards visible at a time
const slider = document.querySelector('.slider');
const cards = document.querySelectorAll('.card');
const totalCards = cards.length;

// Calculate card width dynamically including margin
const cardWidth = cards[0].offsetWidth;
const gap = parseInt(window.getComputedStyle(cards[0]).marginRight);

// Slide Left
function slideLeft() {
  const maxPosition = (totalCards - Math.floor(sliderContainer.clientWidth / (cardWidth + gap))) * (cardWidth + gap);
  if (currentPosition > 0) {
    currentPosition -= (cardWidth + gap);
    currentPosition = Math.max(currentPosition, 0); // Prevent sliding further left
    slider.style.transform =`translateX(-${currentPosition}px)`;
  }
}

// Slide Right
function slideRight() {
  const maxPosition = (totalCards - Math.floor(sliderContainer.clientWidth / (cardWidth + gap))) * (cardWidth + gap);
  if (currentPosition < maxPosition) {
    currentPosition += (cardWidth + gap);
    currentPosition = Math.min(currentPosition, maxPosition); // Prevent sliding further right
    slider.style.transform =`translateX(-${currentPosition}px)`;
  }
}