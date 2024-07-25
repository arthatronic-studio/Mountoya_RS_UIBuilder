document.getElementById('start-button').addEventListener('click', function() {
  window.location.href = 'home.html';
})

document.addEventListener('DOMContentLoaded', function() {
  const slideshow = document.createElement('div');
  slideshow.classList.add('slideshow');
  
  const images = [
      './images/homepage-1.png',
      './images/homepage-2.png',
      './images/homepage-3.png'
  ];

  images.forEach((src) => {
      const img = document.createElement('img');
      img.src = src;
      slideshow.appendChild(img);
  });

  document.querySelector('main').appendChild(slideshow);

  let currentIndex = 0;

  function showNextImage() {
      currentIndex = (currentIndex + 1) % images.length;
      slideshow.style.transform = `translateX(-${currentIndex * 100}%)`;
  }

  setInterval(showNextImage, 5000);
});
