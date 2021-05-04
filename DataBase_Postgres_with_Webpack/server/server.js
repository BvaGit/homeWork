const express = require('express');
const persRouter = require('./routes');
const PORT = process.env.PORT || 3000;

const app = express();

app.use(express.json());


app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept"
    );
    res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE");
    next();
  });


app.use('/', persRouter);





app.listen(PORT, () => console.log('server started'));