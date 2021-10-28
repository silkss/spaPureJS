const { Console } = require("console");
const express = require("express");
const path = require("path");

const app = express();
const port = 3000;

app.use("/static", express.static(path.resolve(__dirname, "site", "static")));


app.get('/*', (req, res) => {
    res.sendFile(path.resolve("site", "index.html"));
})

app.listen(port, () => 
{
    console.log(`app listening at http://localhost:${port}`);
})
