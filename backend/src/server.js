const express = require("express");
const app = express();
const http = require("http");
const server = http.Server(app);
const { setupWebsocket } = require("./websocket");
setupWebsocket(server);

const routes = require("./routes");
const mongoose = require("mongoose");
const cors = require("cors");

const port = process.env.PORT || 3333;

try {
  mongoose.connect(
    `mongodb+srv://money:y4Ezm9uPxqrymn0X@cluster0.dlweq.mongodb.net/omini10?retryWrites=true&w=majority`,
    { useNewUrlParser: true, useUnifiedTopology: true },
    (err) => {
      err
        ? console.log(err)
        : console.log(`Connection to the Database made successfully`);
    }
  );
  mongoose.set("useCreateIndex", true);
} catch (error) {
  console.log({ Erro: error });
}
app.use(cors());
app.use(express.json());
app.use(routes);

server.listen(port, console.log(`Backend Is Running On Port ${port}`));
