document.addEventListener('DOMContentLoaded', function () {
    // Initialize uibuilder
    console.log('Initializing uibuilder...');
    uibuilder.start();

    // Debugging log
    console.log('Setting up uibuilder message listener...');

    // Listen for messages from Node-RED
    uibuilder.onChange('msg', function (msg) {
        console.log('Message received from Node-RED:', msg);
        const modal = document.getElementById('modal');
        if (msg.payload === '1') {
            // Show the modal
            console.log('Showing modal');
            modal.style.display = 'flex';
        } else if (msg.payload === '0') {
            // Hide the modal
            console.log('Hiding modal');
            modal.style.display = 'none';
         } else {
            // Debugging log for unexpected payload
            console.log('Unexpected payload:', msg.payload);
        }
    });

    document.getElementById('cancel').addEventListener('click', function () {
        console.log('Closing modal');
        document.getElementById('modal').style.display = 'none';
    });
    
    document.getElementById('proceed').addEventListener('click', function () {
        window.location.href = 'refill.html'; 
    });

    // Debugging log for DOM ready
    console.log('DOM fully loaded');
});

// Function to send payload
function sendPayload(button) {
    let payload = {};
    if (button === 'button1') {
        payload = { type: 'button1', value: '1' };
    }
    uibuilder.send({ payload: payload });
}
