import React, { useEffect, useState } from 'react'
import { Badge, Button, Card } from 'react-bootstrap'
import { Link, useNavigate } from 'react-router-dom'
import MainScreen from '../../components/MainScreen'
import AddCircleIcon from '@mui/icons-material/AddCircle';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import Accordion from 'react-bootstrap/Accordion';
import axios from "../../axios"
import { useDispatch, useSelector } from "react-redux"


import './MyNotes.css'
import { deleteNoteAction, displaynotes } from '../../Redux/Actions/NotesActions';
import Loginloader from '../../components/Loaders/Loginloader';
import NoNotes from './NoNotes';
function MyNotes({search}) {
    const un = useNavigate()
    const dp = useDispatch()
    const noteList = useSelector(state=>state.noteList)
    const userLogin = useSelector(state=>state.userLogin)
    const {quinoteuser} = userLogin

    const noteCreate = useSelector((state) => state.noteCreate);
    const { success:successCreate } = noteCreate;


    const {loading,notes,error} = noteList
    const noteDelete = useSelector(state=>state.noteDelete)
    const {loading:loadingDelete,error:errorDelete,success:successDelete} = noteDelete

 

    useEffect( () => {

        

        dp(displaynotes())
        if(!quinoteuser)
        {
            un("/")
        }
        


    }, [successCreate,quinoteuser,un,dp,successDelete])
    
  

    const deleteNote=(id)=>{
        if(window.confirm("Are you Sure ?"))
        {   
            dp(deleteNoteAction(id))
            alert("Deleted note Successfully!")
        }


    }

  return (
    <MainScreen title={`Welcome back ${quinoteuser.name}`}>
         {/* {errorDelete && (
        <ErrorMessage variant="danger">{errorDelete}</ErrorMessage>
      )} */}
              {loadingDelete && <Loginloader />}
        {loading ? <Loginloader/>:
        <div>
              <Link to='createnote'>
        <div className='addnotebtn'>
        <Button size='lg' href='/createnote' className='btn-success'>Create Note <AddCircleIcon style={{marginBottom:'5px'}}/></Button>
        </div>
        </Link>
        {notes.length===0 && <NoNotes/>}
        {
            notes?.reverse().filter(filteredNote => (filteredNote.title.toLowerCase().includes(search.toLowerCase()))).map((note)=>( 
            <Accordion key={note._id}>
                <Accordion.Item eventKey='0'>
                  <Card style={{margin:'20px 0'}}>
            <Card.Header style={{display:'flex',justifyContent:'space-between'}}>
                <span style={{color:'black',flex:'1',textDecoration:'none',cursor:'pointer',alignSelf:'center',fontSize:'18px'}}>
                    
                    
                <Accordion.Header as={Card.Text} variant="link" eventKey="0">    {note.title}</Accordion.Header>
                    
                </span>
                <div style={{marginTop:'5px',marginLeft:'10px'}}>
                {/* <Button variant='info' href={`/note/${note._id}`}> <EditIcon style={{marginTop:'-5px'}}/></Button> */}
                <Button variant='danger' className='mx-2' onClick={()=>deleteNote(note._id)}> <DeleteIcon/></Button>
                </div>
            </Card.Header>

                <Accordion.Body eventKey="0">
                <Card.Body>
                <h4>
                    <Badge variant="success" className=''>Category:{note.category} </Badge>
                </h4>
                <blockquote className="blockquote mb-0">
                <p>
      
               {note.content}
                </p>
                {/* <footer className="blockquote-footer">
                 created on{" "} <cite title='source title'>{note.createdAt}</cite>                </footer> */}
            </blockquote>
            </Card.Body>
                </Accordion.Body>
            
        </Card>
        </Accordion.Item>
            </Accordion>
            
          ))
        }
        </div>
        }
       
      
       

    </MainScreen>
  )
}

export default MyNotes