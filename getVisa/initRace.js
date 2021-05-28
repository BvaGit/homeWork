export default function initRace() {
    const table = document.getElementById('table');
    const initButton = document.getElementById('init');

    initButton.addEventListener('click', () => {
        table.classList.toggle('hide');
    })
}