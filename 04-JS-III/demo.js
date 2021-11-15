var array = [1,2,3,4,5];
var lista = ["Armando", "Jhon", "Andres", "jj"];

array.push(lista)
console.log(array)
array.push('nuevo espacio')
lista.push([0, 'clase de JS III'])
array.push(lista)

console.log(array[5][4][1])

array

console.log('Otro Ejercio')

var array = [1,2,3,4,5];
var lista = ["Armando", "Jhon", "Andres", "jj"];

console.log(array)

var item =array.pop()

console.log(array)
console.log(item)

console.log('+ Otro Ejercio')

var array = [1,2,3,4,5];
var lista = ["Armando", "Jhon", "Andres", "jj"];

console.log(array)
array.unshift(6)

console.log(array)

console.log('++++Otro Ejercio')

var array = [1,2,3,4,5];
var lista = ["Armando", "Jhon", "Andres", "jj"];

console.log(array)
array.shift(6)

console.log(array)

console.log('kkkkkkOtro Ejercio')

var array = [1,2,3,4,5];
var lista = ["Armando", "Jhon", "Andres", "jj"];

for (let i=0; i <= array.length - 1; i++){
    if(array[i]%2===0)
    console.log('El valor es # par', array[1])
    
    console.log(array[i])
}

console.log('++++Otro Ejercio')
var array = [1,2,3,4,5];
var lista = ["Armando", "Jhon", "Andres", "jj"];

for (let i=0; i <= array.length - 1; i++){
    lista[i] = lista[i]+i

    console.log(lista)
}

console.log('xxxxxxOtro Ejercio')

  
    var nuevoarray = [];


    for (var i=0; i < array.length; i++ ){

      nuevoarray[i]=array[i]+1
    }

    console.log(nuevoarray)
 







