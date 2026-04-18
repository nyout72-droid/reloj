const fechaObjetivo = new Date(2026, 4, 30, 15, 0, 0).getTime();

function actualizarCountdown() {
  const ahora = new Date().getTime();
  const diferencia = fechaObjetivo - ahora;

  const diasEl = document.getElementById("dias");
  const horasEl = document.getElementById("horas");
  const minutosEl = document.getElementById("minutos");
  const segundosEl = document.getElementById("segundos");

  if (diferencia <= 0) {
    document.getElementById("countdown").innerHTML = "00:00:00:00";
    return;
  }

  const dias = Math.floor(diferencia / (1000 * 60 * 60 * 24));
  const horas = Math.floor((diferencia / (1000 * 60 * 60)) % 24);
  const minutos = Math.floor((diferencia / (1000 * 60)) % 60);
  const segundos = Math.floor((diferencia / 1000) % 60);

  diasEl.textContent = String(dias).padStart(2, "0");
  horasEl.textContent = String(horas).padStart(2, "0");
  minutosEl.textContent = String(minutos).padStart(2, "0");
  segundosEl.textContent = String(segundos).padStart(2, "0");
}

setInterval(actualizarCountdown, 1000);
actualizarCountdown();