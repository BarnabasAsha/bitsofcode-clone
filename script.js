const menu = document.querySelector('.nav');
const exitMenu = document.getElementById('exit');
const navMenu = document.querySelector('.nav-menu');

menu.addEventListener('click', (e) => {
    navMenu.style.display = 'block';
})

exitMenu.addEventListener('click', (e) => {
    navMenu.style.display = 'none';
})
