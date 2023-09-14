import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Parent1 from './components/Parent1'
import Parent2 from './components/Parent2'
import  {MessageProvider} from './context/messageContext'

function App() {
  

  return (
    <>

        <MessageProvider>
          <Parent1 />
          <Parent2 />
        </MessageProvider>      
    </>
  )
}

export default App
