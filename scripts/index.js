const { readLog, writeLog } = require("./lib/log");
const {
  getDetail,
  parseContent,
  getList,
  parseDayNumber,
} = require("./lib/issue");
const fs = require("fs");
const handlebars = require("handlebars");
// const moment = require('moment')
// const createTemplate = require('./template')

if (process.argv[2]) {
  const cmd = {
    log, // 获取最新issue
    list, // 输出列表
  };
  const name = process.argv[2];
  console.log("执行操作:", name);
  cmd[name]();
  console.log("👌 执行完毕");
}

// 生成掘金列表
async function list() {
  let list = readLog();
  list = list
    .map((v) => {
      // 解析body内容
      const body = parseContent(v);
      let data = null;
      if (body.isOK) {
        data = {
          billbill: body.billbill,
          juejin: body.juejin,
          title: v.title,
          github: v.html_url,
        };
      }
      return data;
    })
    .filter((v) => v !== null)
    .sort((a, b) => parseDayNumber(a.title) - parseDayNumber(b.title))

  // 生成模板
  render({ list }, "./template/juejin.hbs", "./out/juejin.md");
}

/**
 * 编译模板文件
 * @param meta 数据定义
 * @param template 模板文件路径
 * @param file 目标文件路径
 */
function render(meta, template, file) {
  console.log("meta", meta);
  if (fs.existsSync(template)) {
    const content = fs.readFileSync(template).toString();
    const result = handlebars.compile(content)(meta);
    fs.writeFileSync(file, result);
    console.log(result);
  }
  console.log(`🚀${file} 创建成功`);
}

/**
 * 批量获取issue并写入日志
 */
async function log() {
  var list = await getList();
  list = list
    .sort((a, b) => a.number - b.number)
    // .map((v) => console.log(`获取 ${v.number} ${v.title}`));
  writeLog(list);
}
