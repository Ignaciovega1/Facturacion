const preloaderWrapper = document.querySelector('.preloader-wrapper');

window .addEventListener('load', function() {

preloaderWrapper.classList.add('fade-out-animation');

setTimeout(() => {

preloaderWrapper.style.opacity = '0';

}, 1000);

});