const menu = document.querySelector(".menu");
const menuButton = document.querySelector(".menu-button");
const buttonImg = document.querySelector('img[alt="menu-button"]');


const toggleMenu = () => {
    menu.classList.toggle("menu--open")
    
    
    menu.classList.value === "menu menu--open" ? 
    buttonImg.src = 'img/services/nav-hamburger-close.png' :
    buttonImg.src = 'img/nav-hamburger.png'
}


menuButton.addEventListener("click", toggleMenu);
