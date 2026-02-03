const menu = document.querySelector(".menu");
const botonMenu = document.querySelector("#boton-menu");
const botonCierra = document.querySelector("#cierra-menu");

function setMenuState(isOpen) {
  if (!menu) return;
  menu.classList.toggle("menu-descobert", isOpen);
  if (botonMenu) {
    botonMenu.setAttribute("aria-expanded", String(isOpen));
  }
}

function muestraMenu(evento) {
  evento.stopPropagation();
  if (!menu) return;
  const isOpen = !menu.classList.contains("menu-descobert");
  setMenuState(isOpen);
}

function ocultaMenu() {
  setMenuState(false);
}

function clickFueraDeMenu(evento) {
  if (!menu) return;
  if (evento.target.closest(".menu") || evento.target.closest("#boton-menu")) {
    return;
  }
  setMenuState(false);
}

function teclaEscCierraMenu(evento) {
  if (evento.key === "Escape") {
    ocultaMenu();
  }
}

if (botonMenu) botonMenu.addEventListener("click", muestraMenu);
if (botonCierra) botonCierra.addEventListener("click", ocultaMenu);
document.querySelector("body").addEventListener("click", clickFueraDeMenu);
document.addEventListener("keydown", teclaEscCierraMenu);
