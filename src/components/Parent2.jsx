import React, { useState } from 'react'
import Child1 from './Child1'
import Child2 from './Child2'


const Parent2 = () => {

  const [message, setMessage] = useState('')

  const messageHandler = (msg)=>{
    setMessage(msg);
  }


  return (
    <>
    <div>Parent2</div>
    <Child1 onMessage={messageHandler}/>
    <Child2 message={message} />
    </>
  )
}

export default Parent2