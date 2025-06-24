const toggle = document.getElementById('toggle-btn');
const body = document.body;

body.classList.add('light');

toggle.addEventListener('click', () => {
    body.classList.toggle('light');
    body.classList.toggle('dark')
})