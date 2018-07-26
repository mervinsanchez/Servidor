 var mogoose = require('mongoose');
 var Esquema = mongoose.schema;

 var EstudianteEsquema = new Esquema({
     nombre: {
         type: String,
         require = true
     },
     apellido: {
         type: String,
         require = true,
     }


 });

 module.exports = mongoose.model('Estudiante', EstudianteEsquema);