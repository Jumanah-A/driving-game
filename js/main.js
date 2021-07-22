var $carImage = document.querySelector('.car-image');
var img = document.querySelector('img');
var carLocation = { moving: false, x: 0, y: 0 };
// var move = 0;

function handleArrows(event) {
  // console.log(event.code);
  switch (event.code) {
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
    case 'Space':
      if (carLocation.moving === false) {
        carLocation.moving = true;
        var x = setInterval(moveCar, 500);
      } else {
        // debugger;
        // console.log("please stop");
        // console.log(carLocation["moving"]);
        carLocation.moving = false;
        // console.log(carLocation["moving"]);
        clearInterval(x);
        stopCar();

      }
      // console.log("space is pressed!!");
      break;
  }
}
document.addEventListener('keydown', handleArrows);
function moveCar() {
  carLocation.x += 100;
  img.style.left = JSON.stringify(carLocation.x) + 'px';
  // console.log($carImage.style.right);
}
function stopCar() {
  img.style.left = JSON.stringify(0) + 'px';
  // img.style.top = JSON.stringify(carLocation['y']) + "px";
  // img.style.left = JSON.stringify(carLocation['x']) + "px";
  // img.style.top = JSON.stringify(carLocation['y']) + "px";
}
