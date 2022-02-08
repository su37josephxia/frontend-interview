// 异步分包
import("./min").then(({ min }) => {
  console.log("min:", min(8, 2));
});
