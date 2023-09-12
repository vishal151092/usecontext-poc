import React from 'react'
import GrandChild2 from './GrandChild2'

const Child2 = ({message}) => {
  return (
    <>
    <div>Child2</div>
    <GrandChild2 message={message}/>
    </>
  )
}

export default Child2