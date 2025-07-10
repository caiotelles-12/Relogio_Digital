const elementoHoras = document.querySelector("#horas");
const elementoMinutos = document.querySelector("#minutos");
const elementoSegundos = document.querySelector("#segundos");

function iniciarRelogio() {
  const date = new Date();

  const horas = date.getHours();
  const minutos = date.getMinutes();
  const segundos = date.getSeconds();

  elementoHoras.textContent = addZero(horas);
  elementoMinutos.textContent = addZero(minutos);
  elementoSegundos.textContent = addZero(segundos);

  function addZero(time) {
    return time < 10 ? "0" + time : time;
  }
}

setInterval(iniciarRelogio, 1000);
