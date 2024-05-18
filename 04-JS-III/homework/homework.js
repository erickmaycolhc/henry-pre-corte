// No cambies los nombres de las funciones.

function devolverPrimerElemento(array) {
  // Devuelve el primer elemento de un  array (pasado por parametro)
  // Tu código:
  return array[0];

}


function devolverUltimoElemento(array) {
  // Devuelve el último elemento de un array
  // Tu código:
  
  return array.pop();
  // return array.at(-1);
}


function obtenerLargoDelArray(array) {
  // Devuelve el largo de un array
  // Tu código:
  return array.length; 
}


function incrementarPorUno(array) {
  // "array" debe ser una matriz de enteros (int/integers)
  // Aumenta cada entero por 1
  // y devuelve el array
  // Tu código:
  var uno = 1;
  var resultado;
  var contenedor = [];
  msj = "";
  var es_entero = true;
  
  for(let i = 0 ;   i < array.length  ;   i++){

    if(array[i] % 1 == 0){
      resultado = array[i] + uno;
      contenedor.push(resultado);
    }
    else{ 
      es_entero = false;
      msj = "no es un numero entero";       //msj = "solo acepto numeros enteros => " + array[i];
      break;
    }
  }

  if(es_entero){
    return contenedor;

  }
  else{
    return msj;
  }

  
} 


function agregarItemAlFinalDelArray(array, elemento) {
  // Añade el "elemento" al final del array
  // y devuelve el array
  // Tu código:
   array.push(elemento);
 
    return(array);  
}


function agregarItemAlComienzoDelArray(array, elemento) {
  // Añade el "elemento" al comienzo del array
  // y devuelve el array
  // Pista: usa el método `.unshift`
  // Tu código:
  array.unshift(elemento);
  return(array);
}
//  variable = LA_FLDSMDFR;

function dePalabrasAFrase(palabras) {
  // "palabras" es un array de strings/cadenas
  // Devuelve un string donde todas las palabras estén concatenadas
  // con espacios entre cada palabra
  // Ejemplo: ['Hello', 'world!'] -> 'Hello world!'
  // Tu código:
     
    let  frase = palabras.join(" ");
      
      return frase;
}


function arrayContiene(array, elemento) {
  // Comprueba si el elemento existe dentro de "array"
  // Devuelve "true" si está, o "false" si no está
  // Tu código:

    return(array.includes(elemento));
   
}


function agregarNumeros(numeros) {
  // "numeros" debe ser un arreglo de enteros (int/integers)
  // Suma todos los enteros y devuelve el valor
  // Tu código:
   let suma = 0
  for( let i = 0 ;    i < numeros.length ;    i++){ 

      suma += numeros[i];

  }
  return suma;
  
}


function promedioResultadosTest(resultadosTest) {
  // "resultadosTest" debe ser una matriz de enteros (int/integers)
  // Itera (en un bucle) los elementos del array, calcula y devuelve el promedio de puntajes
  // Tu código:
  let suma = 0;
  let promedio;
  for( let i = 0 ;    i < resultadosTest.length ;   i++){
    if(resultadosTest[i] % 1 == 0){
                suma += resultadosTest[i];
          promedio = suma / resultadosTest.length;
    }
    else{
      return false;
    }
          
    

  }
  return promedio;
}


function numeroMasGrande(numeros) {
  // "numeros" debe ser una matriz de enteros (int/integers)
  // Devuelve el número más grande
  // Tu código:
  let num_mayor = 0;

  for( let i = 0  ;    i < numeros.length   ;    i++){
    if(numeros % 1 == 0){
    }

    else if(num_mayor <numeros[i]){
          num_mayor = numeros[i];
    }
  }

  return num_mayor;
}

// let mayor = Math.max(...numeros);
// return numeros;


function multiplicarArgumentos() {
  // Usa la palabra clave `arguments` para multiplicar todos los argumentos y devolver el producto
  // Si no se pasan argumentos devuelve 0. Si se pasa un argumento, simplemente devuélvelo
  // Escribe tu código aquí:
  //let arguments = [2,2,2];
  let n=1;
  if (arguments.length === 0){
    return 0;
  }
  for( let i=0; i<arguments.length; i++) {
    n *= arguments[i];
  }
  return n;
}

