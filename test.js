const LogColorConsoleElasticSearch = require('./src/index');
const logColorConsoleElasticSearchInstance = new LogColorConsoleElasticSearch();

logColorConsoleElasticSearchInstance.debug('appTest', JSON.stringify({message:'messageTest', duration:102}));
logColorConsoleElasticSearchInstance.info('appTest', 'messageTest');
logColorConsoleElasticSearchInstance.warn('appTest', 'messageTest');
logColorConsoleElasticSearchInstance.error('appTest', 'messageTest');
logColorConsoleElasticSearchInstance.critical('appTest', 'messageTest');




// const Persona = require('./persona');
  
//   // Crear una instancia de la clase sin constructor
//   const persona1 = new Persona();
//   persona1.nombre = 'Juan';
//   persona1.apellido = 'Pérez';
//   persona1.saludar(); // Muestra: Hola, mi nombre es Juan Pérez