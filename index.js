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


// mayor
if (numero1 > numero2) {
  console.log("primer numero es mayor que el segundo")
} else {
  console.log("primer numero es menor o igual al segundo")
}


// iguales o diferentes
if (numero1 == numero2) {
  console.log("los 2 numeros son iguales")
} else {
  console.log("los 2 numeros son diferentes")
}


// grade o iguales
if (numero1 > numero2) {
  console.log("el primero numero es mas grande")
} else if (numero1 < numero2) {
  console.log("el segundo numero es mas grande")
} else {
  console.log("los 2 numeros son iguales")
}


// mas chico
if (numero1 <= numero2 && numero1 <= numero3) {
  masChico = numero1
} else if (numero2 <= numero1 && numero2 <= numero3) {
  masChico = numero2
} else {
  masChico = numero3
}

console.log("El nnumero mas chico es: " + masChico)


// comparando objetos
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


// conducir
// let nombre = prompt("Ingrese su nombre: ")
// let edad = parseInt(prompt("Ingrese su edad: "))
// let altura = parseInt(prompt("Ingrese su altura: "))
// let vision = parseInt(prompt("Ingrese su visión (evaluando de 1 a 10): "))

// if (edad >= 18 && altura > 150 && vision >= 8) {
//   console.log(nombre + " esta capacitado para conducir")
// } else {
//   console.log(nombre + " no esta capacitado para conducir")
// }


// pase
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


// edad
let edad = parseInt(prompt("Ingrese su edad: "));

if (edad >= 0 && edad <= 12) {
    console.log("Eres un infante.");
} else if (edad >= 13 && edad <= 18) {
    console.log("Eres un adolescente.");
} else if (edad >= 19 && edad <= 45) {
    console.log("Eres un mayor joven.");
} else if (edad > 45 && edad <= 100) {
    console.log("Eres un anciano.");
} else if (edad > 100) {
    console.log("¿En realidad tienes esa edad? xD");
} else {
    console.log("Edad ingresada no válida.");
}



