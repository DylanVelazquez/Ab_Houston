let arr1 = [];
let arr2 = [];

for (let i = 0; i < 7; i++) {
  let num = parseInt(prompt(`Ingrese el elemento ${i+1} del primer array:`));
  if (isNaN(num) || num > 30000) {
    alert(`El valor ingresado no es válido. Por favor ingrese un número menor o igual a 30000.`);
    i--;
  } else {
    arr1.push(num);
  }
}

for (let i = 0; i < 7; i++) {
  let num = parseInt(prompt(`Ingrese el elemento ${i+1} del segundo array:`));
  if (isNaN(num) || num > 30000) {
    alert(`El valor ingresado no es válido. Por favor ingrese un número menor o igual a 30000.`);
    i--;
  } else {
    arr2.push(num);
  }
}

let arr3 = [];

for (let i = 0; i < 7; i++) {
  let mult = arr1[i] * arr2[i];
  if (mult > 10000000) {
    alert(`La multiplicación de los elementos ${i+1} del primer y segundo array supera los 10 millones.`);
  } else {
    arr3.push(mult);
  }
}

let sum = arr3.reduce((acc, val) => acc + val);

console.log(`Array 1: ${arr1}`);
console.log(`Array 2: ${arr2}`);
console.log(`Array 3: ${arr3}`);
console.log(`Suma de los elementos de Array 3: ${sum}`);
