const express = require("express");
const mongoose = require("mongoose")
const app = express();
const router = require("./routes/room.route");

require('dotenv').config();

app.use(express.urlencoded({extended:false}));
app.use(express.json());

app.use('/api/v1',router);

mongoose.connect(process.env.DATABASE_URL)
.then(()=>{
console.log("connecetd to our database")
})
.catch(()=>{
console.log("There was an issue trying to connect to your database");
})

const port = process.env.PORT || 4000;

app.listen(port,()=>{
console.log(`server is running on port http://localhost:${port}`);
})