 // Editor de valores de un numero sin editarlo.
 // El numero puede ser ingresado en varios formatos

console.log("la funcion se llama ingreseN()");

 function ingreseN (n){
     var a=typeof(n);
     if(a=="number"){
         var i= 0;
         var numeros = arguments;
         console.log(numeros);
         for(i;i<numeros.length;i++){
             (function(){
                console.log(numeros[i]+"$");
             })()
         }
     }
     else{
         console.log("no es un numero");
     }
 }
