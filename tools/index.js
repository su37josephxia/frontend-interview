var request = require("./request");
const fs = require("fs");
const readline = require("readline");

var url =
  "https://api.github.com/repos/su37josephxia/frontend-interview/issues";

/**
 * 获取Issue列表
 */
async function getIssue() {
  const body = await request(url);
  console.log("body", body.toString());
  const json = JSON.parse(body);
  json
    .filter((v) => v.state === "open")
    .forEach((v) => {
      console.log(v);
      console.log("title:", v.title);
      console.log("html_url", v.html_url);
      console.log("labels:", v.labels);
    });
}

/**
 *
 */
async function write() {
  const input = fs.createReadStream('../README.md');
  // const output = fs.createWriteStream('../README.md')
  const output = []

  const rl = readline.createInterface({
    input: input,
    crlfDelay: Infinity,
  });
  let start = false
  for await (const line of rl) { 
    // console.log('line:', line)
    if(line === '## 🚘 大纲') {
      console.log('666')
    }
    start && console.log('line:',line)

    output.push('>' +line + '\n')

  }

  fs.writeFileSync('../README.md',output.join(''))

}
write()
// getIssue();
