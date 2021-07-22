var $carImage = document.querySelector('.car-image');

function handleArrows(event) {
  switch (event.key) {
    case 'ArrowUp':
      $carImage.className = 'car-image up';
      break;
    case 'ArrowDown':
      $carImage.className = 'car-image down';
      break;
    case 'ArrowLeft':
      $carImage.className = 'car-image left';
      break;
    case 'ArrowRight':
      $carImage.className = 'car-image right';
      break;
  }
}
document.addEventListener('keydown', handleArrows);
