const fs = require('fs')

const writeLog = (json) => {
    !fs.existsSync('./out') && fs.mkdirSync('./out')
    fs.writeFileSync(`./out/${Date.now()}.json`,JSON.stringify(json))
}

const readLog = () => {
    return JSON.parse(fs.readFileSync(`./out/1642248093937.json`))
}

module.exports = {
    writeLog,
    readLog
}
