let express = require("express");
let app = express();
app.get("/say", function (req, res) {
  let { wd, callback } = req.query;
  console.log(wd); 
  console.log(callback); // show
  res.end(`${callback}('I am 然叔')`);
});
app.listen(3000);
