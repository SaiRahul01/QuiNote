import jwt from "jsonwebtoken"
import User from "../models/UserModel.js"
import asynchandler from "express-async-handler"

 export const protect = asynchandler(async(req,res,next)=>{
    let token;
    if(
        req.headers.authorization && req.headers.authorization.startsWith("Bearer")
    ){
        try {
            token = req.headers.authorization.split(" ")[1]
            const decoded = jwt.verify(token,process.env.JWT_SECRET)
            req.user = await User.findById(decoded.id).select("-password")
            next()

            
        } catch (error) {
            res.status(401)
            throw new Error ("Not Authorized , Token failed")
            
        }

    }
    if(!token)
    {
        res.status(401).send("Not Authorized as no token was Sent!")
    }


})

