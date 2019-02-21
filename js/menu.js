const menu = document.querySelector(".menu");
const menuButton = document.querySelector(".menu-button");
const buttonImg = menuButton.querySelector('img');

const toggleMenu = () => {
    //Toggle the "menu--open" class on your menu refence. 
    menu.classList.toggle("menu--open")
    console.log(menu.classList.value)
    console.log(buttonImg.src)

    menu.classList.forEach(
        function(eaClass, key, listObj) {
        menu.classList.value === 'menu' ?
       buttonImg.src = 'img/services/nav-hamburger.png'  :
       buttonImg.src = 'img/services/nav-hamburger-close.png';
    })
}

menuButton.addEventListener("click", toggleMenu);
