import React, { useEffect } from 'react'
import { Button, Container, Row } from 'react-bootstrap'
import './MainHome.css'
import MenuBookIcon from '@mui/icons-material/MenuBook';
import { useNavigate } from 'react-router-dom';


function MainHome() {

    const un = useNavigate()

    useEffect(() => {
      if(localStorage.getItem("quinoteuser"))
      {
        un("/mynotes")
      }
    }, [un])
    
  return (
    <div className='main'>
        <Container>
        <Row>
        <div className="intro-text">
        <div>
            <h1 className='maintitle'>Welcome to QuiNote</h1>
            <p className='mainsubtitle'>Secure Place for all your Notes</p>
            <div className="button-container">
             
                <a href="/login">
                    <Button className='' size='lg' variant='info'>LOGIN</Button>
                </a>

                <a href="/register">
                    <Button className='btnmain' size='lg' variant='outline-info'>Sign Up</Button>
                </a>
            </div>
        </div>
        </div>
        </Row>
        </Container>
    
    
    </div>
  )
}

export default MainHome