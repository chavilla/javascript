 'use strict';


 //Evento load

 window.addEventListener('load',()=>{
   // Eventos del raton click
   var boton=document.querySelector('#boton');

   boton.addEventListener('click',function(){
      document.querySelector('div').innerHTML='Pulsaste';
   });

   //Evento mouseover
   boton.addEventListener('mouseover',function(){
         this.style.background='green';
   });

   //evento mouseout
   boton.addEventListener('mouseout',function(){
      this.style.background='';
         
            
   });


   /* EVENTOS DE TECLADO Y FOCO */

   // focus

   var input=document.querySelector('#nombre');
   input.addEventListener('focus',()=>{
      console.log('Estas dentro del input');
      
   });


   //blur para cuando salimos del input
   var input=document.querySelector('#nombre');
   input.addEventListener('blur',()=>{
      console.log('Estas fuera del input');
      
   });

   //keydown cuando estamos pulsando una tecla
   var input=document.querySelector('#nombre');
   input.addEventListener('keydown',(e)=>{
      console.log('Estas presionando '+String.fromCharCode(e.keyCode));
      
   });

   //keypress CUANDO PRESIONAMOS una tecla y nos da la tecla en minuscula
   var input=document.querySelector('#nombre');
   input.addEventListener('keypress',(e)=>{
      console.log('Estas presionando '+String.fromCharCode(e.keyCode));
      
   });


   //keyup cuando soltamos la tecla
   var input=document.querySelector('#nombre');
   input.addEventListener('keyup',(e)=>{
      console.log('soltaste la tecla');
      
   });

   

 });