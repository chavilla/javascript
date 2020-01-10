'use strict';

window.addEventListener('load', () => {
    //ver el tamanio de la ventana

    console.log(window.innerHeight);
    console.log(window.innerWidth);

    //podemos sacer el ancho y alto de nuestra pantalla
    console.log(screen.height);
    console.log(screen.width);

    //obtener la url actual y otras propiedades
    console.log(window.location.href);

    //redireccionar
    var boton = document.querySelector('#boton');
    boton.addEventListener('click', () => {
        window.location.href='http://www.google.com';
    });


    function abrir(url) {
        window.open(url);
    }

    abrir();



});


