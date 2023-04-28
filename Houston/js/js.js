function generarVectores(longitud) {
  let arr1 = [];
  let arr2 = [];


  for (let i = 0; i < longitud; i++) {
    const numAleatorio = Math.floor(Math.random() * 30000);
    arr1.push(numAleatorio);
    arr2.push(numAleatorio);
  }

  let arr3 = [];

  
  for (let i = 0; i < longitud; i++) {
    arr3.push(arr1[i] * arr2[i]);
  }

 
  let sum = arr3.reduce((acc, val) => acc + val);

  
  console.log("Array 1: ", arr1);
  console.log("Array 2: ", arr2);
  console.log("Array 3 (resultado de la multiplicación): ", arr3);
  console.log("Suma de los elementos de Array 3: ", sum);
}

let n = parseInt(prompt("Ingrese la longitud de los arrays (no mayor a 7):"));
generarVectores(n);
