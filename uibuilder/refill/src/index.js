document.getElementById('start-button').addEventListener('click', function() {
  localStorage.setItem("admin", 0);
  window.location.href = 'home.html';
})

localStorage.setItem("admin", 0);

document.getElementById('logo').addEventListener('click', function () {
  if(Number(localStorage.getItem("admin"))<5){
    console.log(Number(localStorage.getItem("admin")));
    localStorage.setItem("admin", Number(localStorage.getItem("admin")) + 1);
    
  } else {
    localStorage.setItem("admin", 0);
    localStorage.setItem("totalVolume",19000);
    window.location.href = 'http://192.168.18.22:1880/ui/';

    let payload = {};
    payload = { type: 'reset', value: '1' };
    uibuilder.send({ payload: payload });
    
    modalGalon.style.display = 'none';
  }
  
  
})

const modalGalon = document.getElementById('modal');

if(Number(localStorage.getItem("totalVolume"))<1000){
  modalGalon.style.display = 'flex';
} else{
  modalGalon.style.display = 'none';
}

document.addEventListener('DOMContentLoaded', function() {
  const slideshow = document.createElement('div');
  slideshow.classList.add('slideshow');

  const images = [
      './images/homepage-1.png',
      './images/homepage-2.png',
      './images/homepage-3.png',
      './images/homepage-4.png',
      './images/homepage-5.png'
  ];

  images.forEach((src) => {
      const img = document.createElement('img');
      img.src = src;
      slideshow.appendChild(img);
  });

  uibuilder.onChange('msg', function (msg) {
    console.log('Message received from Node-RED:', msg);
    // const modal = document.getElementById('modal');
    if (msg.payload === '1') {
      // Show the modal
      localStorage.setItem("sensor", 1);
      console.log('Showing modal');
      // modal.style.display = 'flex';
    } else if (msg.payload === '0') {
      // Hide the modal
      localStorage.setItem("sensor", 0);
      console.log('Hiding modal');
      // modal.style.display = 'none';
    } else {
      // Debugging log for unexpected payload
      console.log('Unexpected payload:', msg.payload);
    }
    if (msg.payload && msg.payload.volumeliters !== undefined) {
      let volumeliters = msg.payload.volumeliters;
      // localStorage.setItem('volumeliters', volumeliters);
      // let x = localStorage.getItem('totalVolume') ? parseInt(localStorage.getItem('totalVolume'), 10) : 19000;
      // x -= volumeliters;
      let x = 19000 - volumeliters;
      localStorage.setItem('totalVolume', x);
    }
  });

  document.querySelector('main').appendChild(slideshow);

  let currentIndex = 0;

  function showNextImage() {
      currentIndex = (currentIndex + 1) % images.length;
      slideshow.style.transform = `translateX(-${currentIndex * 100}%)`;
  }

  setInterval(showNextImage, 5000);
});
