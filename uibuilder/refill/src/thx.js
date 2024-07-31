document.getElementById('backButton').addEventListener('click', function () {
    window.location.href = 'index.html'; 
});

document.addEventListener('DOMContentLoaded', function () {

    uibuilder.onChange('msg', function (msg) {
        console.log('Message received from Node-RED:', msg);
        const modal = document.getElementById('modal');
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
    });

})



setTimeout(function(){
    window.location.href = 'index.html';
},20000)

localStorage.removeItem("button");
const total = Number(localStorage.getItem("totalVolume"));
const volume = Number(localStorage.getItem("volume_air"));
const sisa = total - volume
localStorage.setItem("totalVolume",  sisa );