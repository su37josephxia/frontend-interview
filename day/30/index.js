const fs = require("fs");
const http = require("http");
const delay = (tick) =>
  new Promise((resolve) => {
    setTimeout(resolve, tick);
  });

const server = http.createServer(async (req, res) => {
  const { url } = req;
  console.log("url: ", url);
  if (url === "/favicon.ico") {
  } else if (url === "/") {
    const page = fs.readFileSync("./index.html");
    res.write(page);
  } else if (url === "/delay.js") {
    await delay(5000)
    res.end(
`
document.writeln('Delay Content')
`      
    )
  } else {
    const file = fs.readFileSync("." + url);
    res.writeHead(200,{
      "Content-Type": "application/javascript; charset=UTF-8"
    });
    res.write(file);
  }
  //   else if (url.pathname.endsWith(".js")) {
  //     const tick = query && query.wait ? query.wait : 100;
  //     console.log("delay:" + tick + "ms");
  //     await delay(tick);
  //     res.write(
  //       `
  // debugger;
  // console.log('${url.path}');
  //     `
  //     );
  // } else {
  //   // 其他逻辑
  // }
  res.end();
});
server.listen(3000, () => {
  console.log("Server at 3000");
});
