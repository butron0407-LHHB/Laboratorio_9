function cambiarTextoAAdios() {
    const primerH1 = document.querySelector('h1');
    if (primerH1) {
        primerH1.textContent = 'Adiós';
    }
}

function cambiarColorNaranja() {
    const segundoH1 = document.querySelectorAll('h1')[1];
    if (segundoH1) {
        segundoH1.style.color = 'orange';
        console.log('Color cambiado a naranja');
    }
}


function cambiarColorMarron() {
    const tercerH1 = document.querySelectorAll('h1')[2];
    if (tercerH1) {
        tercerH1.style.color = 'brown';
        tercerH1.style.cursor = 'pointer';
        console.log('Color cambiado a marrón');
        
        tercerH1.onclick = function() {
            this.style.color = this.style.color === 'brown' ? 'green' : 'brown';
        };
    }
}

function restaurarColores() {
    const todosH1 = document.querySelectorAll('h1');
    todosH1.forEach((h1, index) => {
        if (index === 0) {
            h1.textContent = 'Hola Mundo';
        }
        h1.style.color = 'green';
        h1.style.cursor = 'default';
        h1.onclick = null;
    });
    console.log('Colores restaurados');
}