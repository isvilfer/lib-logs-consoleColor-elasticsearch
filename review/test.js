const LogColorConsoleElasticSearch = require('../index');
const logColorConsoleElasticSearchInstance = new LogColorConsoleElasticSearch();

logColorConsoleElasticSearchInstance.debug('appTest', 'messageTest', {duration:10});
logColorConsoleElasticSearchInstance.info('appTest', 'messageTest');
logColorConsoleElasticSearchInstance.warn('appTest', 'messageTest');
logColorConsoleElasticSearchInstance.error('appTest', 'messageTest', {explain:'this is the error'});
logColorConsoleElasticSearchInstance.critical('appTest', 'messageTest');




// const Persona = require('./persona');
  
//   // Crear una instancia de la clase sin constructor
//   const persona1 = new Persona();
//   persona1.nombre = 'Juan';
//   persona1.apellido = 'Pérez';
//   persona1.saludar(); // Muestra: Hola, mi nombre es Juan Pérez