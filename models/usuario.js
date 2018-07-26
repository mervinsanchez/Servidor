var mongoose = require('mongoose');
var Esquema = mongoose.Schema;

var validateEmail = function(email) {
    var re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return re.test(email)
};

var UsuarioEsquema = new Esquema({
    username: {
        type: String,
        lowercase: true,
        maxlength: 20,
        trim: true,
        // required = true,
    },
    password: {
        type: String,
        // required = 'La contraseña es necesaria',
    },
    primernombre: String,
    segundonombre: String,
    correo: {
        type: String,
        maxlength: 50,
        trim: true,
        lowercase: true,
        unique: true,
        // required: 'La dirección de Correo es necesaria',
        validate: [validateEmail, 'Por favor complete con una dirección de correo válida'],
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Por favor complete con una dirección de correo válida']
    }

});

module.exports = mongoose.model('Usuario', UsuarioEsquema);