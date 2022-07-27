import React, { useEffect, useState } from 'react'
import { Col, Row ,Form, Button} from 'react-bootstrap'
import MainScreen from '../../components/MainScreen'
import {} from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import './Profile.css'
import { updateProfileAction } from '../../Redux/Actions/UserActions'
import Loading from "../../components/Loaders/Loginloader"

function Profile() {
    const [name, setname] = useState('')
    const [email, setemail] = useState('')
    const [password, setpassword] = useState('')

    const dp = useDispatch()
    const userLogin = useSelector(st => st.userLogin)
    const {quinoteuser } = userLogin

    const userUpdate = useSelector(a=>a.userUpdate)
    const {loading,error,success} = userUpdate

    useEffect(() => {
        if(!quinoteuser)
        {
            dp("/")
            return
        }
        else
        {
            setname(quinoteuser.name)
            setemail(quinoteuser.email)
    
        }
       
    }, [dp,quinoteuser])
    

   
  return (
    <MainScreen title='Profile'>
        {loading && <Loading/>}
        <div>
            <div className='profilecontainer'>
                <Col className=''>
                <Form >
                    <div className="imgcontainer">
                    <img src="https://cdn-icons.flaticon.com/png/512/1144/premium/1144709.png?token=exp=1658925234~hmac=bbdf67ac3b6928b82f12047a6cdf127b" alt="" />

                    </div>
                    <div className="content">
                    <Form.Group controlId='name'>
                        <Form.Label>Name :  <p style={{display:'inline',color:'#0096FF'}}>{name}</p></Form.Label>
                    </Form.Group>
                    <Form.Group controlId='name'>
                        <Form.Label>Email : <p style={{display:'inline',color:'#0096FF'}} >{email}</p></Form.Label>
                    </Form.Group>
                {/* <Form.Group controlId='name'>
                    <Form.Label>Password</Form.Label>
                    
                </Form.Group> */}
                    </div>

                   
                </Form>
                {/* <div className="btnn">
                    <Button variant='success'>Update Profile</Button>
                </div> */}
                </Col>

            </div>

        </div>
    </MainScreen>

  )
}

export default Profile