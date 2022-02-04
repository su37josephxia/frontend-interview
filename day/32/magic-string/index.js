const MagicString = require("magic-string");
const fs = require("fs");
const source = './src/index.js'
const input = fs.readFileSync(source);
const s = new MagicString(input.toString()).overwrite( 18, 24, 'bundle' );

// options are as per `s.generateMap()` above
var map = s.generateMap({
  file: "bundle.js.map",
  source: "bundle.js",
  includeContent: true,
  hires: true,
});

console.log("map", map);
transpiled = s.toString() + '\n//# sourceMappingURL=bundle.js.map';
fs.writeFileSync("./dist/bundle.js",transpiled);
fs.writeFileSync("./dist/bundle.js.map", map.toString());


fs.writeFileSync(
  "app.inlinemap.js",
  transpiled + "\n//#sourceMappingURL=" + map.toUrl()
);
