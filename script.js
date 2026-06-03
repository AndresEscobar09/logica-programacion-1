const prompt = require("prompt-sync")();

//pruebas con consola

/*

let numero1 = parseInt(prompt("ingrese el primer número: "));
let numero2 = parseInt(prompt("ingrese el segundo número: "));
let numero3 = parseInt(prompt("ingrese el tercer número: "));
*/

let numeros = [numero1, numero2, numero3];


function ordenarMayor(numeros){
    return numeros.sort(function(a, b) {
        return b - a;
    });

}

function ordenarMenor(numeros){
    return numeros.sort(function(a, b) {
        return a - b;
    });

}

if(numero1 === numero2 && numero2 === numero3){
   // console.log("Los números son iguales");
}else{
    /*
    console.log("Los números ordenados de mayor a menor son: " + ordenarMayor(numeros));
    console.log("Los números ordenados de menor a mayor son: " + ordenarMenor(numeros));
    */
}
