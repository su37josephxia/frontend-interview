const request = require("./request");




const url = (str) =>
  `https://api.github.com/repos/su37josephxia/frontend-interview/${str}`;

const requestJSON = async (url) => JSON.parse(await request(url));

const getDetail = async (n) => requestJSON(url(`issues/${n}`));

const getList = async () => requestJSON(url(`issues?per_page=100&sort=updated`));


const parseContent = ({ body }) => {
  const m = (reg) => {
    try {
      const res = body.match(reg);
      if (res) {
        return res[1];
      } else {
        return null;
      }
    } catch (error) {
      return null;
    }
  };
  var billbill = m(/\[B栈视频\]\(([^)]*)\)/);
  var juejin = m(/\[掘金文章\]\(([^)]*)\)/);
  return {
    isOK: billbill !== null && juejin !== null,
    billbill,
    juejin,
  };
};

module.exports = {
  parseContent,
  getList,
  getDetail
} 
