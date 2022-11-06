const sliderLine = document.querySelector('.dishes__slider');
const countImg = document.getElementsByClassName('dishes__img').length;
let bordrWidth = Number(
  getComputedStyle(document.querySelector('.dishes__wrapper'), null)
    .getPropertyValue('border-width')
    .slice(0, -2)
);

let timer;
let offset = 0;
let stepSlider =
  document.querySelector('.dishes__img').clientWidth + bordrWidth;
let positionSlider = (countImg - 1) * stepSlider;

document.getElementById('btn-next').onclick = sliderLeft;
document.getElementById('btn-prev').onclick = sliderRigth;
autoSlider();

// Auto slider
function autoSlider() {
  timer = setTimeout(sliderLeft, 5000);
}

// Next-button click handler

function sliderLeft() {
  offset += stepSlider;
  if (offset > positionSlider) {
    offset = 0;
  }
  clearTimeout(timer);
  sliderLine.style.left = -offset + 'px';
  autoSlider();
  // Reset focus after click button
  document.querySelector('.dishes__button--next').blur();
}

//  Prev-button click handler

function sliderRigth() {
  offset = offset - stepSlider;
  if (offset < 0) {
    offset = positionSlider;
  }

  sliderLine.style.left = -offset + 'px';
  // Reset focus after click button
  document.querySelector('.dishes__button--prev').blur();
}

//  Return default dish if resize screen
window.addEventListener('resize', function () {
  setTimeout(function () {
    bordrWidth = Number(
      getComputedStyle(document.querySelector('.dishes__wrapper'), null)
        .getPropertyValue('border-width')
        .slice(0, -2)
    );
    stepSlider =
      document.querySelector('.dishes__img').clientWidth + bordrWidth;
    positionSlider = (countImg - 1) * stepSlider;
  }, 300);
  offset = 0;

  sliderLine.style.left = 0;
});
