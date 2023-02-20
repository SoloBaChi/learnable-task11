const mongoose = require("mongoose");

const { Schema } = mongoose;
const room = new Schema({
name:{
type:String,
required:true,
unique:true,
},
roomType:{
type:String,
required:true,
unique:true,
},
price:String,
});

 const roomModel = mongoose.model('rooms',room);
 module.exports = roomModel;