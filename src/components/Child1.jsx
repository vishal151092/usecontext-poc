import React from 'react'
import GrandChild1 from './GrandChild1'

const Child1 = ({onMessage}) => {


  const messageHandler= (msg)=>{
    console.log(msg, ' Child1')
    onMessage(msg);
  }

  return (
    <>
    <div>Child1</div>
    <GrandChild1 onMessage={messageHandler} />

    </>

  )
}

export default Child1