const express = require('express');
const fs = require('fs');


const app = express();

const PORT = 3000;

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept"
    );
    res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE");
    next();
});

app.get('/', (req, res)=>{
    const answer = fs.readFileSync('./link.json');
    res.send(answer);
});


app.listen(PORT, ()=>console.log("server started"));

