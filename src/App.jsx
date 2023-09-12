import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Parent1 from './components/Parent1'
import Parent2 from './components/Parent2'
import  MessageContext from './context/messageContext'

function App() {
  const [count, setCount] = useState(0)

  const [newMessage, setNewMessage] = useState('Namaste');

  const newMessageHandler = (msg)=>{
    setNewMessage(msg)
  }

  return (
    <>
      <Parent1 />

      <MessageContext.Provider value={{newMessage, newMessageHandler}}>
        <Parent2 />
      </MessageContext.Provider>  
    </>
  )
}

export default App
