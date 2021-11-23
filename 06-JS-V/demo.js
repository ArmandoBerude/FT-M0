function EstudianteHenry(nombreEstudiante, apellidoEstudiante){
    this.firstName = nombreEstudiante || 'Nombre no enviado'
    this.lastName = apellidoEstudiante || 'Apellido no enviado'
    this.student = true
    this.materias = ['hmtl', 'css', 'git']
}
let estudiante1 = new EstudianteHenry('Armando', 'Bermudez');
let estudiante2 = new EstudianteHenry('Eliana', 'Pulido');
let estudiante3 = new EstudianteHenry('Juan', 'Bermudez');
let estudiante4 = new EstudianteHenry();
 

console.log(estudiante1)

console.log(estudiante1.materias)

estudiante2.student = false //cambia la propiedad a false
console.log (estudiante2)

console.log(estudiante4) // muestra Nombre no enviado - definido como undefined

console.log('xxxxxxxxxx')

EstudianteHenry.prototype.presentarHC = function(){
    return console.log('El estudiante ' + this.firstName + ' ' + this.lastName + ' Presento el HC')
}

estudiante1.presentarHC()
estudiante2.presentarHC()

EstudianteHenry.prototype.Saludar = function (idioma){
   if(idioma === 'en') return 'Hi ' + this.firstName 
   else return 'Hola ' + this.firstName
}

console.log(estudiante3.Saludar('en') )
console.log(estudiante3.Saludar() )

estudiante1.Despedida = function (idioma){
    if(idioma === 'en') return 'Bye ' + this.firstName 
    else return 'Adios ' + this.firstName
}

console.log(estudiante1.Despedida())
// console.log(estudiante2.despedida()) Se rompe por que estudiante2 no se ha creado como función tan solo estudiante1

EstudianteHenry.prototype.DNI = '11111'
console.log(estudiante1.DNI)

class EstudianteHenryClass{
    constructor(nombreEstudiante, apellidoEstudiante){
        this.firstName = nombreEstudiante || 'Nombre no enviado'
        this.lastName = apellidoEstudiante || 'Apellido no enviado'
        this.student = true
        this.materias = ['hmtl', 'css', 'git']  
    }
    presentarHCClass(){
                return console.log('El estudiante ' + this.firstName + ' ' + this.lastName + ' Presento el HC class')
        }  
     
}

let estudiante1Class = new EstudianteHenryClass('Armando', 'Bermudez');

console.log(estudiante1Class)

estudiante1Class.presentarHCClass()

console.log('Herencia______________________');

class EstudianteGraduado extends EstudianteHenryClass{
    constructor(nombre, apellido, esEstudiante, materias, esGraduado){
        super(nombre, apellido, esEstudiante, materias)
        this.esGraduado = true
    }

    postularseParaTrabajo(){
        return console.log('El graduado ' + this.firstName + ' se postulo a ser el mejor')
    }
}

let estudianteGraduado1 = new EstudianteGraduado('Armando Juanjo', 'Bermudez Pulido')
console.log(estudianteGraduado1)
console.log(estudianteGraduado1.postularseParaTrabajo())