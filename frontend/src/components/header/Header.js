import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../Redux/Actions/UserActions';



function Header({setsearch}) {
  const tool = useNavigate()
  const [userdetails, setuserdetails] = useState({})
  const dispatch = useDispatch()
  const userLogin =   useSelector((state)=>state.userLogin)
  const {quinoteuser}= userLogin

  useEffect(() => {
    if(localStorage.getItem("quinoteuser"))
    {
      console.log("Check here->"+ localStorage.getItem("quinoteuser"));
      setuserdetails(localStorage.getItem("quinoteuser"))
    }
  }, [])
  
  const handlelogout = ()=>{


    dispatch(logout())
    tool("/")
    
  }



  return (



   
        <Navbar bg="primary" expand="lg" variant='dark' style={{height:"60px"}}>
          <Container >
            <Navbar.Brand href="/">
                <Link to='/' style={{textDecoration:'none',color:'inherit'}}>
                QuiNote
                </Link>    
            <MenuBookIcon style={{marginLeft:'10px',marginBottom:'5px'}}/></Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll" style={{border:'0px solid blue',marginLeft:'0%'}}>
            <Nav className='m-auto'>
            <Form inline style={{}}>
                <Form.Control
                  type="search"
                  placeholder="Search  Notes"
                  className="me-2"
                  aria-label="Search"
                  onChange={(e)=>setsearch(e.target.value)}
                />
                {/* <Button variant="outline-success" style={{marginLeft:'30px'}}>Search</Button> */}
              </Form>
            </Nav>
              <Nav
                className=" my-2 my-lg-0"
                style={{ maxHeight: '100px' }}
                navbarScroll
              >
                <Nav.Link href='/mynotes'>
                    <Link style={{textDecoration:'none',color:'inherit'}} to='/mynotes'>My Notes</Link>
                </Nav.Link>
                
                <NavDropdown title={quinoteuser?quinoteuser.name : "Login" } id="navbarScrollingDropdown">
                  <NavDropdown.Item href="/profile"> Profile</NavDropdown.Item>
                  
                  <NavDropdown.Divider />
                  <NavDropdown.Item href="/" onClick={handlelogout}>
                    Logout
                  </NavDropdown.Item>
                </NavDropdown>
                
              </Nav>
              
            </Navbar.Collapse>
          </Container>
        </Navbar>
      
    
    

   
  )
}

export default Header