function iniciarCronometro(tiempoInicial, callback) {
  const interval = setInterval(() => {
    if (tiempoInicial >= 0) {
      const minutos = Math.floor(tiempoInicial / 60);
      const segundos = tiempoInicial % 60;
      const tiempoFormateado = `${minutos}:${segundos < 10 ? '0' : ''}${segundos}`;
      callback(tiempoFormateado);
      tiempoInicial--;
    } else {
      clearInterval(interval);
    }
  }, 1000);

  return () => {
    clearInterval(interval);
  };
}

export default iniciarCronometro;
