var Armando = {
    nombre = 'Armando',
    Apellido: 'Bermudez',
    DNI: 1012338,
    Direccion: 'Calle 9',
    Edad: 33,
    saludar: function (){
        console.log ('Hola aspero')
    },
    hobbies: ['Estudiar js', 'correr']
}

let palabra = 'nombre'

console.log( Armando[palabra])
console.log( Armando['nombre'])