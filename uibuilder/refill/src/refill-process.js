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
      if (msg.payload === 'done') {
          // Navigate to thank you page
          console.log('Navigating to thank you page');
          window.location.href = 'thx.html';
      } else {
          // Debugging log for unexpected payload
          console.log('Unexpected payload:', msg.payload);
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
