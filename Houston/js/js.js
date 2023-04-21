let n = parseInt(prompt("Ingrese la longitud de los arrays :"));
let arr1 = [];
let arr2 = [];

for (let i = 0; i < n; i++) {
  arr1.push(Math.floor(Math.random() * 30000));
  arr2.push(Math.floor(Math.random() * 30000));
}

let arr3 = [];

for (let i = 0; i < n; i++) {
  arr3.push(arr1[i] * arr2[i]);
}

let sum = arr3.reduce((acc, val) => acc + val);

console.log("Array 1: ", arr1);
console.log("Array 2: ", arr2);
console.log("Array 3 (resultado de la multiplicación): ", arr3);
console.log("Suma de los elementos de Array 3: ", sum);
