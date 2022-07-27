import React, { useState } from 'react'
import { Alert, Button, Col, Row } from 'react-bootstrap'
import Toast from 'react-bootstrap/Toast';

function ErroMessage({variant="info", children}) {

    const [showA, setShowA] = useState(true);

    const toggleShowA = () => setShowA(!showA);

  return (
    // <Alert variant={variant} style={{height:'40px',textAlign:'center',alignItems:'center'}}>
    //     <strong>{children}</strong>
        
    // </Alert>
    <Row style={{border:"0px solid red",display:"flex",justifyContent:"flex-end",position:"absolute",right:0}}>
        <Col  style={{border:"0px solid red",display:"flex",justifyContent:"flex-end"}}>
       
        <Toast show={showA} onClose={toggleShowA} >
            
            <Toast.Header>
          
            <strong style={{marginRight:'80%'}}>Error</strong>
            </Toast.Header>
            <Toast.Body>{children}</Toast.Body>
        </Toast>
        </Col>
    </Row>
  )
}

export default ErroMessage