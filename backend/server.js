import express from "express"
import dotenv from "dotenv"
import cors from "cors"
import notes from "./data/notes.js"
import connectDb from "./config/db.js"
import UserRoutes from './routes/UserRoutes.js'
import NotesRoutes from './routes/NotesRoutes.js'
import path from "path"

// app config
const app = express()
app.use(cors())
app.use(express.json())
dotenv.config()
connectDb()

const port = process.env.PORT || 8001 ;

// Middlewares


// API endpoints

app.get('/mynotes',(req,res)=>{
    console.log(notes);
    res.status(200).send(notes)
})

app.use('/api/users',UserRoutes)
app.use('/api/notes',NotesRoutes)
var __dirname = path.resolve();


// Deployement
__dirname = path.resolve()
if(process.env.NODE_ENV ==='production')
{
    app.use(express.static(path.join(__dirname,'/frontend/build')))
    app.get('*',(req,res)=>{
        res.sendFile(path.resolve(__dirname ,'frontend','build','index.html'))
    })
}
else
{
    app.get('/',(req,res)=>{
        res.status(200).send("Hello from QuiNote !")
    })

}



// Server config
app.listen(port,console.log("Server is Running at Port: "+port))