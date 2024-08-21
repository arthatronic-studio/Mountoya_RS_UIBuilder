document.addEventListener('DOMContentLoaded', function () {
    const modal = document.getElementById('modal');
    const modalText = document.getElementById('modal-text');
    const closeButton = document.querySelector('.close-button');
    const proceedButton = document.getElementById('proceed');
    const hotText = document.getElementById('modal-text-2');
    const hotSubtitle = document.getElementById('modal-subtitle-2');
    const totalVolumeElement = document.getElementById('total-volume');
    const initialVolume = 19000; // Initial volume in ml
    const waktuTimeout = 30000;

    let volumeliters = 0;

    let selectedOption = '';

    // Inisialisasi volume dari localStorage atau nilai default
    let storedVolume = localStorage.getItem('volumeliters');
    let Volume = storedVolume ? parseInt(storedVolume, 10) : initialVolume;
    let x = localStorage.getItem('totalVolume') ? parseInt(localStorage.getItem('totalVolume'), 10) : initialVolume;
    let wf = localStorage.getItem('waterFlow') ? parseInt(localStorage.getItem('waterFlow'), 10) : 0;

    // Fungsi untuk memperbarui tampilan volume total
    function updateTotalVolumeDisplay() {
        totalVolumeElement.innerHTML = `Sisa Air Galon = ${x} ml`;
    }

    // Pembaruan tampilan awal
    updateTotalVolumeDisplay();

    let timeOutBalik = setTimeout(function () {
        window.location.href = 'index.html';
    }, waktuTimeout);

    function showModal(text, option) {
        modalText.innerHTML = text;
        selectedOption = option;
        modal.style.display = 'flex';

        // Show or hide additional hot water warning based on option
        if (option === 'hot_250ml' || option === 'hot_500ml') {
            hotText.style.display = 'block';
            hotSubtitle.style.display = 'block';
        } else {
            hotText.style.display = 'none';
            hotSubtitle.style.display = 'none';
        }
    }

    closeButton.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    window.addEventListener('click', (event) => {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });

    const buttons = document.querySelectorAll('.btn-primary');
    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const value = button.innerText;
            const group = button.parentElement.querySelector('h3').innerText;
            const option = button.id;
            clearTimeout(timeOutBalik);
            timeOutBalik = setTimeout(function () {
                window.location.href = 'index.html';
            }, waktuTimeout);
            showModal(`Kamu memilih suhu ${group} dengan volume ${value}`, option);
        });
    });

    proceedButton.addEventListener('click', () => {
        let url = '';
        let volume = 0;

        switch (selectedOption) {
            case 'hot_250ml':
                url = 'r250mlh.html';
                volume = 250;
                break;
            case 'hot_500ml':
                url = 'r500mlh.html';
                volume = 500;
                break;
            case 'normal_250ml':
                url = 'r250mln.html';
                volume = 250;
                break;
            case 'normal_500ml':
                url = 'r500mln.html';
                volume = 500;
                break;
            case 'cold_250ml':
                url = 'r250mlc.html';
                volume = 250;
                break;
            case 'cold_500ml':
                url = 'r500mlc.html';
                volume = 500;
                break;
            default:
                url = 'index.html';
                break;
        }

        // Save the new volume to localStorage
        localStorage.setItem('volume_air', volume);
        window.location.href = url;
    });

    uibuilder.onChange('msg', function (msg) {
        console.log('Message received from Node-RED:', msg);

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
        // Update volumeliters with the value received from Node-RED
        if (msg.payload && msg.payload.volumeliters !== undefined) {
            volumeliters = msg.payload.volumeliters;
            // localStorage.setItem('volumeliters', volumeliters);
            // x -= volumeliters;
            x = initialVolume - volumeliters;
            localStorage.setItem('totalVolume', x);
            localStorage.setItem('waterFlow', volumeliters);
            updateTotalVolumeDisplay();
        } else {
            console.log('Payload does not contain volumeliters:', msg.payload);
        }

        clearTimeout(timeOutBalik);
        timeOutBalik = setTimeout(function () {
            window.location.href = 'index.html';
        }, waktuTimeout);
    });

    document.getElementById('backButton').addEventListener('click', function () {
        window.location.href = 'index.html';
    });
});
