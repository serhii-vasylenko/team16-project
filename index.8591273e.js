function addHeroAnimation(){document.querySelector(".hero__title").classList.add("animate__animated","animate__backInLeft","animate__slow"),setTimeout(removeHeroAnimation,2e3)}function removeHeroAnimation(){document.querySelector(".hero__title").classList.remove("animate__animated","animate__backInLeft","animate__slow")}function addOfferingsAnimation(){document.querySelector(".offerings__header").classList.add("animate__animated","animate__backInLeft","animate__slow"),setTimeout(removeOfferingsAnimation,2e3)}function removeOfferingsAnimation(){document.querySelector(".offerings__header").classList.remove("animate__animated","animate__backInLeft","animate__slow")}function addFavoritesAnimation(){document.querySelector(".favorites__title").classList.add("animate__animated","animate__backInLeft","animate__slow"),setTimeout(removeFavoritesAnimation,2e3)}function removeFavoritesAnimation(){document.querySelector(".favorites__title").classList.remove("animate__animated","animate__backInLeft","animate__slow")}function addCustomersAnimation(){document.querySelector(".customers__title").classList.add("animate__animated","animate__backInLeft","animate__slow");var e=document.querySelectorAll("li.customers__item"),t=!0,a=!1,n=void 0;try{for(var i,o=e[Symbol.iterator]();!(t=(i=o.next()).done);t=!0){i.value.classList.add("animate__animated","animate__rotateInDownLeft","animate__slow")}}catch(e){a=!0,n=e}finally{try{t||null==o.return||o.return()}finally{if(a)throw n}}setTimeout(removeCustomersAnimation,2e3)}function removeCustomersAnimation(){document.querySelector(".customers__title").classList.remove("animate__animated","animate__backInLeft","animate__slow");var e=document.querySelectorAll("li.customers__item"),t=!0,a=!1,n=void 0;try{for(var i,o=e[Symbol.iterator]();!(t=(i=o.next()).done);t=!0){i.value.classList.remove("animate__animated","animate__rotateInDownLeft","animate__slow")}}catch(e){a=!0,n=e}finally{try{t||null==o.return||o.return()}finally{if(a)throw n}}}function addSubscribeAnimation(){document.querySelector(".subscribe-form__title").classList.add("animate__animated","animate__backInLeft","animate__slow"),setTimeout(removeSubscribeAnimation,2e3)}function removeSubscribeAnimation(){document.querySelector(".subscribe-form__title").classList.remove("animate__animated","animate__backInLeft","animate__slow")}document.getElementById("hero_title").onclick=addHeroAnimation,document.getElementById("offerings_title").onclick=addOfferingsAnimation,document.getElementById("favorites_title").onclick=addFavoritesAnimation,document.getElementById("customers_title").onclick=addCustomersAnimation,document.getElementById("subscribe_title").onclick=addSubscribeAnimation,setTimeout(removeHeroAnimation,2e3);
//# sourceMappingURL=index.8591273e.js.map