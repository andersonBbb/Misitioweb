// Fecha inicial de la relación
const startDate = new Date('2023-10-23');

// Actualiza el contador en tiempo real
function updateCounter() {
    const now = new Date();
    const diff = now - startDate;

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((diff / (1000 * 60)) % 60);
    const seconds = Math.floor((diff / 1000) % 60);

    document.getElementById('counter').innerText =
        `${days} días, ${hours} horas, ${minutes} minutos, ${seconds} segundos`;
}

// Llama a la función cada segundo
setInterval(updateCounter, 1000);

// Inicia el contador al cargar la página
updateCounter();
