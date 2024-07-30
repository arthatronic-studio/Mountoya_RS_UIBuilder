document.addEventListener('DOMContentLoaded', function () {
    const modal = document.getElementById('modal');
    const modalText = document.getElementById('modal-text');
    const closeButton = document.querySelector('.close-button');
    const proceedButton = document.getElementById('proceed');
    const hotText = document.getElementById('modal-text-2');
    const hotSubtitle = document.getElementById('modal-subtitle-2');

    let selectedOption = '';

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
            showModal(`Kamu memilih suhu ${group} dengan volume ${value}`, option);
        });
    });

    proceedButton.addEventListener('click', () => {
        let url = '';
        switch (selectedOption) {
            case 'hot_250ml':
                url = 'r250mlh.html';
                break;
            case 'hot_500ml':
                url = 'r500mlh.html';
                break;
            case 'normal_250ml':
                url = 'r250mln.html';
                break;
            case 'normal_500ml':
                url = 'r500mln.html';
                break;
            case 'cold_250ml':
                url = 'r250mlc.html';
                break;
            case 'cold_500ml':
                url = 'r500mlc.html';
                break;
            default:
                url = 'index.html';
                break;
        }
        window.location.href = url;
    });
});

document.getElementById('backButton').addEventListener('click', function () {
    window.location.href = 'index.html';
});
