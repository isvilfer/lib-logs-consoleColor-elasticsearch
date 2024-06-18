const console = require('./helpers/console');

class LogColorConsoleElasticSearch {

    constructor () {
    }

    #getNowTS(){
        const now = new Date();
        const nowISO8601 = now.toISOString();
        return nowISO8601;
    }

    debug(source, message){
        const logInformation = {
            "timestamp": this.#getNowTS(),
            "level": "DEBUG",
            "message": message,
            "source": source
        };

        console.consoleDebug(logInformation);
    }

    info(source, message){
        const logInformation = {
            "timestamp": this.#getNowTS(),
            "level": "INFO",
            "message": message,
            "source": source
        };

        console.consoleInfo(logInformation);
    }

    warn(source, message){
        const logInformation = {
            "timestamp": this.#getNowTS(),
            "level": "WARN",
            "message": message,
            "source": source
        };

        console.consoleWarn(logInformation);
    }

    error(source, message){
        const logInformation = {
            "timestamp": this.#getNowTS(),
            "level": "ERROR",
            "message": message,
            "source": source
        };

        console.consoleError(logInformation);
    }

    critical(source, message){
        const logInformation = {
            "timestamp": this.#getNowTS(),
            "level": "CRITICAL",
            "message": message,
            "source": source
        };

        console.consoleCritical(logInformation);
    }
}

module.exports = LogColorConsoleElasticSearch;