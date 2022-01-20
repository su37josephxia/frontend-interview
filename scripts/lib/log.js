const fs = require("fs");
const baseDir = './out/log'
const writeLog = (json) => {
  !fs.existsSync(baseDir) && fs.mkdirSync(baseDir);
  fs.writeFileSync(`${baseDir}/${Date.now()}.json`, JSON.stringify(json));
};

const getLastest = () => {
  const list = fs.readdirSync(baseDir);
  const lastest = Math.max(
    ...list.map((v) => Number.parseInt(v.replace(".json", "")))
  );
  return lastest + ".json";
};

const readLog = () => {
  l = getLastest();
  return JSON.parse(fs.readFileSync(`${baseDir}/${l}`));
};

module.exports = {
  writeLog,
  readLog,
};
