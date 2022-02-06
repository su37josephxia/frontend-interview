import { add } from "./add";
import hello from "./hello.txt";

console.log(add(3, 3));

import("./min").then(({ min }) => {
  console.log("min:", min(8, 2));
});

document.writeln("Hello Webpack");
document.writeln(hello);
