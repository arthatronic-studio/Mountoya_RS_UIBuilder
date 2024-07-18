// Wait for the DOM to be fully loaded
document.getElementById('homeButton').addEventListener('click', function () {
    window.location.href = 'home.html'; // Replace with your desired URL
});

document.addEventListener('DOMContentLoaded', function () {
    // Initialize uibuilder
    console.log('Initializing uibuilder...');
    uibuilder.start();

    // Placeholder for the button
    const button1Html = '<button class="btn btn-primary" style="width:100px; margin-bottom:10px;" onclick="sendPayload(\'button2\')">Refill</button>';

    // Debugging log
    console.log('Setting up uibuilder message listener...');

    // Listen for messages from Node-RED
    uibuilder.onChange('msg', function (msg) {
        console.log('Message received from Node-RED:', msg);
        const container = document.getElementById('button1Container');
        if (msg.payload === '1') {
            // Show the button
            console.log('Showing Button 1');
            container.innerHTML = button1Html;
        } else if (msg.payload === '0') {
            // Hide the button
            console.log('Hiding Button 1');
            container.innerHTML = '';
        } else if (msg.payload === 'done') {
            // Hide the button
            console.log('Show Button 1');
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
    if (button === 'button2') {
        payload = { type: 'button2', value: '1' };
    }
    uibuilder.send({ payload: payload });
}
