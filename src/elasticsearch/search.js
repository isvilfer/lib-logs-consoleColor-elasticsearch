const { Client } = require('@elastic/elasticsearch');
const fs = require('fs');

// Configuración del cliente
const client = new Client({
    node: 'https://localhost:9200',
    auth: {
        username: 'elastic',
        password: 'fLeJEY1zCn4U+Jcekv1K',
    },
    tls: {
        ca: fs.readFileSync('./http_ca.crt'),
        rejectUnauthorized: false
    }
});

async function buscar() {
    const result = await client.search({
        index: 'logs-testing-direct',
        // query: {
        //   match: { hello: 'world' }
        // }
    })
    console.log(result.hits.hits)
}

buscar();
