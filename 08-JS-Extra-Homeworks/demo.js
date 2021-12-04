
let string = 'Hello World'

let histograma = {}
for (let i = 0; i < string.length; i++) {

    let letras = string[i];
    if (!histograma[letras]) {
        histograma[letras]=0;
    }
    histograma[letras]++
}

console.log(histograma)
  
const str = "soyHENRY";
const lowerCaseWords = str.match(/(\b[a-z][a-z]+|\b[a-z]\b)/g);

console.log(lowerCaseWords);

const aja = "soyHENRY";
const upperCaseWords = aja.match(/(\b[A-Z][A-Z]+|\b[A-Z]\b)/g);

console.log(upperCaseWords);

console.log(upperCaseWords + lowerCaseWords)
console.log('xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx')

let nuevoArray = []
let arreglo1 = []
for (let i = 0; i < arreglo1.length; i++) {
  for (let j = 0; j < arreglo2.length; j++) {      
    if(arreglo1 === arreglo2) console.log(nuevoArray)
  }
}
