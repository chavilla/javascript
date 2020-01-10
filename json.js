 'use strict';

 window.addEventListener('load',()=>{

    var pais=
    {
        nombre:'Colombia',
        continente:'sudamerica'
    }

    console.log(pais);
    //podemos acceder a una de sus propiedades
    console.log(pais.nombre);
    console.log(pais.continente);
    


    //podemos tener un objeto dentro de otro objeto
    
    var paises={
        descripcion:{
            nombre:'panama',
            continente:'centroamerica'
        },
        poblacion:4000000
    }
    

    // Puedo recorrer un objeto json

    var datos=document.querySelector('#datos');

    for (let index in paises) {

        var parrafo=document.createElement('p');
        parrafo.classList.add('d-block');
        parrafo.append(index);
        var espacio=document.createElement('br');
        parrafo.append(espacio);
    
        for(let key in paises[index]) {
            if(paises[index].hasOwnProperty(key)) {
                parrafo.append(key);
                parrafo.append(': ');
                parrafo.append(paises[index][key]);
                var espacio=document.createElement('br');
                parrafo.append(espacio);
                
            }
            
        }
        
        parrafo.append(paises[index]);    
        datos.appendChild(parrafo);
    }




    



 });