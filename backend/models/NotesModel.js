import mongoose from "mongoose";

const NoteSchema = mongoose.Schema({
    title:{
        type:String,
        required:true 

    }
    ,
    content:{
        type:String,
        required:true 
    },
    category:{
        type:String,
        required:true 
    },
    user:{
        type:mongoose.Schema.Types.ObjectId,
        required:true,
        ref:"User"
    },


},{
    timeStamps:true
}
)

const NoteModel = mongoose.model("Notes",NoteSchema)
export default NoteModel