 'use strict';

 window.addEventListener('load',()=>{

    //capturamos el div donde almacenaremos los datos
    var datos=document.querySelector('#datos ul');

    // Creamos una peticion fetch
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(
        //mediante unas promesa convertimos los datos a un json
        data=>data.json()
    ).then(
        //mediante esta promesa accedemos a las propiedades del objeto
        users=>{
            console.log(users);
            listarDatos(users);
        }
    );

    function listarDatos(usuarios)
    {
        
        usuarios.map((user,i)=>{
            var dato_usuario=document.createElement('li');
            dato_usuario.innerHTML=i+' '+ user.name+' '+user.username;
            datos.append(dato_usuario);
        });    
    }


    var div_usuario=document.querySelector('#div_usuario ul');

    fetch('https://reqres.in/api/users/2')
    .then(
        data=>data.json()
    ).then(
        usuarios=>{
            console.log(usuarios.data);
            listarNombre(usuarios.data)
        }
    )

    function listarUsuarios(usuario)
    {
        
        usuario.map((user,i)=>{
            var dato_usuario=document.createElement('li');
            dato_usuario.innerHTML=i+' '+ user.first_name+' '+user.last_name;
            div_usuario.append(dato_usuario);
        });    
    }

    function listarNombre(usuario){
        var dato_usuario=document.createElement('li');
        dato_usuario.innerHTML=usuario.first_name;
        div_usuario.appendChild(dato_usuario);
    }




 });