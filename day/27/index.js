const fs = require("fs");
const http = require("http");
const urlTools = require("url");
const querystring = require("querystring");
const delay = (tick) =>
  new Promise((resolve) => {
    
    setTimeout(resolve, tick);
  });

const makeScript = (url) => {
  return `
  debugger;
  console.log('${jsName}${waitStr}');`;
};

const server = http.createServer(async (req, res) => {
  const url = urlTools.parse(req.url)
  const query = querystring.parse(url.query)
  console.log("url: " , url, "wait: " + query.wait);
  if (url.pathname === "/") {
    const page = fs.readFileSync("./index.html");
    res.write(page);
  } else if (url.pathname.endsWith(".js")) {
    
    const tick = query && query.wait ? query.wait : 100;
    console.log('delay:' + tick+ 'ms')
    await delay(tick);
    res.write(
      `
debugger;
console.log('${url.path}');
    `
    );
  } else {
    // 其他逻辑
  }
  res.end();
});
server.listen(3000, () => {
  console.log("Server at 3000");
});
