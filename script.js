const imgEl = document.querySelector(".my-image");

const buttonOnEl = document.getElementById("button-on");

buttonOnEl.addEventListener("click", function () {
  imgEl.className = "my-fluid";
  imgEl.src = "./img/yellow_lamp.png";
  imgEl.alt = "img-secondary";
});
