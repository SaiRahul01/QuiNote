import React from 'react'
import './NoNotes.css'
function NoNotes() {
  return (
    <div className='nonotescontainer'>
      <div className="emptyicon">
      <img style={{width:'100%',height:'100%'}} src="https://cdn-icons-png.flaticon.com/512/5058/5058446.png" alt="" />
      </div>
       <div className="txt">
      <h3 style={{textAlign:'center'}}> No Notes Yet! Your Created Notes appear here </h3>
       </div>
    </div>
  )
}

export default NoNotes