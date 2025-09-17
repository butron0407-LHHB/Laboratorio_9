const primerH1 = document.querySelector('h1');
if (primerH1) {
    primerH1.textContent = 'Adiós';
}

const segundoH1 = document.querySelectorAll('h1')[1];
if (segundoH1) {
    segundoH1.style.color = 'orange';
}


const miEncabezado = document.getElementById('encabezadoCambiante');
miEncabezado.addEventListener('click', function() {
    miEncabezado.style.color = 'brown';
});