const express = require("express");
const app = express();
const port = 7000;
const cors = require("cors");
const allRooms = require("./hotelData.json");
app.use(cors());

app.get("/",(req,res)=>{
    res.send("The Paradise Peaks server");
})
app.get("/allRooms",(req , res)=>{
    res.send(allRooms);
})
app.listen(port,()=>{
    console.log(`This server listening at port: ${port}`);
})