import User from "../models/UserModel.js";
import asynchandler from "express-async-handler"
import generatetoken from "../utils/generatetoken.js";

export const registerUser = asynchandler(async(req,res)=>{
    const {name,email,password,pic}=req.body;

    const isUserExisting = await User.findOne({email});
    if(isUserExisting)
    {
        res.status(400)
        throw new Error("User Already Exists!")
        return;
    }

    const user = await User.create({
        name,email,password,pic
    })

    if(user)
    {
        res.status(201).json({
            _id:user._id,
            name:user.name,
            email:user.email,
            pic:user.pic,
            isAdmin:user.isAdmin,
            token:generatetoken(user._id)
        })
    }
    else
    {
        res.status(400)
        throw new Error("Error Bro")
    }
    res.json({
        name,email
    })
})

export const loginUser = asynchandler(async(req,res)=>{
    const {email,password}=req.body;

    const user = await User.findOne({email})
    if(user && (await user.matchPasswords(password)) )
    {
        res.json({
            _id:user._id,
            name:user.name,
            email:user.email,
            isAdmin:user.isAdmin,
            pic:user.pic,
            token:generatetoken(user._id)
        })
        console.log({
            _id:user._id,
            name:user.name,
            email:user.email,
            isAdmin:user.isAdmin,
            pic:user.pic,
            token:generatetoken(user._id)
        });
    }
    else
    {
        res.status(400)
        throw new Error("Invalid Email or Password !")
    }
    console.log("BRO!");

   
})

export const updateUserProfile = asynchandler( async (req,res)=>{

    const user = await User.findById(req.user._id)
    if(user)
    {
        user.name = req.body.name || user.name
        user.email = req.body.email || user.email
        if(req.body.password)
        {
            user.password = req.body.password;
        }
        const updatedUser = user.save();
        res.json({
            _id:updatedUser._id,
            name:updatedUser.name,
            email:updatedUser.email,
            token:generatetoken(updatedUser._id)
        })

    }
    else
    {
        res.status (404).send("User Not found")
    }
}
)



