let offset = 0;
let stepSlyderTablet = 306;
let positionSlyderTablet = 612;
let stepSlyderDesktop = 554;
let positionSlyderDesktop = 1108;
const sliderLine = document.querySelector('.dishes__slider');
let screenSize = document.documentElement.clientWidth;

// Next-button click handler
document
  .querySelector('.dishes__button--next')
  .addEventListener('click', function () {
    let screenSize = document.documentElement.clientWidth;
    if (screenSize < 1280) {
      offset = offset + stepSlyderTablet;
      if (offset > positionSlyderTablet) {
        offset = 0;
      }
    }
    if (screenSize > 1280) {
      offset = offset + stepSlyderDesktop;
      if (offset > positionSlyderDesktop) {
        offset = 0;
      }
    }
    sliderLine.style.left = -offset + 'px';
    // Reset focus after click button
    document.querySelector('.dishes__button--next').blur();
  });

// Prev-button click handler
document
  .querySelector('.dishes__button--prev')
  .addEventListener('click', function () {
    screenSize = document.documentElement.clientWidth;
    if (screenSize < 1280) {
      offset = offset - stepSlyderTablet;
      if (offset < 0) {
        offset = positionSlyderTablet;
      }
    }
    if (screenSize > 1280) {
      offset = offset - stepSlyderDesktop;
      if (offset < 0) {
        offset = positionSlyderDesktop;
      }
    }
    sliderLine.style.left = -offset + 'px';
    // Reset focus after click button
    document.querySelector('.dishes__button--prev').blur();
  });

//  Return default dish if resize screen
window.addEventListener('resize', function () {
  sliderLine.style.left = 0;
});
