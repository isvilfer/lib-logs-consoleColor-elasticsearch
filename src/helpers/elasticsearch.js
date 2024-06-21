const { Client } = require('@elastic/elasticsearch');
const consoleColor = require('./console');
const fs = require('fs');

class ElasticsearchLog {

    client;
    index;

    constructor(node, username, password, caFile, index) {
        try {
            const ca = fs.readFileSync(caFile);

            // elasticsearch conection
            this.client = new Client({
                node: node,
                auth: {
                    username: username,
                    password: password,
                },
                tls: {
                    ca: ca,
                    rejectUnauthorized: false
                }
            });

            // index to send logs
            this.index = index;

        } catch (error) {
            const logInformation = {
                "timestamp": this.#getNowTS(),
                "level": "ERROR",
                "message": 'Error trying to open cert file',
                "source": 'Lib_logs-consolecolor-elasticsearch.constructor',
                "extraInfo": {
                    errorName: error.name,
                    errorMessage: error.message,
                    errorStack: error.stack
                }
            };
            consoleColor.consoleError(logInformation);
        }
    }

    // Gets the Now timestamp in ISO8601 format
    #getNowTS() {
        const now = new Date();
        const nowISO8601 = now.toISOString();
        return nowISO8601;
    }

    // Saves a log in elasticsearch
    async logToElasticsearch(log) {
        try {
            const response = await this.client.index({
                index: this.index,
                body: log
            });
        } catch (error) {
            const logInformation = {
                "timestamp": this.#getNowTS(),
                "level": "ERROR",
                "message": 'Error trying to add log',
                "source": 'Lib_logs-consolecolor-elasticsearch.logToElasticsearch',
                "extraInfo": {
                    errorName: error.name,
                    errorMessage: error.message,
                    errorStack: error.stack
                }
            };
            consoleColor.consoleError(logInformation);
        }
    }
}

module.exports = ElasticsearchLog;