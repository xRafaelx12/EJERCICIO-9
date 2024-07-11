// DESARROLLAR UN PROGRAMA EL CUAL CUAL SUME Y CONCATENE NUMERO //

import EJERCICIO from "./EJERCICIO.js";
import INTERFAZ from "./INTERFAZ.JS";

let interfaz1 = new INTERFAZ (),
  n1=interfaz1.leerNumero1(),
  n2=interfaz1.leerNumero2(),
  n3=interfaz1.leerNumero3(),
  n4=interfaz1.leerNumero4(),

  num = new EJERCICIO (n1,n2,n3,n4),

  salida = document.getElementById("salida");

  salida.innerHTML = interfaz1.datosDelNumero(num.Numero1,num.Numero2,num.Numero3,num.Numero4,num.sumaDeNumeros(),num.concatenacion())
