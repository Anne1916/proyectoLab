let nombre = prompt("Juego de Trivia, ingresa tu nombre")
console.log("Hola" + nombre)
alert("Hola " + nombre + " bienvenida a la Trivia, comencemos.")

let aciertos = 0;
let errores = 0;

const RESPUESTAS_CORRECTAS = {
    'respuesta1': '2'
};

const revisar = () => {
    for (let key in RESPUESTAS_CORRECTAS) {
        const respuesta = document.querySelector(`input[name="${key}"]:checked`).value;

        if (respuesta === RESPUESTAS_CORRECTAS[key]) {
            aciertos += 1;
        }
    }

    document.getElementById("resultados").innerHTML = aciertos;
};
