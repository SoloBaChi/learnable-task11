const mongoose = require("mongoose");

const { Schema } = mongoose;
const room = new Schema({
name:{
type:String,
required:true,
unique:true,
trim:true,
lowercase:true
},
roomType:{
type:String,
required:true,
unique:true,
trim:true,
lowercase:true
},
price:String,
});

 const roomModel = mongoose.model('rooms',room);
 module.exports = roomModel;