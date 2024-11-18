const express = require("express");
require('dotenv').config({path:".env"});
const path = require("path");

const urlRouter = require("./src/routes/url.route");

const mongooseconnect =  require("./src/dbconnections/mongooseconnect");
const homeRouter = require("./src/routes/home.route")
 const app= express();

 DBURL = process.env.DBURL
mongooseconnect(`${DBURL}`).then(()=>console.log("connected to mongo db")
).catch((e)=>console.log(`monogo db error: ${e , DBURL}`)
);

app.set("view engine","ejs");

app.set("views",path.resolve("./src/views"));

const PORT = process.env.PORT || 4000;


app.use(express.json());

 app.use("/url",urlRouter);
app.use("/home",homeRouter);

 
 app.listen(PORT,()=>{console.log("server started")});