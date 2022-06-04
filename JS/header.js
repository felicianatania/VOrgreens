let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.nav-links');

menu.onclick = () => {
    navbar.classList.toggle('active');
}

window.onscroll = () => {
    navbar.classList.remove('active');
}