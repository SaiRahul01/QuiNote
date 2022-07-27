import React from 'react'
import { Container, Row } from 'react-bootstrap'
import './MainScreen.css'

function MainScreen({title,children}) {
  return (
    <div className='maintop' style={{border:'0px solid red',padding:'10px'}}>
        <Container>
            <Row>
                <div className='page'>
                {
                    title && <>
                            <h2 className='heading text-center'>{title}</h2>
                            <hr />
                            </>
                }
                <div style={{border:'0px solid blue'}}>
                {children}
                </div>
                </div>
            </Row>
        </Container>
        

    </div>
  )
}

export default MainScreen