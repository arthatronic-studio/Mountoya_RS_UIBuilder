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
        if (msg.payload && msg.payload.volumeliters !== undefined) {
            let volumeliters = msg.payload.volumeliters;
            // localStorage.setItem('volumeliters', volumeliters);
            // let x = localStorage.getItem('totalVolume') ? parseInt(localStorage.getItem('totalVolume'), 10) : 19000;
            // x -= volumeliters;
            let x = 19000 - volumeliters;
            localStorage.setItem('totalVolume', x);
        }
    });

})



setTimeout(function(){
    window.location.href = 'index.html';
},20000)

localStorage.removeItem("button");
const total = Number(localStorage.getItem("totalVolume"));
const volume = Number(localStorage.getItem("volume_air"));
// const sisa = total - volume
// localStorage.setItem("totalVolume",  sisa );