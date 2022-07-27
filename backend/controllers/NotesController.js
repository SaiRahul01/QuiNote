import expressAsyncHandler from "express-async-handler"
import NoteModel from "../models/NotesModel.js"


export const getNotes = expressAsyncHandler(
    async(req,res)=>{
        const notes = await NoteModel.find({user:req.user._id})
        res.json(notes)
    }
) 

export const createNote = expressAsyncHandler(
    async(req,res)=>{
        const {title,content,category} = req.body;

        if( !title || !content || !category)
        {
            res.status(400).send("Please Fill all fields!");
            return;
        }
        const note = new NoteModel({user:req.user._id,title,content,category});
        const createdNote = await note.save()

        res.status(201).json(createdNote)

    }
)

export const getNoteById = expressAsyncHandler(
    async(req,res)=>{
        const note = await NoteModel.findById(req.params.id)

        if(note)
        {
            res.json(note)

        }
        else
        {
            res.status(404).json({message:"Not found Bro"})
        }

        res.json(note)
    }
)

export const updateNote = expressAsyncHandler(
    async(req,res)=>{
        const {title,content,category} = req.body
        const targetnote =await NoteModel.findById(req.params.id)
        if(targetnote.user.toString()!== req.user._id.toString())
        {

            res.status(401).send("Cant give you bro !") 
        }

        if(targetnote)
        {
            targetnote.title = title;
            targetnote.category=category;
            targetnote.content=content;
            const updatednote = await targetnote.save();
            res.json(updatednote)
        }
        else
        {
            res.status(404).send("Note not found bhai")
        }
    }
)

export const deleteNote = expressAsyncHandler(
    async(req,res)=>{
        const tarnote = await NoteModel.findById(req.params.id)
        if(tarnote.user.toString()!== req.user._id.toString())
        {

            res.status(401).send("Cant give you bro !") 
        }

        if(tarnote)
        {
            await tarnote.remove()
            res.json({message:"Removed happily"})
        }
        else
        {
            res.json({message:"Not found"})
        }
    }
)