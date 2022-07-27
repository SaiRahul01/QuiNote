import React from 'react'

import {Row,Container, Col} from "react-bootstrap"

function Footer() {
  return (
    <footer className='btn-primary' style={{border:'0px solid red',marginBottom:'',width:'100%',position:'relative',bottom:"20",display:"",justifyContent:"center"}}>
        <Container style={{border:'0px solid blue'}}>
            <Row >
               <Col className='text-center py-3'>
               Made with ❤️ by Sai Rahul
               </Col>
            </Row>
        </Container>
    </footer>
  )
}

export default Footer