document.addEventListener('DOMContentLoaded', function () {
  // Initialize uibuilder
  console.log('Initializing uibuilder...');
  uibuilder.start();

  // Debugging log
  console.log('Setting up uibuilder message listener...');

  setTimeout(function(){
    sendPayload(localStorage.getItem("button"))
  },200);

  // Listen for messages from Node-RED
  uibuilder.onChange('msg', function (msg) {
      console.log('Message received from Node-RED:', msg);
      if (msg.payload.finish === 'done') {
          // Navigate to thank you page
          console.log('Navigating to thank you page');
          window.location.href = 'thx.html';
      } else if (msg.payload === '0'){
        localStorage.setItem("sensor", 0);
      } else if (msg.payload === '1') {
        localStorage.setItem("sensor", 1);
      } else{
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

  // Debugging log for DOM ready
  console.log('DOM fully loaded');
});

// Function to send payload
function sendPayload(button) {
  let payload = {};
  payload = { type: button, value: '1' };
  uibuilder.send({ payload: payload });
}
