const iconMenu = document.querySelector(".header__nav-mobile");
const hamMenu = document.querySelector(".header__nav-mobile--ham-menu");
const lateralMenu = document.querySelector(".header__menu-mobile");

iconMenu.addEventListener("click", () => {
  hamMenu.classList.toggle("active");
  lateralMenu.classList.toggle("translate");
})