const express = require("express");
const app = express();
const port = 7000;
const cors = require("cors");

app.use(cors());

app.get("/",(req,res)=>{
    res.send("The Paradise Peaks server");
})

app.listen(port,()=>{
    console.log(`This server listening at port: ${port}`);
})