import React, { useContext } from 'react'
import MessageContext from '../context/messageContext'

const GrandChild1 = ({onMessage}) => {
  const newMessageObj = useContext(MessageContext)

  return (
    <>
    <div>GrandChild1</div>
    <button onClick={()=> onMessage('Hi')}>Say Hi</button> &nbsp;

    <button onClick={()=> newMessageObj.newMessageHandler('Vanakkam')} >Namaste</button>
    </>
  )
}

export default GrandChild1