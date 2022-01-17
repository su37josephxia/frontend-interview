const template = {
  markdown: (data) =>
    `- [${data.title}] [ 📺 Billbill视频 ](${data.billbill}) [ 📚 掘金文稿 ](${data.juejin}) [ 🐱 Github ](${data.github})`,
  weixin: (data) => `
  ${data.title}
    📺 Billbill视频 ${data.billbill}
    📚 掘金文稿 ${data.juejin}`,
};

// { updated = '', title, billbill, juejin, github }
const createTemplate = (name) => {
  console.log("name", name);
  return function () {};
};

module.exports = createTemplate;
