const menuRedes = document.getElementById('menuRedes');
const redes = document.getElementById('redes');

menuRedes.addEventListener('click', () => {
    redes.classList.toggle('visible'); // Alterna la clase 'visible' para mostrar/ocultar el menú
});

const menuCorreo = document.getElementById('menuCorreo');
const correo = document.getElementById('correo');

menuCorreo.addEventListener('click', () => {
    correo.classList.toggle('visible'); // Alterna la clase 'visible' para mostrar/ocultar el menú
});

function correoInstitucional() {
    const correo = "fcontrerasm1800@alumno.ipn.mx"; // Cambia esto por tu correo
    navigator.clipboard.writeText(correo)
        .then(() => {
            alert("Correo copiado al portapapeles: " + correo);
            // Abre el cliente de correo
            window.location.href = `mailto:${correo}`;
        })
        .catch(err => {
            console.error("Error al copiar el correo: ", err);
        });
}

function correoPersonal() {
    const correo = "fatimacontreras.martinez@gmail.com"; // Cambia esto por tu correo
    navigator.clipboard.writeText(correo)
        .then(() => {
            alert("Correo copiado al portapapeles: " + correo);
            // Abre el cliente de correo
            window.location.href = `mailto:${correo}`;
        })
        .catch(err => {
            console.error("Error al copiar el correo: ", err);
        });
}