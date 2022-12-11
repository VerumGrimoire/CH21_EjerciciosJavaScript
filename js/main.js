
//PARTE I

//Ejercicio #1
//Escribir una función que tome un arreglo de números y devuelva el número mayor de la lista. Ejemplo del arreglo : [3, 5, 7, 1, 6]



let numeros = [4, 2, 3, 6, 9, 1,]

console.log(Math.max(...numeros));


//Ejercicio #2
//María llega a su entrevista de trabajo para el rol de Desarrollador Junior y se le pide que resuelva este problema: 
//Dada una lista de números [-1, 3, 4, 2, 6], escribe una función en javascript para calcular el número más pequeño.

let numeros2 = [-1, 3, 4, 2, 6,]

console.log(Math.min(...numeros2));

//Ejercicio 3
//Escribir una función que permita saber si un número se repite dentro de un arreglo.

//Blockquote Casos de prueba:

//Caso 1: Resultado esperado: El número 5 se encuentra más de una vez [1, 22, 5, 17, 10, 5, 40, 5]

let caso1 = [1, 22, 5, 17, 10, 5, 40, 5]
let duplicados1 = []

let tempArray1 = [...caso1].sort();

for (let index = 0; index < tempArray1.length; index++) {
    if (tempArray1[index+1] === tempArray1[index]) {
        duplicados1.push(tempArray1[index]);
    }
}

console.log(duplicados1);


//Caso 2: Resultado esperado: El número 7 se encuentra más de una vez [7, 41, 5, 7, 10, 13, 2]

let caso2 = [7, 41, 5, 7, 10, 13, 2]
let duplicados2 = []

let tempArray2 = [...caso2].sort();

for (let index = 0; index < tempArray2.length; index++) {
    if (tempArray2[index+1] === tempArray2[index]) {
        duplicados2.push(tempArray2[index]);
    }
}

console.log(duplicados2);


//Caso 3: Resultado esperado: No hay números repetidos [1, 22, 5, 14, 24, 31, 27, 15, 105]

let caso3 = [1, 22, 5, 14, 24, 31, 27, 15, 105]

let duplicados3 = []

let tempArray3 = [...caso3].sort();

for (let index = 0; index < tempArray3.length; index++) {
    if (tempArray3[index+1] === tempArray3[index]) {
        duplicados3.push(tempArray3[index]);
    }
}

console.log(duplicados3);


//Ejercicio #4
//Escribir una función que tome un arreglo ordenado y devuelva un arreglo completamente desordenado 
//Entrada: [1, 2, 5, 14, 24, 31, 50, 105] Posible salida: [105, 31, 14, 1, 2, 50, 24, 5]

let numeros4 = [5, 10, 15, 25, 20, 25, 30, 35, 40, 45]
console.log(numeros4.sort(function() {return Math.random() - 0.5}));


//PARTE II

//Implementación de los ejercicios con Javascript

//Solicitar 3 números (entre el 1 y el 100) y definir cual es el mayor

{let n1, n2, n3, t, mayor;
  n1 =  Math.floor(Math.random() * 100);
  n2 =  Math.floor(Math.random() * 100);
  n3 =  Math.floor(Math.random() * 100);

 if (n1 > n2) {
	t = n1;
 }else {
	t = n2;
 }
 
 if (t > n3) {
	mayor = t;
 }else {
	mayor = n3;
 }
// document.write("El mayor es" + mayor);
console.log(n1 + " " + n2 + " " + n3 + " " + " El mayor es " + mayor);
}



//Solicitar 3 números (entre el 1 y el 100) y definir el menor de tres números

 {let n1, n2, n3, t, menor;
  n1 =  Math.floor(Math.random() * 100);
  n2 =  Math.floor(Math.random() * 100);
  n3 =  Math.floor(Math.random() * 100);

 if (n1 < n2) {
	t = n1;
 }else {
	t = n2;
 }
 
 if (t < n3) {
	menor = t;
 }else {
	menor = n3;
 }

console.log(n1 + " " + n2 + " " + n3 + " " + " El menor es " + menor);
}


//Adivinar un número entre el 1 y el 100 en el menor número de pasos posibles

{let randomNum = Math.floor(Math.random() * 100);

console.log("Tu número entre el 1 y 100 es: " + randomNum);
}






//Solicitar un entero (entre el 100 y el 200) y determinar si es múltiplo de 3

//Elaborar un algoritmo para leer 3 números y determinar sí uno es la suma de los otros dos

{let n1, n2, n3, sumado;
	n1 =  45;
	n2 =  34;
	n3 =  11;

   if (n1 >= n2 + n3) {
	sumado = n1
   }else if (n2 >= n1 + n3) {
 	sumado = n2
   }else if (n3 >= n1 + n2) {
	sumado = n3
   }
	
  
  console.log(n1 + " " + n2 + " " + n3 + " " + " El número que es la suma de los anteriores es " + sumado);
  }

//Elabora un algoritmo para leer un número y determinar si es par o impar

{let n1;

n1 = Math.floor(Math.random() * 100);

if (n1 %2 ==0){
	console.log(n1 + " Es par");
}else{
	console.log(n1 + " Es impar");
}
}
