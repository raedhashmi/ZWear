const menuIcon = document.getElementById('menuIcon');
const closeBtn = document.querySelector('.close-btn');
const sideMenu = document.getElementById('sideMenu');
menuIcon.onclick = () => {
    sideMenu.classList.toggle('open');
};
closeBtn.onclick = () => {
    sideMenu.classList.remove('open');
};