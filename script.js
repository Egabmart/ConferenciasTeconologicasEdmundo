const track = document.querySelector('.carousel-track');
const images = Array.from(track.children);
const nextBtn = document.querySelector('.next');
const prevBtn = document.querySelector('.prev');

let currentIndex = Math.floor(images.length / 2); // Comienza desde el centro

function updateCarousel() {
  images.forEach((img, index) => {
    img.classList.remove('active');
    img.style.transform = 'scale(0.8)';
    img.style.opacity = '0.5';
  });

  const activeImg = images[currentIndex];
  activeImg.classList.add('active');
  activeImg.style.transform = 'scale(1.1)';
  activeImg.style.opacity = '1';

  const imgWidth = activeImg.offsetWidth + 20; // 20 = margen izq+der
  const trackOffset = (track.parentElement.offsetWidth / 2) - (imgWidth / 2);
  const scrollAmount = currentIndex * imgWidth;

  track.style.transform = `translateX(${trackOffset - scrollAmount}px)`;
}

nextBtn.addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % images.length;
  updateCarousel();
});

prevBtn.addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  updateCarousel();
});

window.addEventListener('resize', updateCarousel);
updateCarousel();