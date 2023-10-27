
// TIPOS DE VARIABLES
//CONTS para valores constantes
const pi = 3.14;
const pul = 2.1456;
//VAR = Para variables globales
var days = 10;
var name = "Ana Salcedo";
//LEt = Para variables de bloques o funcion
let count = 1;

//alert
// alert(name);
//console.log
console.log(name);
// body - pantalla
document.write(name + "Ana Salcedo");
document.getElementById("box_one").innerHTML = "<h1>Ana Lorena</h1>";
document.getElementById("box_two").innerText = "<h1>Ana Lorena</h1>";

// TIPOS DE DATOS
// NUMERICOS

var number_one = 20;
var number_two =  10;

// TEXTO
var class_type = "Electiva Tecnica 1";

// BOOLEAN
var boolean = true;

// Arrays -Vectores
var array_num = [1,2,3,4,5,6,1.2,3];
var array_tex = ["Lunes","Martes","Miercoles", "Jueves", "Viernes", "Sabado", "Domingo"];
var array_mix = [1,"a",2,"c"];
var array_mul = [
    {name :"ana", last_name :"ortega", age : 23},
    {name :"ana", last_name :"ortega", age : 23},
    {name :"ana", last_name :"ortega", age : 23},
    {name :"ana", last_name :"ortega", age : 23}
]
//Librerias
 
// Swal.fire(
//     'The Internet?',
//     'That thing is still around?',
//     'question'
//   )

// Swal.fire({
//     icon : 'error',
//     showConfirmButton : false,
//     title : name,
//     text : name,
//     footer : "footer " + name,
//     background : 'green',
//     position : 'top-start'
    
// });

var suma = number_one + number_two;
console.log("La suma es: " + suma);
var resta = number_one - number_two;
console.log( "La resta es: " + resta);
var multiplicacion = number_one * number_two;
console.log( "La multiplicacion es: " + multiplicacion);
var division = number_one / number_two;
console.log( "La division es: " + division.toFixed(2));
var modulo = number_one % number_two;
console.log( "El modulo es: " + modulo);

