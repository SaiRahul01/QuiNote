import express from "express"
import { createNote, deleteNote, getNoteById, getNotes, updateNote } from "../controllers/NotesController.js"
import {protect}  from "../middlewares/authMiddleware.js"

const router = express.Router()

router.route("/").get(protect ,getNotes)
router.route("/create").post(protect,createNote)
router.route("/:id").get(protect,getNoteById)
router.route("/:id").put(protect,updateNote)
router.route("/:id").delete(protect,deleteNote)





export default router


