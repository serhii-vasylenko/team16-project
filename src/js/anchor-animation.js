document.getElementById('hero_title').onclick = addHeroAnimation;
document.getElementById('offerings_title').onclick = addOfferingsAnimation;
document.getElementById('favorites_title').onclick = addFavoritesAnimation;
document.getElementById('customers_title').onclick = addCustomersAnimation;
document.getElementById('subscribe_title').onclick = addSubscribeAnimation;
setTimeout(removeHeroAnimation, 2000);

function addHeroAnimation() {
  let element = document.querySelector('.hero__title');
  element.classList.add(
    'animate__animated',
    'animate__backInLeft',
    'animate__slow'
  );
  setTimeout(removeHeroAnimation, 2000);
}

function removeHeroAnimation() {
  let element = document.querySelector('.hero__title');
  element.classList.remove(
    'animate__animated',
    'animate__backInLeft',
    'animate__slow'
  );
}

function addOfferingsAnimation() {
  let element = document.querySelector('.offerings__header');
  element.classList.add(
    'animate__animated',
    'animate__backInLeft',
    'animate__slow'
  );
  setTimeout(removeOfferingsAnimation, 2000);
}

function removeOfferingsAnimation() {
  let element = document.querySelector('.offerings__header');
  element.classList.remove(
    'animate__animated',
    'animate__backInLeft',
    'animate__slow'
  );
}

function addFavoritesAnimation() {
  let element = document.querySelector('.favorites__title');
  element.classList.add(
    'animate__animated',
    'animate__backInLeft',
    'animate__slow'
  );
  setTimeout(removeFavoritesAnimation, 2000);
}

function removeFavoritesAnimation() {
  let element = document.querySelector('.favorites__title');
  element.classList.remove(
    'animate__animated',
    'animate__backInLeft',
    'animate__slow'
  );
}

function addCustomersAnimation() {
  let part = document.querySelector('.customers__title');
  part.classList.add(
    'animate__animated',
    'animate__backInLeft',
    'animate__slow'
  );
  let element = document.querySelectorAll('li.customers__item');
  for (let el of element) {
    el.classList.add(
      'animate__animated',
      'animate__rotateInDownLeft',
      'animate__slow'
    );
  }
  setTimeout(removeCustomersAnimation, 2000);
}

function removeCustomersAnimation() {
  let part = document.querySelector('.customers__title');
  part.classList.remove(
    'animate__animated',
    'animate__backInLeft',
    'animate__slow'
  );
  let element = document.querySelectorAll('li.customers__item');
  for (let el of element) {
    el.classList.remove(
      'animate__animated',
      'animate__rotateInDownLeft',
      'animate__slow'
    );
  }
}

function addSubscribeAnimation() {
  let element = document.querySelector('.subscribe-form__title');
  element.classList.add(
    'animate__animated',
    'animate__backInLeft',
    'animate__slow'
  );
  setTimeout(removeSubscribeAnimation, 2000);
}

function removeSubscribeAnimation() {
  let element = document.querySelector('.subscribe-form__title');
  element.classList.remove(
    'animate__animated',
    'animate__backInLeft',
    'animate__slow'
  );
}
