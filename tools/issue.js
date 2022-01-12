const request = require("./request");
const fs = require('fs')

const writeLog = (json) => {
    !fs.existsSync('./out') && fs.mkdirSync('./out')
    fs.writeFileSync(`./out/${Date.now()}.json`,JSON.stringify(json))
}
writeLog({abc:123})


const url = (str) =>
  `https://api.github.com/repos/su37josephxia/frontend-interview/${str}`;

const requestJSON = async (url) => JSON.parse(await request(url));

const getDetail = async (n) => requestJSON(url(`issues/${n}`));

const getList = async () => requestJSON(url(`issues?per_page=100`));

// process.nextTick(async () => {
//   // const detail = await getDetail(2)

//   for (let i = 0; i < 10; i++) {
//     const detail = await getDetail(i);
//     const body = parseContent(detail);
//     if (body.isOK) {
//       const out = `- ${detail.title}]
//     - [ 📺 Billbill视频 ](${body.billbill}) [ 掘金文稿 ](${body.juejin})`;
//       console.log(out);
//     }
//   }

//     const list = await getList();
//     list
//       .filter((v) => getBodyContent(v).isOK)
//       .map((v) => {
//         console.log(v.title);
//       });
// });

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

exports.parseContent = parseContent;
