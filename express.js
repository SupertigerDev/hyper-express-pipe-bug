const app = require("express")();
const fs = require("fs");

app.get("/", (req, res) => {
  const readable = fs.createReadStream("./image.jpg");

  readable.pipe(res);
});

app.listen(3000, () => console.log("Express running on http://localhost:3000"));
