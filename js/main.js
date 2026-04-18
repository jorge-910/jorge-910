/* =============================================
   main.js — Jorge Carrillo Portfolio
   Consolida: navegacion-scroll + menu-responsive + scroll-suave
   Cargado con defer en todos los HTML
   ============================================= */

/* ---- 1. Header scroll effect ---- */
function navegacionScroll() {
  var header = document.querySelector("header.inici");
  if (!header) return;
  var intro = document.querySelector(".intro");
  if (!intro) return;
  var alturaHeader = header.clientHeight;

  function revisarPosicion() {
    if (intro.getBoundingClientRect().bottom - alturaHeader < 0) {
      header.classList.add("scroll");
    } else {
      header.classList.remove("scroll");
    }
  }

  /* passive:true mejora el rendimiento del scroll en móvil */
  window.addEventListener("scroll", revisarPosicion, { passive: true });
}

/* ---- 2. Menú responsive ---- */
(function () {
  var menu = document.querySelector(".menu");
  var botonMenu = document.querySelector("#boton-menu");
  var botonCierra = document.querySelector("#cierra-menu");

  function setMenuState(isOpen) {
    if (!menu) return;
    menu.classList.toggle("menu-descobert", isOpen);
    if (botonMenu) botonMenu.setAttribute("aria-expanded", String(isOpen));
  }

  function muestraMenu(e) {
    e.stopPropagation();
    if (!menu) return;
    setMenuState(!menu.classList.contains("menu-descobert"));
  }

  function ocultaMenu() { setMenuState(false); }

  function clickFueraDeMenu(e) {
    if (!menu) return;
    if (e.target.closest(".menu") || e.target.closest("#boton-menu")) return;
    setMenuState(false);
  }

  if (botonMenu) botonMenu.addEventListener("click", muestraMenu);
  if (botonCierra) botonCierra.addEventListener("click", ocultaMenu);
  document.body.addEventListener("click", clickFueraDeMenu);
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") ocultaMenu();
  });
})();

/* ---- 3. Smooth scroll para enlaces de ancla ---- */
(function () {
  var items = document.querySelectorAll('a[href^="#"]');
  if (!items.length) return;

  /* Función de easing cuártico */
  function easeInOutQuart(t, b, c, d) {
    if ((t /= d / 2) < 1) return (c / 2) * t * t * t * t + b;
    return (-c / 2) * ((t -= 2) * t * t * t - 2) + b;
  }

  function smoothScrollTo(endY, duration) {
    var startY = window.scrollY || window.pageYOffset;
    var distance = endY - startY;
    var startTime = Date.now();
    duration = duration || 400;

    var timer = setInterval(function () {
      var elapsed = Date.now() - startTime;
      window.scroll(0, easeInOutQuart(elapsed, startY, distance, duration));
      if (elapsed >= duration) clearInterval(timer);
    }, 1000 / 60);
  }

  items.forEach(function (item) {
    item.addEventListener("click", function (e) {
      var id = item.getAttribute("href");
      var target = document.querySelector(id);
      if (!target) return;
      e.preventDefault();
      smoothScrollTo(target.offsetTop - 80);
    });
  });
})();

/* ---- Init ---- */
navegacionScroll();
