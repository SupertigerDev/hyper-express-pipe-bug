const { Server } = require("hyper-express");
const fs = require("fs");

const app = new Server({});

app.get("/", (req, res) => {
  const readable = fs.createReadStream("./image.jpg");

  readable.pipe(res);
});

app.listen(3001, () =>
  console.log("HyperExpress running on http://localhost:3001")
);
