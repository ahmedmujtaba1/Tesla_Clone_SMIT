const images = document.querySelectorAll("#image-slider img");
const previousButton = document.getElementById("previous-button");
let currentIndex = 0;

function showImage(index) {
  images.forEach((image, i) => {
    if (i === index) {
      image.style.opacity = 1;
    } else {
      image.style.opacity = 0;
    }
  });
}

function previousImage() {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  showImage(currentIndex);
}

previousButton.addEventListener("click", previousImage);

setInterval(() => {
  currentIndex = (currentIndex + 1) % images.length;
  showImage(currentIndex);
}, 3000);
