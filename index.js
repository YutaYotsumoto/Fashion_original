// openBtm
function open() {
  document.getElementById("line1").classList.toggle("linea");
  document.getElementById("line2").classList.toggle("lineb");
  document.getElementById("line3").classList.toggle("linec");
  document.getElementById("menuNav").classList.toggle("fadein");
}

document
  .getElementById("hamburgerOpenBtn")
  .addEventListener("click", function () {
    open();
  });
// closeBtm
function close() {}
