
// Text Colors
const blue = '\x1b[34m';
const green = '\x1b[32m';
const yellow = '\x1b[33m';
const red = '\x1b[31m';
const system = '\x1b[0m';

// Text Formats
const bold = '\x1b[1m';
const inverse = '\x1b[7m';

// Show by console a DEBUG message
const consoleDebug = (logInformation) =>{
    console.log(logInformation.timestamp + blue + bold + ' [' + logInformation.level + ']' + system + ' - ' + logInformation.message + ' - ' + logInformation.source + ' - ' + (logInformation.extraInfo !== undefined ? JSON.stringify(logInformation.extraInfo) : ""));
}

// Show by console an INFO message
const consoleInfo = (logInformation) =>{
    console.log(logInformation.timestamp + green + bold + ' [' + logInformation.level + ']' + system + ' - ' + logInformation.message + ' - ' + logInformation.source + ' - ' + (logInformation.extraInfo !== undefined ? JSON.stringify(logInformation.extraInfo) : ""));
}

// Show by console a WARN message
const consoleWarn = (logInformation) =>{
    console.log(logInformation.timestamp + yellow + bold + ' [' + logInformation.level + ']' + system + ' - ' + logInformation.message + ' - ' + logInformation.source + ' - ' + (logInformation.extraInfo !== undefined ? JSON.stringify(logInformation.extraInfo) : ""));
}

// Show by console an ERROR message
const consoleError = (logInformation) =>{
    console.log(logInformation.timestamp + red + bold + ' [' + logInformation.level + ']' + system + ' - ' + logInformation.message + ' - ' + logInformation.source + ' - ' + (logInformation.extraInfo !== undefined ? JSON.stringify(logInformation.extraInfo) : ""));
}

// Show by console a CRITICAL message
const consoleCritical = (logInformation) =>{
    console.log(logInformation.timestamp + red + bold + inverse + ' [' + logInformation.level + '] ' + system + '- ' + logInformation.message + ' - ' + logInformation.source + ' - ' + (logInformation.extraInfo !== undefined ? JSON.stringify(logInformation.extraInfo) : ""));
}

module.exports = {consoleDebug, consoleInfo, consoleWarn, consoleError, consoleCritical};