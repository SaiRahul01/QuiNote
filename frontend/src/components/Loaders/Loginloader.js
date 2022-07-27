import React from 'react'
import { Spinner } from 'react-bootstrap'

function Loginloader({size=100}) {
  return (
    <div style={{display:'flex',justifyContent:"center",alignItems:"center",width:"100%","height":"100%"}}>
        <Spinner animation='border' style={{height:size,width:size,color:'crimson'}}>
       

        </Spinner>
        
    </div>
  )
}

export default Loginloader