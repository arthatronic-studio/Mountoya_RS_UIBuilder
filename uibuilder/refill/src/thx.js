document.getElementById('backButton').addEventListener('click', function () {
    window.location.href = 'index.html'; 
});

localStorage.removeItem("button");
const total = Number(localStorage.getItem("totalVolume"));
const volume = Number(localStorage.getItem("volume_air"));
const sisa = total - volume
localStorage.setItem("totalVolume",  sisa );