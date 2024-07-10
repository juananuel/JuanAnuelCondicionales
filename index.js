let numero1 = 5
let numero2 = 3
let numero3 = 8

let masChico

let persona1 = {
  nombre: "Juan Anuel",
  edad: 40,
  altura: 175,
}

let persona2 = {
  nombre: "Liliana Gutierrez",
  edad: 28,
  altura: 178,
}


// 1 mayor
if (numero1 > numero2) {
  console.log("primer numero es mayor que el segundo")
} else {
  console.log("primer numero es menor o igual al segundo")
}


// 2 iguales o diferentes
if (numero1 == numero2) {
  console.log("los 2 numeros son iguales")
} else {
  console.log("los 2 numeros son diferentes")
}


// 3 grade o iguales
if (numero1 > numero2) {
  console.log("el primero numero es mas grande")
} else if (numero1 < numero2) {
  console.log("el segundo numero es mas grande")
} else {
  console.log("los 2 numeros son iguales")
}


// 4 mas chico
if (numero1 <= numero2 && numero1 <= numero3) {
  masChico = numero1
} else if (numero2 <= numero1 && numero2 <= numero3) {
  masChico = numero2
} else {
  masChico = numero3
}

console.log("El numero mas chico es: " + masChico)


// 5 comparando objetos
if (persona1.altura > persona2.altura) {
  console.log(persona1.nombre + " tiene mas altura que " + persona2.nombre)
} else if (persona1.altura < persona2.altura) {
  console.log(persona2.nombre + " tiene mas altura que " + persona1.nombre)
} else {
  console.log(
    persona1.nombre + " y " + persona2.nombre + " tienen la misma altura"
  )
}

if (persona1.edad > persona2.edad) {
  console.log(persona1.nombre + " es mayor que " + persona2.nombre)
} else if (persona1.edad < persona2.edad) {
  console.log(persona2.nombre + " es mayor que " + persona1.nombre)
} else {
  console.log(
    persona1.nombre + " y " + persona2.nombre + " tienen la misma edad"
  )
}


// 6 conducir
// let nombre = prompt("Ingrese su nombre: ")
// let edad = parseInt(prompt("Ingrese su edad: "))
// let altura = parseInt(prompt("Ingrese su altura: "))
// let vision = parseInt(prompt("Ingrese su visión (evaluando de 1 a 10): "))

// if (edad >= 18 && altura > 150 && vision >= 8) {
//   console.log(nombre + " esta capacitado para conducir")
// } else {
//   console.log(nombre + " no esta capacitado para conducir")
// }


// 7 pase
// let nombre = prompt("Ingrese su nombre: ")
// let pase = prompt("Ingrese su pase (vip o normal):").toLowerCase()
// let poseeEntrada = prompt("¿Posee entrada? (si o no)").toLowerCase() 

// if (nombre.toLowerCase() === 'juan' || pase === 'vip') {
//     console.log("Bienvenido " + nombre.toUpperCase())
// } else if (poseeEntrada === 'si') {
//     let usarEntrada = prompt("¿Desea utilizar su entrada? (si o no)").toLowerCase() 
//     if (usarEntrada === 'si') {
//         console.log("Bienvenido " + nombre.toUpperCase())
//     } else {
//         console.log("Gracias por usar nuestros servicios")
//     }
// } else {
//     let deseaComprar = prompt("¿Desea comprar una entrada? (si o no)").toLowerCase() 
//     if (deseaComprar === 'si') {
//         let dineroDisponible = parseFloat(prompt("Ingrese el dinero disponible: "))
//         if (dineroDisponible >= 1000) {
//             console.log("Venta de entrada realizada. Bienvenido " + nombre.toUpperCase())
//         } else {
//             console.log("Lo siento, no tienes suficiente dinero para comprar una entrada.")
//         }
//     } else {
//         console.log("Gracias por usar nuestros servicios")
//     }
// }


// 8 
// let numeroIncognita = Math.floor(Math.random() * 10) + 1;
let numeroIncognita = 5;
let numeroIngresado;

numeroIngresado = parseInt(prompt("Adivina el número (entre 1 y 10):"))
if (numeroIngresado === numeroIncognita) {
  console.log("¡Ganaste, has adivinado el número!")
} else {
    if (numeroIngresado > numeroIncognita) {
      console.log("El número ingresado es mayor, vuelve a intentarlo.")
    } else {
      console.log("El número ingresado es menor, vuelve a intentarlo.")
    }

    numeroIngresado = parseInt(prompt("Adivina el número (entre 1 y 10):"))
    if (numeroIngresado === numeroIncognita) {
      console.log("¡Ganaste, has adivinado el número!")
    } else {
      if (numeroIngresado > numeroIncognita) {
        console.log("El número ingresado es mayor, vuelve a intentarlo.")
      } else {
        console.log("El número ingresado es menor, vuelve a intentarlo.")
      }

      numeroIngresado = parseInt(prompt("Adivina el número (entre 1 y 10):"))
      if (numeroIngresado === numeroIncognita) {
        console.log("¡Ganaste, has adivinado el número!")
      } else {
        if (numeroIngresado > numeroIncognita) {
          console.log("El número ingresado es mayor.")
      } else {
        console.log("El número ingresado es menor.")
      }
        console.log("Lo siento, se han agotado tus intentos.")
      }
    }
}



