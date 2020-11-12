const swiper = new Swiper(".swiper-container", {
  pagination: {
    el: ".swiper-pagination",
  },
});

const flower = document.getElementById("flower");
const couple = document.getElementById("couple");
const mask1 = document.getElementById("mask1");
const mask2 = document.getElementById("mask2");
const video = document.getElementById("video");
const karinagun = document.getElementById("karinagun");
const lastSlide = swiper.slides.length - 1;

setTimeout(function() {
  flower.style.animation = 'flower 5s infinite';
  couple.style.animation = 'couple 5s infinite';
}, 500);

particlesJS.load('particles-js', 'assets/js/particles.json', function() {
  console.log('callback - particles.js config loaded');
});

swiper.on("slideChange", function (event, index) {
  var index = event.activeIndex;

  if (index > 0 && index < lastSlide) {
    mask1.style.top = "0";
    mask1.style.right = "0";
    mask2.style.bottom = "0";
    mask2.style.left = "0";
  } else {
    mask1.style.top = "-100%";
    mask1.style.right = "-100%";
    mask2.style.bottom = "-100%";
    mask2.style.left = "-100%";
  }

  if (index === lastSlide) {
    video.style.background = "#242424";
    karinagun.play();
  } else {
    video.style.background = "transparent";
    karinagun.pause();
  }
});
