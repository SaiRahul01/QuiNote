import mongoose from "mongoose";


const connectDb = async ()=>{
    try{

        const connection = await mongoose.connect(process.env.MONGO_URL,{
            useUnifiedTopology:true,
            UseNewUrlParser:true
        })

        console.log("Mongo Db Connected!");
        console.log(connection.connection.host);

    }catch(err){
        console.log(err);
    }
}

export default connectDb