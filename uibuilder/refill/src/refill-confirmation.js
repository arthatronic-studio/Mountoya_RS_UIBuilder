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
    
    if (document.getElementById('proceed1')!= null){
        document.getElementById('proceed1').addEventListener('click', function () {
            localStorage.setItem("button", "button1")
            window.location.href = 'refill.html';
            
        });
    }
    
    console.log(document.getElementById('proceed2'));
    if (document.getElementById('proceed2') != null) {
        document.getElementById('proceed2').addEventListener('click', function () {
            localStorage.setItem("button", "button2")
            window.location.href = 'refill.html';

        });
    }
    if (document.getElementById('proceed3') != null) {
        document.getElementById('proceed3').addEventListener('click', function () {
            localStorage.setItem("button", "button3")
            window.location.href = 'refill.html';

        });
    }
    if (document.getElementById('proceed4') != null) {
        document.getElementById('proceed4').addEventListener('click', function () {
            localStorage.setItem("button", "button4")
            window.location.href = 'refill.html';

        });
    }
    if (document.getElementById('proceed5') != null) {
        document.getElementById('proceed5').addEventListener('click', function () {
            localStorage.setItem("button", "button5")
            window.location.href = 'refill.html';

        });
    }
    if (document.getElementById('proceed6') != null) {
        document.getElementById('proceed6').addEventListener('click', function () {
            localStorage.setItem("button", "button6")
            window.location.href = 'refill.html';

        });
    }

    // Debugging log for DOM ready
    console.log('DOM fully loaded');
});

// Function to send payload
function sendPayload(button) {
    let payload = {};
    console.log(button);
    payload = { type: button, value: '1' };
    uibuilder.send({ payload: payload });
}
