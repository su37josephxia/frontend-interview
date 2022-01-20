describe("ISSUE", () => {
  it("提取issue信息", () => {
    const { parseContent } = require("../issue");
    const body = `- [B栈视频](https://www.bilibili.com/video/BV1gr4y1U7pY?p=2)
- [掘金文章](https://juejin.cn/post/7048554678858022925)`;
    expect(getBodyContent({body})).toEqual({
      isOK: true,
      billbill: "https://www.bilibili.com/video/BV1gr4y1U7pY?p=2",
      juejin: "https://juejin.cn/post/7048554678858022925",
    });
  });

  it("提取issue信息", () => {
    const { parseContent } = require("../issue");
    const body = `
- [掘金文章](https://juejin.cn/post/7048554678858022925)`;
    expect(getBodyContent({body}).isOK).toBe(false);
  });
});
