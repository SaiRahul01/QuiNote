import mongoose from "mongoose";
import bcrypt from "bcrypt"


const UserSchema = mongoose.Schema(
    {
        name:{
            type:String,
            required:true,
        }
        , email:{
            type:String,
            required:true,
            unique:true
        },
        password:{
            type:String,
            requied:true,

        },
        isAdmin:{
            type:Boolean,
            required:true,
            default:false

        }
    },
    {
        timeStamps:true
    }
);



UserSchema.methods.matchPasswords = async function (enteredpass){
    return enteredpass===this.password;
}


const User = mongoose.model('User',UserSchema)

export default User

