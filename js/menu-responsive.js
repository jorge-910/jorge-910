function muestraMenu(evento) {
  evento.stopPropagation();
  document.querySelector(".menu").classList.toggle("menu-descobert");
}

function ocultaMenu() {
  document.querySelector(".menu").classList.remove("menu-descobert");
}

function clickFueraDeMenu(evento) {
  if (evento.target.closest(".menu")) {
    return;
  }
  document.querySelector(".menu").classList.remove("menu-descobert");
}

function teclaEscCierraMenu(evento) {
  console.log(evento.key);
  if (evento.key === "Escape") {
    ocultaMenu();
  }
}

document.querySelector("#boton-menu").addEventListener("click", muestraMenu);
document.querySelector("#cierra-menu").addEventListener("click", ocultaMenu);
document.querySelector("body").addEventListener("click", clickFueraDeMenu);
document.addEventListener("keydown", teclaEscCierraMenu);
