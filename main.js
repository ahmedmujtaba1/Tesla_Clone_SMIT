const cardContainer = document.getElementById("card-container");
const previousBtn = document.getElementById("previous-btn");
const nextBtn = document.getElementById("next-btn");
const cards = cardContainer.getElementsByClassName("card");
let currentIndex = 0;

function showCard(index) {
  for (let i = 0; i < cards.length; i++) {
    if (i === index) {
      cards[i].style.display = "block";
    } else {
      cards[i].style.display = "none";
    }
  }
}

function handlePrevious() {
  if (currentIndex > 0) {
    currentIndex--;
  } else {
    currentIndex = cards.length - 1;
  }
  showCard(currentIndex);
}

function handleNext() {
  if (currentIndex < cards.length - 1) {
    currentIndex++;
  } else {
    currentIndex = 0;
  }
  showCard(currentIndex);
}

previousBtn.addEventListener("click", handlePrevious);
nextBtn.addEventListener("click", handleNext);

// Show the initial card
showCard(currentIndex);
