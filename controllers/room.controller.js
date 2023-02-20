
const roomServices = require("../services/room.services");
const RoomServices = require("../services/room.services");

class RoomController{
async createRoom(req,res){
const reqBody = req.body;
//create a  room
const existingRoom = await RoomServices.fetchOne({
name:reqBody.name.toLowercase()
})
//check if the room exist
if(existingBook) res.status(403).json({
success:false,
message:'room already exist'
})
//if not we can create the room and send a response
const newRoom = await BookService.create(reqBody)
res.status(201).json({
success:false,
message:"Room created successful",
data:newRoom
})
}

//Update a  room
async updateRoom(req,res){
/*
Steps:
check if the room to edit is in the database
 check if the name matches
*/
const roomId = req.params.id;
const updateRoomData = req.body;
const existingBook = await RoomServices.fetchOne({
_id:roomId
})
if(!existingRoom)res.status(403).json({
    success:false,
    message:'Room to edit does not exist'
})
//since the name is a unique key, we have to make it consistent
if(updateRoomData.name){
    const existingRoomWithUpdateName = await RoomServices.fetchOne({
        name:updateRoomData.name.toLowercase()
})
if(existingRoomWithUpdateName._id.toString() !== existingRoom._id.toString()){
res.status(403).json({
    success:false,
    message:'Room with update name already exist'
})
}
}
const updatedRoom = await RoomServices.update(roomId,updateRoomData)
res.status(200).json({
    success:false,
    message:'Room updated successfully',
    data:updatedRoom
})
}


//Delete a room
async deleteBook(req,res){
const roomId = req.params.id;
//check if the room to delete is in the database
const existingRoom = await roomServices.fetchOne({
_id:roomId
})
if(!existingRoom)res.status(403).json({
    success:false,
    message:'Room to delete does not exist'
})
const deletedRoom  =  await RoomServices.delete(roomId)
res.status(200).json({
    success:false,
    message:'Room deleted successfully',
    data:deletedRoom
})
}

//Fetch a single room
async fetchOneRoom(req,res){
const roomId = req.params.id;
//check if the room to fetch is in the database
const existingRoom = await RoomServices.fetchOne({
_id:roomId
})
if(!existingRoom)res.status(403).json({
    success:false,
    message:'Room to fetch does not exist'
})
res.status(200).json({
    success:false,
    message:'Room fetched successfully',
    data:existingRoom
})
}



}
module.exports = new RoomController();