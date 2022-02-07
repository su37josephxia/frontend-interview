const request = require("./request");

const url = (str) =>
  `https://api.github.com/repos/su37josephxia/frontend-interview/${str}`;

const requestJSON = async (url) => JSON.parse(await request(url));

const getDetail = async (n) => requestJSON(url(`issues/${n}`));

const getList = async () =>
  requestJSON(url(`issues?per_page=100&sort=updated`));

const m = (reg, str) => {
  try {
    const res = str.match(reg);
    if (res) {
      return res[1];
    } else {
      return null;
    }
  } catch (error) {
    return null;
  }
};
const parseContent = ({ body }) => {
  var billbill = m(/\[B栈视频\]\(([^)]*)\)/, body);
  var juejin = m(/\[掘金文章\]\(([^)]*)\)/, body);
  return {
    isOK: billbill !== null ,
    billbill,
    juejin,
  };
};
/**
 * 提取Title中的DayXX ：Day01 => 01
 */
function parseDayNumber(title) {
  var number = m(/^Day(\d+)/,title);
  return Number.parseInt(number);
}

module.exports = {
  parseContent,
  getList,
  getDetail,
  parseDayNumber
};
