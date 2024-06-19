function saludarPersona(nombre, apellido) {
    return `¡Hola ${nombre} ${apellido}! Un placer saludarte.`;
  }
  
  // Exportar la función para que sea accesible desde otros archivos
  module.exports = saludarPersona;