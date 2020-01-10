 'use strict';

 // Uno de los formatos para hacer arrays
 var paises=['Colombia','Mexico','Panama','peru','Ecuador'];

 // Otro formato seria de esta manera
 var paises2=new Array(
    'Venezuela',
    'Brasil',
    'Argentina',
    'Chile' 
 );


 //Un array en javascript puede ser recorrido con la siguiente sintaxis. Recibe 3 parametros 
 // primero elemento del array en cada vuelta, segundo indice y tercero el array completo
 //podemos prescindor de la segunda y tercera si queremos
 paises.forEach((element,index)=> {
     console.log(element);
     
 });
 
 paises2.forEach((element,index,array)=>{
     //console.log(array);
});


/* otra manera de recorrer un array en js es a traves de for in */
for (const pais in paises2) {
    console.log(paises2[pais]);
    
}


// podemos agregar un elemento a un array mediante push

paises.push('Nicaragua');
console.log(paises);
// resultado: ["Colombia", "Mexico", "Panama", "peru", "Ecuador", "Nicaragua"]

//Puedo eliminar el ultimo elemento de un array con el metodo pop
paises.pop();
console.log(paises);
// resultado "Colombia", "Mexico", "Panama", "peru", "Ecuador"]

//Eliminar un indice en concreto usando indexof para buscar la posicion en concreto y splice

var indice=paises.indexOf('Panama');
paises.splice(indice,1);
console.log(paises);


// Convertir un array a texto separado por coma. ppodemos pasar un separador como parametro
var conversion=paises.join(' ');
console.log(conversion);

//Convertir una cadena de texto a un array. separados por comas
var cadena='jesus, alberto, charris';
var cadena_array=cadena.split(',');
console.log(cadena_array);


// otra operacion que podemos realizar con un arreglo es ordenarlos mediante sort
console.log(paises.sort());

//para ordenarlo de manera inversa usamos inverse
console.log(paises.reverse());


//lo ultimo que analizaremos es buscar en un array usando el metodo find
var busqueda=paises.find(pais=>pais=='peru');
console.log(busqueda);

//con some podemos podemos buscar si existe un elemento con determinadas caracteristicas

console.log(paises.some(pais=>pais=='butaan'));










