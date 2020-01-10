 'use strict';

 window.addEventListener('load',()=>{

    getDatos()
    .then(
        data=>{
            console.log(data);

            return getPais();
        }
    ).then(
        pais=>{
            console.log(pais);
            
            return getUsuarios();
        }
    ).then(

        data=>data.json()
        ).then(
            usuarios=>{
                //console.log(usuarios);
                
                return listarUsuarios(usuarios);
            }
        )





// obtener datos personales
function getDatos()
{
    var persona={
        nombre:'Jesus',
        apellido: 'Charris',
        nacionalidad:'Colombiano',
        edad:'25'
    }

    return new Promise((resolve,reject)=>{
         // convertir un objeto a string
        var personaString=JSON.stringify(persona);

        if(typeof personaString!='string' || personaString=='') return reject('Error de datos');
        return resolve(personaString);
    });
    
}

function getPais() {
    var pais={
        nombre:'Colombia',
        continente: 'America'
    }

    return pais;
}

function getUsuarios(){
    return fetch('https://jsonplaceholder.typicode.com/users');
}

function listarUsuarios(usuarios)
{
    usuarios.map((user,i)=>{
        console.log(user.name);
    })
    
}












 });