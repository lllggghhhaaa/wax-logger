const { appendFileSync } = require("fs");

function logInfo (caller, message, save) {
    let time = (date.format(new Date()));

    const msg = `[Info][${caller.name}:${caller.id}][${time}] ${message}`;

    console.log(colors.White, msg);

    if (save) {
        appendFileSync(__dirname + `/logs.txt`, msg + "\n");
    }
}

function logWarn (caller, message, save) {
    let time = (date.format(new Date()));

    const msg = `[Warn][${caller.name}:${caller.id}][${time}] ${message}`;

    console.log(colors.Yellow, msg);

    if (save) {
        appendFileSync(__dirname + `/logs.txt`, msg + "\n");
    }
}

function logError (caller, message, save) {
    let time = (date.format(new Date()));

    const msg = `[Error][${caller.name}:${caller.id}][${time}] ${message}`;

    console.log(colors.Red, msg);

    if (save) {
        appendFileSync(__dirname + `/logs.txt`, msg + "\n");
    }
}

const options = {
    timeZone: 'America/Sao_Paulo',
    year: 'numeric',
    month: 'numeric',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric'
};

const date = new Intl.DateTimeFormat([], options);

const colors = {
    Red: "\x1b[31m%s\x1b[0m",
    Yellow: "\x1b[33m%s\x1b[0m",
    White: "\x1b[37m%s\x1b[0m"
}

class LogBase {
    constructor(name, id) {
        this.name = name;
        this.id = id;
    }
}

module.exports.LogBase = LogBase;

module.exports.logInfo = logInfo;
module.exports.logWarn = logWarn;
module.exports.logError = logError;