import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Button, Col, Form, Row } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import ErroMessage from '../../components/Errors/ErroMessage'
import Loginloader from '../../components/Loaders/Loginloader'
import MainScreen from '../../components/MainScreen'
import { register } from '../../Redux/Actions/UserActions'

function Register() {
    const tool = useNavigate()

    const navigatortool = useNavigate()

    const [email, setemail] = useState('')
    const [name, setname] = useState('')
    const [password, setpassword] = useState('')
    const [confpassword, setconfpassword] = useState('')
    const [msg, setmsg] = useState('')
    const [pic, setpic] = useState('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSaj0ucKVpTNbey2YUj2f0V_MDQ1G6jBiwt2w&usqp=CAU')
    const [regerror, setregerror] = useState(false)
    const dispatch = useDispatch()
    const userRegister = useSelector(state=>state.userRegister)
    const {loading , error, quinoteuser} = userRegister

    useEffect(() => {
      if(quinoteuser)
      {
            navigatortool("/mynotes")
      }
    }, [quinoteuser,navigatortool])
    
     const handlesubmit= async (e)=>{
        e.preventDefault()
        if(password!==confpassword)
        {
            alert("passwords do not Match!")
            return
        }
        dispatch(register(name,email,password))
      

        
        
   
     }
  return (
    <div>
       

        <MainScreen title={'Register'}>
    
        {loading && <Loginloader />}
        <div className="loginform">

        

            <Form onSubmit={handlesubmit}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" placeholder="Enter Name" value={name}  onChange={(e)=>setname(e.target.value)} />
           
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" value={email}  onChange={(e)=>setemail(e.target.value)} />
           
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" value={password} placeholder="Password" onChange={(e)=>setpassword(e.target.value)} />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Confirm Password</Form.Label>
                <Form.Control type="password" value={confpassword} placeholder="Confirm Password" onChange={(e)=>setconfpassword(e.target.value)} />
            </Form.Group>

          

            <Row className='py-2 px-1'>
                <Col>
                Already a  Quinote User? <Link to={'/login'}>Login Here </Link>
                </Col>
            </Row>

            <div className='loginbtn'>
            <Button variant='info' type='submit'>Register</Button>
            </div>

            </Form>

        </div>

    </MainScreen>
    </div>
  )
}

export default Register