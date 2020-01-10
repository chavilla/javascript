 'use strict';


 //fetch y peticiones a servicios / api rest

 var usuario=[];
 var usuarios=document.querySelector('#usuarios');
 var div_profesor=document.querySelector('#div-profesor');

 /* metodo fetch recibe como paramtero una url donde tenemos el objeto json */
    getUsuarios()
    .then(data=>data.json())
    .then(users=>{
        listarUsuarios(users.data);

        return getInfo();
    })
    .then(data=>{
        console.log(data);

        div_profesor.innerHTML=data;

        return getJanet();
    })
    .then(
        data=>data.json()
    ).then(
        user=>{
            mostrarJanet(user.data)
        }).catch(error=>{
            
            alert('Error');
            
        });


    // Area de las funciones
    function mostrarJanet(user)
    {
        console.log(user);
        let avatar=document.createElement('img');
        avatar.src=user.avatar;
        avatar.width='100';

        var janet=document.querySelector('#janet');
            let nombre=document.createElement('h3');
            nombre.innerHTML=user.first_name +' '+ user.last_name;
            janet.append(nombre);
            janet.append(avatar);
            document.querySelector('#janet .load').style.display='none';   
    }

    function getUsuarios()
    {
        return fetch('https://reqres.in/api/users?page=2');    
    }

    function getJanet()
    {
        return fetch('https://reqres.in/api/users/2');
    }


    // haremos una funcion para obterner informacion y encadenar promesas
    function getInfo(){

        


        var profesor={
            nombre:'Jesus',
            apellido:'Charris',
            url:'chavilla.netlify.com'
        }

        //crear una promesa desde cero. Recibe dos parametros resolve: en caso de salir bien. reject: en caso de haber un error
        return new Promise((resolve,reject)=>{
           var profesor_string='';
           
           //convertir un json a string en un tiempo determinado
           setTimeout(() => {
            profesor_string=JSON.stringify(profesor);

           //comprobar si el json paso a ser un string
           if (typeof profesor_string!='string' || profesor_string=='' ) return reject('error 1');
           return resolve(profesor_string);
           }, 2000);

          
           

        });  
    }


    function listarUsuarios(usuario)
    {
        //podemos recorrer tambien usando map
        usuario.map((user,i)=>{
            let nombre=document.createElement('h2');
            nombre.innerHTML=i+' '+user.name + user.username;
            usuarios.append(nombre);

            document.querySelector('.load').style.display='none';
        })    
    }
