var offset=0,stepSlyderTablet=306,positionSlyderTablet=612,stepSlyderDesktop=554,positionSlyderDesktop=1108,sliderLine=document.querySelector(".dishes__slider"),screenSize=document.documentElement.clientWidth;document.querySelector(".dishes__button--next").addEventListener("click",(function(){var e=document.documentElement.clientWidth;e<1280&&(offset+=stepSlyderTablet)>positionSlyderTablet&&(offset=0),e>1280&&(offset+=stepSlyderDesktop)>positionSlyderDesktop&&(offset=0),sliderLine.style.left=-offset+"px",document.querySelector(".dishes__button--next").blur()})),document.querySelector(".dishes__button--prev").addEventListener("click",(function(){(screenSize=document.documentElement.clientWidth)<1280&&(offset-=stepSlyderTablet)<0&&(offset=positionSlyderTablet),screenSize>1280&&(offset-=stepSlyderDesktop)<0&&(offset=positionSlyderDesktop),sliderLine.style.left=-offset+"px",document.querySelector(".dishes__button--prev").blur()})),window.addEventListener("resize",(function(){sliderLine.style.left=0}));
//# sourceMappingURL=index.3c0e0579.js.map
