//const prompt = require("prompt-sync")();

let n1 = document.getElementById("numero1");
let n2 = document.getElementById("numero2");
let n3 = document.getElementById("numero3");

const boton = document.getElementById("organizar");
let texto = document.getElementById("numeros");

//pruebas con consola

/*

let numero1 = parseInt(prompt("ingrese el primer número: "));
let numero2 = parseInt(prompt("ingrese el segundo número: "));
let numero3 = parseInt(prompt("ingrese el tercer número: "));
*/



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

boton.addEventListener("click", function() {
    let numero1 = parseInt(n1.value);
    let numero2 = parseInt(n2.value);
    let numero3 = parseInt(n3.value);
    let numeros = [numero1, numero2, numero3];
    

    if(numero1 === numero2 && numero2 === numero3){
        texto.innerText = "Los números son iguales";
    }else{
        texto.innerText = "De mayor a menor son: " + ordenarMayor(numeros) + "\n" + "De menor a mayor son: " + ordenarMenor(numeros);
    }
   
});