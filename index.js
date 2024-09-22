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
    useElasticSearch;

    constructor(node, username, password, caFile, index, minimunLogLevelElasticsearch, useElasticSearch) {
        if (useElasticSearch) {
            this.elasticsearchLog = new ElasticsearchLog(node, username, password, caFile, index);
        }
        this.minimunLogLevelElasticsearch = minimunLogLevelElasticsearch;
        this.useElasticSearch = useElasticSearch;
    }

    // Gets the Now timestamp in ISO8601 format
    #getNowTS() {
        const now = new Date();
        const nowISO8601 = now.toISOString();
        return nowISO8601;
    }

    // Logs a DEBUG event
    debug(source, message, extraInfo, userIP = "noUserIP", trackID = "noTrackID") {
        const logInformation = {
            "timestamp": this.#getNowTS(),
            "level": "DEBUG...",
            "message": message,
            "source": source,
            "ipAddress": userIP,
            "trackID": trackID,
            "extraInfo": extraInfo
        };

        consoleColor.consoleDebug(logInformation);
        if (this.minimunLogLevelElasticsearch == logLevels.DEBUG && this.useElasticSearch) {
            this.elasticsearchLog.logToElasticsearch(logInformation)
        };
    }

    // Logs a INFO event
    info(source, message, extraInfo, userIP = "noUserIP", trackID = "noTrackID") {
        const logInformation = {
            "timestamp": this.#getNowTS(),
            "level": "INFO....",
            "message": message,
            "source": source,
            "ipAddress": userIP,
            "trackID": trackID,
            "extraInfo": extraInfo
        };

        consoleColor.consoleInfo(logInformation);
        if (this.minimunLogLevelElasticsearch <= logLevels.INFO && this.useElasticSearch) {
            this.elasticsearchLog.logToElasticsearch(logInformation);
        };
    }

    // Logs a WARN event
    warn(source, message, extraInfo, userIP = "noUserIP", trackID = "noTrackID") {
        const logInformation = {
            "timestamp": this.#getNowTS(),
            "level": "WARN....",
            "message": message,
            "source": source,
            "ipAddress": userIP,
            "trackID": trackID,
            "extraiInfo": extraInfo
        };

        consoleColor.consoleWarn(logInformation);
        if (this.minimunLogLevelElasticsearch <= logLevels.WARN && this.useElasticSearch) {
            this.elasticsearchLog.logToElasticsearch(logInformation);
        };
    }

    // Logs a ERROR event
    error(source, message, extraInfo, userIP = "noUserIP", trackID = "noTrackID") {
        const logInformation = {
            "timestamp": this.#getNowTS(),
            "level": "ERROR...",
            "message": message,
            "source": source,
            "ipAddress": userIP,
            "trackID": trackID,
            "extraInfo": extraInfo
        };

        consoleColor.consoleError(logInformation);
        if (this.minimunLogLevelElasticsearch <= logLevels.ERROR && this.useElasticSearch) {
            this.elasticsearchLog.logToElasticsearch(logInformation);
        };
    }

    // Logs a CRITICAL event
    critical(source, message, extraInfo, userIP = "noUserIP", trackID = "noTrackID") {
        const logInformation = {
            "timestamp": this.#getNowTS(),
            "level": "CRITICAL",
            "message": message,
            "source": source,
            "ipAddress": userIP,
            "trackID": trackID,
            "extraInfo": extraInfo
        };

        consoleColor.consoleCritical(logInformation);
        if (this.minimunLogLevelElasticsearch <= logLevels.CRITICAL && this.useElasticSearch) {
            this.elasticsearchLog.logToElasticsearch(logInformation);
        };
    }
}

module.exports = { logLevels, LogColorConsoleElasticSearch };