// 9 edad
// let edad = parseInt(prompt("Ingrese su edad: "))

// if (edad >= 0 && edad <= 12) {
//     console.log("Eres un infante.")
// } else if (edad >= 13 && edad <= 18) {
//     console.log("Eres un adolescente.")
// } else if (edad >= 19 && edad <= 45) {
//     console.log("Eres un mayor joven.")
// } else if (edad > 45 && edad <= 100) {
//     console.log("Eres un anciano.")
// } else if (edad > 100) {
//     console.log("¿En realidad tienes esa edad? xD")
// } else {
//     console.log("Edad ingresada no válida.")
// }


// 10 piedra papel tijera
// let jugador1 = prompt("Jugador 1, ingrese PIEDRA, PAPEL o TIJERAS: ").toUpperCase()
// let jugador2 = prompt("Jugador 2, ingrese PIEDRA, PAPEL o TIJERAS: ").toUpperCase()

// if ((jugador1 !== "PIEDRA" && jugador1 !== "PAPEL" && jugador1 !== "TIJERAS") ||
//   (jugador2 !== "PIEDRA" && jugador2 !== "PAPEL" && jugador2 !== "TIJERAS")) {
//     alert("Uno de los jugadores ha hecho un ingreso incorrecto, repetir juego")
// } else {
//   if (jugador1 === jugador2){
//     alert("Empate en jugada")
//   } else if ((jugador1 === "PIEDRA" && jugador2 === "TIJERAS") || 
//             (jugador1 === "PAPEL" && jugador2 === "PIEDRA") ||
//             (jugador1 === "TIJERAS" && jugador2 === "PAPEL")){
//     alert("Jugador 1 Gana!")
//   } else{
//     alert("Jugador 2 Gana!")
//   }
// }


// 11 color ingresado
// let color = prompt("Ingresa un color: ").toLocaleLowerCase()

// switch(color){
//   case "blanco":
//     alert("Falta de color")
//     break
//   case "negro":
//     alert("Falta de color")
//     break
//   case "verde":
//     alert("El color de la naturaleza")
//     break
//   case "azul":
//     alert("El color del agua")
//     break
//   case "amarillo":
//     alert("El color del sol")
//     break
//   case "rojo":
//     alert("El color del fuego")
//     break
//   case "marron":
//     alert("El color de la tierra")
//     break
//   default:
//     alert("Excelente elección, no lo teníamos pensado")
// }


// 12 
// let valor1 = parseFloat(prompt("Ingrese un primer numero entero: "))
// let valor2 = parseFloat(prompt("Ingrese un segundo numero entero: "))
// let operacion = parseInt(prompt("Ingrese una de las opciones (1 - 4): \n1 - Suma \n2 - Resta \n3 - Multiplicación \n4 - División \n"))

// let suma = valor1+valor2
// let resta = valor1-valor2
// let multiplicacion = valor1*valor2
// let division = valor1/valor2
// switch(operacion){
//   case 1:
//     alert("La suma es: " + suma)
//     break
//   case 2:
//     alert("La resta es: " + resta)
//     break
//   case 3:
//     alert("La multiplicación es: " + multiplicacion)
//     break
//   case 4:
//     if (valor2 <= 0){
//       alert("Error! No se puede dividir entre 0 un número menor")
//     } else{
//       alert("La división es: " + division)
//     }
//     break
//   default:
//     alert("Opción incorrecta, vuelva a intentar")
//     break
// }


// 13 console table
// let nombre = prompt("Ingrese su nombre: ")
// let apellido = prompt("Ingrese su apellido: ")
// let nacionalidad = prompt("Ingrese su nacionalidad: ")
// let documento = parseInt(prompt("Ingrese su número de documento de identidad: "))

// let confirmacion = prompt(`Los datos ingresados fueron: \nNombre: ${nombre} \nApellido: ${apellido} \nNacionalidad: ${nacionalidad} \nDocumento: ${documento} \n¿Los datos son correctos? (si o no): `).toLowerCase()

// if (confirmacion == "si"){
//   let dni = {
//     nombre: nombre,
//     apellido: apellido,
//     nacionalidad: nacionalidad,
//     documento: documento  
//   }
//   console.table(dni)
//   console.log("Registro exitoso!")
// } else{
//   console.log("Vuelva a intentarlo en un mes")
// }
