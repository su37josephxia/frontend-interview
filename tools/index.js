const { readLog, writeLog } = require("./log");
const issue = require("./issue");
const moment = require('moment')

const createTemplate = ({updated, title, billbill, juejin,github }) => `- [${title}] [ 📺 Billbill视频 ](${billbill}) [ 📚 掘金文稿 ](${juejin}) [ 🐱 Github ](${github})`;
(async function () {
  // const detail = await getDetail(2)

  // for (let i = 0; i < 10; i++) {
  //   const detail = await getDetail(i);
  //   const body = parseContent(detail);
  //   if (body.isOK) {
  //     const out = `- ${detail.title}]
  //   - [ 📺 Billbill视频 ](${body.billbill}) [ 掘金文稿 ](${body.juejin})`;
  //     console.log(out);
  //   }
  // }

  // const list = await getList();
  // writeLog(list)
  const list = await readLog();
  list
    .map((v) => {
      const body = issue.parseContent(v)
      if(body.isOK) {
        console.log(createTemplate({
          billbill : body.billbill,
          juejin: body.juejin,
          title: v.title,
          github: v.html_url,
          updated : moment(v.updated_at).format('YYYY-MM-DD')
        }))
      }
    });
})();
