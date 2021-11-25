function decirHolaUsuario (usuario){
    return 'Hola ' + usuario + '!'
}

function decirAdiosUsuario (usuario){
    return 'Adios ' + usuario + '!'
}

function crearSaludo (usuario, cb){
    return cb(usuario)
}
//console.log(crearSaludo('Armando', decirHolaUsuario())) SE ROMPE POR LOS PARENTESIS
console.log(crearSaludo('Armando', decirHolaUsuario))
console.log(crearSaludo('Armando', decirAdiosUsuario))
console.log('XXXXXXXXXXXXXXXXXXXXXXXXX')

function crearCallBack(usuario, numero, funcion1, funcion2){
    funcion2(usuario)
    funcion1(usuario)
}
console.log(crearCallBack('   Armando', 2, decirHolaUsuario, decirAdiosUsuario))

console.log('_________________________')

var alumnos = ['Juan', 'Eliana', 'Andres', 'Maria'];

     for (var i = 0; i < alumnos.length; i++) {
     console.log('hola desde el for ' + alumnos[i]);
}
function mostrarAlumnos(alumno) {
    console.log('hola desde el cb ' + alumno)    
}

alumnos.forEach(mostrarAlumnos)

// es lo mismo pero desde la función
alumnos.forEach(
    function (elemento) {
        console.log('Hola desde el forEach ' + elemento)
        
    }
)

//Salta Andres pero no retorna nada
alumnos.forEach(
    function (alumnado) {
        if(alumnado === 'Andres') return;
        console.log('Saltar el forEach ' + alumnado) 
    }
)

//Salta la ejecución
// for (var i = 0; i < alumnos.length; i++) {
//     if(alumnos[i] === 'Andres') return; 
//     console.log('Parar el for ' + alumnos[i]);
// }

console.log('metodo MAP_________')

var resultadoMap = alumnos.map(function(alumno){ //retorna un nuevo arreglo
    return 'Hola desde map ' + alumno 
})

console.log(resultadoMap)

var resultadoForEach = alumnos.forEach(
    function(elemento,i){ 
        console.log('Hola desde MAP-forEach' + elemento + ' ' + i)
})

console.log('REDUCE______________')

var edadesAlumnos = [20, 45, 33, 15, 10, 8];

var resultadoReduce = edadesAlumnos.reduce(function(acumulador, item, i){
    acumulador = acumulador + item
    return acumulador
})

console.log(resultadoReduce)

var resultadoReduce = edadesAlumnos.reduce(function(acumulador, item, i){
    if(item === 20 || i===0) //agregamos un condicional solo para demostrar el ejemplo
    acumulador = acumulador + item
    return acumulador
},0) //El acumulador empieza en 0 por ello salta el 20, si no se define si toma el 20 independientemente de que el condicional este definido

console.log(resultadoReduce)
console.log('XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')

var nombre = 'mario'
var mayuscula = nombre.split('')

console.log(mayuscula)
  
mayuscula[0]= nombre.toUpperCase()
console.log(mayuscula)

mayuscula[0]= nombre.toUpperCase()[0]
console.log(mayuscula)

console.log(mayuscula.join(''))

return mayuscula.join('')
console.log(mayuscula)

var array = ['abajo', 'pera', 'escalera', 'alerta', 'indice', 'azteca', 'arbol', 'buzo']

NuevoArray = []
for (let i = 0; i < array.length; i++) {
    if(array[i][0] === "a") {
        nuevoArray.push(array[i])
      }
    }
    return nuevoArray;
  }


