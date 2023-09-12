import React, { useContext } from 'react'
import MessageContext from '../context/messageContext'

const GrandChild2 = ({message}) => {

  const newMessageObj = useContext(MessageContext)

  return (
    <>
    <div>GrandChild2</div>

    <div style={{color: 'red', fontWeight: 'bolder'}}>{message}</div>


    <div style={{color: 'blue', fontWeight: 'bolder'}}>{newMessageObj.newMessage}</div>

    </>
  )
}

export default GrandChild2