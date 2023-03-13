function muestraOnline() {
  var elementsOcults = document.querySelectorAll("#online .ocult");

  for (var i = 0; i < elementsOcults.length; i++) {
    elementsOcults[i].classList.toggle("visible");
  }

  document.querySelector(".mes.online .fletxa").classList.toggle("dreta");
}

function muestraBranding() {
  var elementsOcults = document.querySelectorAll("#branding .ocult");

  for (var i = 0; i < elementsOcults.length; i++) {
    elementsOcults[i].classList.toggle("visible");
  }

  document.querySelector(".mes.branding .fletxa").classList.toggle("dreta");
}

function muestraPrint() {
  var elementsOcults = document.querySelectorAll("#print .ocult");

  for (var i = 0; i < elementsOcults.length; i++) {
    elementsOcults[i].classList.toggle("visible");
  }

  document.querySelector(".mes.print .fletxa").classList.toggle("dreta");
}

function muestraAudiovisual() {
  var elementsOcults = document.querySelectorAll("#audiovisual .ocult");

  for (var i = 0; i < elementsOcults.length; i++) {
    elementsOcults[i].classList.toggle("visible");
  }

  document.querySelector(".mes.audiovisual .fletxa").classList.toggle("dreta");
}

document.querySelector(".mes.online").addEventListener("click", muestraOnline);
document
  .querySelector(".mes.branding")
  .addEventListener("click", muestraBranding);
document.querySelector(".mes.print").addEventListener("click", muestraPrint);
document
  .querySelector(".mes.audiovisual")
  .addEventListener("click", muestraAudiovisual);
