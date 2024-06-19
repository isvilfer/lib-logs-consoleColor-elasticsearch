const console = require('./helpers/console');

class LogColorConsoleElasticSearch {

    constructor () {
    }

    #getNowTS(){
        const now = new Date();
        const nowISO8601 = now.toISOString();
        return nowISO8601;
    }

    debug(source, message, extraInfo){
        const logInformation = {
            "timestamp": this.#getNowTS(),
            "level": "DEBUG",
            "message": message,
            "source": source,
            "extraInfo": extraInfo
        };

        console.consoleDebug(logInformation);
    }

    info(source, message, extraInfo){
        const logInformation = {
            "timestamp": this.#getNowTS(),
            "level": "INFO",
            "message": message,
            "source": source,
            "extraInfo": extraInfo
        };

        console.consoleInfo(logInformation);
    }

    warn(source, message, extraInfo){
        const logInformation = {
            "timestamp": this.#getNowTS(),
            "level": "WARN",
            "message": message,
            "source": source,
            "extraiInfo": extraInfo
        };

        console.consoleWarn(logInformation);
    }

    error(source, message, extraInfo){
        const logInformation = {
            "timestamp": this.#getNowTS(),
            "level": "ERROR",
            "message": message,
            "source": source,
            "extraInfo": extraInfo
        };

        console.consoleError(logInformation);
    }

    critical(source, message, extraInfo){
        const logInformation = {
            "timestamp": this.#getNowTS(),
            "level": "CRITICAL",
            "message": message,
            "source": source,
            "extraInfo": extraInfo
        };

        console.consoleCritical(logInformation);
    }
}

module.exports = LogColorConsoleElasticSearch;