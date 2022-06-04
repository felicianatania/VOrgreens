let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.nav-links');
let xbtn = document.querySelector('.close');

menu.onclick = () => {
    navbar.classList.toggle('active');
}

xbtn.onclick = () => {
    navbar.classList.remove('active');
}

window.onscroll = () => {
    navbar.classList.remove('active');
}