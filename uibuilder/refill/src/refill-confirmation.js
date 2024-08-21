document.addEventListener('DOMContentLoaded', function () {
    // Initialize uibuilder
    const waktuTimeout = 30000;
    let stateBottomSensor = '0';
    let stateTopSensor = '0';

    console.log('Initializing uibuilder...');
    uibuilder.start();
    let timeOutBalik = setTimeout(function () {
        window.location.href = 'index.html';
    }, waktuTimeout)
    // Debugging log
    console.log('Setting up uibuilder message listener...');
    if (Number(localStorage.getItem("sensor")) === 1) {
        const modal = document.getElementById('modal');
        console.log('Showing modal');
        modal.style.display = 'flex';
    } else if (Number(localStorage.getItem("sensor")) === 0) {
        // Hide the modal
        const modal = document.getElementById('modal');
        console.log('Hiding modal');
        modal.style.display = 'none';
    }


    // Listen for messages from Node-RED
    uibuilder.onChange('msg', function (msg) {
        console.log('Message received from Node-RED:', msg);
        const modal = document.getElementById('modal');
        clearTimeout(timeOutBalik);
        timeOutBalik = setTimeout(function () {
            window.location.href = 'index.html';
        }, waktuTimeout)
        stateBottomSensor = msg.payload;
        stateTopSensor = msg.payload.top;
        if (stateBottomSensor === '1' || stateTopSensor === '1') {
            // Show the modal
            localStorage.setItem("sensor", 1);
            console.log('Showing modal');
            modal.style.display = 'flex';
        } else if (stateBottomSensor === '0') {
            // Hide the modal
            localStorage.setItem("sensor", 0);
            console.log('Hiding modal');
            modal.style.display = 'none';
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

    document.getElementById('cancel').addEventListener('click', function () {
        console.log('Closing modal');
        document.getElementById('modal').style.display = 'none';
        clearTimeout(timeOutBalik);
        timeOutBalik = setTimeout(function () {
            window.location.href = 'index.html';
        }, waktuTimeout)
    });

    if (document.getElementById('proceed1') != null) {
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
