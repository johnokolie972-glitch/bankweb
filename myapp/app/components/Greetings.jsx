import React from 'react'

const Greetings = () => {
    const name = "john";
    const time= new Date().toLocaleDateString();
  return (
    <div className='text-red-800'>Greetings {name},current time is {time}</div>

  
  )
}

export default Greetings