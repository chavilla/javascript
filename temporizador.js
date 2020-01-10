 'use strict';

 window.addEventListener('load',()=>{


    function intervalo()
    {
        //setInterval
        var titulo=document.querySelector('#titulo');
        
        var interval=setInterval(function(){
        
            if (titulo.style.fontSize=='50px') {
                titulo.style.fontSize='30px';
            }
            else{
                titulo.style.fontSize='50px';
            }
            
        },500);

        return interval;
    }

    var tiempo=intervalo();
   

    //para detener los intervalos usamos la funcion clearInterval
    var stop=document.querySelector('#stop');
    //agregamos el evento
    stop.addEventListener("click",()=>{

        // como parametro necesita la variable que tiene el timer
        clearInterval(tiempo);
        
        
    });

    var start=document.querySelector('#start');
    //agregamos el evento
    start.addEventListener("click",()=>{

        tiempo=intervalo();
        
    });


    //tenemos la funcion setTimeOut la cual se ejecuta una sola vez
















 })