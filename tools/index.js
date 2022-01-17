const { readLog, writeLog } = require("./log");
const issue = require("./issue");
// const moment = require('moment')
// const createTemplate = require('./template')




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

  // var list = await issue.getList();
  // writeLog(list)
  list = await readLog();
  list
    .map((v) => {
      const body = issue.parseContent(v)
      if(body.isOK) {
        // const render = createTemplate('weixin')
        const data = {
          billbill : body.billbill,
          juejin: body.juejin,
          title: v.title,
          github: v.html_url,
          // updated : moment(v.updated_at).format('YYYY-MM-DD')
        }
        console.log(`
${data.title}
  📺 Billbill视频 ${data.billbill}
  📚 掘金文稿 ${data.juejin}`)
        // 微信
        // console.log(render(data))
      }
    });

})();