/*let argumentsTmp = arguments;
let multiplicacion = 1;
for( let i = 0  ;   i < argumentsTmp.length  ;    i++){
 
 
 if(argumentsTmp.length === 0){
   return 0;

 }
 else if(argumentsTmp % 1 == 0){
 }
 

 else if(argumentsTmp.length == 1){
       return argumentsTmp;
 }

 multiplicacion *= argumentsTmp[i];
}

return multiplicacion;*/


function cuentoElementos(arreglo){
  //Realiza una función que retorne la cantidad de los elementos del arreglo cuyo valor es mayor a 18.
  //Escribe tu código aquí
  let respuesta_de_elementos = [];
  let resultado;
for( let i = 0 ;    i<arreglo.length ;  i++){
    if(arreglo[i]> 18){
              resultado = [i];
              respuesta_de_elementos.push(resultado); 
    }
}
return respuesta_de_elementos.length;

}
function diaDeLaSemana(numeroDeDia) {
  //Suponga que los días de la semana se codifican como 1 = Domingo, 2 = Lunes y así sucesivamente. 
  //Realiza una función que dado el número del día de la semana, retorne: Es fin de semana
  //si el día corresponde a Sábado o Domingo y “Es dia Laboral” en caso contrario. 
  //Escribe tu código aquí
   
  
    if(numeroDeDia === 1 || numeroDeDia === 7){
      return "Es fin de semana";

    }
    else if(numeroDeDia === 2 || numeroDeDia === 3 || numeroDeDia === 4 || numeroDeDia === 5 || numeroDeDia === 6){
      return "Es dia Laboral";

    }
    else{
      return "espero numeros del 1 al 7";
    }
  
} 


function empiezaConNueve(n) {
  //Desarrolle una función que recibe como parámetro un número entero n. Debe retornar true si el entero 
  //inicia con 9 y false en otro caso.
  //Escribe tu código aquí
  let num = n.toString();
  num.split();

    if(num[0] == "9"){
      return true;
    }

    else{
      return false;
    }
}
  



function todosIguales(arreglo) {
  //Escriba la función todosIguales, que indique si todos los elementos de un arreglo son iguales:
  //retornar true, caso contrario retornar false.
  //Escribe tu código aquí  
  let respuesta = true;
  for( let i = 0 ;    i < arreglo.length ;    i++){
    if(arreglo[0] !== arreglo[i]){
    respuesta = false;
    }
    else{
      respuesta = true;
    }
  }
  return respuesta;
} 


function mesesDelAño(array) {
  //Dado un array que contiene algunos meses del año desordenados, recorrer el array buscando los meses de 
  // "Enero", "Marzo" y "Noviembre", guardarlo en nuevo array y retornarlo.
  //Si alguno de los meses no está, devolver: "No se encontraron los meses pedidos"
  // Tu código:
  
  let nuevo_arreglo = [];

  for( let i = 0 ; i < array.length ;    i++){
    if(["Enero", "Marzo", "Noviembre"].includes(array[i])){
      nuevo_arreglo.push(array[i]);
    }
  }
  if(nuevo_arreglo.length == 3){
    return nuevo_arreglo;
  } else{
    return "No se encontraron los meses pedidos";
  }


  /*
  let nuevo_arreglo = [];
  let contadorEnero = 0;
  let contadorMarzo = 0;
  let contadorNoviembre = 0;

  for( let i = 0 ; i < array.length ;    i++){
    if(array[i] == "enero" && contadorEnero == 0){
      contadorEnero++;
      nuevo_arreglo.push(array[i]);
    }
    else if(array[i] == "marzo" && contadorMarzo == 0){
      contadorMarzo++;
      nuevo_arreglo.push(array[i]);
    }
    else if(array[i] == "noviembre" && contadorNoviembre == 0){
      contadorNoviembre++;
      nuevo_arreglo.push(array[i]);
    }
  }

  if(contadorEnero == 1 && contadorMarzo == 1 && contadorNoviembre == 1){
    console.log(nuevo_arreglo);
  } else {
    console.log("No se encontraron los meses pedidos");
  }*/

  ///////////////////////////////////////////////////////////
  //////////////////////////////////////////////////////////
  
  /*let nuevo_arreglo = [];

  for( let i = 0 ; i < array.length ;    i++){
    if(array[i] == "enero"){
      nuevo_arreglo.push(array[i]);
    }
    else if(array[i] == "marzo" ){
      nuevo_arreglo.push(array[i]);
    }
    else if(array[i] == "noviembre" ){
      nuevo_arreglo.push(array[i]);
    }
  }

  if(nuevo_arreglo.length == 3){
    console.log(nuevo_arreglo);
  } else {
    console.log("No se encontraron los meses pedidos");
  }*/

  /////////////////////////////////////////////////////
  /////////////////////////////////////////////////////
  /*let nuevo_arreglo = [];

  for( let i = 0 ; i < array.length ;    i++){
     if(array[i] == "Enero" || array[i] == "Marzo" || array[i] == "Noviembre"){
      nuevo_arreglo.push(array[i]);
    }
  }
   
  
  if(nuevo_arreglo.length == 3){
    return nuevo_arreglo;
  } else{
    return "No se encontraron los meses pedidos";
    }*/

} 


