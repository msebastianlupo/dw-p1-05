"use strict";

let numero = null;

//ingresa el número
function ingresar(){
    numero = parseInt(prompt("Ingrese un número"));
    if(isNaN(numero)){
        alert("No ingresó un número");
        ingresar();
    }
    document.getElementsByTagName("button")[1].innerHTML = `Mostrar paridad del número (${numero})`;
    return numero;
}

//muestra el último número ingresado y su paridad
function mostrar(){
    if(numero || numero === 0){
        if(numero === 0){
            alert(`El número es 0`);
        }else if(numero % 2 === 0){
            alert(`El número ${numero} es par`);
        }else{
            alert(`El número ${numero} es impar`);
        }
    }else{
        alert("No se ingresó ningún número. Haga click en el botón 'Ingresar un número'")
    }
    return numero;
}