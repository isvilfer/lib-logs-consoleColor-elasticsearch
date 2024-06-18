const rojo = '\x1b[31m';
const verde = '\x1b[32m';
const normal = '\x1b[0m';
const negrita = '\x1b[1m';

console.log(rojo + 'Mensaje en rojo' + normal);
console.log(verde + 'Mensaje en verde' + normal);
console.log(negrita + 'Son color' + normal)
console.log(negrita + rojo + 'Error' + normal + ' y aqui sigue el texto')
console.log(negrita + verde + 'Recao' + normal + ' y aqui sigue el texto')


// Rojo: \x1b[31m
//     Verde: \x1b[32m
//     Amarillo: \x1b[33m
//     Azul: \x1b[34m
//     Magenta: \x1b[35m
//     Cian: \x1b[36m
//     Blanco: \x1b[37m

// Negrita: \x1b[1m
//     Cursiva: \x1b[3m
//     Subrayado: \x1b[4m
//     Parpadeante: \x1b[5m
//     Invertido: \x1b[7m


// [2024-06-12T18:13:24.419+00:00][INFO ][plugins.fleet] Fleet setup completed
