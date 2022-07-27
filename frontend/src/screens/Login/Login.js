import React, { useEffect, useState } from 'react'
import MainScreen from '../../components/MainScreen'
import Form from 'react-bootstrap/Form';
import './Login.css'
import { Button, Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import axios from 'axios';
import Loginloader from '../../components/Loaders/Loginloader';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux"

import ErroMessage from '../../components/Errors/ErroMessage';
import { login } from '../../Redux/Actions/UserActions';

function Login({history}) {
    const navigatortool = useNavigate()

    const [email, setemail] = useState('')
    const [password, setpassword] = useState('')
    const [Error, setError] = useState(false)
   
     const dispatch = useDispatch()

    const userLogin = useSelector((state)=>state.userLogin);
    const {loading,error,quinoteuser} = userLogin

    useEffect(() => {
      if(quinoteuser)
      {
            navigatortool("/mynotes")
      }
    }, [quinoteuser,navigatortool])
    

     const handlesubmit= async (e)=>{
        e.preventDefault()
        // console.log("Email: "+email+" Password: "+ password);
        // try {
        //     const config = {
        //         headers:{
        //             "Content-type":"application/json",

        //         }

        //     }
        //     setloading(true)

        //     const {data} = await axios.post('/api/users/login',{
        //         email:email,
        //         password:password
        //     },config)
         
        //     localStorage.setItem("quinoteuser",JSON.stringify(data))
        //     setloading(false)
        //     alert("Successful Login")
        //     navigatortool('/mynotes')

            
        // } catch (error) {
        //     setError(true)
        //     setloading(false)
        //     setTimeout(() => {
        //         setError(false)
        //     }, 3000);
        // }

        dispatch(login(email,password))


   
     }

     useEffect(() => {

        const quinoteuser = localStorage.getItem("quinoteuser")
        if(quinoteuser)
        {
            navigatortool('/mynotes')
        }
     
     }, [navigatortool])
     
    
  return (
    <div>
         {Error && <ErroMessage variant='danger' ><h5>Invalid Email or Password!</h5></ErroMessage>}

        <MainScreen title={'Login'}>
      
        {loading && <Loginloader />}
        <div className="loginform">

            

            <Form onSubmit={handlesubmit}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" value={email}  onChange={(e)=>setemail(e.target.value)} />
           
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" value={password} placeholder="Password" onChange={(e)=>setpassword(e.target.value)} />
            </Form.Group>

            <Row className='py-2 px-1'>
                <Col>
                New to Quinote? <Link to={'/register'}>Register Here </Link>
                </Col>
            </Row>

            <div className='loginbtn'>
            <Button variant='info' type='submit'>LOGIN</Button>
            </div>

            </Form>

        </div>

    </MainScreen>
    </div>
  )
}

export default Login