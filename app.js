// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
const nombres = [];
const maxNombres = 5;

const inputNombre = document.getElementById('nombre');
const agregarAmigo = document.getElementById('agregar');
const seleccionarBoton = document.getElementById('seleccionar');
const resultadoParrafo = document.getElementById('resultado');

agregarAmigo.addEventListener('click', () => {
    const nombre = nombreInput.value.trim();
    if (nombre && nombres.length < maxNombres) {
        nombres.push(nombre);
        nombreInput.value = ''; 
        if (nombres.length === maxNombres) {
            agregarBoton.disabled = true; 
        }
    } else if (nombres.length >= maxNombres) {
        alert('Ya has ingresado 5 nombres.');
    } else {
        alert('Por favor, ingresa un nombre.');
    }
});

sortearAmigo.addEventListener('click', () => {
    if (nombres.length === maxNombres) {
        const indiceAleatorio = Math.floor(Math.random() * nombres.length);
        const nombreSeleccionado = nombres[indiceAleatorio];
        resultadoParrafo.textContent = `Nombre seleccionado: ${nombreSeleccionado}`;
    } else {
        alert('Debes ingresar 5 nombres primero.');
    }
});

