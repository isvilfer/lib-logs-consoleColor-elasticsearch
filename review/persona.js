const saludarPersona = require('./saludar');

class Persona {
    // Propiedades de la clase
    nombre;
    apellido;
  
    // Métodos de la clase
    saludar() {
      console.log(saludarPersona(this.nombre, this.apellido));
    }
  }

  module.exports = Persona;