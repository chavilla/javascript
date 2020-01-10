 'use strict';

 window.addEventListener('load',()=>{


    //Comprobar si hay localStorage
    if (typeof(Storage)) {
        console.log('disponible');    
    }

    else{
        console.log('No disponible');
    }



    // Crear un localStorage
    localStorage.setItem('Nombre','Jesus');


    //Recuperar un localStorage
    document.querySelector('#datos').innerHTML=localStorage.getItem('Nombre');

    //Guardar objetos en el localStorage

    var usuario={
        nombre: 'Jesus',
        correo: 'jcharris.villa@gmail.com',
        web: 'chavilla.netlify.com'
    }

    // Metodo stringify convierte un json a string
    localStorage.setItem('usuario', JSON.stringify(usuario));


    //Recuperar un objeto del localStorage
    document.querySelector('#datos').innerHTML=JSON.parse(localStorage.getItem('usuario'));


    var pais=document.querySelector('#pais ul');

    var datos_pais={
        nombre: 'Colombia',
        continente: 'America del sur',
        idioma: 'Español'
    }

    localStorage.setItem('paises', JSON.stringify(datos_pais));
    
    // Recuperar datos del pais
    var datos=JSON.parse(localStorage.getItem('paises'));
    
    for (const index in datos) {
        let item=document.createElement('li');
        item.textContent=datos[index];
        pais.append(item);
        
    }
    















 });