const consoleColor = require('./src/helpers/console');
const ElasticsearchLog = require('./src/helpers/elasticsearch');

// Log Levels
const logLevels = {
    "DEBUG": 0,
    "INFO": 1,
    "WARN": 2,
    "ERROR": 3,
    "CRITICAL": 4
}

class LogColorConsoleElasticSearch {

    minimunLogLevelElasticsearch;

    constructor(node, username, password, caFile, index, minimunLogLevelElasticsearch) {
        this.elasticsearchLog = new ElasticsearchLog(node, username, password, caFile, index);
        this.minimunLogLevelElasticsearch = minimunLogLevelElasticsearch;
    }

    // Gets the Now timestamp in ISO8601 format
    #getNowTS() {
        const now = new Date();
        const nowISO8601 = now.toISOString();
        return nowISO8601;
    }

    // Logs a DEBUG event
    debug(source, message, extraInfo) {
        const logInformation = {
            "timestamp": this.#getNowTS(),
            "level": "DEBUG",
            "message": message,
            "source": source,
            "extraInfo": extraInfo
        };

        consoleColor.consoleDebug(logInformation);
        if (this.minimunLogLevelElasticsearch == logLevels.DEBUG) {
            this.elasticsearchLog.logToElasticsearch(logInformation)
        };
    }

    // Logs a INFO event
    info(source, message, extraInfo) {
        const logInformation = {
            "timestamp": this.#getNowTS(),
            "level": "INFO",
            "message": message,
            "source": source,
            "extraInfo": extraInfo
        };

        consoleColor.consoleInfo(logInformation);
        if (this.minimunLogLevelElasticsearch <= logLevels.INFO) {
            this.elasticsearchLog.logToElasticsearch(logInformation);
        };
    }

    // Logs a WARN event
    warn(source, message, extraInfo) {
        const logInformation = {
            "timestamp": this.#getNowTS(),
            "level": "WARN",
            "message": message,
            "source": source,
            "extraiInfo": extraInfo
        };

        consoleColor.consoleWarn(logInformation);
        if (this.minimunLogLevelElasticsearch <= logLevels.WARN) {
            this.elasticsearchLog.logToElasticsearch(logInformation);
        };
    }

    // Logs a ERROR event
    error(source, message, extraInfo) {
        const logInformation = {
            "timestamp": this.#getNowTS(),
            "level": "ERROR",
            "message": message,
            "source": source,
            "extraInfo": extraInfo
        };

        consoleColor.consoleError(logInformation);
        if (this.minimunLogLevelElasticsearch <= logLevels.ERROR) {
            this.elasticsearchLog.logToElasticsearch(logInformation);
        };
    }

    // Logs a CRITICAL event
    critical(source, message, extraInfo) {
        const logInformation = {
            "timestamp": this.#getNowTS(),
            "level": "CRITICAL",
            "message": message,
            "source": source,
            "extraInfo": extraInfo
        };

        consoleColor.consoleCritical(logInformation);
        if (this.minimunLogLevelElasticsearch <= logLevels.CRITICAL) {
            this.elasticsearchLog.logToElasticsearch(logInformation);
        };
    }
}

module.exports = { logLevels, LogColorConsoleElasticSearch };