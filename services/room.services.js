
const roomModel = require("../models/room.model");

class RoomServices{
//create a room
async create(roomName){
return await roomModel.create(roomName);
}

//update a room type
async update(id,newRoom){
return await roomModel.findByIdAndUpdate(id,newRoom,{
new:true
});
}

//delete a room
async delete(id){
return await roomModel.findByIdAndDelete(id);
}

//get a single room
async fetchOne(id){
return await roomModel.findById(id);
}
}

module.exports = new RoomServices();