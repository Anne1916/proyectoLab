let nombre = prompt("Juego de Trivia, ingresa tu nombre")
console.log("Hola" + nombre)
alert("Hola " + nombre + " bienvenida a la Trivia, comencemos.")


let aciertos = 0
let errores = 0

const revisar = () => {
    if(document.getElementById("correcta").checked == true){
      aciertos ++
      
}else{
    errores ++ 
}

document.getElementById("resultados").innerHTML = aciertos
document.write(errores, aciertos)
}