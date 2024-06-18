const { Client } = require('@elastic/elasticsearch');
const fs = require('fs');

// Configuración del cliente
const client = new Client({
    node: 'https://localhost:9200',
    auth: {
        username: 'elastic',
        password: 'H2L*3LYzHrPpoRkNShyG',
    },
    tls: {
        ca: fs.readFileSync('./http_ca.crt'),
        rejectUnauthorized: false
    }
});

async function logToElasticsearch(log) {
    try {
        const response = await client.index({
            index: 'logs-testing-direct',
            body: log
        });
        console.log('Log indexado:', response);
    } catch (error) {
        console.error('Error indexando log:', error);
    }
}

// Ejemplo de uso
// logToElasticsearch({
//     //timestamp: new Date().toISOString(),
//     level: levelValue,
//     code: codeValue
//     message: 'This is a test log message'
// });

function generarNumeroAleatorio(maximo) {
    return Math.floor(Math.random() * maximo);
}

const infoTexts = ['debug', 'info', 'warn', 'error'];
const statusCodes = [100, 200, 300, 400];

counter = 1000;
while (counter > 0) {

    const infoText = infoTexts[generarNumeroAleatorio(4)];
    const statusCode = statusCodes[generarNumeroAleatorio(4)];

    logToElasticsearch({
        level: infoText,
        code: statusCode,
        message: 'This is a test log message ' + infoText + ' ' + statusCode
    })
    counter = counter - 1;
    
}