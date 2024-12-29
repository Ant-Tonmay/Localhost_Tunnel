const express = require('express')
const app = express()
const cors = require("cors");
const mongoose = require("mongoose")
const dotenv = require("dotenv");
dotenv.config();
try {
    mongoose.connect(process.env.DB_CONNECT, { useNewUrlParser: true });
    const connect = mongoose.connection;
   

    connect.on("open", () => {
      console.log("conneted to Database");
    });
  } catch (err) {
    console.log("Failed to Connect to Database")
    console.log(err);
  }
// const allowedOrigins = []
// app.use(cors({ origin: allowedOrigins, credentials: true }));

const tunnlerHandler = require("./routers/tunnel")

app.use("/api/v1/tunnel",tunnlerHandler)

let PORT = process.env.PORT || 3005;
app.listen(PORT,()=>{
    console.log("Tunnel is Started");
    
})