function mayorACien(array) {
  //La función recibe un array con enteros entre 0 y 200. Recorrer el array y guardar en un nuevo array sólo los
  //valores mayores a 100 (no incluye el 100). Finalmente devolver el nuevo array.
  // Tu código:
  let nuevo_arreglo = [];
  for( let i = 0 ;    i < array.length ;    i++ ){
    
    if( array[i] > 100){
     nuevo_arreglo.push(array[i]);
    }
  
  }
  return nuevo_arreglo;
}


function breakStatement(numero) {
  //Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
  //Guardar cada nuevo valor en un array. 
  //Devolver el array
  //Si en algún momento el valor de la suma y la cantidad de iteraciones coinciden, debe interrumpirse la ejecución y 
  //devolver: "Se interrumpió la ejecución"
  //Pista: usá el statement 'break'
  // Tu código:
  let nuevo_arreglo = [];
  let interrupción = "";
  for(i = 0 ; i < 10 ; i++){
    numero  = numero + 2;
    if(numero == i){
      interrupción = "Se interrumpió la ejecución";
      break;
      }

    
    nuevo_arreglo.push(numero);
  }
  if(interrupción == ""){
    return nuevo_arreglo; 
  }
  else{
   return interrupción;
  }
 


}


function continueStatement(numero) {
  //Iterar en un bucle aumentando en 2 el numero recibido hasta un límite de 10 veces.
  //Guardar cada nuevo valor en un array.    
  //Devolver el array
  //Cuando el número de iteraciones alcance el valor 5, no se suma en ese caso y se continua con la siguiente iteración
  //Pista: usá el statement 'continue'
  // Tu código:
  let nuevo_arreglo = [];

  for( let i = 0 ;    i < 10 ;    i++){

    if(i != 5){
      numero = numero + 2;
      nuevo_arreglo.push(numero);
    }  
    

  }
  return nuevo_arreglo;
}

/*let nuevo_array = [];
for (let i = 0; i < 10; i++) {
  if (i === 5){
    continue;
  } 
  else {
    numero = numero + 2;
    nuevo_array.push(numero);
  }
}
console.log(nuevo_array);
}*/



// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  devolverPrimerElemento,
  devolverUltimoElemento,
  obtenerLargoDelArray,
  incrementarPorUno,
  agregarItemAlFinalDelArray,
  agregarItemAlComienzoDelArray,
  dePalabrasAFrase,
  arrayContiene,
  agregarNumeros,
  promedioResultadosTest,
  numeroMasGrande,
  multiplicarArgumentos,
  cuentoElementos,
  diaDeLaSemana,
  empiezaConNueve,
  todosIguales,
  mesesDelAño,
  mayorACien,
  breakStatement,
  continueStatement
};
